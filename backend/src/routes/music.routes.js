const express = require('express');
const musicController = require("../controllers/music.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router();


router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
router.post("/album", authMiddleware.authArtist, musicController.createAlbum);

router.get("/my-tracks", authMiddleware.authArtist, musicController.getMyTracks);
router.get("/", authMiddleware.authUser, musicController.getAllMusics);
router.get("/albums", authMiddleware.authUser, musicController.getAllAlbums);
router.get("/albums/:albumId", authMiddleware.authUser, musicController.getAlbumById);

// Lyrics routes
router.put("/:id/lyrics", authMiddleware.authArtist, musicController.updateLyrics);
router.get("/:id/lyrics", musicController.getMusicLyrics);

module.exports = router;