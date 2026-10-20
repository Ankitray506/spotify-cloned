import React, { useState, useRef } from 'react';
import { X, Upload, Music, CheckCircle2, AlertCircle, Play, Pause, Disc3, Sparkles, Mic2 } from 'lucide-react';
import axiosClient from '../../api/axiosClient';
import confetti from 'canvas-confetti';
import { formatFileSize } from '../../utils/helpers';

export default function TrackUploadModal({ isOpen, onClose, onUploadSuccess }) {
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [showLyricsInput, setShowLyricsInput] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const previewAudioRef = useRef(new Audio());
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (file) => {
    if (!file) return;
    if (!file.type.startsWith('audio/') && !file.name.match(/\.(mp3|wav|m4a|aac|flac|ogg)$/i)) {
      setError("Please select a valid audio file (.mp3, .wav, .m4a)");
      return;
    }

    setError('');
    setAudioFile(file);
    if (!title) {
      // Auto-populate title from filename minus extension
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      setTitle(cleanName);
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    previewAudioRef.current.src = objectUrl;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const togglePreview = () => {
    if (!previewUrl) return;
    const audio = previewAudioRef.current;
    if (isPreviewPlaying) {
      audio.pause();
      setIsPreviewPlaying(false);
    } else {
      audio.play().then(() => setIsPreviewPlaying(true)).catch(console.error);
      audio.onended = () => setIsPreviewPlaying(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Please enter a track title");
      return;
    }
    if (!audioFile) {
      setError("Please upload an audio file");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('music', audioFile);
      if (lyrics.trim()) {
        formData.append('lyrics', lyrics.trim());
      }

      const res = await axiosClient.post('/music/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Stop preview audio if running
      previewAudioRef.current.pause();
      setIsPreviewPlaying(false);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#06b6d4', '#a855f7']
        });
      } catch (c) {}

      if (onUploadSuccess) {
        onUploadSuccess(res.data.music);
      }
      onClose();
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.response?.data?.message || "Failed to upload song. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg rounded-3xl glass-card border border-purple-500/30 p-6 sm:p-8 shadow-2xl animate-fade-in">
        
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Upload New Track</h3>
              <p className="text-xs text-purple-300/80 font-mono">Artist Studio Release</p>
            </div>
          </div>
          <button
            onClick={() => {
              previewAudioRef.current.pause();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Holographic 3D Dropzone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative rounded-2xl border-2 border-dashed p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
              isDragOver
                ? 'border-cyan-400 bg-cyan-500/10 scale-[1.01]'
                : audioFile
                ? 'border-emerald-500/50 bg-emerald-500/5'
                : 'border-white/15 bg-slate-900/40 hover:border-purple-500/40 hover:bg-purple-500/5'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*,.mp3,.wav,.m4a"
              onChange={(e) => handleFileChange(e.target.files[0])}
              className="hidden"
            />

            {audioFile ? (
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-white truncate max-w-xs">{audioFile.name}</p>
                <span className="text-xs font-mono text-slate-400">{formatFileSize(audioFile.size)}</span>

                {/* Instant Audio Preview Player Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePreview();
                  }}
                  className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono transition-all"
                >
                  {isPreviewPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isPreviewPlaying ? 'Pause Audio Preview' : 'Test Audio Preview'}</span>
                </button>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3 shadow-inner">
                  <Disc3 className="w-6 h-6 animate-spin-slow" />
                </div>
                <p className="text-sm font-semibold text-white">Drag & drop your audio file here</p>
                <p className="text-xs text-slate-400 mt-1">Supports MP3, WAV, M4A, FLAC</p>
                <span className="mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  Browse Device
                </span>
              </>
            )}
          </div>

          {/* Track Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Song Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Midnight Cyber Symphony"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
            />
          </div>

          {/* Optional Lyrics / LRC Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Mic2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Lyrics / LRC (Optional)</span>
              </label>
              <button
                type="button"
                onClick={() => setShowLyricsInput(!showLyricsInput)}
                className="text-[11px] font-mono text-cyan-400 hover:underline"
              >
                {showLyricsInput ? 'Hide' : '+ Add Synced Lyrics / LRC'}
              </button>
            </div>

            {showLyricsInput && (
              <div className="space-y-2 animate-fade-in">
                <textarea
                  rows={4}
                  placeholder={`Paste timestamped LRC lyrics or plain text, e.g.:\n[00:12.50] First line of the song\n[00:16.20] Second line of the song`}
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-mono text-slate-200 placeholder-slate-500 resize-y"
                />
                <p className="text-[10px] text-slate-400">
                  Tip: Lines with <code className="text-cyan-300">[mm:ss.xx]</code> will automatically synchronize karaoke-style in real time!
                </p>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Publishing to Cloud...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Publish Track</span>
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}
