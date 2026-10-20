import React, { useState } from 'react';
import { Youtube, Play, AlertCircle } from 'lucide-react';
import axiosClient from '../../api/axiosClient';
import { useMusic } from '../../context/MusicContext';

export default function YouTubeStreamerSection() {
  const { playSong } = useMusic();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleStream = async (e) => {
    e?.preventDefault();
    if (!url.trim()) return;

    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      setError('Please paste a valid YouTube link');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await axiosClient.post('/live/youtube-link', { url: url.trim() });
      if (res.data?.success && res.data?.song) {
        playSong(res.data.song);
        setUrl('');
      } else {
        setError(res.data?.message || 'Could not load video');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Could not load YouTube audio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-8 px-2">
      <form
        onSubmit={handleStream}
        className="flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl glass-card border border-white/10 bg-slate-900/80 shadow-xl focus-within:border-red-500/50 transition-all"
      >
        <div className="w-9 h-9 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center shrink-0">
          <Youtube className="w-5 h-5 fill-current" />
        </div>

        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            if (error) setError('');
          }}
          placeholder="Paste YouTube video or song link..."
          className="flex-1 bg-transparent px-2 text-xs sm:text-sm text-white placeholder-slate-400 outline-none"
        />

        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shrink-0 flex items-center gap-1.5 shadow-md shadow-red-600/30 active:scale-95"
        >
          {loading ? (
            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>Play</span>
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-rose-400">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
