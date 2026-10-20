import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import GlassCard from '../components/common/GlassCard';
import { 
  ShieldCheck, Users, Headphones, Sparkles, Disc3, MessageSquare, 
  RefreshCw, CheckCircle2, Clock, AlertTriangle, ArrowLeft, Trophy,
  Ban, CheckCircle, Search, KeyRound, X, ShieldAlert
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [userSearch, setUserSearch] = useState('');

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
      }, 2000);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to reset password");
    } finally {
      setResetLoading(false);
    }
  };

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

  const filteredUsers = (stats?.allUsers || []).filter((u) => {
    if (!userSearch) return true;
    const q = userSearch.toLowerCase();
    return u.username?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-32">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Admin Header */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-cyan-500/25 p-6 sm:p-8 mb-8 shadow-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-purple-950/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-emerald-400 p-[1px] shadow-xl shadow-cyan-500/30">
                <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black tracking-wide text-white font-['Space_Grotesk']">
                    AURA Admin Portal
                  </h1>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                    Master Console
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Real-time platform metrics, user moderation (block/unblock), password management, and bug reports for <span className="text-emerald-400">{user?.email}</span>
                </p>
              </div>
            </div>

            <button
              onClick={fetchStats}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-cyan-400' : ''}`} />
              <span>{refreshing ? 'Refreshing...' : 'Refresh Stats'}</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <GlassCard glowColor="cyan" className="p-5 border border-cyan-500/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-medium">Total Registered</span>
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-3xl font-black text-white font-['Space_Grotesk']">
              {stats?.metrics?.totalUsers || 0}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">{stats?.metrics?.listenersCount || 0} Listeners</span>
              <span>•</span>
              <span className="text-purple-400 font-bold">{stats?.metrics?.artistsCount || 0} Artists</span>
            </div>
          </GlassCard>

          <GlassCard glowColor="purple" className="p-5 border border-purple-500/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-medium">Suspended Accounts</span>
              <Ban className="w-5 h-5 text-rose-400" />
            </div>
            <div className="text-3xl font-black text-rose-400 font-['Space_Grotesk']">
              {stats?.metrics?.blockedCount || 0}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Blocked by admin
            </div>
          </GlassCard>

          <GlassCard glowColor="emerald" className="p-5 border border-emerald-500/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-medium">Top Listener Total</span>
              <Trophy className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-white font-['Space_Grotesk']">
              {stats?.topListeners?.[0]?.listenCount || 0}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 truncate">
              Leader: <span className="text-emerald-400 font-bold">{stats?.topListeners?.[0]?.username || 'N/A'}</span>
            </div>
          </GlassCard>

          <GlassCard glowColor="cyan" className="p-5 border border-cyan-500/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-medium">Feedback & Inquiries</span>
              <MessageSquare className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-3xl font-black text-white font-['Space_Grotesk']">
              {stats?.metrics?.totalFeedback || 0}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Direct reports from users
            </div>
          </GlassCard>
        </div>

        {/* User Management Section (Block / Unblock & Reset Password) */}
        <GlassCard glowColor="cyan" className="p-6 border border-cyan-500/25 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">User Moderation & Account Control</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Block spam/abusive users and override forgotten passwords with 1-click.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search username or email..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl glass-input text-xs text-white placeholder-slate-500"
              />
            </div>
          </div>

          {loading ? (
            <div className="py-12 flex justify-center">
              <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching accounts found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[10px]">
                    <th className="pb-3 px-3">User</th>
                    <th className="pb-3 px-3">Role</th>
                    <th className="pb-3 px-3">Songs Played</th>
                    <th className="pb-3 px-3">Status</th>
                    <th className="pb-3 px-3 text-right">Moderation Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredUsers.map((u) => {
                    const isSelf = u.username === 'ankit-ray' || u.email === 'ankitrayh6475@gmail.com';
                    return (
                      <tr key={u._id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                              {u.avatar ? (
                                <img src={u.avatar} alt={u.username} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs font-bold text-cyan-400 uppercase">
                                  {u.username?.[0] || 'U'}
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="font-bold text-white flex items-center gap-1.5">
                                <span>{u.username}</span>
                                {isSelf && (
                                  <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 border border-cyan-500/30 text-[9px] font-mono text-cyan-300">
                                    YOU
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-slate-400">{u.email}</span>
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-3 font-mono uppercase text-[10px]">
                          <span className={`px-2 py-0.5 rounded border ${
                            u.role === 'admin' 
                              ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300 font-bold'
                              : u.role === 'artist'
                              ? 'bg-purple-500/20 border-purple-500/30 text-purple-300'
                              : 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
                          }`}>
                            {u.role}
                          </span>
                        </td>

                        <td className="py-3 px-3 font-mono font-bold text-emerald-400">
                          {u.listenCount || 0} plays
                        </td>

                        <td className="py-3 px-3">
                          {u.isBlocked ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold uppercase font-mono">
                              <Ban className="w-3 h-3" /> Blocked
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold uppercase font-mono">
                              <CheckCircle className="w-3 h-3" /> Active
                            </span>
                          )}
                        </td>

                        <td className="py-3 px-3 text-right">
                          {isSelf ? (
                            <span className="text-[11px] text-slate-500 italic">Master Owner</span>
                          ) : (
                            <div className="inline-flex items-center gap-2">
                              {/* Reset Password Button */}
                              <button
                                onClick={() => setResetModalUser(u)}
                                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                                title="Reset this user's password"
                              >
                                <KeyRound className="w-3 h-3" />
                                <span>Reset Pass</span>
                              </button>

                              {/* Block / Unblock Toggle Button */}
                              <button
                                onClick={() => handleToggleBlock(u)}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1 border transition-colors ${
                                  u.isBlocked
                                    ? 'bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-500/40 text-emerald-300'
                                    : 'bg-rose-500/20 hover:bg-rose-500/30 border-rose-500/40 text-rose-300'
                                }`}
                              >
                                <Ban className="w-3 h-3" />
                                <span>{u.isBlocked ? 'Unblock' : 'Block User'}</span>
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </GlassCard>

        {/* 2-Column Grid: Top Listeners Leaderboard & Feedback Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Top Listeners Leaderboard */}
          <GlassCard glowColor="emerald" className="p-6 border border-emerald-500/20 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Top Active Listeners</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                Ranked by Songs Played
              </span>
            </div>

            {loading ? (
              <div className="py-12 flex justify-center">
                <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (!stats?.topListeners || stats.topListeners.length === 0) ? (
              <p className="text-xs text-slate-400 py-8 text-center">No listening records found yet.</p>
            ) : (
              <div className="space-y-2.5 overflow-x-auto">
                {stats.topListeners.map((u, idx) => (
                  <div
                    key={u._id || idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        idx === 0 ? 'bg-amber-400 text-black' :
                        idx === 1 ? 'bg-slate-300 text-black' :
                        idx === 2 ? 'bg-amber-700 text-white' :
                        'bg-slate-800 text-slate-300'
                      }`}>
                        #{idx + 1}
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                        {u.avatar ? (
                          <img src={u.avatar} alt={u.username} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs font-bold text-emerald-400 uppercase">
                            {u.username[0]}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{u.username}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-slate-400 uppercase font-mono">
                            {u.role}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400">{u.email}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-black text-emerald-400 font-mono">
                        {u.listenCount || 0} plays
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1 justify-end">
                        <Clock className="w-3 h-3" />
                        <span>{u.lastLogin ? new Date(u.lastLogin).toLocaleDateString() : 'Active'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>

          {/* User Inquiries & Feedback Section */}
          <GlassCard glowColor="purple" className="p-6 border border-purple-500/20 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">Direct Issues & Feedback</h3>
              </div>
              <span className="text-xs text-slate-400">
                Inbox
              </span>
            </div>

            {loading ? (
              <div className="py-12 flex justify-center">
                <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (!stats?.recentFeedbacks || stats.recentFeedbacks.length === 0) ? (
              <div className="py-8 text-center text-xs text-slate-400">
                No feedback or complaints submitted yet. Everything is running smoothly!
              </div>
            ) : (
              <div className="space-y-3 overflow-y-auto max-h-[400px] pr-1">
                {stats.recentFeedbacks.map((fb) => (
                  <div
                    key={fb._id}
                    className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{fb.name}</span>
                        <span className="text-[10px] font-mono text-cyan-400">({fb.email})</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase ${
                        fb.status === 'resolved' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                        {fb.status}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-200">{fb.subject}</div>
                    <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                      "{fb.message}"
                    </p>

                    <div className="flex items-center justify-between pt-1 border-t border-white/5">
                      <span className="text-[10px] text-slate-400">
                        {new Date(fb.createdAt).toLocaleDateString()}
                      </span>
                      {fb.status !== 'resolved' && (
                        <button
                          onClick={() => handleUpdateFeedbackStatus(fb._id, 'resolved')}
                          className="px-2 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Mark Resolved</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>

        </div>

      </main>

      {/* Admin Password Reset Modal */}
      {resetModalUser && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md animate-fade-in">
            <GlassCard glowColor="cyan" className="p-6 border border-cyan-500/30 bg-slate-950/95 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white">
                    Reset Password for {resetModalUser.username}
                  </h3>
                </div>
                <button
                  onClick={() => setResetModalUser(null)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {resetMsg ? (
                <div className="py-6 text-center text-emerald-400 text-xs font-bold">
                  <CheckCircle className="w-10 h-10 mx-auto mb-2 animate-bounce" />
                  {resetMsg}
                </div>
              ) : (
                <form onSubmit={handleAdminResetPassword} className="space-y-3">
                  <p className="text-xs text-slate-300">
                    As platform administrator, enter a new password for <strong className="text-white">{resetModalUser.email}</strong>.
                  </p>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">New Password</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter new password (min 6 chars)"
                      value={resetNewPass}
                      onChange={(e) => setResetNewPass(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500 font-mono"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setResetModalUser(null)}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={resetLoading}
                      className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase transition-all disabled:opacity-50"
                    >
                      {resetLoading ? 'Updating...' : 'Save Password'}
                    </button>
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
