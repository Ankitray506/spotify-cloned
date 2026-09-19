import React, { useState } from 'react';
import { X, FolderPlus, Check, Sparkles, AlertCircle, Music } from 'lucide-react';
import axiosClient from '../../api/axiosClient';

export default function AlbumCreateModal({ isOpen, onClose, myTracks = [], onAlbumCreated }) {
  const [title, setTitle] = useState('');
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const toggleTrack = (trackId) => {
    if (selectedTracks.includes(trackId)) {
      setSelectedTracks(selectedTracks.filter(id => id !== trackId));
    } else {
      setSelectedTracks([...selectedTracks, trackId]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Please provide an album title");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await axiosClient.post('/music/album', {
        title: title.trim(),
        musics: selectedTracks,
      });

      if (onAlbumCreated) {
        onAlbumCreated(res.data.album);
      }
      onClose();
    } catch (err) {
      console.error("Create album error:", err);
      setError(err.response?.data?.message || "Failed to create album");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-md rounded-3xl glass-card border border-cyan-500/30 p-6 sm:p-8 shadow-2xl animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FolderPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Create New Album</h3>
              <p className="text-xs text-cyan-300/80 font-mono">Compile Your Discography</p>
            </div>
          </div>
          <button
            onClick={onClose}
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Album Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Neon Horizon EP"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex justify-between">
              <span>Select Tracks ({selectedTracks.length} chosen)</span>
            </label>
            <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
              {myTracks.length === 0 ? (
                <p className="text-xs text-slate-400 py-3 text-center">
                  You haven't uploaded any tracks yet. Upload songs first!
                </p>
              ) : (
                myTracks.map((t) => {
                  const id = t._id || t.id;
                  const isChecked = selectedTracks.includes(id);
                  return (
                    <div
                      key={id}
                      onClick={() => toggleTrack(id)}
                      className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-200'
                          : 'bg-slate-900/50 hover:bg-white/5 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Music className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span className="text-xs font-medium truncate">{t.title}</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-cyan-400 border-cyan-400 text-black' : 'border-slate-500'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-bold text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Create Album</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
