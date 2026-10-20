const mongoose = require('mongoose');


const musicSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    lyrics: {
        type: String,
        default: "",
    },
    hasSyncedLyrics: {
        type: Boolean,
        default: false,
    },
    duration: {
        type: Number,
        default: 0,
    },
    cover: {
        type: String,
        default: "",
    }
}, { timestamps: true })


const musicModel = mongoose.model("music", musicSchema)


module.exports = musicModel;