import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useMusic } from '../../context/MusicContext';
import SettingsMenu from './SettingsMenu';
import { Disc3, Radio, Sparkles, LogOut, User, Music, Search, Upload, Heart, ShieldCheck } from 'lucide-react';
import SearchWithSuggestions from './SearchWithSuggestions';

export default function Navbar({ onSearchChange, searchTerm = "", onOpenProfile, onOpenSupport }) {
  const { user, isAuthenticated, isArtist, isAdmin, logout } = useAuth();
  const { isPlaying, toggleFullscreen3D, currentSong, likedSongs } = useMusic();
  const navigate = useNavigate();
  const location = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full glass-nav backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-xl bg-[#080b12] flex items-center justify-center">
              <Disc3 className="w-6 h-6 text-emerald-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
            {/* Live Playing Glow */}
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent font-['Space_Grotesk']">
              AURA<span className="text-emerald-400 text-xs ml-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">3D</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">Spatial Music</span>
          </div>
        </Link>

        {/* Live Search Bar with Instant Autocomplete */}
        {onSearchChange && (
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <SearchWithSuggestions
              searchTerm={searchTerm}
              onSearchChange={onSearchChange}
              placeholder="Search songs, artists, Maithili geet..."
              className="w-full"
            />
          </div>
        )}

        {/* Navigation Links & Action Buttons */}
        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/') ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Explore
          </Link>

          {/* Admin Master Console Link (Strictly visible only to Admin) */}
          {isAdmin && (
            <Link
              to="/admin"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                isActive('/admin')
                  ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400'
                  : 'text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          )}

          {/* Artist Studio Portal Link */}
          {isArtist && (
            <Link
              to="/artist/studio"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                isActive('/artist/studio')
                  ? 'bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-cyan-300 border border-cyan-500/40'
                  : 'text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:text-white'
              }`}
            >
              <Upload className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Artist Studio</span>
            </Link>
          )}

          {/* 3D Turntable Launcher Button */}
          {currentSong && (
            <button
              onClick={toggleFullscreen3D}
              title="Launch 3D Turntable Experience"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono uppercase tracking-wider transition-all hover:scale-105"
            >
              <Disc3 className={`w-4 h-4 text-emerald-400 ${isPlaying ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">3D Stage</span>
            </button>
          )}

          {/* User Auth Section */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1.5 pr-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-all"
              >
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-emerald-400">
                  {user?.avatar ? (
                    <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-xs uppercase">
                      {user?.username?.charAt(0) || 'U'}
                    </div>
                  )}
                </div>
                <span className="hidden md:inline text-xs font-semibold text-white leading-tight truncate max-w-[100px]">
                  {user?.username}
                </span>
              </button>

              {/* Three Dot (⋮) Settings Menu */}
              <SettingsMenu
                onOpenProfile={onOpenProfile || (() => {})}
                onOpenSupport={onOpenSupport || (() => {})}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </Link>
              <SettingsMenu
                onOpenProfile={onOpenProfile || (() => {})}
                onOpenSupport={onOpenSupport || (() => {})}
              />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
