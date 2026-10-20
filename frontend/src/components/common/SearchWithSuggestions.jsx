import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Play, Music, Sparkles } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import axiosClient from '../../api/axiosClient';

export default function SearchWithSuggestions({
  searchTerm,
  onSearchChange,
  placeholder = "Search songs, artists, Maithili geet...",
  className = ""
}) {
  const { playSong } = useMusic();
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef(null);

  // Debounced fetch top 5 suggestions from /api/live/suggest
  useEffect(() => {
    const trimmed = (searchTerm || '').trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    let isCancelled = false;
    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const res = await axiosClient.get(`/live/suggest?q=${encodeURIComponent(trimmed)}`);
        if (!isCancelled && res.data?.suggestions) {
          setSuggestions(res.data.suggestions.slice(0, 5));
          setIsOpen(res.data.suggestions.length > 0);
          setSelectedIndex(-1);
        }
      } catch (err) {
        if (!isCancelled) setSuggestions([]);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }, 220); // 220ms snappy debounce

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [searchTerm]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        e.preventDefault();
        handleSelectSong(suggestions[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelectSong = (song) => {
    playSong(song);
    onSearchChange(song.title);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {/* Search Input Box */}
      <div className="relative w-full">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-9 py-2 rounded-xl glass-input text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/80 transition-all font-sans"
        />
        {searchTerm && (
          <button
            onClick={() => {
              onSearchChange('');
              setSuggestions([]);
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-white/10"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Floating Instant Matches Dropdown (YouTube/Spotify style) */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl glass-card backdrop-blur-2xl bg-[#070b14]/95 border border-cyan-500/30 shadow-[0_15px_50px_rgba(0,0,0,0.8)] p-2 z-50 animate-fade-in divide-y divide-white/5">
          <div className="px-3 py-1.5 flex items-center justify-between text-[11px] font-mono text-cyan-400">
            <span className="flex items-center gap-1.5 font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              Instant 5 Matches
            </span>
            <span className="text-[10px] text-slate-500">Click to Play Directly</span>
          </div>

          <div className="space-y-1 pt-1">
            {suggestions.map((song, idx) => {
              const isFocused = idx === selectedIndex;
              const artistName = typeof song.artist === 'object'
                ? song.artist?.username || 'Artist'
                : song.artist || 'Artist';

              return (
                <div
                  key={song._id || song.id || idx}
                  onClick={() => handleSelectSong(song)}
                  className={`flex items-center justify-between gap-3 p-2 rounded-xl cursor-pointer transition-all ${
                    isFocused
                      ? 'bg-cyan-500/20 border border-cyan-500/40'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={song.cover || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100'}
                      alt={song.title}
                      className="w-9 h-9 rounded-lg object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white truncate max-w-[220px] sm:max-w-[320px]">
                        {song.title}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[220px]">
                        {artistName} {song.album ? `• ${song.album}` : ''}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectSong(song);
                    }}
                    title="Play Song Now"
                    className="w-7 h-7 rounded-full bg-cyan-500/20 hover:bg-cyan-400 text-cyan-300 hover:text-black flex items-center justify-center shrink-0 transition-transform hover:scale-110 shadow"
                  >
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
