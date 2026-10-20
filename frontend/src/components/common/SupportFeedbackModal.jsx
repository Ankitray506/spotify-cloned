import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, MessageSquare, AlertCircle, Heart } from 'lucide-react';
import axiosClient from '../../api/axiosClient';
import { useAuth } from '../../context/AuthContext';

export default function SupportFeedbackModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || '');
  const [name, setName] = useState(user?.username || '');
  const [subject, setSubject] = useState('Feedback / Issue with AURA 3D Music');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const targetEmail = "ankitrayh6475@gmail.com";

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      // Save feedback in database for Admin Portal
      await axiosClient.post('/admin/feedback', {
        name: name || user?.username || 'Guest Listener',
        email: email || user?.email || 'guest@aura3d.app',
        subject: subject.trim(),
        message: message.trim()
      });
    } catch (err) {
      console.warn("DB feedback log error:", err.message);
    }

    // Also open mail draft to ankitrayh6475@gmail.com
    try {
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `User: ${name || user?.username || 'Guest'}\nEmail: ${email || user?.email || 'N/A'}\n\nMessage:\n${message}\n\n-- Sent via AURA 3D Music Support`
      )}`;
      window.open(mailtoUrl, '_blank');
    } catch (e) {}

    setLoading(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-md rounded-3xl glass-card border border-cyan-500/30 p-6 sm:p-8 shadow-2xl animate-fade-in bg-slate-950/90">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Direct Support & Feedback</h3>
              <p className="text-xs text-cyan-300/80 font-mono">Contact Developer Directly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {sent ? (
          <div className="py-8 flex flex-col items-center text-center">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mb-3 animate-bounce" />
            <h4 className="text-base font-bold text-white mb-1">Feedback Submitted!</h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Thank you! Your issue report has been logged in the Admin Portal and sent to <strong>{targetEmail}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-3.5">
            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300">
              Found a bug or need help? Your message is sent directly to the creator at <strong className="text-cyan-300">{targetEmail}</strong>.
            </div>

            {!user && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Your Feedback / Issue Details
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe the issue, bug, or feature you'd like..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs text-white placeholder-slate-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-black font-bold text-xs tracking-wider uppercase shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Feedback to Developer</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
