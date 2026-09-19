# AURA 3D • Next-Gen Spatial Music Streaming Platform (Spotify 3D Clone)

A complete full-stack 3D music streaming application built with **React 18**, **Three.js**, **Tailwind CSS**, **Node.js/Express (v5)**, **MongoDB**, and **ImageKit**.

---

## 🌟 Highlights & 3D UI/UX Features

1. **Dedicated 3D Login Experience (`/login`)**:
   - Interactive Three.js particle constellation & audio sphere that follows mouse movement with inertia and pulsates.
   - 3D Parallax Glass Tilt Card (`perspective: 1000px`, `rotateX`, `rotateY`, `glare`).
   - Dynamic Role Switcher: **Listener (User)** with Emerald theme vs. **Artist (Creator)** with Electric Cyan/Purple theme (morphed in real-time in the 3D particle universe).
   - Instant 1-click test credential buttons.

2. **Photorealistic 3D Vinyl Turntable (`VinylTurntable3D`)**:
   - Metallic turntable deck with precision platter and under-deck audio glow.
   - Deep obsidian vinyl record with concentric micro-grooves and specular shine.
   - Articulated 3D tonearm with stylus needle that smoothly lowers onto the record when music is playing and retracts when paused.
   - Spins at authentic 33⅓ RPM in Three.js.
   - Center sticker label showcasing current track cover artwork.

3. **Real-time 3D Audio Visualizer (`AudioVisualizer3D`)**:
   - Powered by the browser **Web Audio API** (`AudioContext` & `AnalyserNode`).
   - Neon frequency equalizer bars/columns reacting dynamically to real-time audio frequencies.

4. **3D Cards & Micro-interactions**:
   - **SongCard3D**: 3D tilt on hover with album art, active audio wave indicators, and peek vinyl disc.
   - **AlbumCard3D**: 3D album jacket from which the vinyl record slides out on hover.

5. **Artist Studio Portal (`/artist/studio`)**:
   - Dedicated dashboard for artists to upload audio tracks (.mp3, .wav, .m4a).
   - Holographic drag-and-drop dropzone.
   - **Instant Audio Preview** before uploading so artists can verify audio.
   - Album creation modal to group tracks into albums.
   - Confetti celebration upon release!

6. **Global Bottom Player Bar (`BottomPlayerBar`)**:
   - Spotify-style glassmorphic bottom bar with rotating mini vinyl.
   - Smooth scrubber with timestamp, volume slider, shuffle, repeat, prev/next.
   - "3D Stage" button to launch the full-screen 3D vinyl turntable stage from any page.

---

## 📂 Modular Clean Architecture (Separate Files)

```
spotify-cloned/
├── backend/
│   ├── server.js                          # Server entrypoint with env loader
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── app.js                         # Express 5 app, CORS, static frontend serving
│       ├── db/db.js                       # MongoDB Atlas connection
│       ├── controllers/
│       │   ├── auth.controller.js         # Register, Login, GetMe, Logout
│       │   └── music.controller.js        # CreateMusic, GetMyTracks, GetAllMusics, Albums
│       ├── middlewares/
│       │   └── auth.middleware.js         # Bearer token & cookie extraction, role check
│       ├── models/
│       │   ├── user.model.js              # User schema (roles: 'user' | 'artist')
│       │   ├── music.model.js             # Music track schema
│       │   └── album.model.js             # Album schema
│       ├── routes/
│       │   ├── auth.routes.js             # /api/auth routes
│       │   └── music.routes.js            # /api/music routes
│       └── services/
│           └── storage.service.js         # ImageKit cloud upload
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js                     # Vite build & proxy config
│   ├── tailwind.config.js                 # Cyberpunk & Spotify 3D palette
│   ├── postcss.config.js
│   └── src/
│       ├── main.jsx                       # React 18 root
│       ├── App.jsx                        # React Router + Global Contexts
│       ├── index.css                      # 3D perspective, glassmorphism & glows
│       ├── api/
│       │   └── axiosClient.js             # Axios client with Bearer auth interceptor
│       ├── context/
│       │   ├── AuthContext.jsx            # User/Artist session state & actions
│       │   └── MusicContext.jsx           # Audio playback & Web Audio API analyser
│       ├── components/
│       │   ├── 3d/
│       │   │   ├── AudioSphere3D.jsx      # 3D interactive particle sphere
│       │   │   ├── VinylTurntable3D.jsx   # Photorealistic 3D vinyl turntable
│       │   │   ├── AudioVisualizer3D.jsx  # Real-time 3D frequency equalizer
│       │   │   └── FloatingParticles3D.jsx# Cosmic glowing dust
│       │   ├── common/
│       │   │   ├── Navbar.jsx             # Floating glass navbar
│       │   │   └── GlassCard.jsx          # 3D tilt interactive card
│       │   ├── cards/
│       │   │   ├── SongCard3D.jsx         # 3D song card with play state
│       │   │   └── AlbumCard3D.jsx        # 3D sliding vinyl album jacket
│       │   ├── player/
│       │   │   ├── BottomPlayerBar.jsx    # Persistent bottom player bar
│       │   │   └── Fullscreen3DPlayer.jsx # Full-screen 3D turntable stage
│       │   └── artist/
│       │       ├── TrackUploadModal.jsx   # 3D audio upload dropzone & preview
│       │       └── AlbumCreateModal.jsx   # Album creation modal
│       ├── pages/
│       │   ├── HomePage.jsx               # 3D Hero, Trending Songs, Albums
│       │   ├── LoginPage.jsx              # Dedicated 3D Login & Register page
│       │   ├── ArtistStudioPage.jsx       # Artist creator dashboard
│       │   └── AlbumDetailPage.jsx        # Album tracklist & play all
│       └── utils/
│           └── helpers.js                 # Duration formatters, sample covers
├── package.json                           # Root scripts
└── start.bat                              # 1-Click launcher for Windows
```

---

## 🚀 How to Run

### Option 1: One-Click Launch (Windows)
Double click `start.bat` in the project root! It will start the server and serve the 3D application on `http://localhost:3000`.

### Option 2: Single Command Production Mode
```bash
npm start
```
Then open: **`http://localhost:3000`**

### Option 3: Full Development Mode (with Instant HMR)
**Terminal 1 (Backend):**
```bash
cd backend
node server.js
```
**Terminal 2 (Frontend with hot reload):**
```bash
cd frontend
npm run dev
```
Then open: **`http://localhost:5173`**

---

## 🌐 Deployment Ready

- **Unified Deployment (Render / Railway / VPS / Heroku)**:
  Run `npm run build` to build the frontend, then `npm start`. Express automatically serves the static 3D frontend files alongside all `/api` endpoints on a single port!
- **Separate Deployment (Vercel / Netlify)**:
  Deploy the `frontend` folder to Vercel/Netlify and set the environment variable:
  `VITE_API_URL=https://your-backend-domain.com/api`
