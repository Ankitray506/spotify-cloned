const express = require('express');
const liveMusicController = require('../controllers/liveMusic.controller');

const router = express.Router();

router.get('/search', liveMusicController.searchSongs);
router.get('/genre', liveMusicController.getGenreSongs);
router.get('/trending', liveMusicController.getTrending);
router.get('/lyrics', liveMusicController.getLiveLyrics);
router.get('/suggest', liveMusicController.getSearchSuggestions);
router.post('/youtube-link', liveMusicController.streamYouTubeAudio);

module.exports = router;
