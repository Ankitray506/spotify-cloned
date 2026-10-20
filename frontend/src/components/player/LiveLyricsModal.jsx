import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  X,
  Mic2,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Heart,
  Disc3,
  Sparkles,
  RefreshCw,
  LocateFixed,
  AlertCircle
} from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import { parseLRC, findActiveLyricIndex } from '../../utils/lrcParser';
import { formatTime, getCoverImage } from '../../utils/helpers';
import axiosClient from '../../api/axiosClient';

// Cache fetched lyrics in memory during the session
const lyricsMemoryCache = new Map();

export default function LiveLyricsModal() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    likedSongs,
    isLyricsOpen,
    toggleLyrics,
    setIsLyricsOpen,
    togglePlay,
    nextSong,
    prevSong,
    seek,
    changeVolume,
    toggleMute,
    toggleLike
  } = useMusic();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lyricsData, setLyricsData] = useState({
    isSynced: false,
    lines: [],
    plain: '',
    unavailable: false
  });
  const [userIsScrolling, setUserIsScrolling] = useState(false);

  const activeLineRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const songId = currentSong?._id || currentSong?.id;
  const isLiked = likedSongs?.some(s => (s._id || s.id) === songId);
  const cover = currentSong?.cover || getCoverImage(currentSong?._id || currentSong?.title);
  const artistName = typeof currentSong?.artist === 'object'
    ? currentSong?.artist?.username || 'Unknown Artist'
    : currentSong?.artist || 'Featured Artist';

  // Fetch lyrics when current song changes or modal opens
  useEffect(() => {
    if (!currentSong || !isLyricsOpen) return;

    const cacheKey = `${currentSong.title}__${artistName}`;

    // 1. Check if song already has embedded lyrics from MongoDB
    if (currentSong.lyrics && currentSong.lyrics.trim().length > 0) {
      const parsed = parseLRC(currentSong.lyrics);
      setLyricsData({
        isSynced: parsed.isSynced,
        lines: parsed.lines,
        plain: parsed.plain,
        unavailable: false
      });
      setLoading(false);
      return;
    }

    // 2. Check in-memory cache
    if (lyricsMemoryCache.has(cacheKey)) {
      setLyricsData(lyricsMemoryCache.get(cacheKey));
      setLoading(false);
      return;
    }

    // 3. Fetch from backend API (/api/live/lyrics or /api/music/:id/lyrics)
    let isCancelled = false;
    setLoading(true);

    const fetchLyrics = async () => {
      try {
        let resData = null;

        // If it's a platform MongoDB track
        if (currentSong._id && !currentSong.isLive && String(currentSong._id).length === 24) {
          try {
            const res = await axiosClient.get(`/music/${currentSong._id}/lyrics`);
            if (res.data?.lyrics) {
              resData = {
                syncedLyrics: res.data.hasSyncedLyrics ? res.data.lyrics : null,
                plainLyrics: !res.data.hasSyncedLyrics ? res.data.lyrics : null
              };
            }
          } catch (e) {
            // fallback to live lyrics search
          }
        }

        // Fetch live synced lyrics via backend proxy
        if (!resData) {
          const res = await axiosClient.get('/live/lyrics', {
            params: {
              title: currentSong.title,
              artist: artistName,
              duration: Math.round(duration || currentSong.duration || 0)
            }
          });
          resData = res.data;
        }

        if (isCancelled) return;

        if (resData && (resData.syncedLyrics || resData.plainLyrics)) {
          const parsed = parseLRC(resData.syncedLyrics || resData.plainLyrics);
          const resolved = {
            isSynced: parsed.isSynced,
            lines: parsed.lines,
            plain: parsed.plain || resData.plainLyrics || '',
            unavailable: false
          };
          lyricsMemoryCache.set(cacheKey, resolved);
          setLyricsData(resolved);
        } else {
          const unavailableState = {
            isSynced: false,
            lines: [],
            plain: '',
            unavailable: true
          };
          lyricsMemoryCache.set(cacheKey, unavailableState);
          setLyricsData(unavailableState);
        }
      } catch (err) {
        if (!isCancelled) {
          setLyricsData({
            isSynced: false,
            lines: [],
            plain: '',
            unavailable: true
          });
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchLyrics();

    return () => {
      isCancelled = true;
    };
  }, [currentSong, isLyricsOpen, artistName, duration]);

  // Compute active lyric line without extra timers
  const activeLineIndex = useMemo(() => {
    if (!lyricsData.isSynced || lyricsData.lines.length === 0) return -1;
    return findActiveLyricIndex(lyricsData.lines, currentTime);
  }, [lyricsData.isSynced, lyricsData.lines, currentTime]);

  // Auto-scroll active lyric into center smoothly
  useEffect(() => {
    if (!lyricsData.isSynced || userIsScrolling) return;

    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  }, [activeLineIndex, lyricsData.isSynced, userIsScrolling]);

  // Handle manual scroll: temporarily disable auto-scroll
  const handleUserScroll = () => {
    setUserIsScrolling(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // Resume auto-scroll after 3.5 seconds of user inactivity
    scrollTimeoutRef.current = setTimeout(() => {
      setUserIsScrolling(false);
    }, 3500);
  };

  // Re-center auto-scroll immediately
  const handleReCenter = () => {
    setUserIsScrolling(false);
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  if (!isLyricsOpen || !currentSong) return null;

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050811]/95 backdrop-blur-3xl flex flex-col justify-between select-none animate-fade-in transition-all ${
        isFullscreen ? 'p-4 sm:p-8' : 'p-3 sm:p-6 md:p-8'
      }`}
    >
      {/* Ambient Neon Background Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* TOP HEADER */}
      <header className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-lg">
            <img src={cover} alt={currentSong.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono tracking-wider uppercase">
                <Mic2 className="w-3 h-3 text-cyan-400 animate-pulse" />
                {lyricsData.isSynced ? 'Live Synced Lyrics' : 'Plain Lyrics'}
              </span>
              {isPlaying && (
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Karaoke Mode
                </span>
              )}
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white truncate max-w-xs sm:max-w-md">
              {currentSong.title}
            </h2>
            <p className="text-xs text-slate-400 truncate">{artistName}</p>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2">
          {userIsScrolling && lyricsData.isSynced && (
            <button
              onClick={handleReCenter}
              title="Re-sync with song playback"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium transition-all hover:scale-105"
            >
              <LocateFixed className="w-3.5 h-3.5" />
              <span>Re-sync</span>
            </button>
          )}

          <button
            onClick={() => setIsFullscreen(prev => !prev)}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Lyrics"}
            className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsLyricsOpen(false)}
            title="Close Lyrics"
            className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 hover:bg-rose-950/60 border border-white/10 hover:border-rose-500/40 text-slate-300 hover:text-rose-300 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* CENTER: SCROLLING LYRICS VIEWPORT */}
      <main
        ref={scrollContainerRef}
        onScroll={handleUserScroll}
        className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden my-3 px-3 sm:px-6 md:px-10 scroll-smooth flex flex-col no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {loading ? (
          /* Loading State */
          <div className="my-auto py-12 flex flex-col items-center justify-center space-y-4">
            <Mic2 className="w-10 h-10 text-cyan-400 animate-bounce" />
            <p className="text-sm font-mono text-cyan-300 tracking-wider">Syncing lyrics with spatial audio...</p>
            <div className="w-48 sm:w-80 h-3 rounded-full bg-white/5 overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse rounded-full" />
            </div>
          </div>
        ) : lyricsData.unavailable ? (
          /* Empty / Unavailable State */
          <div className="my-auto py-12 flex flex-col items-center justify-center text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
              <Disc3 className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk']">
              Lyrics Not Available
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              We couldn't find timestamped lyrics for <strong className="text-white">"{currentSong.title}"</strong> yet. Sing along with the 3D vibes!
            </p>
            <button
              onClick={() => setIsLyricsOpen(false)}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono uppercase tracking-wider transition-all"
            >
              Back to Player
            </button>
          </div>
        ) : lyricsData.isSynced ? (
          /* Synced Lyrics List */
          <div className="py-20 sm:py-28 space-y-3 sm:space-y-4 max-w-2xl mx-auto w-full text-center">
            {lyricsData.lines.map((line, idx) => {
              const isActive = idx === activeLineIndex;
              const isPast = activeLineIndex !== -1 && idx < activeLineIndex;

              return (
                <div
                  key={`${line.time}_${idx}`}
                  ref={isActive ? activeLineRef : null}
                  onClick={() => seek(line.time)}
                  title={`Click to jump to ${formatTime(line.time)}`}
                  className={`group cursor-pointer select-text transition-all duration-300 ease-out px-4 py-2.5 rounded-2xl flex flex-col items-center justify-center max-w-full ${
                    isActive
                      ? 'bg-cyan-500/15 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                      : isPast
                      ? 'opacity-35 hover:opacity-75'
                      : 'opacity-55 hover:opacity-90'
                  }`}
                >
                  <p
                    className={`font-['Poppins','Noto_Sans_Devanagari',sans-serif] tracking-normal leading-relaxed sm:leading-loose break-words max-w-full transition-all duration-300 ${
                      isActive
                        ? 'text-lg sm:text-xl md:text-2xl font-bold text-cyan-200 drop-shadow-[0_2px_12px_rgba(34,211,238,0.35)]'
                        : 'text-sm sm:text-base md:text-lg font-medium text-slate-300 group-hover:text-cyan-200'
                    }`}
                  >
                    {line.text}
                  </p>

                  {/* Active line indicator timestamp */}
                  {isActive && (
                    <span className="mt-1 text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
                      ⏱ {formatTime(line.time)}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Plain Lyrics Fallback */
          <div className="py-12 max-w-2xl mx-auto w-full text-center px-4">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-xs font-mono text-slate-400">
              <span>Plain Lyrics (Unsynchronized)</span>
            </div>
            <div className="whitespace-pre-line text-base sm:text-lg text-slate-200 leading-loose font-['Poppins','Noto_Sans_Devanagari',sans-serif] font-medium break-words">
              {lyricsData.plain}
            </div>
          </div>
        )}
      </main>

      {/* BOTTOM FLOATING CONTROLS (Player Controls Preserved) */}
      <footer className="relative z-10 glass-card p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl shrink-0 max-w-4xl mx-auto w-full">
        {/* Scrubber timeline */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono text-slate-400 mb-2">
          <span className="w-10 text-right">{formatTime(currentTime)}</span>
          <div className="relative flex-1 group py-1 flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={isNaN(progressPercent) ? 0 : progressPercent}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                seek((val / 100) * duration);
              }}
              className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-400 group-hover:h-2 transition-all"
            />
          </div>
          <span className="w-10">{formatTime(duration)}</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-4">
          {/* Like Heart */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleLike(currentSong)}
              title={isLiked ? "Unlike" : "Like Song"}
              className={`p-2 rounded-full transition-colors ${
                isLiked ? 'text-rose-500 bg-rose-500/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Core Playback Buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={prevSong}
              title="Previous Track"
              className="p-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <SkipBack className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={togglePlay}
              title={isPlaying ? "Pause" : "Play"}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-400 text-black flex items-center justify-center hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/30 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={nextSong}
              title="Next Track"
              className="p-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <SkipForward className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="text-slate-400 hover:text-white transition-colors">
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              className="w-16 sm:w-24 h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-400 hidden sm:block"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
