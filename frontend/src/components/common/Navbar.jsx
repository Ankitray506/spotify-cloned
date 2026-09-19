import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useMusic } from '../../context/MusicContext';
import { Disc3, Radio, Sparkles, LogOut, User, Music, Search, Upload, Shield } from 'lucide-react';

export default function Navbar({ onSearchChange, searchTerm = "" }) {
  const { user, isAuthenticated, isArtist, logout } = useAuth();
  const { isPlaying, toggleFullscreen3D, currentSong } = useMusic();
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

        {/* Search Bar (if provided) */}
        {onSearchChange && (
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tracks, artists, albums..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-input text-sm text-slate-200 placeholder-slate-400 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        )}

        {/* Navigation Links & Action Buttons */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/') ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Explore
          </Link>

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
              <Upload className="w-4 h-4 text-cyan-400 animate-bounce" />
              <span>Artist Studio</span>
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
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-xs uppercase shadow-md">
                  {user?.username?.charAt(0) || 'U'}
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-xs font-semibold text-white leading-tight">{user?.username}</span>
                  <span className="text-[10px] text-emerald-400 capitalize font-mono leading-tight">{user?.role}</span>
                </div>
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl glass-card border border-white/10 p-2 shadow-2xl z-50">
                  <div className="px-3 py-2 border-b border-white/10 mb-1">
                    <p className="text-xs text-slate-400">Signed in as</p>
                    <p className="text-sm font-bold text-white truncate">{user?.email}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {user?.role}
                    </span>
                  </div>

                  {isArtist && (
                    <Link
                      to="/artist/studio"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium text-purple-300 hover:bg-purple-500/10 rounded-xl transition-colors"
                    >
                      <Upload className="w-4 h-4 text-purple-400" />
                      Artist Dashboard
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
            >
              <User className="w-3.5 h-3.5" />
              <span>Login / 3D Sign In</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
