const userModel = require("../models/user.model");
const musicModel = require("../models/music.model");
const feedbackModel = require("../models/feedback.model");
const bcrypt = require("bcryptjs");

// GET /api/admin/stats
async function getAdminStats(req, res) {
    try {
        const [totalUsers, totalArtists, totalAdmins, totalBlocked, totalTracks, totalFeedback] = await Promise.all([
            userModel.countDocuments({ role: 'user' }),
            userModel.countDocuments({ role: 'artist' }),
            userModel.countDocuments({ role: 'admin' }),
            userModel.countDocuments({ isBlocked: true }),
            musicModel.countDocuments(),
            feedbackModel.countDocuments()
        ]);

        // All users list for admin management
        const allUsers = await userModel.find()
            .sort({ createdAt: -1 })
            .select("username email role isBlocked listenCount avatar lastLogin createdAt");

        // Top listeners sorted by listenCount descending
        const topListeners = await userModel.find()
            .sort({ listenCount: -1, createdAt: -1 })
            .limit(10)
            .select("username email role isBlocked listenCount avatar lastLogin createdAt");

        // Recent feedback messages
        const recentFeedbacks = await feedbackModel.find()
            .sort({ createdAt: -1 })
            .limit(25);

        return res.status(200).json({
            metrics: {
                totalUsers: totalUsers + totalArtists + totalAdmins,
                listenersCount: totalUsers,
                artistsCount: totalArtists,
                adminsCount: totalAdmins,
                blockedCount: totalBlocked,
                totalTracks,
                totalFeedback
            },
            allUsers,
            topListeners,
            recentFeedbacks
        });
    } catch (error) {
        console.error("getAdminStats Error:", error);
        return res.status(500).json({ message: "Failed to load admin stats" });
    }
}

// PUT /api/admin/users/:id/block (Toggle block user)
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

// PUT /api/admin/users/:id/reset-password (Admin password override)
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

// DELETE /api/admin/users/:id (Permanently delete user and their uploads)
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

// POST /api/admin/feedback (Submit feedback or password recovery request)
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

// PUT /api/admin/feedback/:id (Update feedback status)
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
    getAdminStats,
    toggleBlockUser,
    adminResetPassword,
    deleteUser,
    submitFeedback,
    updateFeedbackStatus
};
