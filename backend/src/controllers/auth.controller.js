const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// JWT Secret check
if (!process.env.JWT_SECRET) {
    console.error("❌ JWT_SECRET is missing in .env file");
}


// ================= REGISTER =================

async function registerUser(req, res) {

    try {

        console.log("REGISTER API HIT");
        console.log("JWT SECRET EXISTS:", !!process.env.JWT_SECRET);


        const { username, email, password, role = "user" } = req.body;

        // Check required fields
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email and password are required"
            });
        }

        // Check if user already exists
        const isUserAlreadyExists = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        if (isUserAlreadyExists) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hash = await bcrypt.hash(password, 10);

        // Create user
        const user = await userModel.create({
            username,
            email,
            password: hash,
            role
        });

        // Check JWT secret
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                message: "JWT_SECRET is missing in .env"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET
        );

        // Store token in cookie
        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // Response
        return res.status(201).json({
            message: "User registered successfully",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
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

        // Check required fields
        if ((!username && !email) || !password) {
            return res.status(400).json({
                message: "Username/email and password are required"
            });
        }

        // Find user
        const user = await userModel.findOne({
            $or: [
                ...(username ? [{ username }] : []),
                ...(email ? [{ email }] : [])
            ]
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // Check JWT secret
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
                username: user.username
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Store token in cookie
        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // Response
        return res.status(200).json({
            message: "User logged in successfully",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        console.error("Login Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


// ================= GET ME =================

async function getMe(req, res) {
    try {
        const user = await userModel.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("GetMe Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


// ================= LOGOUT =================

async function logoutUser(req, res) {

    res.clearCookie("token");

    return res.status(200).json({
        message: "User logged out successfully"
    });
}


// ================= EXPORT =================

module.exports = {
    registerUser,
    loginUser,
    getMe,
    logoutUser
};