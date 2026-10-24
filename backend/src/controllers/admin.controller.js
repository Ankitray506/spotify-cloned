const userModel = require("../models/user.model");
const musicModel = require("../models/music.model");
const feedbackModel = require("../models/feedback.model");
const visitorModel = require("../models/visitor.model");
const bcrypt = require("bcryptjs");

// ================= RECORD ANONYMOUS / AUTHENTICATED VISITOR PING =================
async function recordVisitorVisit(req, res) {
    try {
        const {
            visitorId,
            device,
            deviceName,
            browser,
            os,
            path,
            isRegistered,
            userEmail,
            userName,
            userPhone,
            userRole
        } = req.body;

        if (!visitorId) {
            return res.status(400).json({ status: "ignored_no_id" });
        }

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

        const updateData = {
            device: device || 'Desktop',
            deviceName: deviceName || (device === 'Mobile' ? 'Mobile Smartphone' : 'Desktop PC'),
            browser: browser || 'Browser',
            os: os || 'Unknown',
            ip: typeof ip === 'string' ? ip.split(',')[0].trim() : '',
            lastPath: path || '/',
            lastActiveAt: new Date(),
            lastVisitedAt: new Date()
        };

        if (isRegistered) {
            updateData.isRegistered = true;
            if (userEmail) updateData.userEmail = userEmail;
            if (userName) updateData.userName = userName;
            if (userPhone) updateData.userPhone = userPhone;
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

// ================= RECORD MUSIC STREAMING & ACTIVE USER HEARTBEAT =================
async function recordListenHeartbeat(req, res) {
    try {
        const {
            visitorId,
            secondsStreamed = 0,
            songTitle,
            songArtist,
            isRegistered,
            userEmail,
            userName,
            userPhone,
            userRole,
            deviceName,
            device,
            browser
        } = req.body;

        if (!visitorId) {
            return res.status(200).json({ status: "ignored_no_id" });
        }

        const validSeconds = Math.min(Math.max(0, Number(secondsStreamed) || 0), 120);
        const now = new Date();

        const updateDoc = {
            lastActiveAt: now,
            lastVisitedAt: now
        };

        if (deviceName) updateDoc.deviceName = deviceName;
        if (device) updateDoc.device = device;
        if (browser) updateDoc.browser = browser;

        if (isRegistered) {
            updateDoc.isRegistered = true;
            if (userEmail) updateDoc.userEmail = userEmail;
            if (userName) updateDoc.userName = userName;
            if (userPhone) updateDoc.userPhone = userPhone;
            if (userRole) updateDoc.userRole = userRole;
        }

        if (songTitle) {
            updateDoc.lastSongPlayed = {
                title: String(songTitle).slice(0, 100),
                artist: String(songArtist || '').slice(0, 100)
            };
        }

        const incDoc = {};
        if (validSeconds > 0) {
            incDoc.totalListenSeconds = validSeconds;
        }

        const visitor = await visitorModel.findOneAndUpdate(
            { visitorId },
            {
                $set: updateDoc,
                ...(Object.keys(incDoc).length > 0 ? { $inc: incDoc } : {})
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        // If registered user, also sync with user's listenCount if significant play
        if (isRegistered && userEmail && validSeconds >= 20) {
            await userModel.updateOne(
                { email: userEmail },
                { $inc: { listenCount: 1 }, $set: { lastLogin: now } }
            ).catch(() => {});
        }

        return res.status(200).json({
            status: "heartbeat_ok",
            totalListenMinutes: Math.round((visitor.totalListenSeconds || 0) / 60),
            isLive: true
        });
    } catch (err) {
        console.warn("recordListenHeartbeat error:", err.message);
        return res.status(200).json({ status: "error_ignored" });
    }
}

// ================= GET /api/admin/stats =================
async function getAdminStats(req, res) {
    try {
        const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);

        const [
            totalUsers, totalArtists, totalAdmins, totalBlocked, totalTracks, totalFeedback,
            uniqueVisitors, registeredVisitors, totalVisitsAggregate,
            liveActiveVisitorsCount, totalStreamAggregate,
            topStreamersRaw
        ] = await Promise.all([
            userModel.countDocuments({ role: 'user' }),
            userModel.countDocuments({ role: 'artist' }),
            userModel.countDocuments({ role: 'admin' }),
            userModel.countDocuments({ isBlocked: true }),
            musicModel.countDocuments(),
            feedbackModel.countDocuments(),
            visitorModel.countDocuments(),
            visitorModel.countDocuments({ isRegistered: true }),
            visitorModel.aggregate([{ $group: { _id: null, total: { $sum: "$visitsCount" } } }]),
            visitorModel.countDocuments({ lastActiveAt: { $gte: twoMinutesAgo } }),
            visitorModel.aggregate([{ $group: { _id: null, totalSeconds: { $sum: "$totalListenSeconds" } } }]),
            visitorModel.find({ totalListenSeconds: { $gt: 0 } })
                .sort({ totalListenSeconds: -1 })
                .limit(10)
                .select("visitorId deviceName device browser isRegistered userName userEmail userPhone userRole totalListenSeconds lastSongPlayed lastActiveAt")
        ]);

        const allUsersCount = totalUsers + totalArtists + totalAdmins;
        const totalVisitsCount = totalVisitsAggregate?.[0]?.total || uniqueVisitors || 0;
        const guestVisitors = Math.max(0, uniqueVisitors - registeredVisitors);
        const conversionRate = uniqueVisitors > 0 ? ((allUsersCount / uniqueVisitors) * 100).toFixed(1) : "0.0";
        const totalStreamingMinutes = Math.round((totalStreamAggregate?.[0]?.totalSeconds || 0) / 60);

        // Format top streamers with readable minutes
        const topStreamers = (topStreamersRaw || []).map(s => ({
            ...s.toObject(),
            listenMinutes: Math.round((s.totalListenSeconds || 0) / 60),
            isLiveNow: (Date.now() - new Date(s.lastActiveAt).getTime()) <= (2 * 60 * 1000)
        }));

        // All users list for admin management
        const allUsers = await userModel.find()
            .sort({ createdAt: -1 })
            .select("username email phone role isVerified isBlocked listenCount avatar lastLogin createdAt");

        // Top listeners from user accounts
        const topListeners = await userModel.find()
            .sort({ listenCount: -1, createdAt: -1 })
            .limit(10)
            .select("username email phone role isVerified isBlocked listenCount avatar lastLogin createdAt");

        // Recent feedback messages
        const recentFeedbacks = await feedbackModel.find()
            .sort({ createdAt: -1 })
            .limit(25);

        // Recent site visitors (Guest & Registered) with real-time live presence & total listen time
        const rawRecentVisitors = await visitorModel.find()
            .sort({ lastActiveAt: -1, lastVisitedAt: -1 })
            .limit(35)
            .select("visitorId device deviceName browser os isRegistered userName userEmail userPhone userRole totalListenSeconds lastSongPlayed visitsCount lastPath lastActiveAt lastVisitedAt");

        const recentVisitors = rawRecentVisitors.map(v => {
            const lastActiveTime = new Date(v.lastActiveAt || v.lastVisitedAt || v.updatedAt).getTime();
            const isLiveNow = (Date.now() - lastActiveTime) <= (2 * 60 * 1000);
            const listenMins = Math.round((v.totalListenSeconds || 0) / 60);
            return {
                ...v.toObject(),
                isLiveNow,
                listenMinutes: listenMins
            };
        });

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
                // Visitor & Real-time Live Analytics
                uniqueVisitors,
                totalVisits: totalVisitsCount,
                guestVisitors,
                registeredVisitors,
                conversionRate: `${conversionRate}%`,
                liveActiveUsers: Math.max(1, liveActiveVisitorsCount),
                totalStreamingMinutes
            },
            allUsers,
            topListeners,
            topStreamers,
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
    recordListenHeartbeat,
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
