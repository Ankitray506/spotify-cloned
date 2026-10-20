import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosClient from '../api/axiosClient';
import AudioSphere3D from '../components/3d/AudioSphere3D';
import FloatingParticles3D from '../components/3d/FloatingParticles3D';
import GlassCard from '../components/common/GlassCard';
import { 
  Headphones, Sparkles, User, Lock, Mail, Disc3, ArrowRight, 
  AlertCircle, CheckCircle, Eye, EyeOff, ShieldCheck, Check, X, KeyRound 
} from 'lucide-react';

export default function LoginPage() {
  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [selectedRole, setSelectedRole] = useState('user'); // 'user' | 'artist'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Forgot password modal states
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotUsername, setForgotUsername] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotNewPass, setForgotNewPass] = useState('');
  const [showForgotNewPass, setShowForgotNewPass] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');

  // If already authenticated, redirect to home or studio
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(selectedRole === 'artist' ? '/artist/studio' : '/');
    }
  }, [isAuthenticated, navigate, selectedRole]);

  // Real-time password strength check
  const evaluatePasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: '', color: '', meetsCriteria: false, criteria: {} };

    const criteria = {
      length: pass.length >= 8,
      upper: /[A-Z]/.test(pass),
      lower: /[a-z]/.test(pass),
      number: /[0-9]/.test(pass),
      special: /[^A-Za-z0-9]/.test(pass),
      noRepeat: !(/^(.)\1+$/.test(pass)) && !/^(01234567|12345678|23456789|87654321)$/.test(pass)
    };

    let score = 0;
    if (criteria.length) score += 1;
    if (criteria.upper && criteria.lower) score += 1;
    if (criteria.number) score += 1;
    if (criteria.special) score += 1;
    if (criteria.noRepeat && pass.length >= 8) score += 1;

    let label = 'Very Weak';
    let color = 'bg-rose-500';

    if (score === 2) {
      label = 'Weak';
      color = 'bg-orange-500';
    } else if (score === 3) {
      label = 'Moderate';
      color = 'bg-amber-400';
    } else if (score === 4) {
      label = 'Good';
      color = 'bg-cyan-400';
    } else if (score >= 5) {
      label = 'Strong';
      color = 'bg-emerald-400';
    }

    const meetsCriteria = criteria.length && criteria.noRepeat && (score >= 3);
    return { score, label, color, meetsCriteria, criteria };
  };

  const passwordStrength = evaluatePasswordStrength(password);
  const forgotStrength = evaluatePasswordStrength(forgotNewPass);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (isRegisterMode) {
      if (!username || !email || !password) {
        setError("All fields are required");
        return;
      }

      if (!passwordStrength.criteria.length) {
        setError("Password must be at least 8 characters long");
        return;
      }

      if (!passwordStrength.criteria.noRepeat) {
        setError("Password cannot be repeating digits (e.g. 11111111) or simple sequence (12345678)");
        return;
      }

      if (!passwordStrength.meetsCriteria) {
        setError("Please use a stronger password with a mix of uppercase, lowercase, numbers, and symbols");
        return;
      }
    } else {
      const identifier = username || email;
      if (!identifier || !password) {
        setError("Please enter your username/email and password");
        return;
      }
    }

    setLoading(true);

    try {
      if (isRegisterMode) {
        const res = await register(username, email, password, selectedRole);
        if (res?.requiresLogin) {
          setIsRegisterMode(false);
          setPassword('');
          setSuccessMessage(`Account created successfully! Welcome ${res.user?.username}. Please log in with your credentials to enter AURA 3D.`);
          setLoading(false);
          return;
        }
      } else {
        const identifier = username || email;
        await login(identifier, password);
        navigate(selectedRole === 'artist' ? '/artist/studio' : '/');
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.response?.data?.message || "Authentication failed. Please check credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setForgotError('');
    setForgotSuccess('');

    if (!forgotUsername || !forgotEmail || !forgotNewPass) {
      setForgotError("Please fill in all fields");
      return;
    }

    if (!forgotStrength.criteria.length) {
      setForgotError("New password must be at least 8 characters");
      return;
    }

    if (!forgotStrength.criteria.noRepeat) {
      setForgotError("Avoid repeated numbers like 111111 or 12345678");
      return;
    }

    setForgotLoading(true);
    try {
      const res = await axiosClient.post('/auth/forgot-password', {
        username: forgotUsername.trim(),
        email: forgotEmail.trim(),
        newPassword: forgotNewPass
      });

      setForgotSuccess(res.data.message || "Password updated successfully!");
      setTimeout(() => {
        setShowForgotModal(false);
        setUsername(forgotUsername);
        setPassword('');
        setSuccessMessage("Password reset successful! Please sign in with your new password.");
      }, 2000);
    } catch (err) {
      setForgotError(err.response?.data?.message || "Password reset failed. Please check your username and email.");
    } finally {
      setForgotLoading(false);
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
                setPassword('');
              }}
              className={`text-xs font-medium underline-offset-4 hover:underline ${
                isArtist ? 'text-cyan-400' : 'text-emerald-400'
              }`}
            >
              {isRegisterMode ? "Already have account? Sign in" : "New user? Create account"}
            </button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center gap-2.5 text-emerald-300 text-xs">
              <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}

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
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
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
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>
            )}

            {/* Password with Eye Show/Hide Toggle */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Password</span>
                </label>
                {isRegisterMode && password && (
                  <span className="text-[10px] font-mono tracking-wide text-slate-400">
                    Strength: <span className={
                      passwordStrength.score >= 4 ? 'text-emerald-400 font-bold' :
                      passwordStrength.score >= 3 ? 'text-amber-400' : 'text-rose-400'
                    }>{passwordStrength.label}</span>
                  </span>
                )}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder={isRegisterMode ? "Create strong password (min 8 chars)" : "Enter password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Forgot Password Link in Sign In mode */}
              {!isRegisterMode && (
                <div className="flex justify-end pt-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setForgotUsername(username);
                      setShowForgotModal(true);
                    }}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline transition-colors flex items-center gap-1"
                  >
                    <KeyRound className="w-3 h-3" />
                    <span>Forgot Password?</span>
                  </button>
                </div>
              )}

              {/* Password Strength Meter in Register Mode */}
              {isRegisterMode && password && (
                <div className="mt-2.5 space-y-2 animate-fade-in">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex gap-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <div
                        key={lvl}
                        className={`h-full flex-1 transition-all duration-300 ${
                          passwordStrength.score >= lvl ? passwordStrength.color : 'bg-slate-800'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-[11px] space-y-1">
                    <p className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Strong Password Suggestions:</span>
                    </p>
                    <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-400 pt-1">
                      <span className={`flex items-center gap-1 ${passwordStrength.criteria.length ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {passwordStrength.criteria.length ? <Check className="w-3 h-3" /> : <X className="w-3 h-3 text-slate-500" />}
                        8+ characters
                      </span>
                      <span className={`flex items-center gap-1 ${passwordStrength.criteria.upper && passwordStrength.criteria.lower ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {passwordStrength.criteria.upper && passwordStrength.criteria.lower ? <Check className="w-3 h-3" /> : <X className="w-3 h-3 text-slate-500" />}
                        Upper & lower case
                      </span>
                      <span className={`flex items-center gap-1 ${passwordStrength.criteria.number ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {passwordStrength.criteria.number ? <Check className="w-3 h-3" /> : <X className="w-3 h-3 text-slate-500" />}
                        Includes number (0-9)
                      </span>
                      <span className={`flex items-center gap-1 ${passwordStrength.criteria.special ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {passwordStrength.criteria.special ? <Check className="w-3 h-3" /> : <X className="w-3 h-3 text-slate-500" />}
                        Special symbol (!@#$)
                      </span>
                    </div>
                  </div>
                </div>
              )}
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

        </GlassCard>

        {/* Back Link */}
        <div className="text-center mt-4">
          <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← Return to Music Discovery
          </Link>
        </div>

      </div>

      {/* Forgot Password Reset Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md animate-fade-in">
            <GlassCard glowColor="cyan" className="p-6 sm:p-8 border border-cyan-500/30 bg-slate-950/95 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <KeyRound className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Reset Account Password</h3>
                </div>
                <button
                  onClick={() => setShowForgotModal(false)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {forgotSuccess ? (
                <div className="py-6 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-2 animate-bounce" />
                  <h4 className="text-sm font-bold text-white mb-1">Password Updated!</h4>
                  <p className="text-xs text-slate-300">{forgotSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-3.5">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enter your account username and registered email to verify ownership and set a new password.
                  </p>

                  {forgotError && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{forgotError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Account Username</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. your_username"
                      value={forgotUsername}
                      onChange={(e) => setForgotUsername(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Registered Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. you@example.com"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">New Strong Password</label>
                    <div className="relative">
                      <input
                        type={showForgotNewPass ? "text" : "password"}
                        required
                        placeholder="Min 8 characters (mixed case + symbols)"
                        value={forgotNewPass}
                        onChange={(e) => setForgotNewPass(e.target.value)}
                        className="w-full pl-3 pr-10 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowForgotNewPass(!showForgotNewPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                      >
                        {showForgotNewPass ? <EyeOff className="w-3.5 h-3.5 text-cyan-400" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                  >
                    {forgotLoading ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <KeyRound className="w-3.5 h-3.5" />
                        <span>Verify & Set New Password</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-slate-400">
                      Need administrator help? Email developer at <strong className="text-cyan-400">ankitrayh6475@gmail.com</strong>
                    </p>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      )}

    </div>
  );
}
