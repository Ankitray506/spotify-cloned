import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import axiosClient from '../api/axiosClient';
import { getCachedAudioUrl, isAudioCached } from '../services/audioCache';
import { recordSongInteraction } from '../services/mlRecommender';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
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

  // Initialize Web Audio API on first user gesture
  const initAudioAnalyser = useCallback(() => {
    if (audioContextRef.current) return;
    try {
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

  // Audio element event listeners
  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      if (isLoop) {
        audio.currentTime = 0;
        audio.play().catch(console.error);
      } else {
        nextSong();
      }
    };

    const handleError = (e) => {
      console.error("Audio playback error occurred:", e);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [isLoop]);

  // Sync volume state to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Play a specific song
  const playSong = useCallback((song, playlist = null) => {
    if (!song) return;

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
      // Authenticated user: track play in backend database
      axiosClient.post('/auth/record-listen').catch(() => {});
    }

    initAudioAnalyser();
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (playlist && playlist.length > 0) {
      setQueue(playlist);
      const idx = playlist.findIndex((s) => (s._id || s.id) === (song._id || song.id));
      setQueueIndex(idx !== -1 ? idx : 0);
    } else if (!queue.some(s => (s._id || s.id) === (song._id || song.id))) {
      setQueue([song, ...queue]);
      setQueueIndex(0);
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
    const audio = audioRef.current;

    // Check if song is cached and load cached URL if available
    isAudioCached(song.uri).then(cached => setIsCached(cached)).catch(() => {});
    getCachedAudioUrl(song.uri).then((playableUrl) => {
      if (audio.src !== playableUrl) {
        audio.src = playableUrl;
        audio.load();
      }

      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio playback initiated with warning:", err.message);
      });
    }).catch(() => {
      audio.src = song.uri;
      audio.load();
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    });
  }, [initAudioAnalyser, queue, currentSong, currentTime, duration]);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (!currentSong) return;
    initAudioAnalyser();
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
  }, [currentSong, isPlaying, initAudioAnalyser]);

  // Next song
  const nextSong = useCallback(() => {
    if (queue.length === 0) return;
    let nextIdx = queueIndex + 1;
    if (isShuffle) {
      nextIdx = Math.floor(Math.random() * queue.length);
    } else if (nextIdx >= queue.length) {
      nextIdx = 0;
    }
    setQueueIndex(nextIdx);
    const nextTrack = queue[nextIdx];
    if (nextTrack) {
      playSong(nextTrack, queue);
    }
  }, [queue, queueIndex, isShuffle, playSong]);

  // Previous song
  const prevSong = useCallback(() => {
    if (queue.length === 0) return;
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    let prevIdx = queueIndex - 1;
    if (prevIdx < 0) {
      prevIdx = queue.length - 1;
    }
    setQueueIndex(prevIdx);
    const prevTrack = queue[prevIdx];
    if (prevTrack) {
      playSong(prevTrack, queue);
    }
  }, [queue, queueIndex, playSong]);

  // Seek to position in seconds
  const seek = useCallback((timeInSeconds) => {
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
  }, [isMuted]);

  // Toggle mute
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
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
