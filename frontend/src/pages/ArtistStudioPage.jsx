import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../context/AuthContext';
import { useMusic } from '../context/MusicContext';
import Navbar from '../components/common/Navbar';
import TrackUploadModal from '../components/artist/TrackUploadModal';
import AlbumCreateModal from '../components/artist/AlbumCreateModal';
import SongCard3D from '../components/cards/SongCard3D';
import GlassCard from '../components/common/GlassCard';
import { Upload, FolderPlus, Disc3, Music, Sparkles, CheckCircle2, ShieldAlert, Play, Pause } from 'lucide-react';
import { formatTime, getCoverImage } from '../utils/helpers';

export default function ArtistStudioPage() {
  const { user, isAuthenticated, isArtist } = useAuth();
  const { playSong, currentSong, isPlaying, togglePlay } = useMusic();
  const navigate = useNavigate();

  const [myTracks, setMyTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAlbumModalOpen, setIsAlbumModalOpen] = useState(false);

  // Fetch artist tracks
  const fetchArtistTracks = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get('/music/my-tracks');
      if (res.data?.musics) {
        setMyTracks(res.data.musics);
      }
    } catch (err) {
      console.warn("Fetch my tracks error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (isArtist) {
      fetchArtistTracks();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, isArtist, navigate]);

  const handleUploadSuccess = (newTrack) => {
    setMyTracks(prev => [newTrack, ...prev]);
  };

  if (!isArtist) {
    return (
      <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-24">
        <Navbar />
        <div className="flex-1 max-w-lg mx-auto px-4 flex items-center justify-center">
          <GlassCard glowColor="purple" className="p-8 text-center">
            <ShieldAlert className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Artist Access Required</h2>
            <p className="text-xs text-slate-400 mb-6">
              You are currently logged in as a <strong>Listener</strong>. To release songs and create albums, sign in or register with an <strong>Artist</strong> account.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform"
            >
              Switch to Artist Account
            </Link>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-32">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Studio Header Banner */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-purple-500/25 p-6 sm:p-10 mb-10 shadow-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-xl shadow-purple-500/30">
                <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">ARTIST STUDIO</span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-[10px] font-mono text-purple-300">
                    Verified Creator
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
                  {user?.username}'s Studio
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Upload audio master tracks, build albums, and broadcast your sound.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Song</span>
              </button>

              <button
                onClick={() => setIsAlbumModalOpen(true)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <FolderPlus className="w-4 h-4 text-cyan-400" />
                <span>Create Album</span>
              </button>
            </div>

          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase text-slate-400">Total Uploaded Tracks</span>
              <p className="text-xl font-bold text-white mt-0.5">{myTracks.length}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase text-slate-400">Studio Status</span>
              <p className="text-xl font-bold text-emerald-400 mt-0.5">Online & Active</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono uppercase text-slate-400">Spatial Audio Support</span>
              <p className="text-xl font-bold text-cyan-400 mt-0.5">3D WebGL Enabled</p>
            </div>
          </div>
        </div>

        {/* Uploaded Songs Grid/List */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <Music className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                Your Uploaded Tracks
              </h2>
              <span className="text-xs font-mono text-slate-400">({myTracks.length})</span>
            </div>

            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              + Upload Another
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 rounded-2xl bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : myTracks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {myTracks.map((song, i) => {
                const isCurrent = (currentSong?._id || currentSong?.id) === (song?._id || song?.id);
                const isThisPlaying = isCurrent && isPlaying;
                const cover = getCoverImage(song?._id || song?.title, i);

                return (
                  <GlassCard
                    key={song._id || song.id || i}
                    glowColor="cyan"
                    className="p-3.5 flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                        <img src={cover} alt={song.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => {
                            if (isCurrent) togglePlay();
                            else playSong(song, myTracks);
                          }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {isThisPlaying ? (
                            <Pause className="w-5 h-5 text-emerald-400 fill-current" />
                          ) : (
                            <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                          )}
                        </button>
                      </div>

                      <div className="min-w-0">
                        <h4 className={`text-sm font-bold truncate ${isCurrent ? 'text-cyan-400' : 'text-white'}`}>
                          {song.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                          <span className="font-mono text-emerald-400">Stream Ready</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (isCurrent) togglePlay();
                        else playSong(song, myTracks);
                      }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isThisPlaying
                          ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/40'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>
                  </GlassCard>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl glass-card border border-white/10 p-12 text-center">
              <Disc3 className="w-12 h-12 text-purple-400 mx-auto mb-3 animate-spin-slow" />
              <h3 className="text-base font-bold text-white mb-1">Your Discography is Empty</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
                Upload your first audio file (.mp3, .wav, .m4a) to start streaming on AURA 3D.
              </p>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform"
              >
                <Upload className="w-4 h-4" />
                <span>Upload First Track</span>
              </button>
            </div>
          )}
        </section>

      </main>

      {/* Upload Modal */}
      <TrackUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />

      {/* Album Modal */}
      <AlbumCreateModal
        isOpen={isAlbumModalOpen}
        onClose={() => setIsAlbumModalOpen(false)}
        myTracks={myTracks}
        onAlbumCreated={(album) => {
          fetchArtistTracks();
        }}
      />
    </div>
  );
}
