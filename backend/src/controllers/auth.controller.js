const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

// ================= REGISTER =================

async function registerUser(req, res) {
    try {
        const { username, email, password, role = "user" } = req.body;

        // Check required fields
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email and password are required"
            });
        }

        // Strong password check
        const passwordError = validatePasswordStrength(password);
        if (passwordError) {
            return res.status(400).json({
                message: passwordError
            });
        }

        // Check if user already exists
        const isUserAlreadyExists = await userModel.findOne({
            $or: [
                { username: username.trim() },
                { email: email.trim().toLowerCase() }
            ]
        });

        if (isUserAlreadyExists) {
            return res.status(409).json({
                message: "User or Email already exists. Please choose a different one or sign in."
            });
        }

        // Hash password
        const hash = await bcrypt.hash(password, 10);

        // Assign admin if matching creator email
        const userRole = (email.trim().toLowerCase() === 'ankitrayh6475@gmail.com') ? 'admin' : role;

        // Create user
        const user = await userModel.create({
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password: hash,
            role: userRole,
            avatar: req.body.avatar || "",
            bio: req.body.bio || "",
            listenCount: 0,
            lastLogin: new Date()
        });

        return res.status(201).json({
            message: "Account created successfully! Please log in with your credentials to enter AURA 3D.",
            requiresLogin: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                bio: user.bio
            }
        });

    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// ================= LOGIN =================

async function loginUser(req, res) {
    try {
        const { username, email, password } = req.body;

        if ((!username && !email) || !password) {
            return res.status(400).json({
                message: "Username/email and password are required"
            });
        }

        // Find user
        const user = await userModel.findOne({
            $or: [
                ...(username ? [{ username: username.trim() }] : []),
                ...(email ? [{ email: email.trim().toLowerCase() }] : []),
                ...(username ? [{ email: username.trim().toLowerCase() }] : [])
            ]
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials. Please verify your username/email and password."
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
        user.lastLogin = new Date();
        await user.save();

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                message: "JWT_SECRET is missing in .env"
            });
        }

        // Generate JWT including email and role for strict admin verification
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
                role: user.role,
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

// ================= FORGOT / SELF-SERVICE PASSWORD RESET =================

async function forgotPasswordReset(req, res) {
    try {
        const { username, email, newPassword } = req.body;
        if (!username || !email || !newPassword) {
            return res.status(400).json({ message: "Username, registered email, and new password are required" });
        }

        const user = await userModel.findOne({
            username: username.trim(),
            email: email.trim().toLowerCase()
        });

        if (!user) {
            return res.status(404).json({
                message: "Account verification failed. No account matched that exact username and email combination."
            });
        }

        const passErr = validatePasswordStrength(newPassword);
        if (passErr) {
            return res.status(400).json({ message: passErr });
        }

        const hash = await bcrypt.hash(newPassword, 10);
        user.password = hash;
        await user.save();

        return res.status(200).json({
            message: `Password successfully updated for ${user.username}! You can now sign in with your new password.`
        });
    } catch (err) {
        console.error("forgotPasswordReset Error:", err);
        return res.status(500).json({ message: "Failed to reset password" });
    }
}

// ================= GET ME =================

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
                role: user.role,
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

// ================= UPDATE PROFILE =================

async function updateProfile(req, res) {
    try {
        const { username, avatar, bio, favoriteGenres, likedSongs } = req.body;
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
                role: updatedUser.role,
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

// ================= RECORD LISTEN COUNT =================

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

// ================= LOGOUT =================

async function logoutUser(req, res) {
    res.clearCookie("token");
    return res.status(200).json({
        message: "User logged out successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    forgotPasswordReset,
    getMe,
    updateProfile,
    recordListen,
    logoutUser
};
