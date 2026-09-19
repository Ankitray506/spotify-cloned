import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useMusic } from '../context/MusicContext';
import Navbar from '../components/common/Navbar';
import GlassCard from '../components/common/GlassCard';
import { Play, Pause, Disc3, Clock, ArrowLeft, Library, Music } from 'lucide-react';
import { getCoverImage, formatTime } from '../utils/helpers';

export default function AlbumDetailPage() {
  const { id } = useParams();
  const { playSong, currentSong, isPlaying, togglePlay } = useMusic();

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlbum() {
      setLoading(true);
      try {
        const res = await axiosClient.get(`/music/albums/${id}`);
        if (res.data?.album) {
          setAlbum(res.data.album);
        }
      } catch (err) {
        console.warn("Fetch album error:", err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchAlbum();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-24">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Disc3 className="w-10 h-10 text-emerald-400 animate-spin" />
        </div>
      </div>
    );
  }

  if (!album) {
    return (
      <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-24">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h2 className="text-xl font-bold text-white mb-2">Album Not Found</h2>
          <Link to="/" className="text-sm text-emerald-400 hover:underline">
            ← Return to Discovery
          </Link>
        </div>
      </div>
    );
  }

  const tracks = album.musics || [];
  const cover = getCoverImage(album._id || album.title, 2);
  const artistName = typeof album.artist === 'object' ? album.artist?.username : 'Artist';

  const handlePlayAll = () => {
    if (tracks.length > 0) {
      playSong(tracks[0], tracks);
    }
  };

  return (
    <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-32">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Music</span>
        </Link>

        {/* Album Showcase Header */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 sm:p-8 mb-8 shadow-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          
          {/* 3D Vinyl Sleeve Jacket */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
            <img src={cover} alt={album.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Disc3 className="w-12 h-12 text-white animate-spin-slow" />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-[10px] font-mono text-purple-300">
              STUDIO ALBUM
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-['Space_Grotesk'] tracking-tight">
              {album.title}
            </h1>
            <p className="text-sm text-slate-300 mt-1 flex items-center justify-center sm:justify-start gap-2">
              <span>By <strong>{artistName}</strong></span>
              <span>•</span>
              <span className="font-mono text-slate-400">{tracks.length} Tracks</span>
            </p>

            <div className="mt-6 flex items-center justify-center sm:justify-start gap-3">
              {tracks.length > 0 && (
                <button
                  onClick={handlePlayAll}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Album</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tracklist */}
        <section className="glass-card rounded-2xl border border-white/10 p-4 sm:p-6 shadow-xl">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Library className="w-4 h-4 text-purple-400" />
            <span>Tracklist</span>
          </h3>

          {tracks.length > 0 ? (
            <div className="space-y-1.5">
              {tracks.map((track, idx) => {
                const isCurrent = (currentSong?._id || currentSong?.id) === (track?._id || track?.id);
                const isThisPlaying = isCurrent && isPlaying;

                return (
                  <div
                    key={track._id || track.id || idx}
                    onClick={() => playSong(track, tracks)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                      isCurrent
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                        : 'hover:bg-white/5 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 text-xs font-mono text-slate-500 text-center">
                        {idx + 1}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isCurrent) togglePlay();
                          else playSong(track, tracks);
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isThisPlaying ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {isThisPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                      </button>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${isCurrent ? 'text-emerald-400' : 'text-white'}`}>
                          {track.title}
                        </p>
                        <p className="text-xs text-slate-400 truncate">{artistName}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <Music className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-slate-400 py-6 text-center">
              No tracks added to this album yet.
            </p>
          )}
        </section>

      </main>
    </div>
  );
}
