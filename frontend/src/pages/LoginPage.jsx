import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosClient from '../api/axiosClient';
import AudioSphere3D from '../components/3d/AudioSphere3D';
import FloatingParticles3D from '../components/3d/FloatingParticles3D';
import GlassCard from '../components/common/GlassCard';
import { 
  Headphones, Sparkles, User, Lock, Mail, Disc3, ArrowRight, 
  AlertCircle, CheckCircle, Eye, EyeOff, ShieldCheck, Check, X, KeyRound, Phone, Clock
} from 'lucide-react';

export default function LoginPage() {
  const { login, register, verifyOtp, resendOtp, forgotPasswordRequest, resetPasswordWithOtp, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [selectedRole, setSelectedRole] = useState('user'); // 'user' | 'artist'

  // Register / Login form state
  const [loginIdentifier, setLoginIdentifier] = useState(''); // Email, Phone, or Username
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Email OTP Verification Screen State (After Register)
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otpEmail, setOtpEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);

  // Forgot Password Modal State
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotStep, setForgotStep] = useState(1); // 1 = Enter Email, 2 = Enter OTP & New Password
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotOtp, setForgotOtp] = useState('');
  const [forgotNewPass, setForgotNewPass] = useState('');
  const [showForgotNewPass, setShowForgotNewPass] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');

  // If already authenticated, redirect
  useEffect(() => {
    if (isAuthenticated) {
      navigate(selectedRole === 'artist' ? '/artist/studio' : '/');
    }
  }, [isAuthenticated, navigate, selectedRole]);

  // Resend OTP Cooldown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const interval = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendCooldown]);

  // Password strength checker
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

  // ================= HANDLE LOGIN & REGISTER =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (isRegisterMode) {
      if (!registerEmail || !password) {
        setError("Email and password are required");
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

      setLoading(true);
      try {
        const res = await register({
          phone: registerPhone.trim(),
          email: registerEmail.trim(),
          password,
          role: selectedRole
        });

        // Registration triggers email OTP verification screen
        setOtpEmail(registerEmail.trim());
        setShowOtpScreen(true);
        setResendCooldown(45);
        setSuccessMessage("Verification code sent to your email! Please enter the 6-digit code below.");
      } catch (err) {
        console.error("Register Error:", err);
        setError(err.response?.data?.message || "Registration failed. Please check your details.");
      } finally {
        setLoading(false);
      }
    } else {
      // Login mode
      if (!loginIdentifier || !password) {
        setError("Please enter your Email, Phone, or Username and password");
        return;
      }

      setLoading(true);
      try {
        await login(loginIdentifier.trim(), password);
        navigate(selectedRole === 'artist' ? '/artist/studio' : '/');
      } catch (err) {
        console.error("Login Error:", err);
        setError(err.response?.data?.message || "Invalid credentials. Please verify your details.");
      } finally {
        setLoading(false);
      }
    }
  };

  // ================= VERIFY REGISTRATION OTP =================
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setOtpError('');
    if (!otpCode || otpCode.trim().length < 6) {
      setOtpError("Please enter the complete 6-digit verification code");
      return;
    }

    setOtpLoading(true);
    try {
      await verifyOtp(otpEmail, otpCode.trim());
      navigate(selectedRole === 'artist' ? '/artist/studio' : '/');
    } catch (err) {
      console.error("OTP Verify Error:", err);
      setOtpError(err.response?.data?.message || "Invalid or expired OTP code.");
    } finally {
      setOtpLoading(false);
    }
  };

  // ================= RESEND REGISTRATION OTP =================
  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setOtpError('');
    try {
      await resendOtp(otpEmail);
      setResendCooldown(45);
      alert("New verification code sent to your email!");
    } catch (err) {
      setOtpError(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  // ================= FORGOT PASSWORD STEP 1: REQUEST OTP =================
  const handleForgotRequestOtp = async (e) => {
    e.preventDefault();
    setForgotError('');
    setForgotSuccess('');

    if (!forgotEmail || !forgotEmail.trim()) {
      setForgotError("Please enter your registered email address");
      return;
    }

    setForgotLoading(true);
    try {
      const res = await forgotPasswordRequest(forgotEmail.trim());
      setForgotSuccess(res.message || "Reset code sent to your email!");
      setForgotStep(2);
    } catch (err) {
      setForgotError(err.response?.data?.message || "Failed to find account with that email");
    } finally {
      setForgotLoading(false);
    }
  };

  // ================= FORGOT PASSWORD STEP 2: VERIFY & RESET =================
  const handleForgotResetPassword = async (e) => {
    e.preventDefault();
    setForgotError('');
    setForgotSuccess('');

    if (!forgotOtp || forgotOtp.trim().length < 6) {
      setForgotError("Please enter the 6-digit OTP code");
      return;
    }

    if (!forgotNewPass || forgotNewPass.length < 8) {
      setForgotError("New password must be at least 8 characters");
      return;
    }

    if (!forgotStrength.meetsCriteria) {
      setForgotError("Password must include uppercase, lowercase, numbers, and symbols");
      return;
    }

    setForgotLoading(true);
    try {
      const res = await resetPasswordWithOtp(forgotEmail.trim(), forgotOtp.trim(), forgotNewPass);
      setForgotSuccess(res.message || "Password successfully changed!");
      setTimeout(() => {
        setShowForgotModal(false);
        setForgotStep(1);
        setLoginIdentifier(forgotEmail);
        setPassword('');
        setSuccessMessage("Password reset successful! Please sign in with your new password.");
      }, 2000);
    } catch (err) {
      setForgotError(err.response?.data?.message || "Failed to reset password. Check OTP code.");
    } finally {
      setForgotLoading(false);
    }
  };

  const isArtist = selectedRole === 'artist';

  return (
    <div className="relative min-h-screen w-full bg-[#05070e] text-white flex items-center justify-center p-3 sm:p-4 overflow-hidden select-none">
      
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

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md my-6 sm:my-8">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-5">
          <Link to="/" className="flex items-center gap-3 mb-2.5 group">
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
          className="p-5 sm:p-8 backdrop-blur-2xl border border-white/15 bg-slate-950/85 shadow-2xl"
        >
          {/* ================= VIEW 1: EMAIL OTP VERIFICATION SCREEN ================= */}
          {showOtpScreen ? (
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-base font-bold text-white tracking-wide">
                    Verify Email Address
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowOtpScreen(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Back to edit
                </button>
              </div>

              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                We sent a 6-digit verification code to <br />
                <span className="font-mono text-emerald-400 font-bold">{otpEmail}</span>.
              </p>

              {otpError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{otpError}</span>
                </div>
              )}

              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 text-center">
                    ENTER 6-DIGIT VERIFICATION CODE
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    autoFocus
                    placeholder="••••••"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full text-center tracking-[12px] font-mono text-2xl font-bold px-4 py-3 rounded-xl glass-input text-emerald-300 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={otpLoading || otpCode.length < 6}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 transition-all"
                >
                  {otpLoading ? (
                    <Disc3 className="w-4 h-4 animate-spin text-black" />
                  ) : (
                    <>
                      <span>Verify & Enter AURA 3D</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    disabled={resendCooldown > 0}
                    onClick={handleResendOtp}
                    className="text-xs text-slate-400 hover:text-emerald-400 disabled:opacity-50 transition-colors"
                  >
                    {resendCooldown > 0 ? (
                      <span className="flex items-center justify-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Resend code in {resendCooldown}s
                      </span>
                    ) : (
                      "Didn't receive email? Resend OTP"
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* ================= VIEW 2: NORMAL SIGN IN / REGISTER FORM ================= */
            <div>
              {/* Role Switcher Pill */}
              <div className="mb-5 p-1 rounded-2xl bg-slate-900/90 border border-white/10 grid grid-cols-2 gap-1">
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
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <h2 className="text-base font-bold text-white tracking-wide">
                  {isRegisterMode ? "Create 3D Account" : "Welcome Back"}
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    setIsRegisterMode(!isRegisterMode);
                    setError('');
                    setPassword('');
                    setSuccessMessage('');
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
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center gap-2 text-emerald-300 text-xs">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* REGISTER MODE FIELDS (Role already picked at top, Mobile + Email + Password) */}
                {isRegisterMode ? (
                  <>
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mobile Number</span>
                        <span className="text-[10px] text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={registerPhone}
                        onChange={(e) => setRegisterPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>Email Address</span>
                        <span className="text-emerald-400 text-xs">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                      <p className="text-[10px] text-slate-400 mt-1">
                        We will send a 6-digit OTP code to this email to verify.
                      </p>
                    </div>
                  </>
                ) : (
                  /* SIGN IN MODE FIELD (Accepts Email, Mobile, or Username) */
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Email, Mobile, or Username</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Email, Phone or Username"
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
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
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        passwordStrength.meetsCriteria ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'
                      }`}>
                        {passwordStrength.label}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Password Strength Checklist (Only in Register mode) */}
                  {isRegisterMode && password && (
                    <div className="mt-3 p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-[11px] font-mono">
                      <div className="flex items-center gap-1.5">
                        {passwordStrength.criteria.length ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <X className="w-3.5 h-3.5 text-slate-500" />}
                        <span className={passwordStrength.criteria.length ? 'text-slate-200' : 'text-slate-500'}>At least 8 characters</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {passwordStrength.criteria.upper && passwordStrength.criteria.lower ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <X className="w-3.5 h-3.5 text-slate-500" />}
                        <span className={passwordStrength.criteria.upper && passwordStrength.criteria.lower ? 'text-slate-200' : 'text-slate-500'}>Uppercase & lowercase letters</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {passwordStrength.criteria.number ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <X className="w-3.5 h-3.5 text-slate-500" />}
                        <span className={passwordStrength.criteria.number ? 'text-slate-200' : 'text-slate-500'}>At least one number (0-9)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all mt-6 ${
                    isArtist
                      ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white shadow-purple-500/30 hover:brightness-110'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black shadow-emerald-500/30'
                  }`}
                >
                  {loading ? (
                    <Disc3 className="w-4 h-4 animate-spin text-current" />
                  ) : (
                    <>
                      <span>{isRegisterMode ? "Send OTP & Register" : "Sign In to AURA 3D"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Forgot Password Link in Login Mode */}
                {!isRegisterMode && (
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForgotModal(true);
                        setForgotStep(1);
                        setForgotError('');
                        setForgotSuccess('');
                      }}
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      Forgot your password? Reset via Email OTP
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}
        </GlassCard>
      </div>

      {/* ================= FORGOT PASSWORD OTP MODAL ================= */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-sm rounded-2xl glass-card border border-white/15 bg-slate-950 p-6 shadow-2xl">
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <KeyRound className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Reset Password</h3>
            </div>

            {forgotSuccess && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs">
                {forgotSuccess}
              </div>
            )}

            {forgotError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                {forgotError}
              </div>
            )}

            {forgotStep === 1 ? (
              <form onSubmit={handleForgotRequestOtp} className="space-y-4">
                <p className="text-xs text-slate-300">
                  Enter your registered email address. We will send you a 6-digit OTP to reset your password.
                </p>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={forgotLoading}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
                >
                  {forgotLoading ? "Sending OTP..." : "Send Reset Code"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleForgotResetPassword} className="space-y-4">
                <p className="text-xs text-slate-300">
                  Enter the 6-digit OTP code sent to <strong className="text-white">{forgotEmail}</strong> and your new password.
                </p>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">6-Digit Code</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="••••••"
                    value={forgotOtp}
                    onChange={(e) => setForgotOtp(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full text-center tracking-[8px] font-mono font-bold text-lg px-4 py-2 rounded-xl glass-input text-emerald-300 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">New Strong Password</label>
                  <div className="relative">
                    <input
                      type={showForgotNewPass ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={forgotNewPass}
                      onChange={(e) => setForgotNewPass(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowForgotNewPass(!showForgotNewPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showForgotNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={forgotLoading}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
                >
                  {forgotLoading ? "Updating..." : "Update Password & Sign In"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
