import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, Disc3, Maximize2 } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import { formatTime, getCoverImage } from '../../utils/helpers';

export default function BottomPlayerBar() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isLoop,
    isShuffle,
    togglePlay,
    nextSong,
    prevSong,
    seek,
    changeVolume,
    toggleMute,
    toggleLoop,
    toggleShuffle,
    toggleFullscreen3D
  } = useMusic();

  if (!currentSong) return null;

  const cover = getCoverImage(currentSong._id || currentSong.title);
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  const handleSeekChange = (e) => {
    const val = parseFloat(e.target.value);
    const targetTime = (val / 100) * duration;
    seek(targetTime);
  };

  const artistName = typeof currentSong?.artist === 'object'
    ? currentSong?.artist?.username || 'Unknown Artist'
    : 'Featured Artist';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-2 sm:px-4 pb-2 sm:pb-3 pointer-events-none">
      <div className="max-w-7xl mx-auto rounded-2xl glass-card backdrop-blur-2xl border border-white/15 bg-slate-950/85 p-3 sm:p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] pointer-events-auto">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          
          {/* Left: Track Details with Spinning Vinyl */}
          <div className="flex items-center gap-3 min-w-0 max-w-[200px] sm:max-w-[280px]">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 group cursor-pointer" onClick={toggleFullscreen3D}>
              <img
                src={cover}
                alt={currentSong.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Mini spinning vinyl disc indicator */}
            <div className="hidden md:block shrink-0 -ml-5 z-[-1]">
              <div className={`w-10 h-10 rounded-full bg-zinc-900 border border-white/20 vinyl-grooves flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-white truncate hover:underline cursor-pointer" onClick={toggleFullscreen3D}>
                {currentSong.title}
              </span>
              <span className="text-xs text-slate-400 truncate">
                {artistName}
              </span>
            </div>
          </div>

          {/* Center: Controls & Timeline Scrubber */}
          <div className="flex-1 max-w-2xl flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-3 sm:gap-6">
              <button
                onClick={toggleShuffle}
                title="Shuffle"
                className={`p-1.5 rounded-full transition-colors ${
                  isShuffle ? 'text-emerald-400 bg-emerald-500/15' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shuffle className="w-4 h-4" />
              </button>

              <button
                onClick={prevSong}
                title="Previous"
                className="p-1 text-slate-300 hover:text-white transition-colors"
              >
                <SkipBack className="w-5 h-5 fill-current" />
              </button>

              <button
                onClick={togglePlay}
                title={isPlaying ? "Pause" : "Play"}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-black flex items-center justify-center hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={nextSong}
                title="Next"
                className="p-1 text-slate-300 hover:text-white transition-colors"
              >
                <SkipForward className="w-5 h-5 fill-current" />
              </button>

              <button
                onClick={toggleLoop}
                title="Repeat"
                className={`p-1.5 rounded-full transition-colors ${
                  isLoop ? 'text-emerald-400 bg-emerald-500/15' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Repeat className="w-4 h-4" />
              </button>
            </div>

            {/* Scrubber Timeline */}
            <div className="w-full flex items-center gap-2 text-xs font-mono text-slate-400 select-none">
              <span className="w-10 text-right">{formatTime(currentTime)}</span>
              <div className="relative flex-1 group py-1 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={isNaN(progressPercent) ? 0 : progressPercent}
                  onChange={handleSeekChange}
                  className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400 group-hover:h-2 transition-all"
                />
              </div>
              <span className="w-10">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right: Volume & 3D Mode Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Volume Control */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-400" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="w-20 h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* 3D Turntable Launcher Button */}
            <button
              onClick={toggleFullscreen3D}
              title="Launch Fullscreen 3D Stage"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase transition-all hover:scale-105 shadow-md shadow-emerald-500/20"
            >
              <Disc3 className={`w-4 h-4 text-emerald-400 ${isPlaying ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">3D Stage</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
