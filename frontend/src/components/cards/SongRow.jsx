import React from 'react';
import { Play, Pause, Heart, Music2, Zap } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import { formatTime, getCoverImage } from '../../utils/helpers';

export default function SongRow({ song, playlist = [], index = 0 }) {
  const { currentSong, isPlaying, playSong, togglePlay, likedSongs, toggleLike } = useMusic();

  const isCurrent = (currentSong?._id || currentSong?.id) === (song?._id || song?.id);
  const isThisPlaying = isCurrent && isPlaying;
  const cover = song?.cover || getCoverImage(song?._id || song?.title, index);

  const songId = song?._id || song?.id;
  const isLiked = likedSongs?.some(s => (s._id || s.id) === songId);

  const artistName = typeof song?.artist === 'object'
    ? song?.artist?.username || 'Unknown Artist'
    : song?.artist || 'Featured Artist';

  const handleRowClick = (e) => {
    e.preventDefault();
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

  return (
    <div
      onClick={handleRowClick}
      className={`group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all border ${
        isCurrent
          ? 'bg-emerald-500/15 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
          : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/5 hover:border-white/10 active:scale-[0.99]'
      }`}
    >
      {/* Left: Index / Wave + Artwork Thumbnail */}
      <div className="flex items-center gap-3 min-w-0">
        <span className="w-5 text-center text-xs font-mono text-slate-500 shrink-0">
          {isThisPlaying ? (
            <div className="flex items-end justify-center gap-0.5 h-3">
              <span className="w-0.5 bg-emerald-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]" style={{ height: '100%' }} />
              <span className="w-0.5 bg-emerald-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '60%' }} />
              <span className="w-0.5 bg-emerald-400 rounded-full animate-[pulse_0.4s_ease-in-out_infinite]" style={{ height: '80%' }} />
            </div>
          ) : (
            <span className={isCurrent ? "text-emerald-400 font-bold" : ""}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </span>

        {/* Small Poster Thumbnail with Play overlay */}
        <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-white/10 shadow-sm">
          <img
            src={cover}
            alt={song?.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity ${
            isThisPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'
          }`}>
            {isThisPlaying ? (
              <Pause className="w-4 h-4 text-emerald-400 fill-current" />
            ) : (
              <Play className="w-4 h-4 text-white fill-current ml-0.5" />
            )}
          </div>
        </div>

        {/* Song Info (Title & Artist) */}
        <div className="flex flex-col min-w-0 pr-1">
          <h4 className={`text-sm font-semibold truncate transition-colors ${
            isCurrent ? 'text-emerald-400 font-bold' : 'text-slate-100 group-hover:text-emerald-300'
          }`}>
            {song?.title || "Untitled Track"}
          </h4>
          <p className="text-xs text-slate-400 truncate flex items-center gap-1.5 mt-0.5">
            <span>{artistName}</span>
            {song?.year && <span className="text-[10px] text-slate-500">• {song.year}</span>}
          </p>
        </div>
      </div>

      {/* Right: Duration & Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={handleLikeClick}
          title={isLiked ? "Unlike" : "Like Song"}
          className={`p-1.5 rounded-full transition-colors ${
            isLiked ? 'text-rose-500' : 'text-slate-500 hover:text-white group-hover:text-slate-300'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {song?.duration > 0 && (
          <span className="text-xs font-mono text-slate-400 w-10 text-right">
            {formatTime(song.duration)}
          </span>
        )}
      </div>
    </div>
  );
}
