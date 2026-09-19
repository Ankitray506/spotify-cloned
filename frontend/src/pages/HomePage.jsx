import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../context/AuthContext';
import { useMusic } from '../context/MusicContext';
import Navbar from '../components/common/Navbar';
import SongCard3D from '../components/cards/SongCard3D';
import AlbumCard3D from '../components/cards/AlbumCard3D';
import AudioSphere3D from '../components/3d/AudioSphere3D';
import AudioVisualizer3D from '../components/3d/AudioVisualizer3D';
import { Disc3, Sparkles, Flame, Radio, Plus, Upload, Play, Music } from 'lucide-react';

export default function HomePage() {
  const { isAuthenticated, isArtist, user } = useAuth();
  const { playSong, currentSong, isPlaying, toggleFullscreen3D } = useMusic();

  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch songs and albums
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if (isAuthenticated) {
          const [songsRes, albumsRes] = await Promise.allSettled([
            axiosClient.get(`/music${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ''}`),
            axiosClient.get('/music/albums')
          ]);

          if (songsRes.status === 'fulfilled' && songsRes.value.data?.musics) {
            setSongs(songsRes.value.data.musics);
          }
          if (albumsRes.status === 'fulfilled' && albumsRes.value.data?.albums) {
            setAlbums(albumsRes.value.data.albums);
          }
        }
      } catch (err) {
        console.warn("Fetch music error:", err.message);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(fetchData, 200);
    return () => clearTimeout(timer);
  }, [isAuthenticated, searchTerm]);

  const filteredSongs = songs.filter(s =>
    s.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (typeof s.artist === 'object' && s.artist?.username?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-32">
      {/* Navigation */}
      <Navbar onSearchChange={setSearchTerm} searchTerm={searchTerm} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* 3D Immersive Hero Section */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 sm:p-12 mb-10 shadow-2xl">
          
          {/* Background 3D Sphere in Hero */}
          <div className="absolute -right-10 -top-10 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] opacity-60 pointer-events-none">
            <AudioSphere3D theme={isArtist ? 'artist' : 'emerald'} interactive={false} />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SPATIAL AUDIO • 3D EXPERIENCES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
              Immerse In Sound, <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Feel Every Frequency.
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Experience modern music with interactive 3D vinyl turntables, real-time Web Audio API visualizers, and seamless artist uploads.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {songs.length > 0 && (
                <button
                  onClick={() => playSong(songs[0], songs)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Featured Track</span>
                </button>
              )}

              <button
                onClick={toggleFullscreen3D}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-white font-medium text-xs tracking-wider uppercase hover:border-emerald-500/40 transition-all"
              >
                <Disc3 className="w-4 h-4 text-emerald-400" />
                <span>3D Turntable Stage</span>
              </button>

              {isArtist && (
                <Link
                  to="/artist/studio"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-300 font-medium text-xs tracking-wider uppercase transition-all"
                >
                  <Upload className="w-4 h-4 text-cyan-400" />
                  <span>Upload Song</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mini Real-Time Equalizer Bar at Hero Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none">
            <AudioVisualizer3D barCount={40} />
          </div>
        </div>

        {/* Not Authenticated Notice */}
        {!isAuthenticated && (
          <div className="mb-10 p-5 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white">Join AURA 3D Music</h3>
              <p className="text-xs text-slate-300">Sign in to browse all songs, listen to albums, or upload as an artist.</p>
            </div>
            <Link
              to="/login"
              className="shrink-0 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105"
            >
              Sign In / Register
            </Link>
          </div>
        )}

        {/* Trending / All Tracks Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                Trending Tracks
              </h2>
              <span className="text-xs font-mono text-slate-400">({filteredSongs.length})</span>
            </div>

            {isArtist && (
              <Link
                to="/artist/studio"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                Upload New
              </Link>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : filteredSongs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredSongs.map((song, i) => (
                <SongCard3D
                  key={song._id || song.id || i}
                  song={song}
                  playlist={filteredSongs}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl glass-card border border-white/10 p-10 text-center">
              <Disc3 className="w-12 h-12 text-slate-500 mx-auto mb-3 animate-spin-slow" />
              <h4 className="text-base font-bold text-white mb-1">No tracks found</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
                {searchTerm
                  ? `No songs matched "${searchTerm}". Try another search keyword.`
                  : "No songs have been uploaded to the platform yet."}
              </p>
              {isArtist ? (
                <Link
                  to="/artist/studio"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider"
                >
                  <Upload className="w-4 h-4" />
                  Upload First Track
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider"
                >
                  Sign in as Artist to Upload
                </Link>
              )}
            </div>
          )}
        </section>

        {/* Featured Albums Section */}
        {albums.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <Disc3 className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                  Featured Albums
                </h2>
                <span className="text-xs font-mono text-slate-400">({albums.length})</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {albums.map((album, i) => (
                <AlbumCard3D
                  key={album._id || album.id || i}
                  album={album}
                  index={i}
                />
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
