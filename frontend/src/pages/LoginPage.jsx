import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AudioSphere3D from '../components/3d/AudioSphere3D';
import FloatingParticles3D from '../components/3d/FloatingParticles3D';
import GlassCard from '../components/common/GlassCard';
import { Headphones, Sparkles, User, Lock, Mail, Disc3, Shield, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [selectedRole, setSelectedRole] = useState('user'); // 'user' | 'artist'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // If already authenticated, redirect to home or studio
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(selectedRole === 'artist' ? '/artist/studio' : '/');
    }
  }, [isAuthenticated, navigate, selectedRole]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegisterMode) {
        if (!username || !email || !password) {
          setError("All fields are required");
          setLoading(false);
          return;
        }
        await register(username, email, password, selectedRole);
      } else {
        const identifier = username || email;
        if (!identifier || !password) {
          setError("Please enter your username/email and password");
          setLoading(false);
          return;
        }
        await login(identifier, password);
      }

      navigate(selectedRole === 'artist' ? '/artist/studio' : '/');
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.response?.data?.message || "Authentication failed. Please check credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Quick fill helper for testing
  const fillDemo = (role) => {
    setSelectedRole(role);
    setIsRegisterMode(false);
    if (role === 'artist') {
      setUsername('creator_artist');
      setPassword('password123');
    } else {
      setUsername('music_listener');
      setPassword('password123');
    }
  };

  const isArtist = selectedRole === 'artist';

  return (
    <div className="relative min-h-screen w-full bg-[#05070e] text-white flex items-center justify-center p-4 overflow-hidden select-none">
      
      {/* 3D Interactive Audio Sphere Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <AudioSphere3D theme={isArtist ? 'artist' : 'emerald'} interactive={true} />
      </div>

      {/* 3D Floating Particle Dust */}
      <FloatingParticles3D count={250} />

      {/* Atmospheric Radial Gradients */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700 ${
        isArtist ? 'bg-purple-600/15' : 'bg-emerald-500/15'
      }`} />

      {/* Main 3D Card Container */}
      <div className="relative z-10 w-full max-w-md my-8">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <Link to="/" className="flex items-center gap-3 mb-3 group">
            <div className={`w-12 h-12 rounded-2xl p-[1px] shadow-2xl transition-all duration-500 group-hover:scale-110 ${
              isArtist
                ? 'bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shadow-purple-500/30'
                : 'bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 shadow-emerald-500/30'
            }`}>
              <div className="w-full h-full rounded-2xl bg-[#080b12] flex items-center justify-center">
                <Disc3 className={`w-7 h-7 transition-transform duration-700 group-hover:rotate-180 ${
                  isArtist ? 'text-cyan-400' : 'text-emerald-400'
                }`} />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent font-['Space_Grotesk']">
                AURA<span className={isArtist ? 'text-cyan-400 text-xs ml-1' : 'text-emerald-400 text-xs ml-1'}>3D</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">Spatial Music Hub</span>
            </div>
          </Link>
          <p className="text-xs text-slate-300 max-w-xs">
            {isArtist ? "Step into the Artist Studio & publish your sound in 3D" : "Listen to high-fidelity tracks with interactive 3D spatial visuals"}
          </p>
        </div>

        {/* 3D Glass Tilt Card */}
        <GlassCard
          glowColor={isArtist ? "purple" : "emerald"}
          tiltDegree={8}
          className="p-6 sm:p-8 backdrop-blur-2xl border border-white/15 bg-slate-950/80 shadow-2xl"
        >
          
          {/* Role Switcher Pill */}
          <div className="mb-6 p-1 rounded-2xl bg-slate-900/90 border border-white/10 grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setSelectedRole('user')}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                !isArtist
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Listener</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole('artist')}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                isArtist
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artist Creator</span>
            </button>
          </div>

          {/* Mode Tabs (Sign In / Register) */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <h2 className="text-base font-bold text-white tracking-wide">
              {isRegisterMode ? "Create 3D Account" : "Welcome Back"}
            </h2>
            <button
              type="button"
              onClick={() => {
                setIsRegisterMode(!isRegisterMode);
                setError('');
              }}
              className={`text-xs font-medium underline-offset-4 hover:underline ${
                isArtist ? 'text-cyan-400' : 'text-emerald-400'
              }`}
            >
              {isRegisterMode ? "Already have account? Sign in" : "New user? Create account"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Username */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Username {isRegisterMode ? '' : 'or Email'}</span>
              </label>
              <input
                type="text"
                required
                placeholder={isRegisterMode ? "Choose a username" : "Enter username or email"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
              />
            </div>

            {/* Email (only in Register mode) */}
            {isRegisterMode && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Password</span>
              </label>
              <input
                type="password"
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-2 py-3 rounded-xl font-bold text-sm tracking-wider uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 ${
                isArtist
                  ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-purple-600/30'
                  : 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-black shadow-emerald-500/30'
              }`}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{isRegisterMode ? "Create 3D Account" : "Access Spatial Player"}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Helper Section */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <p className="text-[11px] text-slate-400 mb-2">Need a quick test account?</p>
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsRegisterMode(true);
                  setSelectedRole('user');
                  setUsername(`listener_${Math.floor(Math.random()*1000)}`);
                  setEmail(`user_${Math.floor(Math.random()*1000)}@music.com`);
                  setPassword('password123');
                }}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/15 border border-white/10 text-[10px] font-mono text-emerald-400 transition-colors"
              >
                + New Listener
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRegisterMode(true);
                  setSelectedRole('artist');
                  setUsername(`artist_${Math.floor(Math.random()*1000)}`);
                  setEmail(`artist_${Math.floor(Math.random()*1000)}@studio.com`);
                  setPassword('password123');
                }}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-500/15 border border-white/10 text-[10px] font-mono text-purple-400 transition-colors"
              >
                + New Artist
              </button>
            </div>
          </div>

        </GlassCard>

        {/* Back Link */}
        <div className="text-center mt-4">
          <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← Return to Music Discovery
          </Link>
        </div>

      </div>

    </div>
  );
}
