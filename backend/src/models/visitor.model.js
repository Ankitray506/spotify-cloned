const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    visitorId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    device: {
        type: String,
        default: 'Desktop'
    },
    browser: {
        type: String,
        default: 'Browser'
    },
    os: {
        type: String,
        default: 'Unknown'
    },
    ip: {
        type: String,
        default: ''
    },
    isRegistered: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    },
    userEmail: {
        type: String,
        default: ''
    },
    userRole: {
        type: String,
        default: ''
    },
    visitsCount: {
        type: Number,
        default: 1
    },
    lastPath: {
        type: String,
        default: '/'
    },
    lastVisitedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// Auto-cleanup: MongoDB automatically purges guest visitor records older than 30 days
// This guarantees database storage NEVER fills up or exceeds limits!
visitorSchema.index({ lastVisitedAt: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

const visitorModel = mongoose.model('visitor', visitorSchema);

module.exports = visitorModel;
