import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const audioRef = useRef(new Audio());
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isFullscreen3D, setIsFullscreen3D] = useState(false);

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

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [isLoop, queue, queueIndex]);

  // Play a song
  const playSong = useCallback((song, playlist = null) => {
    if (!song) return;

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

    setCurrentSong(song);
    const audio = audioRef.current;
    if (audio.src !== song.uri) {
      audio.src = song.uri;
      audio.load();
    }

    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.warn("Audio playback initiated with warning:", err.message);
    });
  }, [initAudioAnalyser, queue]);

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

  // Seek time
  const seek = useCallback((time) => {
    if (audioRef.current && !isNaN(time)) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  // Change volume
  const changeVolume = useCallback((newVolume) => {
    const val = Math.max(0, Math.min(1, newVolume));
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val > 0) setIsMuted(false);
  }, []);

  // Toggle mute
  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      audioRef.current.muted = nextMuted;
    }
  }, [isMuted]);

  const toggleLoop = useCallback(() => setIsLoop(prev => !prev), []);
  const toggleShuffle = useCallback(() => setIsShuffle(prev => !prev), []);
  const toggleFullscreen3D = useCallback(() => setIsFullscreen3D(prev => !prev), []);

  return (
    <MusicContext.Provider
      value={{
        audioRef,
        currentSong,
        isPlaying,
        queue,
        queueIndex,
        currentTime,
        duration,
        volume,
        isMuted,
        isLoop,
        isShuffle,
        isFullscreen3D,
        playSong,
        togglePlay,
        nextSong,
        prevSong,
        seek,
        changeVolume,
        toggleMute,
        toggleLoop,
        toggleShuffle,
        toggleFullscreen3D,
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
