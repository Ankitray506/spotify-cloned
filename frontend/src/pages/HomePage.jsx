import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../context/AuthContext';
import { useMusic } from '../context/MusicContext';
import Navbar from '../components/common/Navbar';
import SongCard3D from '../components/cards/SongCard3D';
import SongRow from '../components/cards/SongRow';
import AlbumCard3D from '../components/cards/AlbumCard3D';
import AudioSphere3D from '../components/3d/AudioSphere3D';
import AudioVisualizer3D from '../components/3d/AudioVisualizer3D';
import IndianGenresSection from '../components/sections/IndianGenresSection';
import YouTubeStreamerSection from '../components/sections/YouTubeStreamerSection';
import CommunityOriginalsSection from '../components/sections/CommunityOriginalsSection';
import MadeForYouSection from '../components/sections/MadeForYouSection';
import ListeningHistorySection from '../components/sections/ListeningHistorySection';
import SearchWithSuggestions from '../components/common/SearchWithSuggestions';
import ProfileEditModal from '../components/common/ProfileEditModal';
import SupportFeedbackModal from '../components/common/SupportFeedbackModal';
import { rankSongsForUser, getTopUserGenres } from '../services/mlRecommender';
import { Disc3, Sparkles, Flame, Radio, Plus, Upload, Play, Music, Search, RefreshCw, Zap, LayoutList, LayoutGrid, Calendar } from 'lucide-react';

const FALLBACK_TRENDING_HITS = [
  {
    _id: "qcEf8GY8",
    id: "qcEf8GY8",
    title: "Apna Bana Le",
    artist: { username: "Sachin-Jigar, Arijit Singh" },
    album: "Bhediya / Trending Love",
    duration: 261,
    uri: "https://aac.saavncdn.com/675/1456dc2903d0fb4465d2d2904008803b_320.mp4",
    cover: "https://c.saavncdn.com/675/Trending-Love-Songs-Hindi-2026-20260506185328-500x500.jpg",
    isLive: true
  },
  {
    _id: "BtmajL_i",
    id: "BtmajL_i",
    title: "Vaaroon Trending Version",
    artist: { username: "Anand Bhaskar, Romy" },
    album: "Vaaroon Hits",
    duration: 151,
    uri: "https://aac.saavncdn.com/037/5c1b6f34a94c685bd67cb567bf688e6a_320.mp4",
    cover: "https://c.saavncdn.com/037/Vaaroon-Trending-Version-Hindi-2025-20250709213623-500x500.jpg",
    isLive: true
  },
  {
    _id: "UPJYO3v0",
    id: "UPJYO3v0",
    title: "Ishq de Fanniyar - Female",
    artist: { username: "Shaarib Toshi, Jyotica Tangri" },
    album: "Fukrey Returns / Trending",
    duration: 177,
    uri: "https://aac.saavncdn.com/675/f1f48664e51db48f0d26a40d42d515a8_320.mp4",
    cover: "https://c.saavncdn.com/675/Trending-Love-Songs-Hindi-2026-20260506185328-500x500.jpg",
    isLive: true
  },
  {
    _id: "RPY7kBp3",
    id: "RPY7kBp3",
    title: "Lae Dooba",
    artist: { username: "Rochak Kohli, Sunidhi Chauhan" },
    album: "Aiyaary / Trending Hits",
    duration: 229,
    uri: "https://aac.saavncdn.com/675/967b4606fe77beb6b080abd334f5742d_320.mp4",
    cover: "https://c.saavncdn.com/675/Trending-Love-Songs-Hindi-2026-20260506185328-500x500.jpg",
    isLive: true
  },
  {
    _id: "kHS4uHli",
    id: "kHS4uHli",
    title: "Vaaroon",
    artist: { username: "Anand Bhaskar" },
    album: "Trending Love Songs",
    duration: 350,
    uri: "https://aac.saavncdn.com/675/ff5cbe7f8c09da84cb039852eae36fce_320.mp4",
    cover: "https://c.saavncdn.com/675/Trending-Love-Songs-Hindi-2026-20260506185328-500x500.jpg",
    isLive: true
  }
];

export default function HomePage() {
  const { isAuthenticated, isArtist, user } = useAuth();
  const { playSong, currentSong, isPlaying, toggleFullscreen3D } = useMusic();

  const [communitySongs, setCommunitySongs] = useState([]);
  const [liveSongs, setLiveSongs] = useState(FALLBACK_TRENDING_HITS);
  const [relatedSongs, setRelatedSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState(null); // Defaults to Top Trending Hits
  const [loadingLive, setLoadingLive] = useState(false);
  const [loadingCommunity, setLoadingCommunity] = useState(true);
  const [refreshSeed, setRefreshSeed] = useState(0);

  // Responsive default: List view on mobile (<640px) for 6-7 songs per view, grid on desktop
  const [viewMode, setViewMode] = useState(() => {
    return (typeof window !== 'undefined' && window.innerWidth < 640) ? 'list' : 'list';
  });

  const liveSectionRef = useRef(null);

  // Modals
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // 0. Anonymous & Registered Visitor Analytics Tracker
  useEffect(() => {
    try {
      let visitorId = localStorage.getItem('aura_visitor_id');
      if (!visitorId) {
        visitorId = 'vis_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now();
        localStorage.setItem('aura_visitor_id', visitorId);
      }
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const device = isMobile ? 'Mobile' : 'Desktop';
      const browser = navigator.userAgent.includes('Chrome') ? 'Chrome' : navigator.userAgent.includes('Safari') ? 'Safari' : 'Browser';

      axiosClient.post('/admin/visit', {
        visitorId,
        device,
        browser,
        path: window.location.pathname,
        isRegistered: !!isAuthenticated,
        userEmail: user?.email || '',
        userRole: user?.role || ''
      }).catch(() => {});
    } catch (e) {}
  }, [isAuthenticated, user]);

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

  // 2. Fetch Live Global Music (Dynamic rotation on refresh/switch)
  useEffect(() => {
    let isCancelled = false;

    async function fetchLiveTracks() {
      setLoadingLive(true);
      try {
        let endpoint = '';
        const seedQuery = refreshSeed > 0 ? `&seed=${refreshSeed}&ts=${Date.now()}` : `&ts=${Date.now()}`;

        if (searchTerm && searchTerm.trim()) {
          endpoint = `/live/search?q=${encodeURIComponent(searchTerm.trim())}&limit=25${seedQuery}`;
        } else if (activeGenre && activeGenre !== 'trending') {
          endpoint = `/live/genre?genre=${encodeURIComponent(activeGenre)}&limit=20${seedQuery}`;
        } else {
          endpoint = `/live/trending?limit=25${seedQuery}`;
        }

        const res = await axiosClient.get(endpoint);
        if (!isCancelled && res.data) {
          const fetched = res.data.songs || [];
          if (fetched.length > 0) {
            setLiveSongs(fetched);
          } else if (!searchTerm && (!activeGenre || activeGenre === 'trending')) {
            setLiveSongs(FALLBACK_TRENDING_HITS);
          } else {
            setLiveSongs([]);
          }
          setRelatedSongs(res.data.relatedSuggestions || []);
        }
      } catch (err) {
        console.warn("Live music fetch error:", err.message);
      } finally {
        if (!isCancelled) setLoadingLive(false);
      }
    }

    const timer = setTimeout(fetchLiveTracks, 250);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [searchTerm, activeGenre, refreshSeed]);

  // Handle Indian Genre selection with auto-slide down to the live songs section
  const handleSelectGenre = (genreId) => {
    setSearchTerm('');
    setActiveGenre(genreId);
    setRefreshSeed(prev => prev + 1); // Trigger fresh dynamic pool
    setTimeout(() => {
      if (liveSectionRef.current) {
        liveSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 120);
  };

  // User trigger to rotate & pull new songs
  const handleRefreshSongs = () => {
    setRefreshSeed(prev => prev + 1);
  };

  // ML Recommendations
  const allAvailableSongs = [...liveSongs, ...communitySongs];
  const recommendedSongs = rankSongsForUser(allAvailableSongs);
  const topGenres = getTopUserGenres();

  const todayFormatted = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short'
  });

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
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        
        {/* Mobile Search Bar with Instant 5 Suggestions */}
        <div className="md:hidden mb-5">
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
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 p-5 sm:p-12 mb-8 sm:mb-10 shadow-2xl">
          
          {/* Background 3D Sphere in Hero */}
          <div className="absolute -right-10 -top-10 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] opacity-50 sm:opacity-60 pointer-events-none">
            <AudioSphere3D theme={isArtist ? 'artist' : 'emerald'} interactive={false} />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SPATIAL AUDIO • 320 KBPS</span>
            </div>

            <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-3 sm:mb-4">
              Stream Infinite Music, <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Feel In 3D Space.
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {liveSongs.length > 0 && (
                <button
                  onClick={() => playSong(liveSongs[0], liveSongs)}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Top Hit</span>
                </button>
              )}

              <button
                onClick={toggleFullscreen3D}
                className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-white font-medium text-xs tracking-wider uppercase hover:border-emerald-500/40 transition-all"
              >
                <Disc3 className="w-4 h-4 text-emerald-400" />
                <span>3D Stage</span>
              </button>

              {isArtist && (
                <Link
                  to="/artist/studio"
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-300 font-medium text-xs tracking-wider uppercase transition-all"
                >
                  <Upload className="w-4 h-4 text-cyan-400" />
                  <span>Artist Studio</span>
                </Link>
              )}
            </div>
          </div>

          {/* Mini Equalizer Bar at Hero Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 opacity-30 pointer-events-none">
            <AudioVisualizer3D barCount={40} />
          </div>
        </div>

        {/* Not Authenticated Notice */}
        {!isAuthenticated && (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Join AURA 3D Music</h3>
              <p className="text-xs text-slate-300">Sign in to save your taste, customize offline tracks, and get verified access.</p>
            </div>
            <Link
              to="/login"
              className="shrink-0 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-transform active:scale-95"
            >
              Sign In / Register
            </Link>
          </div>
        )}

        {/* YouTube to Ad-Free 3D Audio Streamer */}
        <YouTubeStreamerSection />

        {/* SECTION 1: Explore Indian Sounds  */}
        <IndianGenresSection
          activeGenre={activeGenre}
          onSelectGenre={handleSelectGenre}
        />

        {/* SECTION 2: Live Songs Results (Search / Selected Genre / Trending) */}
        <section ref={liveSectionRef} className="mb-12 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2 min-w-0">
              <Zap className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white font-['Space_Grotesk'] capitalize truncate">
                {searchTerm
                  ? `Live Results for "${searchTerm}"`
                  : activeGenre && activeGenre !== 'trending'
                  ? `${activeGenre} Spotlight Hits`
                  : '🔥 Daily Top Trending Hits'}
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                <Calendar className="w-3 h-3" /> {todayFormatted}
              </span>
              <span className="text-xs font-mono text-slate-400 shrink-0">({liveSongs.length})</span>
            </div>

            {/* Action Buttons: Shuffle / Fresh Songs + View Mode Toggle + Play All */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              {/* Dynamic Rotate / Shuffle Songs Button */}
              <button
                onClick={handleRefreshSongs}
                title="Shuffle & Load Fresh Songs"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingLive ? 'animate-spin text-emerald-400' : ''}`} />
                <span className="hidden sm:inline">Fresh</span> Shuffle
              </button>

              {/* View Toggle (List vs Grid) */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  title="Spotify-style List View (6-7 songs per screen view)"
                  className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-emerald-500 text-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  title="Card Grid View"
                  className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-emerald-500 text-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>

              {/* Play All */}
              <button
                onClick={() => {
                  if (liveSongs.length > 0) playSong(liveSongs[0], liveSongs);
                }}
                className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 px-2 py-1"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Play All
              </button>
            </div>
          </div>

          {loadingLive ? (
            viewMode === 'list' ? (
              <div className="flex flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-14 rounded-xl bg-white/5 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-white/5 animate-pulse" />
                ))}
              </div>
            )
          ) : liveSongs.length > 0 ? (
            viewMode === 'list' ? (
              /* Sleek Spotify-Style Mobile List View: 6-7 songs per screen view */
              <div className="flex flex-col gap-2">
                {liveSongs.map((song, i) => (
                  <SongRow
                    key={song._id || song.id || i}
                    song={song}
                    playlist={liveSongs}
                    index={i}
                  />
                ))}
              </div>
            ) : (
              /* Card Grid View */
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {liveSongs.map((song, i) => (
                  <SongCard3D
                    key={song._id || song.id || i}
                    song={song}
                    playlist={liveSongs}
                    index={i}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="rounded-2xl glass-card border border-white/10 p-8 sm:p-10 text-center">
              <Disc3 className="w-12 h-12 text-slate-500 mx-auto mb-3 animate-spin" />
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
                  <div className="flex flex-col gap-2">
                    {relatedSongs.map((song, i) => (
                      <SongRow key={song._id || song.id || i} song={song} playlist={relatedSongs} index={i} />
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
      {isProfileOpen && (
        <ProfileEditModal onClose={() => setIsProfileOpen(false)} />
      )}

      {/* Support / Feedback / Admin Recovery Modal */}
      {isSupportOpen && (
        <SupportFeedbackModal onClose={() => setIsSupportOpen(false)} />
      )}
    </div>
  );
}
