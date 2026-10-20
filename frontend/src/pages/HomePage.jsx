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
import IndianGenresSection from '../components/sections/IndianGenresSection';
import CommunityOriginalsSection from '../components/sections/CommunityOriginalsSection';
import MadeForYouSection from '../components/sections/MadeForYouSection';
import ListeningHistorySection from '../components/sections/ListeningHistorySection';
import SearchWithSuggestions from '../components/common/SearchWithSuggestions';
import ProfileEditModal from '../components/common/ProfileEditModal';
import SupportFeedbackModal from '../components/common/SupportFeedbackModal';
import { rankSongsForUser, getTopUserGenres } from '../services/mlRecommender';
import { Disc3, Sparkles, Flame, Radio, Plus, Upload, Play, Music, Search, RefreshCw, Zap } from 'lucide-react';

export default function HomePage() {
  const { isAuthenticated, isArtist, user } = useAuth();
  const { playSong, currentSong, isPlaying, toggleFullscreen3D } = useMusic();

  const [communitySongs, setCommunitySongs] = useState([]);
  const [liveSongs, setLiveSongs] = useState([]);
  const [relatedSongs, setRelatedSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState('maithili'); // Default to Maithili as requested!
  const [loadingLive, setLoadingLive] = useState(false);
  const [loadingCommunity, setLoadingCommunity] = useState(true);

  // Modals
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // 1. Fetch Community Uploaded Tracks & Albums
  useEffect(() => {
    async function fetchCommunityMusic() {
      setLoadingCommunity(true);
      try {
        if (isAuthenticated) {
          const [songsRes, albumsRes] = await Promise.allSettled([
            axiosClient.get('/music'),
            axiosClient.get('/music/albums')
          ]);

          if (songsRes.status === 'fulfilled' && songsRes.value.data?.musics) {
            setCommunitySongs(songsRes.value.data.musics);
          }
          if (albumsRes.status === 'fulfilled' && albumsRes.value.data?.albums) {
            setAlbums(albumsRes.value.data.albums);
          }
        }
      } catch (err) {
        console.warn("Fetch community music error:", err.message);
      } finally {
        setLoadingCommunity(false);
      }
    }

    fetchCommunityMusic();
  }, [isAuthenticated]);

  // 2. Fetch Live Global Music (by Search or Genre)
  useEffect(() => {
    let isCancelled = false;

    async function fetchLiveTracks() {
      setLoadingLive(true);
      try {
        let endpoint = '';
        if (searchTerm && searchTerm.trim()) {
          endpoint = `/live/search?q=${encodeURIComponent(searchTerm.trim())}&limit=25`;
        } else if (activeGenre) {
          endpoint = `/live/genre?genre=${encodeURIComponent(activeGenre)}&limit=20`;
        } else {
          endpoint = `/live/trending`;
        }

        const res = await axiosClient.get(endpoint);
        if (!isCancelled && res.data) {
          setLiveSongs(res.data.songs || []);
          setRelatedSongs(res.data.relatedSuggestions || []);
        }
      } catch (err) {
        console.warn("Live music fetch error:", err.message);
      } finally {
        if (!isCancelled) setLoadingLive(false);
      }
    }

    const timer = setTimeout(fetchLiveTracks, 300);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [searchTerm, activeGenre]);

  // Handle Indian Genre selection
  const handleSelectGenre = (genreId) => {
    setSearchTerm('');
    setActiveGenre(genreId);
  };

  // ML Recommendations
  const allAvailableSongs = [...liveSongs, ...communitySongs];
  const recommendedSongs = rankSongsForUser(allAvailableSongs);
  const topGenres = getTopUserGenres();

  return (
    <div className="min-h-screen bg-[#060911] text-white flex flex-col pb-36">
      {/* Navigation */}
      <Navbar
        onSearchChange={(val) => {
          setSearchTerm(val);
          if (val) setActiveGenre(null);
        }}
        searchTerm={searchTerm}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Mobile Search Bar with Instant 5 Suggestions */}
        <div className="md:hidden mb-6">
          <SearchWithSuggestions
            searchTerm={searchTerm}
            onSearchChange={(val) => {
              setSearchTerm(val);
              if (val) setActiveGenre(null);
            }}
            placeholder="Search songs, artists, Maithili geet..."
            className="w-full"
          />
        </div>

        {/* 3D Immersive Hero Section */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 p-6 sm:p-12 mb-10 shadow-2xl">
          
          {/* Background 3D Sphere in Hero */}
          <div className="absolute -right-10 -top-10 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] opacity-60 pointer-events-none">
            <AudioSphere3D theme={isArtist ? 'artist' : 'emerald'} interactive={false} />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SPATIAL AUDIO </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
              Stream Infinite Music, <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Feel In 3D Space.
              </span>
            </h1>



            <div className="flex flex-wrap items-center gap-3">
              {liveSongs.length > 0 && (
                <button
                  onClick={() => playSong(liveSongs[0], liveSongs)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Top Live Hit</span>
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
                  <span>Artist Studio</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mini Equalizer Bar at Hero Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none">
            <AudioVisualizer3D barCount={40} />
          </div>
        </div>

        {/* Not Authenticated Notice */}
        {!isAuthenticated && (
          <div className="mb-10 p-5 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white">Join AURA 3D Music</h3>
              <p className="text-xs text-slate-300">Sign in to customize your username, save offline cached tracks, and upload as an artist.</p>
            </div>
            <Link
              to="/login"
              className="shrink-0 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105"
            >
              Sign In / Register
            </Link>
          </div>
        )}

        {/* SECTION 1: Explore Indian Sounds  */}
        <IndianGenresSection
          activeGenre={activeGenre}
          onSelectGenre={handleSelectGenre}
        />

        {/* SECTION 2: Live Songs Results (Search / Selected Genre) */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
              <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk'] capitalize">
                {searchTerm
                  ? `Live Results for "${searchTerm}"`
                  : activeGenre
                  ? `${activeGenre} Spotlight Hits`
                  : 'Trending Hits'}
              </h2>
              <span className="text-xs font-mono text-slate-400">({liveSongs.length} Tracks)</span>
            </div>

            <button
              onClick={() => {
                if (liveSongs.length > 0) playSong(liveSongs[0], liveSongs);
              }}
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Play All
            </button>
          </div>

          {loadingLive ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : liveSongs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {liveSongs.map((song, i) => (
                <SongCard3D
                  key={song._id || song.id || i}
                  song={song}
                  playlist={liveSongs}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl glass-card border border-white/10 p-10 text-center">
              <Disc3 className="w-12 h-12 text-slate-500 mx-auto mb-3 animate-spin-slow" />
              <h4 className="text-base font-bold text-white mb-1">No live tracks found</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
                Try searching for another artist like Arijit Singh, Sharda Sinha, Sidhu Moosewala, or Divine.
              </p>

              {relatedSongs.length > 0 && (
                <div className="text-left mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold text-cyan-300 font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    Similar & Related Hit Songs For You
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {relatedSongs.map((song, i) => (
                      <SongCard3D key={song._id || song.id || i} song={song} playlist={relatedSongs} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* SECTION 2.5: Recently Played (Offline Cached with 0 Data Usage) */}
        <ListeningHistorySection />

        {/* SECTION 3: Community Artist Originals (Uploaded by users) */}
        {communitySongs.length > 0 && (
          <CommunityOriginalsSection songs={communitySongs} />
        )}

        {/* SECTION 4: ML Online Learning "Made For You" */}
        {recommendedSongs.length > 0 && (
          <MadeForYouSection songs={recommendedSongs} topGenres={topGenres} />
        )}

        {/* SECTION 5: Featured Albums */}
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

      {/* Profile Edit Modal */}
      <ProfileEditModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Support & Bug Report Modal */}
      <SupportFeedbackModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

    </div>
  );
}
