import React, { useState } from 'react';
import { Youtube, Play, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import axiosClient from '../../api/axiosClient';
import { useMusic } from '../../context/MusicContext';

export default function YouTubeStreamerSection() {
  const { playSong } = useMusic();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleStream = async (e) => {
    e?.preventDefault();
    if (!url.trim()) return;

    // Validate youtube url
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      setError('Please enter a valid YouTube video or song link.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      const res = await axiosClient.post('/live/youtube-link', { url: url.trim() });
      if (res.data?.success && res.data?.song) {
        setSuccessMsg(`Streaming "${res.data.song.title}" in Ad-Free 3D Audio!`);
        playSong(res.data.song);
        setUrl('');
        setTimeout(() => setSuccessMsg(''), 6000);
      } else {
        setError(res.data?.message || 'Could not extract audio from this YouTube link.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to stream YouTube video. Please try another link.');
    } finally {
      setLoading(false);
    }
  };

  const sampleLinks = [
    { name: 'Kala Chashma (Hits)', url: 'https://www.youtube.com/watch?v=k4yXQkG2s1E' },
    { name: 'Kesariya (Arijit)', url: 'https://www.youtube.com/watch?v=BddP6PYo2gs' },
    { name: 'Panche Ke Nache (Pawan)', url: 'https://www.youtube.com/watch?v=kR2t1eXoB7E' }
  ];

  return (
    <section className="mb-10 animate-fade-in">
      <div className="relative rounded-3xl overflow-hidden glass-card border border-red-500/25 bg-gradient-to-r from-red-950/30 via-slate-900/60 to-purple-950/30 p-5 sm:p-7 shadow-2xl">
        
        {/* Ambient Red Glow */}
        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          
          {/* Left Info */}
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0 shadow-lg shadow-red-600/25">
              <Youtube className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">
                  YouTube to 3D Audio Streamer
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-[10px] font-mono text-red-300 flex items-center gap-1 font-semibold">
                  <Sparkles className="w-2.5 h-2.5" />
                  100% Ad-Free ⚡
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Paste any YouTube song or video link to stream crystal-clear audio with our 3D Turntable.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleStream} className="flex-1 max-w-xl flex flex-col sm:flex-row items-stretch gap-2.5">
            <div className="relative flex-1">
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Paste YouTube link (e.g. https://youtu.be/...)"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs text-white placeholder-slate-400 border border-white/10 focus:border-red-500/50 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shrink-0 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              {loading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Converting...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Stream in 3D</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Quick Sample Links */}
        <div className="mt-3.5 pt-3.5 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-mono text-slate-400">Try Sample:</span>
          {sampleLinks.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setUrl(s.url);
                setError('');
              }}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-500/30 text-slate-300 hover:text-red-300 text-[11px] font-medium transition-colors"
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Error / Success Feedback */}
        {error && (
          <div className="mt-3 flex items-center gap-2 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-xl">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {successMsg && (
          <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl animate-fade-in">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}
      </div>
    </section>
  );
}
