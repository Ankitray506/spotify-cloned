const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        default: "",
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [ 'user', 'artist', 'admin' ],
        default: 'user',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    otp: {
        code: {
            type: String,
            default: "",
        },
        expiresAt: {
            type: Date,
            default: null,
        }
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    listenCount: {
        type: Number,
        default: 0,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    avatar: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: "",
    },
    favoriteGenres: [{
        type: String,
    }],
    likedSongs: [{
        type: Object,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
