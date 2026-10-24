const express = require('express');
const adminController = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// Public feedback / recovery submission
router.post("/feedback", adminController.submitFeedback);

// Public / client visitor tracking ping
router.post("/visit", adminController.recordVisitorVisit);

// Strict Admin-only endpoints
router.get("/stats", authMiddleware.authAdmin, adminController.getAdminStats);
router.put("/users/:id/block", authMiddleware.authAdmin, adminController.toggleBlockUser);
router.put("/users/:id/verify", authMiddleware.authAdmin, adminController.toggleVerifyUser);
router.put("/users/:id/role", authMiddleware.authAdmin, adminController.toggleUserRole);
router.delete("/tracks/:id", authMiddleware.authAdmin, adminController.deleteArtistTrack);
router.put("/users/:id/reset-password", authMiddleware.authAdmin, adminController.adminResetPassword);
router.delete("/users/:id", authMiddleware.authAdmin, adminController.deleteUser);
router.put("/feedback/:id", authMiddleware.authAdmin, adminController.updateFeedbackStatus);

module.exports = router;
