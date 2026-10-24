const express = require('express');
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/verify-otp", authController.verifyOtp);
router.post("/resend-otp", authController.resendOtp);
router.post("/forgot-password-request", authController.forgotPasswordRequest);
router.post("/forgot-password-reset", authController.forgotPasswordVerifyAndReset);
router.post("/login", authController.loginUser);
router.post("/taste", authMiddleware.authUser, authController.saveTastePreference);
router.get("/me", authMiddleware.authUser, authController.getMe);
router.put("/profile", authMiddleware.authUser, authController.updateProfile);
router.post("/record-listen", authMiddleware.authUser, authController.recordListen);
router.post("/logout", authController.logoutUser);

module.exports = router;
