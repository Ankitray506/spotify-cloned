const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.service");

async function createMusic(req, res) {
    try {
        const { title, uri: directUri, lyrics: rawLyrics, cover: coverUrl, duration: trackDuration } = req.body;
        const file = req.file;

        if (!title) {
            return res.status(400).json({ message: "Song title is required" });
        }

        // Strict limit: Max 4 songs per artist account
        const existingTracksCount = await musicModel.countDocuments({ artist: req.user.id });
        if (existingTracksCount >= 4) {
            return res.status(403).json({
                message: "Upload limit reached! You have already uploaded 4 tracks. Each artist account is currently limited to 4 tracks."
            });
        }

        let songUri = directUri;

        if (file) {
            const result = await uploadFile(file.buffer.toString('base64'));
            songUri = result.url;
        }

        if (!songUri) {
            return res.status(400).json({ message: "Audio file or audio URL is required" });
        }

        const lyrics = (rawLyrics || '').trim();
        const hasSyncedLyrics = /\[\d{2}:\d{2}(?:\.\d{2,3})?\]/.test(lyrics);

        const music = await musicModel.create({
            uri: songUri,
            title,
            artist: req.user.id,
            lyrics,
            hasSyncedLyrics,
            duration: trackDuration ? parseInt(trackDuration, 10) : 0,
            cover: coverUrl || ''
        });

        const populatedMusic = await musicModel.findById(music._id).populate("artist", "username email");

        return res.status(201).json({
            message: "Music created successfully",
            music: populatedMusic
        });
    } catch (error) {
        console.error("createMusic error:", error);
        return res.status(500).json({ message: error.message || "Failed to create music" });
    }
}

async function createAlbum(req, res) {
    try {
        const { title, musics } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Album title is required" });
        }

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics || [],
        });

        const populatedAlbum = await albumModel.findById(album._id)
            .populate("artist", "username email")
            .populate("musics");

        return res.status(201).json({
            message: "Album created successfully",
            album: populatedAlbum
        });
    } catch (error) {
        console.error("createAlbum error:", error);
        return res.status(500).json({ message: error.message || "Failed to create album" });
    }
}

async function getAllMusics(req, res) {
    try {
        const { search } = req.query;
        let query = {};
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }

        const musics = await musicModel
            .find(query)
            .populate("artist", "username email")
            .sort({ _id: -1 });

        return res.status(200).json({
            message: "Musics fetched successfully",
            musics: musics,
        });
    } catch (error) {
        console.error("getAllMusics error:", error);
        return res.status(500).json({ message: "Failed to fetch musics" });
    }
}

async function getMyTracks(req, res) {
    try {
        const musics = await musicModel
            .find({ artist: req.user.id })
            .populate("artist", "username email")
            .sort({ _id: -1 });

        return res.status(200).json({
            message: "Artist tracks fetched successfully",
            musics: musics,
        });
    } catch (error) {
        console.error("getMyTracks error:", error);
        return res.status(500).json({ message: "Failed to fetch artist tracks" });
    }
}

async function getAllAlbums(req, res) {
    try {
        const albums = await albumModel
            .find()
            .populate("artist", "username email")
            .populate("musics")
            .sort({ _id: -1 });

        return res.status(200).json({
            message: "Albums fetched successfully",
            albums: albums,
        });
    } catch (error) {
        console.error("getAllAlbums error:", error);
        return res.status(500).json({ message: "Failed to fetch albums" });
    }
}

async function getAlbumById(req, res) {
    try {
        const albumId = req.params.albumId;

        const album = await albumModel.findById(albumId)
            .populate("artist", "username email")
            .populate("musics");

        if (!album) {
            return res.status(404).json({ message: "Album not found" });
        }

        return res.status(200).json({
            message: "Album fetched successfully",
            album: album,
        });
    } catch (error) {
        console.error("getAlbumById error:", error);
        return res.status(500).json({ message: "Failed to fetch album" });
    }
}

async function updateLyrics(req, res) {
    try {
        const { id } = req.params;
        const { lyrics: rawLyrics } = req.body;
        const lyrics = (rawLyrics || '').trim();
        const hasSyncedLyrics = /\[\d{2}:\d{2}(?:\.\d{2,3})?\]/.test(lyrics);

        const music = await musicModel.findById(id);
        if (!music) {
            return res.status(404).json({ message: "Music track not found" });
        }

        // Only track artist can update lyrics
        if (music.artist.toString() !== req.user.id && req.user.role !== 'artist') {
            return res.status(403).json({ message: "Not authorized to update lyrics for this track" });
        }

        music.lyrics = lyrics;
        music.hasSyncedLyrics = hasSyncedLyrics;
        await music.save();

        return res.status(200).json({
            message: "Lyrics updated successfully",
            lyrics: music.lyrics,
            hasSyncedLyrics: music.hasSyncedLyrics
        });
    } catch (error) {
        console.error("updateLyrics error:", error);
        return res.status(500).json({ message: "Failed to update lyrics", error: error.message });
    }
}

async function getMusicLyrics(req, res) {
    try {
        const { id } = req.params;
        const music = await musicModel.findById(id).select('title lyrics hasSyncedLyrics artist').populate('artist', 'username');
        if (!music) {
            return res.status(404).json({ message: "Music track not found" });
        }

        return res.status(200).json({
            id: music._id,
            title: music.title,
            artist: music.artist?.username || 'Artist',
            lyrics: music.lyrics || '',
            hasSyncedLyrics: music.hasSyncedLyrics || false
        });
    } catch (error) {
        console.error("getMusicLyrics error:", error);
        return res.status(500).json({ message: "Failed to fetch track lyrics", error: error.message });
    }
}

module.exports = {
    createMusic,
    createAlbum,
    getAllMusics,
    getMyTracks,
    getAllAlbums,
    getAlbumById,
    updateLyrics,
    getMusicLyrics
};
