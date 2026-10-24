import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import axiosClient from '../api/axiosClient';
import { getCachedAudioUrl, isAudioCached } from '../services/audioCache';
import { recordSongInteraction } from '../services/mlRecommender';
import { useAuth } from './AuthContext';
import { sendStreamingHeartbeat } from '../utils/deviceTracker';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const auth = useAuth();
  const user = auth?.user;
  const audioRef = useRef(new Audio());
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCached, setIsCached] = useState(false);
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isFullscreen3D, setIsFullscreen3D] = useState(false);
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);
  const [showGuestLimitModal, setShowGuestLimitModal] = useState(false);
  const [guestPlaysCount, setGuestPlaysCount] = useState(() => {
    try {
      return parseInt(localStorage.getItem('aura_guest_play_count') || '0', 10);
    } catch (e) {
      return 0;
    }
  });

  const [likedSongs, setLikedSongs] = useState(() => {
    try {
      const stored = localStorage.getItem('aura_liked_songs');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });
  const [history, setHistory] = useState(() => {
    try {
      const stored = localStorage.getItem('aura_listening_history');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // Web Audio API refs for real-time frequency analysis
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const frequencyDataRef = useRef(new Uint8Array(64));

  // Initialize Web Audio API on first user gesture (Optimized for Mobile & Desktop)
  const initAudioAnalyser = useCallback(() => {
    if (audioContextRef.current) return;
    try {
      // Mobile device detection: On Android & iOS browsers, Web Audio API resampling causes buffer crackle/distortion.
      // Bypassing AudioContext routing allows direct native hardware audio decoding for 100% clean, stutter-free sound!
      const isMobile = typeof navigator !== 'undefined' && 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile) {
        console.log("📱 Mobile audio optimization active: hardware-accelerated playback without buffer distortion");
        return;
      }

      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.8;

      audioRef.current.crossOrigin = "anonymous";
      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
      sourceNodeRef.current = source;
    } catch (e) {
      console.warn("Web Audio API not supported or cross-origin restricted, using algorithmic beat sync:", e.message);
    }
  }, []);

  // Return frequency data for 3D visualizers
  const getAudioFrequencyData = useCallback(() => {
    if (analyserRef.current && isPlaying) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray);
      return dataArray;
    }
    // Fallback if audio node isn't directly connected or browser restricted
    if (isPlaying) {
      const time = Date.now() * 0.005;
      const fakeData = new Uint8Array(64);
      for (let i = 0; i < 64; i++) {
        const val = Math.sin(time + i * 0.2) * 50 + Math.cos(time * 0.8 + i * 0.1) * 40 + 100;
        fakeData[i] = Math.max(20, Math.min(255, Math.floor(val)));
      }
      return fakeData;
    }
    return new Uint8Array(64).fill(0);
  }, [isPlaying]);

  // Refs to avoid stale closures in audio event listeners
  const queueRef = useRef([]);
  const queueIndexRef = useRef(0);
  const isShuffleRef = useRef(false);
  const isLoopRef = useRef(false);
  const nextSongRef = useRef(null);
  const currentSongRef = useRef(null);

  // YouTube Audio Player refs
  const ytPlayerRef = useRef(null);
  const isYtReadyRef = useRef(false);

  useEffect(() => { queueRef.current = queue; }, [queue]);
  useEffect(() => { queueIndexRef.current = queueIndex; }, [queueIndex]);
  useEffect(() => { isShuffleRef.current = isShuffle; }, [isShuffle]);
  useEffect(() => { isLoopRef.current = isLoop; }, [isLoop]);
  useEffect(() => { currentSongRef.current = currentSong; }, [currentSong]);

  // Load YouTube IFrame API script once
  const initYTPlayer = useCallback(() => {
    if (!window.YT || !window.YT.Player || ytPlayerRef.current) return;
    try {
      ytPlayerRef.current = new window.YT.Player('aura-hidden-yt-iframe', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1
        },
        events: {
          onReady: (event) => {
            isYtReadyRef.current = true;
            if (currentSongRef.current?.isYouTube && currentSongRef.current?.videoId) {
              event.target.loadVideoById(currentSongRef.current.videoId);
              event.target.playVideo();
            }
          },
          onStateChange: (event) => {
            if (event.data === 1) { // PLAYING
              setIsPlaying(true);
              const dur = event.target.getDuration();
              if (dur > 0) setDuration(dur);
            } else if (event.data === 2) { // PAUSED
              setIsPlaying(false);
            } else if (event.data === 0) { // ENDED
              if (isLoopRef.current) {
                event.target.seekTo(0);
                event.target.playVideo();
              } else if (nextSongRef.current) {
                nextSongRef.current();
              }
            }
          },
          onError: () => {
            setIsPlaying(false);
          }
        }
      });
    } catch (e) {
      console.warn("YouTube iframe init warning:", e);
    }
  }, []);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevReady) prevReady();
      isYtReadyRef.current = true;
      initYTPlayer();
    };

    if (window.YT && window.YT.Player) {
      isYtReadyRef.current = true;
      initYTPlayer();
    }
  }, [initYTPlayer]);

  // YouTube live playback ticker (updates currentTime & actual duration)
  useEffect(() => {
    let timer;
    if (currentSong?.isYouTube) {
      timer = setInterval(() => {
        if (ytPlayerRef.current && typeof ytPlayerRef.current.getCurrentTime === 'function') {
          try {
            const cur = ytPlayerRef.current.getCurrentTime() || 0;
            const dur = ytPlayerRef.current.getDuration() || 0;
            setCurrentTime(cur);
            if (dur > 0 && dur !== duration) {
              setDuration(dur);
            }
          } catch (e) {}
        }
      }, 500);
    }
    return () => clearInterval(timer);
  }, [currentSong, duration]);

  // Continuous Streaming Heartbeat & Keep-Alive Alarm (Tracks listening minutes & wakes Render server)
  useEffect(() => {
    let interval = null;
    if (isPlaying && currentSong) {
      sendStreamingHeartbeat({ user, currentSong, secondsStreamed: 5 });

      interval = setInterval(() => {
        sendStreamingHeartbeat({ user, currentSong, secondsStreamed: 20 });
      }, 20000); // Heartbeat every 20s during streaming
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentSong, user]);

  // Audio element event listeners
  useEffect(() => {
    const audio = audioRef.current;
    audio.preload = 'auto';

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      if (isLoopRef.current) {
        audio.currentTime = 0;
        audio.play().catch(console.error);
      } else if (nextSongRef.current) {
        nextSongRef.current();
      }
    };

    const handleError = (e) => {
      console.warn("Audio playback error occurred:", e);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('playing', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('playing', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  // Sync volume state to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Play a specific song
  const playSong = useCallback((song, playlist = null) => {
    if (!song) return;
    if (!song.uri && !song.isYouTube) return;

    // Check Guest demo limit (5 songs for unauthenticated users)
    const isAuth = !!localStorage.getItem('token');
    if (!isAuth) {
      const currentGuestCount = parseInt(localStorage.getItem('aura_guest_play_count') || '0', 10);
      if (currentGuestCount >= 5) {
        setShowGuestLimitModal(true);
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
        return;
      }
      const newGuestCount = currentGuestCount + 1;
      localStorage.setItem('aura_guest_play_count', String(newGuestCount));
      setGuestPlaysCount(newGuestCount);
    } else {
      // Authenticated user: track play and genre taste in backend MongoDB
      axiosClient.post('/auth/record-listen').catch(() => {});
      if (song.genre || song.album) {
        axiosClient.post('/auth/taste', { genre: song.genre || song.album }).catch(() => {});
      }
    }

    initAudioAnalyser();
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (playlist && playlist.length > 0) {
      setQueue(playlist);
      queueRef.current = playlist;
      const idx = playlist.findIndex((s) => (s._id || s.id) === (song._id || song.id));
      const newIdx = idx !== -1 ? idx : 0;
      setQueueIndex(newIdx);
      queueIndexRef.current = newIdx;
    } else {
      const currentQ = queueRef.current;
      const existingIdx = currentQ.findIndex(s => (s._id || s.id) === (song._id || song.id));
      if (existingIdx !== -1) {
        setQueueIndex(existingIdx);
        queueIndexRef.current = existingIdx;
      } else {
        const updatedQ = [song, ...currentQ];
        setQueue(updatedQ);
        queueRef.current = updatedQ;
        setQueueIndex(0);
        queueIndexRef.current = 0;
      }
    }

    // Record ML learning for previous song if listened
    if (currentSong && currentTime > 5) {
      recordSongInteraction(currentSong, currentTime, duration);
    }

    // Record to Listening History for offline replay
    setHistory(prev => {
      const songId = song._id || song.id;
      const filtered = prev.filter(s => (s._id || s.id) !== songId);
      const updated = [song, ...filtered].slice(0, 30);
      try {
        localStorage.setItem('aura_listening_history', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    setCurrentSong(song);
    currentSongRef.current = song;

    // Handle YouTube track with actual video audio playback
    if (song.isYouTube && song.videoId) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }

      if (ytPlayerRef.current && typeof ytPlayerRef.current.loadVideoById === 'function') {
        try {
          ytPlayerRef.current.loadVideoById(song.videoId);
          ytPlayerRef.current.playVideo();
          setIsPlaying(true);
        } catch (e) {
          console.warn("YouTube play video error:", e);
        }
      } else {
        initYTPlayer();
      }
      return;
    }

    // Normal audio track: stop YouTube audio if active
    if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === 'function') {
      try { ytPlayerRef.current.pauseVideo(); } catch (e) {}
    }

    const audio = audioRef.current;
    audio.preload = 'auto';

    // Start playback immediately using direct uri to eliminate startup latency
    if (audio.src !== song.uri) {
      audio.src = song.uri;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Immediate audio play warning:", err.message);
      });
    }

    // Check offline cache in background without delaying initial play
    isAudioCached(song.uri).then(cached => setIsCached(cached)).catch(() => {});
  }, [initAudioAnalyser, currentSong, currentTime, duration, initYTPlayer]);

  // Toggle play/pause - supports both YouTube audio & standard audio
  const togglePlay = useCallback(() => {
    if (currentSongRef.current?.isYouTube && ytPlayerRef.current && typeof ytPlayerRef.current.getPlayerState === 'function') {
      try {
        const state = ytPlayerRef.current.getPlayerState();
        if (state === 1) { // 1 = PLAYING
          ytPlayerRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          ytPlayerRef.current.playVideo();
          setIsPlaying(true);
        }
      } catch (e) {
        console.warn("YouTube togglePlay error:", e);
      }
      return;
    }

    const audio = audioRef.current;
    if (!audio || !audio.src) return;

    initAudioAnalyser();
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Toggle play error:", err.message);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [initAudioAnalyser]);

  // Next song
  const nextSong = useCallback(() => {
    const currentQ = queueRef.current;
    if (!currentQ || currentQ.length === 0) return;
    let nextIdx = queueIndexRef.current + 1;
    if (isShuffleRef.current) {
      nextIdx = Math.floor(Math.random() * currentQ.length);
    } else if (nextIdx >= currentQ.length) {
      nextIdx = 0;
    }
    setQueueIndex(nextIdx);
    queueIndexRef.current = nextIdx;
    const nextTrack = currentQ[nextIdx];
    if (nextTrack) {
      playSong(nextTrack, currentQ);
    }
  }, [playSong]);

  // Previous song
  const prevSong = useCallback(() => {
    const currentQ = queueRef.current;
    if (!currentQ || currentQ.length === 0) return;
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    let prevIdx = queueIndexRef.current - 1;
    if (prevIdx < 0) {
      prevIdx = currentQ.length - 1;
    }
    setQueueIndex(prevIdx);
    queueIndexRef.current = prevIdx;
    const prevTrack = currentQ[prevIdx];
    if (prevTrack) {
      playSong(prevTrack, currentQ);
    }
  }, [playSong]);

  // Update nextSongRef so handleEnded always calls the latest nextSong
  useEffect(() => {
    nextSongRef.current = nextSong;
  }, [nextSong]);

  // Seek to position in seconds
  const seek = useCallback((timeInSeconds) => {
    if (currentSongRef.current?.isYouTube && ytPlayerRef.current && typeof ytPlayerRef.current.seekTo === 'function') {
      try {
        ytPlayerRef.current.seekTo(timeInSeconds, true);
        setCurrentTime(timeInSeconds);
      } catch (e) {}
      return;
    }
    if (audioRef.current && isFinite(timeInSeconds)) {
      audioRef.current.currentTime = timeInSeconds;
      setCurrentTime(timeInSeconds);
    }
  }, []);

  // Change volume
  const changeVolume = useCallback((newVolume) => {
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
    if (currentSongRef.current?.isYouTube && ytPlayerRef.current && typeof ytPlayerRef.current.setVolume === 'function') {
      try {
        ytPlayerRef.current.setVolume(newVolume * 100);
      } catch (e) {}
    }
  }, [isMuted]);

  // Toggle mute
  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      if (currentSongRef.current?.isYouTube && ytPlayerRef.current) {
        try {
          if (next && typeof ytPlayerRef.current.mute === 'function') {
            ytPlayerRef.current.mute();
          } else if (!next && typeof ytPlayerRef.current.unMute === 'function') {
            ytPlayerRef.current.unMute();
          }
        } catch (e) {}
      }
      return next;
    });
  }, []);

  // Toggle loop
  const toggleLoop = useCallback(() => {
    setIsLoop(prev => !prev);
  }, []);

  // Toggle shuffle
  const toggleShuffle = useCallback(() => {
    setIsShuffle(prev => !prev);
  }, []);

  // Toggle fullscreen 3D player
  const toggleFullscreen3D = useCallback(() => {
    setIsFullscreen3D(prev => !prev);
  }, []);

  // Toggle live synchronized lyrics modal
  const toggleLyrics = useCallback(() => {
    setIsLyricsOpen(prev => !prev);
  }, []);

  // Like / Unlike song
  const toggleLike = useCallback((song) => {
    if (!song) return;
    const songId = song._id || song.id;
    setLikedSongs((prev) => {
      const exists = prev.some((s) => (s._id || s.id) === songId);
      let updated;
      if (exists) {
        updated = prev.filter((s) => (s._id || s.id) !== songId);
      } else {
        updated = [song, ...prev];
      }
      try {
        localStorage.setItem('aura_liked_songs', JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not save liked songs:", e);
      }
      return updated;
    });
  }, []);

  // Keyboard shortcut listener for Space (play/pause), ArrowLeft/Right (seek), M (mute), L (lyrics)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        seek(Math.min(duration, currentTime + 5));
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        seek(Math.max(0, currentTime - 5));
      } else if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMute();
      } else if (e.code === 'KeyL') {
        e.preventDefault();
        toggleLyrics();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, seek, currentTime, duration, toggleMute, toggleLyrics]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem('aura_listening_history');
    } catch (e) {}
  }, []);

  return (
    <MusicContext.Provider
      value={{
        audioRef,
        currentSong,
        isPlaying,
        isCached,
        likedSongs,
        history,
        clearHistory,
        queue,
        queueIndex,
        currentTime,
        duration,
        volume,
        isMuted,
        isLoop,
        isShuffle,
        isFullscreen3D,
        isLyricsOpen,
        showGuestLimitModal,
        setShowGuestLimitModal,
        guestPlaysCount,
        playSong,
        togglePlay,
        toggleLike,
        nextSong,
        prevSong,
        seek,
        changeVolume,
        toggleMute,
        toggleLoop,
        toggleShuffle,
        toggleFullscreen3D,
        toggleLyrics,
        setIsLyricsOpen,
        getAudioFrequencyData,
      }}
    >
      {children}
      {/* Hidden YouTube Audio Player Target for Ad-Free Playback */}
      <div
        id="aura-hidden-yt-container"
        style={{
          position: 'fixed',
          top: '-3000px',
          left: '-3000px',
          width: '1px',
          height: '1px',
          opacity: 0.001,
          pointerEvents: 'none',
          zIndex: -9999
        }}
      >
        <div id="aura-hidden-yt-iframe" />
      </div>
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
