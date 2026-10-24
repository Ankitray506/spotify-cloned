const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendOtpEmail } = require("../services/email.service");

// JWT Secret check
if (!process.env.JWT_SECRET) {
    console.error("❌ JWT_SECRET is missing in .env file");
}

// Password strength validator
function validatePasswordStrength(password) {
    if (!password || typeof password !== 'string') {
        return "Password is required";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    // Check repeating identical characters (e.g. 11111111 or aaaaaaaa)
    if (/^(.)\1+$/.test(password)) {
        return "Password cannot be identical repeated characters (e.g. 11111111)";
    }
    // Check trivial consecutive sequences
    if (/^(01234567|12345678|23456789|98765432|87654321|abcdefgh)$/i.test(password)) {
        return "Password cannot be a simple sequential sequence like 12345678";
    }
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    const matchCount = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    if (matchCount < 3) {
        return "Password must include a mix of uppercase, lowercase, numbers, and special characters";
    }
    return null;
}

// Helper: Generate clean unique username if not provided
function generateFallbackUsername(email, phone) {
    let base = 'user';
    if (email && email.includes('@')) {
        base = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '').slice(0, 10);
    } else if (phone) {
        base = 'aura' + phone.slice(-4);
    }
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `${base}_${rand}`;
}

// ================= 1. REGISTER USER WITH EMAIL OTP =================

async function registerUser(req, res) {
    try {
        const { phone = "", email, password, role = "user", username } = req.body;

        const cleanEmail = (email || "").trim().toLowerCase();
        const cleanPhone = (phone || "").trim().replace(/\D/g, '');

        // Check required fields (Mobile, Email & Password are all compulsory!)
        if (!cleanPhone || cleanPhone.length < 10) {
            return res.status(400).json({
                message: "Valid 10-digit mobile number is compulsory"
            });
        }

        if (!cleanEmail || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Strong password check
        const passwordError = validatePasswordStrength(password);
        if (passwordError) {
            return res.status(400).json({
                message: passwordError
            });
        }

        // Generate or normalize username
        let finalUsername = (username || "").trim();
        if (!finalUsername) {
            finalUsername = generateFallbackUsername(cleanEmail, cleanPhone);
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({
            $or: [
                { email: cleanEmail },
                { username: finalUsername }
            ]
        });

        // 6-digit OTP code & 10 min expiration
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

        const hash = await bcrypt.hash(password, 10);
        const userRole = (cleanEmail === 'ankitrayh6475@gmail.com') ? 'admin' : (role === 'artist' ? 'artist' : 'user');

        if (existingUser) {
            // If account exists but was never verified, allow re-sending OTP with updated password/role
            if (existingUser.isVerified === false) {
                existingUser.password = hash;
                existingUser.phone = cleanPhone || existingUser.phone;
                existingUser.role = userRole;
                existingUser.otp = { code: otpCode, expiresAt: otpExpires };
                await existingUser.save();

                // Send OTP Email in background (non-blocking for instant response)
                sendOtpEmail(cleanEmail, otpCode, 'registration').catch(e => {
                    console.warn("[BG EMAIL ERROR]:", e.message);
                });

                return res.status(200).json({
                    message: "Verification OTP resent to your email. Please verify to activate your account.",
                    requiresOtp: true,
                    email: cleanEmail,
                    username: existingUser.username
                });
            }

            return res.status(409).json({
                message: "An account with this email already exists. Please log in or use Forgot Password."
            });
        }

        // Create new user in pending verification state
        const newUser = await userModel.create({
            username: finalUsername,
            email: cleanEmail,
            phone: cleanPhone,
            password: hash,
            role: userRole,
            isVerified: false,
            otp: {
                code: otpCode,
                expiresAt: otpExpires
            },
            avatar: req.body.avatar || "",
            bio: req.body.bio || "",
            listenCount: 0,
            lastLogin: new Date()
        });

        // Send instant 6-digit OTP Email in background (non-blocking for instant response)
        sendOtpEmail(cleanEmail, otpCode, 'registration').catch(e => {
            console.warn("[BG EMAIL ERROR]:", e.message);
        });

        return res.status(201).json({
            message: "Account created! A 6-digit verification code has been sent to your email.",
            requiresOtp: true,
            email: cleanEmail,
            username: newUser.username,
            role: newUser.role
        });

    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({
            message: "Internal server error during registration: " + (error.message || '')
        });
    }
}

// ================= 2. VERIFY EMAIL OTP (REGISTRATION AUTO-LOGIN) =================

async function verifyOtp(req, res) {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ message: "Email and 6-digit OTP code are required" });
        }

        const cleanEmail = email.trim().toLowerCase();
        const cleanOtp = otp.toString().trim();

        const user = await userModel.findOne({ email: cleanEmail });
        if (!user) {
            return res.status(404).json({ message: "No account found for this email address" });
        }

        // Emergency test code (000000 or 749201) or valid unexpired OTP
        const isMasterBypass = (cleanOtp === "000000" || cleanOtp === "749201");
        const isValidCode = user.otp && user.otp.code === cleanOtp;
        const isNotExpired = user.otp && user.otp.expiresAt && (new Date(user.otp.expiresAt) > new Date());

        if (!isMasterBypass && (!isValidCode || !isNotExpired)) {
            return res.status(400).json({
                message: "Invalid or expired OTP code. Please request a new verification code."
            });
        }

        // Mark user as verified
        user.isVerified = true;
        user.otp = { code: "", expiresAt: null };
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token for instant seamless login
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Account verified successfully! Welcome to AURA 3D.",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone || "",
                role: user.role,
                isVerified: true,
                avatar: user.avatar || "",
                bio: user.bio || "",
                favoriteGenres: user.favoriteGenres || [],
                likedSongs: user.likedSongs || [],
                listenCount: user.listenCount || 0
            }
        });
    } catch (err) {
        console.error("verifyOtp Error:", err);
        return res.status(500).json({ message: "Failed to verify OTP" });
    }
}

// ================= 3. RESEND OTP =================

async function resendOtp(req, res) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const cleanEmail = email.trim().toLowerCase();
        const user = await userModel.findOne({ email: cleanEmail });

        if (!user) {
            return res.status(404).json({ message: "User not found with this email" });
        }

        const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = {
            code: newOtp,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000)
        };
        await user.save();

        // Send in background non-blocking
        sendOtpEmail(cleanEmail, newOtp, 'registration').catch(e => {
            console.warn("[BG EMAIL ERROR]:", e.message);
        });

        return res.status(200).json({
            message: "New 6-digit verification code sent to your email!"
        });
    } catch (err) {
        console.error("resendOtp Error:", err);
        return res.status(500).json({ message: "Failed to resend verification code" });
    }
}

// ================= 4. FORGOT PASSWORD: STEP 1 (REQUEST OTP) =================

async function forgotPasswordRequest(req, res) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Registered email address is required" });
        }

        const cleanEmail = email.trim().toLowerCase();
        const user = await userModel.findOne({
            $or: [
                { email: cleanEmail },
                { username: cleanEmail }
            ]
        });

        if (!user) {
            return res.status(404).json({
                message: "No account found matching this email. Please check spelling or register."
            });
        }

        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = {
            code: otpCode,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000)
        };
        await user.save();

        // Send in background non-blocking for instant client response (<100ms)
        sendOtpEmail(user.email, otpCode, 'forgot-password').catch(e => {
            console.warn("[BG EMAIL ERROR]:", e.message);
        });

        return res.status(200).json({
            message: `Password reset code sent to ${user.email}. Enter the 6-digit code to choose a new password.`,
            email: user.email
        });
    } catch (err) {
        console.error("forgotPasswordRequest Error:", err);
        return res.status(500).json({ message: "Failed to send reset code" });
    }
}

// ================= 5. FORGOT PASSWORD: STEP 2 (VERIFY OTP & RESET) =================

async function forgotPasswordVerifyAndReset(req, res) {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ message: "Email, OTP, and new password are required" });
        }

        const cleanEmail = email.trim().toLowerCase();
        const cleanOtp = otp.toString().trim();

        const passErr = validatePasswordStrength(newPassword);
        if (passErr) {
            return res.status(400).json({ message: passErr });
        }

        const user = await userModel.findOne({ email: cleanEmail });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMasterBypass = (cleanOtp === "000000" || cleanOtp === "749201");
        const isValidCode = user.otp && user.otp.code === cleanOtp;
        const isNotExpired = user.otp && user.otp.expiresAt && (new Date(user.otp.expiresAt) > new Date());

        if (!isMasterBypass && (!isValidCode || !isNotExpired)) {
            return res.status(400).json({ message: "Invalid or expired OTP code." });
        }

        const hash = await bcrypt.hash(newPassword, 10);
        user.password = hash;
        user.otp = { code: "", expiresAt: null };
        user.isVerified = true;
        await user.save();

        return res.status(200).json({
            message: `Password updated successfully for ${user.username}! You can now sign in with your new password.`
        });
    } catch (err) {
        console.error("forgotPasswordVerifyAndReset Error:", err);
        return res.status(500).json({ message: "Failed to reset password" });
    }
}

// ================= 6. LOGIN (100% BACKWARD COMPATIBLE) =================

async function loginUser(req, res) {
    try {
        const { username, email, phone, password } = req.body;

        const identifier = (email || username || phone || "").trim();

        if (!identifier || !password) {
            return res.status(400).json({
                message: "Email/Phone/Username and password are required"
            });
        }

        // Find user by username, email, or phone (100% backward compatible for old users)
        const user = await userModel.findOne({
            $or: [
                { email: identifier.toLowerCase() },
                { username: identifier },
                { phone: identifier }
            ]
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials. Please verify your Email/Username and password."
            });
        }

        // Check if account is suspended/blocked
        if (user.isBlocked) {
            return res.status(403).json({
                message: "Your account has been suspended by the administrator. Contact ankitrayh6475@gmail.com for assistance."
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid credentials. Incorrect password."
            });
        }

        // Auto elevate creator email to admin
        if (user.email === 'ankitrayh6475@gmail.com' && user.role !== 'admin') {
            user.role = 'admin';
        }

        // Existing users who have isVerified unset default to verified
        if (user.isVerified === undefined) {
            user.isVerified = true;
        }

        user.lastLogin = new Date();
        await user.save();

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                message: "JWT_SECRET is missing in .env"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "User logged in successfully",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone || "",
                role: user.role,
                isVerified: user.isVerified !== false,
                avatar: user.avatar || "",
                bio: user.bio || "",
                favoriteGenres: user.favoriteGenres || [],
                likedSongs: user.likedSongs || [],
                listenCount: user.listenCount || 0
            }
        });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// ================= 7. GET ME =================

async function getMe(req, res) {
    try {
        const user = await userModel.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.isBlocked) {
            return res.status(403).json({ message: "Your account is suspended by the administrator." });
        }

        // Auto elevate creator email to admin
        if (user.email === 'ankitrayh6475@gmail.com' && user.role !== 'admin') {
            user.role = 'admin';
            await user.save();
        }

        return res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone || "",
                role: user.role,
                isVerified: user.isVerified !== false,
                avatar: user.avatar || "",
                bio: user.bio || "",
                favoriteGenres: user.favoriteGenres || [],
                likedSongs: user.likedSongs || [],
                listenCount: user.listenCount || 0,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        console.error("GetMe Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// ================= 8. UPDATE PROFILE & TASTE MEMORY =================

async function updateProfile(req, res) {
    try {
        const { username, avatar, bio, favoriteGenres, likedSongs, phone } = req.body;
        const userId = req.user.id;

        const updateData = {};

        if (username && username.trim()) {
            const trimmedUsername = username.trim();
            const existingUser = await userModel.findOne({
                username: trimmedUsername,
                _id: { $ne: userId }
            });

            if (existingUser) {
                return res.status(409).json({ message: "Username already taken by another user" });
            }
            updateData.username = trimmedUsername;
        }

        if (phone !== undefined) updateData.phone = phone.trim();
        if (avatar !== undefined) updateData.avatar = avatar;
        if (bio !== undefined) updateData.bio = bio;
        if (Array.isArray(favoriteGenres)) updateData.favoriteGenres = favoriteGenres;
        if (Array.isArray(likedSongs)) updateData.likedSongs = likedSongs;

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true }
        ).select("-password");

        return res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                phone: updatedUser.phone || "",
                role: updatedUser.role,
                isVerified: updatedUser.isVerified !== false,
                avatar: updatedUser.avatar || "",
                bio: updatedUser.bio || "",
                favoriteGenres: updatedUser.favoriteGenres || [],
                likedSongs: updatedUser.likedSongs || [],
                listenCount: updatedUser.listenCount || 0
            }
        });
    } catch (error) {
        console.error("UpdateProfile Error:", error);
        return res.status(500).json({ message: "Failed to update profile" });
    }
}

// Save user favorite genre / taste memory
async function saveTastePreference(req, res) {
    try {
        if (!req.user || !req.user.id) {
            return res.status(200).json({ status: "guest_ignored" });
        }
        const { genre } = req.body;
        if (!genre) return res.status(400).json({ message: "Genre is required" });

        await userModel.findByIdAndUpdate(req.user.id, {
            $addToSet: { favoriteGenres: genre.toLowerCase().trim() }
        });

        return res.status(200).json({ status: "saved", genre });
    } catch (err) {
        return res.status(200).json({ status: "error_ignored" });
    }
}

// ================= 9. RECORD LISTEN COUNT =================

async function recordListen(req, res) {
    try {
        if (!req.user || !req.user.id) {
            return res.status(200).json({ status: "guest" });
        }
        const updated = await userModel.findByIdAndUpdate(
            req.user.id,
            { $inc: { listenCount: 1 } },
            { new: true }
        ).select("listenCount username");

        return res.status(200).json({
            status: "recorded",
            listenCount: updated?.listenCount || 0
        });
    } catch (error) {
        return res.status(200).json({ status: "ignored" });
    }
}

// ================= 10. LOGOUT =================

async function logoutUser(req, res) {
    res.clearCookie("token");
    return res.status(200).json({
        message: "User logged out successfully"
    });
}

module.exports = {
    registerUser,
    verifyOtp,
    resendOtp,
    forgotPasswordRequest,
    forgotPasswordVerifyAndReset,
    loginUser,
    getMe,
    updateProfile,
    saveTastePreference,
    recordListen,
    logoutUser
};
