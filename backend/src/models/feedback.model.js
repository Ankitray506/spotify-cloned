const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    },
    name: {
        type: String,
        default: 'Guest User'
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        default: 'General Feedback'
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'resolved', 'in_progress'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const feedbackModel = mongoose.model('feedback', feedbackSchema);

module.exports = feedbackModel;
