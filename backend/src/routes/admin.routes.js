const express = require('express');
const adminController = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// Public feedback / recovery submission
router.post("/feedback", adminController.submitFeedback);

// Strict Admin-only endpoints
router.get("/stats", authMiddleware.authAdmin, adminController.getAdminStats);
router.put("/users/:id/block", authMiddleware.authAdmin, adminController.toggleBlockUser);
router.put("/users/:id/reset-password", authMiddleware.authAdmin, adminController.adminResetPassword);
router.put("/feedback/:id", authMiddleware.authAdmin, adminController.updateFeedbackStatus);

module.exports = router;
