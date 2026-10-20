const express = require('express');
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/forgot-password", authController.forgotPasswordReset);
router.get("/me", authMiddleware.authUser, authController.getMe);
router.put("/profile", authMiddleware.authUser, authController.updateProfile);
router.post("/record-listen", authMiddleware.authUser, authController.recordListen);
router.post("/logout", authController.logoutUser);

module.exports = router;
