import React from 'react';
import { Play, Pause, Music2, Disc3, Heart } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import { getCoverImage } from '../../utils/helpers';
import GlassCard from '../common/GlassCard';

export default function SongCard3D({ song, playlist = [], index = 0 }) {
  const { currentSong, isPlaying, playSong, togglePlay, likedSongs, toggleLike } = useMusic();

  const isCurrent = (currentSong?._id || currentSong?.id) === (song?._id || song?.id);
  const isThisPlaying = isCurrent && isPlaying;
  const cover = song?.cover || getCoverImage(song?._id || song?.title, index);

  const songId = song?._id || song?.id;
  const isLiked = likedSongs?.some(s => (s._id || s.id) === songId);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (isCurrent) {
      togglePlay();
    } else {
      playSong(song, playlist);
    }
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    toggleLike(song);
  };

  const artistName = typeof song?.artist === 'object'
    ? song?.artist?.username || 'Unknown Artist'
    : song?.artist || 'Featured Artist';

  return (
    <GlassCard
      glowColor={isCurrent ? "emerald" : "cyan"}
      className="p-3.5 group cursor-pointer"
      onClick={handlePlayClick}
    >
      <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 mb-3 shadow-inner">
        {/* Album Artwork Image */}
        <img
          src={cover}
          alt={song?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Heart Like Button */}
        <button
          type="button"
          onClick={handleLikeClick}
          title={isLiked ? "Unlike" : "Like Song"}
          className={`absolute top-2 left-2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isLiked
              ? 'bg-rose-500 text-white scale-100 shadow-md shadow-rose-500/40'
              : 'bg-black/60 text-slate-300 opacity-0 group-hover:opacity-100 hover:text-rose-400 hover:scale-110'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* 3D Vinyl Slide Peek on Hover */}
        <div
          className={`absolute top-2 -right-8 w-20 h-20 rounded-full bg-black/90 border border-white/20 p-1 vinyl-grooves shadow-2xl transition-all duration-500 ${
            isThisPlaying
              ? 'right-2 rotate-180 animate-spin'
              : 'group-hover:right-2 group-hover:rotate-45'
          }`}
        >
          <div className="w-full h-full rounded-full border border-emerald-500/40 flex items-center justify-center bg-zinc-950">
            <Disc3 className={`w-5 h-5 text-emerald-400 ${isThisPlaying ? 'animate-spin' : ''}`} />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Play/Pause Button Overlay */}
        <button
          onClick={handlePlayClick}
          className={`absolute bottom-3 right-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
            isThisPlaying
              ? 'bg-emerald-500 text-black scale-100 shadow-emerald-500/40'
              : 'bg-emerald-500/90 text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-105 hover:bg-emerald-400'
          }`}
        >
          {isThisPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Active Audio Wave Indicator */}
        {isThisPlaying && (
          <div className="absolute bottom-3 left-3 flex items-end gap-0.5 h-4">
            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite]" style={{ height: '70%' }} />
            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]" style={{ height: '100%' }} />
            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.4s_ease-in-out_infinite]" style={{ height: '40%' }} />
            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite]" style={{ height: '85%' }} />
          </div>
        )}
      </div>

      {/* Song Metadata */}
      <div className="flex flex-col">
        <h4 className={`text-sm font-bold truncate transition-colors ${
          isCurrent ? 'text-emerald-400' : 'text-white group-hover:text-emerald-300'
        }`}>
          {song?.title || "Untitled Track"}
        </h4>
        <p className="text-xs text-slate-400 truncate mt-0.5 flex items-center gap-1">
          <Music2 className="w-3 h-3 text-slate-500" />
          <span>{artistName}</span>
        </p>
      </div>
    </GlassCard>
  );
}
