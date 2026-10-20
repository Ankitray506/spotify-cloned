import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, Sparkles, UserPlus, LogIn, X, ShieldCheck, Flame } from 'lucide-react';
import GlassCard from './GlassCard';

export default function GuestLimitModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="relative w-full max-w-md animate-fade-in">
        <GlassCard glowColor="emerald" className="p-6 sm:p-8 border border-emerald-500/30 bg-slate-950/95 shadow-2xl">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Icon */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 p-[1px] shadow-2xl shadow-emerald-500/30 mb-4 animate-pulse">
              <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Preview Limit Reached (5/5)
            </span>

            <h3 className="text-xl font-bold text-white mb-2">
              Enjoyed Your 5 Free Songs?
            </h3>
            
            <p className="text-xs text-slate-300 max-w-sm mb-6 leading-relaxed">
              You've experienced the future of <strong className="text-emerald-400">AURA 3D</strong> spatial audio! To continue streaming <strong>unlimited songs with 0 ads</strong>, synchronized live lyrics, and offline playback, create your free account in seconds.
            </p>

            {/* Feature Perks */}
            <div className="w-full p-3 rounded-2xl bg-white/5 border border-white/10 mb-6 text-left space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Free & Ad-Free Unlimited Playback</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Real-Time Synchronized Karaoke Lyrics</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Headphones className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Save Offline History & Custom Playlists</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  navigate('/login');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Create Free Account (30 Seconds)</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  navigate('/login');
                }}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Already Have an Account? Sign In</span>
              </button>
            </div>

          </div>

        </GlassCard>
      </div>
    </div>
  );
}
