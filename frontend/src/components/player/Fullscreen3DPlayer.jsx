import React, { useState } from 'react';
import { X, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Disc3, ListMusic, Sparkles, Mic2 } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import { formatTime, getCoverImage } from '../../utils/helpers';
import VinylTurntable3D from '../3d/VinylTurntable3D';
import AudioVisualizer3D from '../3d/AudioVisualizer3D';

export default function Fullscreen3DPlayer() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    queue,
    queueIndex,
    isLyricsOpen,
    togglePlay,
    nextSong,
    prevSong,
    seek,
    changeVolume,
    toggleMute,
    playSong,
    isFullscreen3D,
    toggleFullscreen3D,
    toggleLyrics
  } = useMusic();

  const [showQueue, setShowQueue] = useState(false);

  if (!isFullscreen3D || !currentSong) return null;

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
    <div className="fixed inset-0 z-50 bg-[#05070e]/95 backdrop-blur-3xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Disc3 className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">3D TURNTABLE STAGE</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                Hi-Fi WebGL
              </span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-wide">{currentSong.title}</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLyrics}
            className={`p-2.5 rounded-xl border border-white/10 transition-colors ${
              isLyricsOpen ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' : 'bg-slate-900/60 text-slate-300 hover:text-white'
            }`}
            title="Toggle Live Synced Lyrics (L)"
          >
            <Mic2 className="w-5 h-5" />
          </button>

          <button
            onClick={() => setShowQueue(!showQueue)}
            className={`p-2.5 rounded-xl border border-white/10 transition-colors ${
              showQueue ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900/60 text-slate-300 hover:text-white'
            }`}
            title="Toggle Queue"
          >
            <ListMusic className="w-5 h-5" />
          </button>

          <button
            onClick={toggleFullscreen3D}
            className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title="Exit 3D Stage"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Stage */}
      <div className="relative flex-1 flex items-center justify-center my-2 overflow-hidden">
        <div className="w-full max-w-4xl h-[420px] sm:h-[500px]">
          <VinylTurntable3D
            coverUrl={cover}
            songTitle={currentSong.title}
            artistName={artistName}
          />
        </div>

        {/* Queue Side Drawer */}
        {showQueue && (
          <div className="absolute right-0 top-0 bottom-0 w-80 rounded-2xl glass-card border border-white/10 p-4 shadow-2xl flex flex-col z-20 animate-fade-in">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
              <span className="text-sm font-bold text-white">Up Next</span>
              <span className="text-xs font-mono text-emerald-400">{queue.length} Tracks</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {queue.map((track, i) => {
                const isTrackActive = i === queueIndex;
                return (
                  <div
                    key={track._id || track.id || i}
                    onClick={() => playSong(track, queue)}
                    className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all ${
                      isTrackActive
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                        : 'hover:bg-white/5 text-slate-300'
                    }`}
                  >
                    <span className="w-4 text-xs font-mono text-slate-500">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{track.title}</p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {typeof track.artist === 'object' ? track.artist?.username : 'Artist'}
                      </p>
                    </div>
                    {isTrackActive && isPlaying && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 3D Equalizer Visualizer Bars Below Turntable */}
      <div className="relative z-10 w-full max-w-2xl mx-auto h-16 sm:h-20 mb-2">
        <AudioVisualizer3D barCount={48} />
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="relative z-10 max-w-2xl mx-auto w-full glass-card p-4 rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex flex-col gap-3">
          
          {/* Scrubber */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={isNaN(progressPercent) ? 0 : progressPercent}
              onChange={handleSeekChange}
              className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400"
            />
            <span>{formatTime(duration)}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            
            {/* Volume */}
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
                className="w-16 sm:w-24 h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Main Playback Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSong}
                className="p-2 text-slate-300 hover:text-white transition-colors"
                title="Previous Track"
              >
                <SkipBack className="w-5 h-5 fill-current" />
              </button>

              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/40 transition-transform"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
              </button>

              <button
                onClick={nextSong}
                className="p-2 text-slate-300 hover:text-white transition-colors"
                title="Next Track"
              >
                <SkipForward className="w-5 h-5 fill-current" />
              </button>
            </div>

            {/* Song details */}
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-white truncate max-w-[140px]">{currentSong.title}</p>
              <p className="text-[10px] text-slate-400 truncate max-w-[140px]">{artistName}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
