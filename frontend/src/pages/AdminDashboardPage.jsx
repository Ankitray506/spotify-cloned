import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../context/AuthContext';
import { useMusic } from '../context/MusicContext';
import Navbar from '../components/common/Navbar';
import GlassCard from '../components/common/GlassCard';
import { 
  ShieldCheck, Users, Headphones, Sparkles, Disc3, MessageSquare, 
  RefreshCw, CheckCircle2, Clock, AlertTriangle, ArrowLeft, Trophy,
  Ban, CheckCircle, Search, KeyRound, X, ShieldAlert, Trash2, Eye,
  TrendingUp, Activity, Smartphone, Monitor, Globe, Play, Pause, Phone
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const { playSong, currentSong, isPlaying } = useMusic();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('analytics'); // 'analytics' | 'users' | 'tracks' | 'feedback'
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [userSearch, setUserSearch] = useState('');
  const [trackSearch, setTrackSearch] = useState('');

  // Password reset modal state
  const [resetModalUser, setResetModalUser] = useState(null);
  const [resetNewPass, setResetNewPass] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMsg, setResetMsg] = useState('');

  const isAdmin = isAuthenticated && (user?.role === 'admin' || user?.email === 'ankitrayh6475@gmail.com');

  const fetchStats = async () => {
    setRefreshing(true);
    setError('');
    try {
      const res = await axiosClient.get('/admin/stats');
      setStats(res.data);
    } catch (err) {
      console.error("Admin stats fetch error:", err);
      setError(err.response?.data?.message || "Failed to load admin statistics");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (isAdmin) {
      fetchStats();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, isAdmin, navigate]);

  // Toggle user block status
  const handleToggleBlock = async (targetUser) => {
    const action = targetUser.isBlocked ? 'unblock' : 'block';
    if (!window.confirm(`Are you sure you want to ${action} ${targetUser.username}?`)) {
      return;
    }
    try {
      await axiosClient.put(`/admin/users/${targetUser._id}/block`);
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || `Failed to ${action} user`);
    }
  };

  // 1-Click User Verification Toggle Bypass
  const handleToggleVerify = async (targetUser) => {
    try {
      await axiosClient.put(`/admin/users/${targetUser._id}/verify`);
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to toggle verification");
    }
  };

  // Change user role (Listener vs Artist)
  const handleChangeRole = async (targetUser, newRole) => {
    try {
      await axiosClient.put(`/admin/users/${targetUser._id}/role`, { role: newRole });
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to change user role");
    }
  };

  // 1-Click Delete Artist Track
  const handleDeleteTrack = async (track) => {
    if (!window.confirm(`⚠️ REMOVE TRACK WARNING:\n\nAre you sure you want to permanently delete "${track.title}"?\n\nThis will remove it from AURA 3D streaming catalog immediately.`)) {
      return;
    }
    try {
      await axiosClient.delete(`/admin/tracks/${track._id}`);
      fetchStats();
      alert(`Track "${track.title}" deleted.`);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete track");
    }
  };

  // Delete User
  const handleDeleteUser = async (targetUser) => {
    if (!window.confirm(`⚠️ PERMANENT USER DELETION:\n\nAre you sure you want to delete "${targetUser.username}" (${targetUser.email}) and all their uploaded tracks?`)) {
      return;
    }
    try {
      await axiosClient.delete(`/admin/users/${targetUser._id}`);
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete user account");
    }
  };

  // Override Password
  const handleAdminResetPassword = async (e) => {
    e.preventDefault();
    if (!resetModalUser || !resetNewPass) return;

    setResetLoading(true);
    setResetMsg('');
    try {
      const res = await axiosClient.put(`/admin/users/${resetModalUser._id}/reset-password`, {
        newPassword: resetNewPass
      });
      setResetMsg(res.data.message || "Password successfully changed!");
      setTimeout(() => {
        setResetModalUser(null);
        setResetNewPass('');
        setResetMsg('');
      }, 1500);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to reset password");
    } finally {
      setResetLoading(false);
    }
  };

  // Update feedback status
  const handleUpdateFeedbackStatus = async (id, status) => {
    try {
      await axiosClient.put(`/admin/feedback/${id}`, { status });
      fetchStats();
    } catch (err) {
      console.error("Update feedback error:", err);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-24">
        <Navbar />
        <div className="flex-1 max-w-lg mx-auto px-4 flex items-center justify-center">
          <GlassCard glowColor="purple" className="p-8 text-center border border-rose-500/30">
            <AlertTriangle className="w-14 h-14 text-rose-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Restricted Admin Access</h2>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              This dashboard is strictly protected and accessible only to platform administrators (<span className="text-cyan-400 font-mono">ankitrayh6475@gmail.com</span>).
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Link>
          </GlassCard>
        </div>
      </div>
    );
  }

  const metrics = stats?.metrics || {};

  const filteredUsers = (stats?.allUsers || []).filter((u) => {
    if (!userSearch) return true;
    const q = userSearch.toLowerCase();
    return u.username?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) || u.phone?.includes(q);
  });

  const filteredTracks = (stats?.allTracks || []).filter((t) => {
    if (!trackSearch) return true;
    const q = trackSearch.toLowerCase();
    return t.title?.toLowerCase().includes(q) || t.artist?.username?.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-36">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AURA 3D CONTROL CENTER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Space_Grotesk']">
              Platform Master Console
            </h1>
            <p className="text-xs text-slate-400">
              Welcome back, <span className="text-emerald-400 font-mono">Ankit Ray</span> ({user?.email})
            </p>
          </div>

          <button
            onClick={fetchStats}
            disabled={refreshing}
            className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-emerald-400' : ''}`} />
            <span>Refresh Analytics</span>
          </button>
        </div>

        {/* ================= 4 HIGH-IMPACT METRIC CARDS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          
          {/* 1. Website Visitors & Traffic */}
          <GlassCard glowColor="emerald" className="p-4 sm:p-5 border-emerald-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Site Traffic</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white mb-1">
              {metrics.uniqueVisitors || 0}
            </div>
            <p className="text-[11px] text-slate-400">
              Total Visits: <strong className="text-slate-200">{metrics.totalVisits || 0}</strong>
            </p>
          </GlassCard>

          {/* 2. Registered Users */}
          <GlassCard glowColor="cyan" className="p-4 sm:p-5 border-cyan-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Accounts</span>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white mb-1">
              {metrics.totalUsers || 0}
            </div>
            <p className="text-[11px] text-slate-400">
              {metrics.listenersCount || 0} Listeners • {metrics.artistsCount || 0} Artists
            </p>
          </GlassCard>

          {/* 3. Conversion Funnel Rate */}
          <GlassCard glowColor="purple" className="p-4 sm:p-5 border-purple-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Conversion</span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-purple-300 mb-1">
              {metrics.conversionRate || "0.0%"}
            </div>
            <p className="text-[11px] text-slate-400">
              Visitor-to-registered user sign up ratio
            </p>
          </GlassCard>

          {/* 4. Catalog Uploads */}
          <GlassCard glowColor="amber" className="p-4 sm:p-5 border-amber-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Songs Library</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Disc3 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white mb-1">
              {metrics.totalTracks || 0}
            </div>
            <p className="text-[11px] text-slate-400">
              Original uploaded tracks in database
            </p>
          </GlassCard>

        </div>

        {/* ================= NAVIGATION TABS ================= */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all shrink-0 ${
              activeTab === 'analytics'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white bg-white/5'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Traffic & Visitor Logs ({stats?.recentVisitors?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all shrink-0 ${
              activeTab === 'users'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white bg-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Users & OTP Verification ({stats?.allUsers?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('tracks')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all shrink-0 ${
              activeTab === 'tracks'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white bg-white/5'
            }`}
          >
            <Disc3 className="w-4 h-4" />
            <span>Tracks Moderation ({stats?.allTracks?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all shrink-0 ${
              activeTab === 'feedback'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white bg-white/5'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>User Feedback ({stats?.recentFeedbacks?.length || 0})</span>
          </button>
        </div>

        {/* ================= TAB 1: VISITOR & TRAFFIC ANALYTICS ================= */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Breakdown Funnel Box */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 bg-slate-950/60">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Audience Conversion Funnel</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Comparing anonymous visitors (unregistered guests) vs active registered accounts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Guest / Anonymous</span>
                  <div className="text-xl font-bold text-slate-200 mt-1">
                    {metrics.guestVisitors || 0}
                  </div>
                  <span className="text-[10px] text-slate-500">Browsing without sign in</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase">Registered Users</span>
                  <div className="text-xl font-bold text-emerald-300 mt-1">
                    {metrics.totalUsers || 0}
                  </div>
                  <span className="text-[10px] text-slate-500">Verified & active accounts</span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase">Conversion Rate</span>
                  <div className="text-xl font-bold text-emerald-400 mt-1">
                    {metrics.conversionRate || "0.0%"}
                  </div>
                  <span className="text-[10px] text-emerald-300/70">Visitors who registered</span>
                </div>
              </div>
            </div>

            {/* Live Recent Visitor Log Table */}
            <div className="rounded-2xl glass-card border border-white/10 overflow-hidden bg-slate-950/80">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Recent Website Visitors (Real-Time Feed)</h3>
                  <p className="text-xs text-slate-400">Tracks anonymous and logged-in users visiting pages on AURA 3D.</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Live Feed
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-slate-400 uppercase font-mono text-[10px]">
                    <tr>
                      <th className="px-4 py-3">Device / Browser</th>
                      <th className="px-4 py-3">Visitor ID</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Page Path</th>
                      <th className="px-4 py-3">Visits</th>
                      <th className="px-4 py-3">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    {(stats?.recentVisitors || []).length > 0 ? (
                      stats.recentVisitors.map((v, i) => (
                        <tr key={v._id || i} className="hover:bg-white/[0.02]">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {v.device === 'Mobile' ? (
                                <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                              ) : (
                                <Monitor className="w-4 h-4 text-emerald-400 shrink-0" />
                              )}
                              <span className="text-slate-200">{v.device} • {v.browser}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-slate-400 truncate max-w-[140px]">
                            {v.visitorId}
                          </td>
                          <td className="px-4 py-3">
                            {v.isRegistered ? (
                              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                                Registered ({v.userRole || 'user'})
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                                Guest Listener
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-slate-300">
                            {v.lastPath || '/'}
                          </td>
                          <td className="px-4 py-3 text-slate-400">
                            {v.visitsCount || 1}
                          </td>
                          <td className="px-4 py-3 text-slate-500">
                            {new Date(v.lastVisitedAt || v.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-slate-500 font-sans">
                          No visitor logs recorded yet. Visit the homepage to initialize traffic tracking!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: USER MANAGEMENT & VERIFICATION ================= */}
        {activeTab === 'users' && (
          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by username, email, or mobile..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>

            <div className="rounded-2xl glass-card border border-white/10 overflow-hidden bg-slate-950/80">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-slate-400 uppercase font-mono text-[10px]">
                    <tr>
                      <th className="px-4 py-3">User & Contact</th>
                      <th className="px-4 py-3">Role</th>
                      <th className="px-4 py-3">Verification</th>
                      <th className="px-4 py-3">Streams</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((u) => (
                        <tr key={u._id} className="hover:bg-white/[0.02]">
                          {/* User & Contact */}
                          <td className="px-4 py-3">
                            <div className="flex flex-col">
                              <span className="font-bold text-white flex items-center gap-1.5">
                                {u.username}
                                {u.role === 'admin' && (
                                  <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-1.5 rounded">ADMIN</span>
                                )}
                              </span>
                              <span className="text-[11px] text-slate-400 font-mono">{u.email}</span>
                              {u.phone && (
                                <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mt-0.5">
                                  <Phone className="w-2.5 h-2.5" /> {u.phone}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Role Switcher */}
                          <td className="px-4 py-3">
                            <select
                              value={u.role || 'user'}
                              disabled={u.email === 'ankitrayh6475@gmail.com'}
                              onChange={(e) => handleChangeRole(u, e.target.value)}
                              className="px-2 py-1 rounded bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300 focus:outline-none"
                            >
                              <option value="user">🎧 Listener</option>
                              <option value="artist">🎙️ Artist</option>
                              <option value="admin">⚡ Admin</option>
                            </select>
                          </td>

                          {/* Verification 1-Click Toggle */}
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleToggleVerify(u)}
                              title="Click to toggle verified status"
                              className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full border transition-all ${
                                u.isVerified !== false
                                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
                              }`}
                            >
                              {u.isVerified !== false ? (
                                <>
                                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                                  <span>Verified ✅</span>
                                </>
                              ) : (
                                <>
                                  <Clock className="w-3 h-3 text-amber-400" />
                                  <span>Pending ⏳ (Click to Verify)</span>
                                </>
                              )}
                            </button>
                          </td>

                          {/* Streams */}
                          <td className="px-4 py-3 font-mono text-slate-300">
                            {u.listenCount || 0}
                          </td>

                          {/* Block Status */}
                          <td className="px-4 py-3">
                            {u.isBlocked ? (
                              <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
                                Suspended
                              </span>
                            ) : (
                              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                Active
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {/* Override Password */}
                              <button
                                onClick={() => setResetModalUser(u)}
                                title="Reset User Password"
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                              >
                                <KeyRound className="w-4 h-4" />
                              </button>

                              {/* Block / Unblock */}
                              {u.email !== 'ankitrayh6475@gmail.com' && (
                                <>
                                  <button
                                    onClick={() => handleToggleBlock(u)}
                                    title={u.isBlocked ? "Unblock user" : "Suspend user"}
                                    className={`p-1.5 rounded-lg ${
                                      u.isBlocked
                                        ? 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30'
                                        : 'bg-white/5 text-slate-400 hover:text-rose-400'
                                    }`}
                                  >
                                    <Ban className="w-4 h-4" />
                                  </button>

                                  <button
                                    onClick={() => handleDeleteUser(u)}
                                    title="Permanently Delete User"
                                    className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-950/50 text-slate-400 hover:text-rose-400"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                          No users matched search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: ARTIST TRACKS & MODERATION ================= */}
        {activeTab === 'tracks' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative max-w-md w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search uploaded tracks by title or artist..."
                  value={trackSearch}
                  onChange={(e) => setTrackSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>

              <span className="text-xs font-mono text-slate-400 self-end sm:self-auto">
                Total Uploads: <strong className="text-white">{filteredTracks.length}</strong>
              </span>
            </div>

            <div className="rounded-2xl glass-card border border-white/10 overflow-hidden bg-slate-950/80">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-slate-400 uppercase font-mono text-[10px]">
                    <tr>
                      <th className="px-4 py-3">Track Info</th>
                      <th className="px-4 py-3">Artist / Uploader</th>
                      <th className="px-4 py-3">Synced Lyrics</th>
                      <th className="px-4 py-3">Upload Date</th>
                      <th className="px-4 py-3 text-right">Moderation Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredTracks.length > 0 ? (
                      filteredTracks.map((t) => (
                        <tr key={t._id} className="hover:bg-white/[0.02]">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              {/* Audio Play Preview */}
                              <button
                                onClick={() => playSong(t, filteredTracks)}
                                title="Play Track Preview"
                                className="w-9 h-9 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-black flex items-center justify-center transition-colors shrink-0"
                              >
                                {(currentSong?._id === t._id && isPlaying) ? (
                                  <Pause className="w-4 h-4 fill-current" />
                                ) : (
                                  <Play className="w-4 h-4 fill-current ml-0.5" />
                                )}
                              </button>
                              <div className="min-w-0">
                                <span className="font-bold text-white truncate block">
                                  {t.title}
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  ID: {t._id}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-3 font-mono text-slate-300">
                            {t.artist?.username || 'Community Artist'} <br />
                            <span className="text-[10px] text-slate-500">{t.artist?.email || ''}</span>
                          </td>

                          <td className="px-4 py-3 font-mono">
                            {t.hasSyncedLyrics ? (
                              <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                Live Synced (.lrc)
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[10px]">Standard</span>
                            )}
                          </td>

                          <td className="px-4 py-3 font-mono text-slate-400">
                            {new Date(t.createdAt).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-3 text-right">
                            <button
                              onClick={() => handleDeleteTrack(t)}
                              title="Delete this track from AURA 3D"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/30 transition-all font-mono text-[11px]"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete Track</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                          No uploaded tracks found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: USER FEEDBACK & RECOVERY ================= */}
        {activeTab === 'feedback' && (
          <div className="space-y-4">
            <div className="rounded-2xl glass-card border border-white/10 overflow-hidden bg-slate-950/80">
              <div className="p-4 border-b border-white/10">
                <h3 className="text-sm font-bold text-white">Platform Feedback & Account Recovery Requests</h3>
                <p className="text-xs text-slate-400">Direct user messages submitted via the in-app support modal.</p>
              </div>

              <div className="divide-y divide-white/5">
                {(stats?.recentFeedbacks || []).length > 0 ? (
                  stats.recentFeedbacks.map((fb) => (
                    <div key={fb._id} className="p-4 hover:bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-white text-xs">{fb.name}</span>
                          <span className="text-xs font-mono text-cyan-400">({fb.email})</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                            {fb.subject}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">{fb.message}</p>
                        <span className="text-[10px] text-slate-500 font-mono mt-1 block">
                          Received on {new Date(fb.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <select
                          value={fb.status || 'pending'}
                          onChange={(e) => handleUpdateFeedbackStatus(fb._id, e.target.value)}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-emerald-400 focus:outline-none"
                        >
                          <option value="pending">⏳ Pending</option>
                          <option value="in-review">🔍 In Review</option>
                          <option value="resolved">✅ Resolved</option>
                        </select>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-slate-500 text-xs">
                    No support tickets or feedback messages yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ================= MODAL: ADMIN PASSWORD OVERRIDE ================= */}
      {resetModalUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-sm rounded-2xl glass-card border border-white/15 bg-slate-950 p-6 shadow-2xl">
            <button
              onClick={() => setResetModalUser(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <KeyRound className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Override User Password</h3>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Enter a new password for <strong className="text-white">{resetModalUser.username}</strong> ({resetModalUser.email}).
            </p>

            {resetMsg && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs">
                {resetMsg}
              </div>
            )}

            <form onSubmit={handleAdminResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">New Password (Min 6 chars)</label>
                <input
                  type="text"
                  required
                  placeholder="New password..."
                  value={resetNewPass}
                  onChange={(e) => setResetNewPass(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>

              <button
                type="submit"
                disabled={resetLoading}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
              >
                {resetLoading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
