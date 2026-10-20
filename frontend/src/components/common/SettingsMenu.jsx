import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, User, Mail, HelpCircle, HardDrive, LogOut, Keyboard, Sparkles, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { clearAudioCache } from '../../services/audioCache';

export default function SettingsMenu({ onOpenProfile, onOpenSupport }) {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showHotkeys, setShowHotkeys] = useState(false);
  const [cacheCleared, setCacheCleared] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClearCache = async () => {
    await clearAudioCache();
    setCacheCleared(true);
    setTimeout(() => setCacheCleared(false), 2000);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Three Dot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Settings & More"
        className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all hover:scale-105"
      >
        <MoreVertical className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl glass-card border border-white/15 p-2 shadow-2xl z-50 animate-fade-in bg-slate-950/95">
          
          {/* User Header */}
          {isAuthenticated && (
            <div className="p-2.5 mb-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-emerald-500/40">
                {user?.avatar ? (
                  <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    {user?.username?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white truncate">{user?.username}</p>
                <span className="inline-block px-1.5 py-0.2 rounded text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {user?.role}
                </span>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="space-y-1 text-xs">
            
            {isAuthenticated && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenProfile();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-emerald-500/10 transition-colors text-left"
              >
                <User className="w-4 h-4 text-emerald-400" />
                <span>Customize Profile & Avatar</span>
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenSupport();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-cyan-500/10 transition-colors text-left"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Developer (Bug / Song Request)</span>
            </button>

            <button
              onClick={() => {
                setShowHotkeys(!showHotkeys);
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left"
            >
              <Keyboard className="w-4 h-4 text-purple-400" />
              <span>Keyboard Shortcuts</span>
            </button>

            {/* Hotkeys preview drawer */}
            {showHotkeys && (
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-[11px] font-mono text-slate-400 space-y-1">
                <div className="flex justify-between"><span>Spacebar:</span><strong className="text-white">Play / Pause</strong></div>
                <div className="flex justify-between"><span>Left / Right:</span><strong className="text-white">Seek 5s</strong></div>
                <div className="flex justify-between"><span>M:</span><strong className="text-white">Mute / Unmute</strong></div>
                <div className="flex justify-between"><span>3D Key:</span><strong className="text-white">Toggle Stage</strong></div>
              </div>
            )}

            <button
              onClick={handleClearCache}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <HardDrive className="w-4 h-4 text-slate-500" />
                <span>Clear Audio Cache</span>
              </div>
              {cacheCleared && <Check className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            {isAuthenticated && (
              <div className="pt-1 border-t border-white/10 mt-1">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-colors text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}

          </div>

        </div>
      )}
    </div>
  );
}
