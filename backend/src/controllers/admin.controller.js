const userModel = require("../models/user.model");
const musicModel = require("../models/music.model");
const feedbackModel = require("../models/feedback.model");
const visitorModel = require("../models/visitor.model");
const bcrypt = require("bcryptjs");

// ================= RECORD ANONYMOUS / AUTHENTICATED VISITOR PING =================
async function recordVisitorVisit(req, res) {
    try {
        const { visitorId, device, browser, os, path, isRegistered, userEmail, userRole } = req.body;
        if (!visitorId) {
            return res.status(400).json({ status: "ignored_no_id" });
        }

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

        const updateData = {
            device: device || 'Desktop',
            browser: browser || 'Browser',
            os: os || 'Unknown',
            ip: typeof ip === 'string' ? ip.split(',')[0].trim() : '',
            lastPath: path || '/',
            lastVisitedAt: new Date()
        };

        if (isRegistered) {
            updateData.isRegistered = true;
            if (userEmail) updateData.userEmail = userEmail;
            if (userRole) updateData.userRole = userRole;
        }

        await visitorModel.findOneAndUpdate(
            { visitorId },
            {
                $set: updateData,
                $inc: { visitsCount: 1 }
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        return res.status(200).json({ status: "tracked" });
    } catch (err) {
        console.warn("recordVisitorVisit error:", err.message);
        return res.status(200).json({ status: "error_ignored" });
    }
}

// ================= GET /api/admin/stats =================
async function getAdminStats(req, res) {
    try {
        const [
            totalUsers, totalArtists, totalAdmins, totalBlocked, totalTracks, totalFeedback,
            uniqueVisitors, registeredVisitors, totalVisitsAggregate
        ] = await Promise.all([
            userModel.countDocuments({ role: 'user' }),
            userModel.countDocuments({ role: 'artist' }),
            userModel.countDocuments({ role: 'admin' }),
            userModel.countDocuments({ isBlocked: true }),
            musicModel.countDocuments(),
            feedbackModel.countDocuments(),
            visitorModel.countDocuments(),
            visitorModel.countDocuments({ isRegistered: true }),
            visitorModel.aggregate([{ $group: { _id: null, total: { $sum: "$visitsCount" } } }])
        ]);

        const allUsersCount = totalUsers + totalArtists + totalAdmins;
        const totalVisitsCount = totalVisitsAggregate?.[0]?.total || uniqueVisitors || 0;
        const guestVisitors = Math.max(0, uniqueVisitors - registeredVisitors);
        const conversionRate = uniqueVisitors > 0 ? ((allUsersCount / uniqueVisitors) * 100).toFixed(1) : "0.0";

        // All users list for admin management
        const allUsers = await userModel.find()
            .sort({ createdAt: -1 })
            .select("username email phone role isVerified isBlocked listenCount avatar lastLogin createdAt");

        // Top listeners sorted by listenCount descending
        const topListeners = await userModel.find()
            .sort({ listenCount: -1, createdAt: -1 })
            .limit(10)
            .select("username email phone role isVerified isBlocked listenCount avatar lastLogin createdAt");

        // Recent feedback messages
        const recentFeedbacks = await feedbackModel.find()
            .sort({ createdAt: -1 })
            .limit(25);

        // Recent site visitors (Guest & Registered)
        const recentVisitors = await visitorModel.find()
            .sort({ lastVisitedAt: -1 })
            .limit(30)
            .select("visitorId device browser os isRegistered userEmail userRole visitsCount lastPath lastVisitedAt");

        // All uploaded tracks with artist details for moderation
        const allTracks = await musicModel.find()
            .populate('artist', 'username email role')
            .sort({ createdAt: -1 });

        return res.status(200).json({
            metrics: {
                totalUsers: allUsersCount,
                listenersCount: totalUsers,
                artistsCount: totalArtists,
                adminsCount: totalAdmins,
                blockedCount: totalBlocked,
                totalTracks,
                totalFeedback,
                // Visitor Analytics
                uniqueVisitors,
                totalVisits: totalVisitsCount,
                guestVisitors,
                registeredVisitors,
                conversionRate: `${conversionRate}%`
            },
            allUsers,
            topListeners,
            recentFeedbacks,
            recentVisitors,
            allTracks
        });
    } catch (error) {
        console.error("getAdminStats Error:", error);
        return res.status(500).json({ message: "Failed to load admin stats" });
    }
}

// ================= PUT /api/admin/users/:id/block (Toggle block user) =================
async function toggleBlockUser(req, res) {
    try {
        const { id } = req.params;
        const targetUser = await userModel.findById(id);
        if (!targetUser) {
            return res.status(404).json({ message: "User not found" });
        }
        if (targetUser.email === 'ankitrayh6475@gmail.com' || targetUser.username === 'ankit-ray') {
            return res.status(400).json({ message: "Cannot block master admin account!" });
        }
        targetUser.isBlocked = !targetUser.isBlocked;
        await targetUser.save();

        return res.status(200).json({
            message: `User ${targetUser.username} is now ${targetUser.isBlocked ? 'Blocked' : 'Active'}`,
            isBlocked: targetUser.isBlocked,
            userId: targetUser._id
        });
    } catch (err) {
        console.error("toggleBlockUser Error:", err);
        return res.status(500).json({ message: "Failed to update block status" });
    }
}

// ================= PUT /api/admin/users/:id/verify (Admin 1-Click Verify Bypass) =================
async function toggleVerifyUser(req, res) {
    try {
        const { id } = req.params;
        const targetUser = await userModel.findById(id);
        if (!targetUser) {
            return res.status(404).json({ message: "User not found" });
        }

        targetUser.isVerified = !targetUser.isVerified;
        if (targetUser.isVerified) {
            targetUser.otp = { code: "", expiresAt: null };
        }
        await targetUser.save();

        return res.status(200).json({
            message: `User ${targetUser.username} verification status updated to: ${targetUser.isVerified ? 'Verified ✅' : 'Pending ⏳'}`,
            isVerified: targetUser.isVerified,
            userId: targetUser._id
        });
    } catch (err) {
        console.error("toggleVerifyUser Error:", err);
        return res.status(500).json({ message: "Failed to toggle verification" });
    }
}

// ================= PUT /api/admin/users/:id/role (Admin Change User Role) =================
async function toggleUserRole(req, res) {
    try {
        const { id } = req.params;
        const { role } = req.body;
        if (!['user', 'artist', 'admin'].includes(role)) {
            return res.status(400).json({ message: "Invalid role specified" });
        }

        const targetUser = await userModel.findById(id);
        if (!targetUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (targetUser.email === 'ankitrayh6475@gmail.com' && role !== 'admin') {
            return res.status(400).json({ message: "Master admin role cannot be downgraded!" });
        }

        targetUser.role = role;
        await targetUser.save();

        return res.status(200).json({
            message: `User ${targetUser.username} role changed to ${role.toUpperCase()}`,
            role: targetUser.role
        });
    } catch (err) {
        return res.status(500).json({ message: "Failed to change user role" });
    }
}

// ================= DELETE /api/admin/tracks/:id (Admin 1-Click Delete Track) =================
async function deleteArtistTrack(req, res) {
    try {
        const { id } = req.params;
        const track = await musicModel.findById(id);
        if (!track) {
            return res.status(404).json({ message: "Track not found" });
        }

        const title = track.title;
        await musicModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: `Track "${title}" successfully removed from AURA 3D!`,
            deletedTrackId: id
        });
    } catch (err) {
        console.error("deleteArtistTrack Error:", err);
        return res.status(500).json({ message: "Failed to delete track" });
    }
}

// ================= PUT /api/admin/users/:id/reset-password =================
async function adminResetPassword(req, res) {
    try {
        const { id } = req.params;
        const { newPassword } = req.body;
        if (!newPassword || newPassword.length < 6) {
            return res.status(400).json({ message: "New password must be at least 6 characters" });
        }
        const targetUser = await userModel.findById(id);
        if (!targetUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const hash = await bcrypt.hash(newPassword, 10);
        targetUser.password = hash;
        await targetUser.save();

        return res.status(200).json({
            message: `Password reset successfully for ${targetUser.username}!`,
            username: targetUser.username
        });
    } catch (err) {
        console.error("adminResetPassword Error:", err);
        return res.status(500).json({ message: "Failed to reset password" });
    }
}

// ================= DELETE /api/admin/users/:id =================
async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const targetUser = await userModel.findById(id);
        if (!targetUser) {
            return res.status(404).json({ message: "User not found" });
        }
        if (targetUser.email === 'ankitrayh6475@gmail.com' || targetUser.username === 'ankit-ray') {
            return res.status(400).json({ message: "Cannot delete master administrator account!" });
        }

        // Remove user's uploaded tracks
        await musicModel.deleteMany({ artist: id });
        
        // Remove user account
        await userModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: `User ${targetUser.username} (${targetUser.email}) permanently deleted.`,
            deletedUserId: id
        });
    } catch (err) {
        console.error("deleteUser Error:", err);
        return res.status(500).json({ message: "Failed to delete user account" });
    }
}

// ================= POST /api/admin/feedback =================
async function submitFeedback(req, res) {
    try {
        const { name, email, subject, message } = req.body;
        if (!email || !message) {
            return res.status(400).json({ message: "Email and message are required" });
        }

        const newFeedback = await feedbackModel.create({
            userId: req.user ? req.user.id : null,
            name: name || (req.user ? req.user.username : 'Guest Listener'),
            email: email.trim().toLowerCase(),
            subject: subject || 'Platform Feedback',
            message: message.trim()
        });

        return res.status(201).json({
            message: "Feedback submitted successfully! Developer has received your message.",
            feedback: newFeedback
        });
    } catch (error) {
        console.error("submitFeedback Error:", error);
        return res.status(500).json({ message: "Failed to submit feedback" });
    }
}

// ================= PUT /api/admin/feedback/:id =================
async function updateFeedbackStatus(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updated = await feedbackModel.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        return res.status(200).json({
            message: "Status updated",
            feedback: updated
        });
    } catch (error) {
        return res.status(500).json({ message: "Failed to update status" });
    }
}

module.exports = {
    recordVisitorVisit,
    getAdminStats,
    toggleBlockUser,
    toggleVerifyUser,
    toggleUserRole,
    deleteArtistTrack,
    adminResetPassword,
    deleteUser,
    submitFeedback,
    updateFeedbackStatus
};
