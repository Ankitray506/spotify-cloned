import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { MusicProvider, useMusic } from './context/MusicContext';
import { sendVisitorPing, pingKeepAlive } from './utils/deviceTracker';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ArtistStudioPage from './pages/ArtistStudioPage';
import AlbumDetailPage from './pages/AlbumDetailPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import BottomPlayerBar from './components/player/BottomPlayerBar';
import Fullscreen3DPlayer from './components/player/Fullscreen3DPlayer';
import LiveLyricsModal from './components/player/LiveLyricsModal';
import GuestLimitModal from './components/common/GuestLimitModal';

function AppLifecycleWatcher() {
  const { user } = useAuth();

  useEffect(() => {
    // 1. Initial rich visitor tracking ping
    sendVisitorPing(user);

    // 2. Keep-Alive Alarm (Pings Render backend every 25 seconds so server never sleeps)
    pingKeepAlive();
    const keepAliveTimer = setInterval(() => {
      pingKeepAlive();
    }, 25000);

    return () => clearInterval(keepAliveTimer);
  }, [user]);

  return null;
}

function GlobalPlayerAndModals() {
  const { showGuestLimitModal, setShowGuestLimitModal } = useMusic();

  return (
    <>
      {/* Persistent Bottom 3D Music Player Bar */}
      <BottomPlayerBar />

      {/* Fullscreen 3D Vinyl Turntable Overlay Modal */}
      <Fullscreen3DPlayer />

      {/* Live Synchronized Karaoke Lyrics Modal */}
      <LiveLyricsModal />

      {/* Guest 5-Song Limit Prompt Modal */}
      <GuestLimitModal
        isOpen={showGuestLimitModal}
        onClose={() => setShowGuestLimitModal(false)}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLifecycleWatcher />
        <MusicProvider>
          <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
            
            {/* Main Page Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/artist/studio" element={<ArtistStudioPage />} />
              <Route path="/album/:id" element={<AlbumDetailPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            {/* Global Overlays & Players */}
            <GlobalPlayerAndModals />

          </div>
        </MusicProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
