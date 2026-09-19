import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MusicProvider } from './context/MusicContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ArtistStudioPage from './pages/ArtistStudioPage';
import AlbumDetailPage from './pages/AlbumDetailPage';
import BottomPlayerBar from './components/player/BottomPlayerBar';
import Fullscreen3DPlayer from './components/player/Fullscreen3DPlayer';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MusicProvider>
          <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
            
            {/* Main Page Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/artist/studio" element={<ArtistStudioPage />} />
              <Route path="/album/:id" element={<AlbumDetailPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            {/* Persistent Bottom 3D Music Player Bar */}
            <BottomPlayerBar />

            {/* Fullscreen 3D Vinyl Turntable Overlay Modal */}
            <Fullscreen3DPlayer />

          </div>
        </MusicProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
