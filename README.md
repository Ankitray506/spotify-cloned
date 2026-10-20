# AURA 3D • Next-Gen Spatial Music Streaming Platform (Spotify 3D Clone)

[![React 18](https://img.shields.io/badge/Frontend-React_18_%2B_Vite-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/3D_Engine-Three.js-black?logo=three.js)](https://threejs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js_v24-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AURA 3D** is a complete production-grade full-stack spatial music streaming application designed for visual immersion, audio fidelity, and **100% ad-free playback**. Combining a **Three.js WebGL 3D stage**, real-time **Web Audio API frequency analyzers**, live **synchronized karaoke lyrics**, a **YouTube-style search suggestion engine**, **regional Indian sounds (featuring Maithili Lokgeet)**, and a **Master Admin moderation console**, AURA 3D delivers a futuristic web and mobile audio experience.

---

## 🌟 Highlights & Pro-Level Features

### 1. 🎵 100% Ad-Free Global Music Streaming Engine
- Direct search across millions of global tracks with direct high-fidelity CDN playback (320 kbps and 160 kbps).
- Automatic high-resolution artwork fetching and 3D surface mapping.
- Native volume controls, duration tracking, repeat, and queue shuffle modes.

### 2. 🎤 Real-Time Synchronized Lyrics (Karaoke Engine)
- Dedicated Live Lyrics overlay modal accessible from the bottom player bar.
- Standard **LRC timestamp parser** (`[mm:ss.xx]`) that synchronizes lyrics directly with the audio element playback position.
- Active lyric line is highlighted in large, glowing cyan text with reduced opacity for upcoming lines and smooth auto-scrolling.
- Fallback for unsynced plain lyrics and empty states.

### 3. 🔍 YouTube-Style Instant 5 Search Suggestions
- Real-time debounced instant suggestion dropdown right inside the search bar.
- Queries return the **top 5 most relevant matching tracks** with authentic album art, artist name, and year.
- Clicking any suggestion launches direct playback instantly.

### 4. 🪕 Regional Indian Music Ecosystem & Maithili Integration
- **Maithili Lokgeet & Hits (मैथिली)**: Dedicated category celebrating traditional and modern Maithili culture featuring legends like Kunj Bihari, Maithili Thakur, Ram Babu Jha, and Rajni Pallavi with real cover templates.
- **Bollywood Blockbusters** (Arijit, Shreya Ghoshal, Pritam).
- **Punjabi Hits** (Diljit Dosanjh, AP Dhillon, Karan Aujla).
- **Bhojpuri Hits** (Pawan Singh, Khesari Lal Yadav).
- **Desi Hip-Hop** (DIVINE, KR$NA, Seedhe Maut).
- **90s Evergreen Melodies** (Kumar Sanu, Alka Yagnik, Udit Narayan).
- **South Indian Blockbusters** (Anirudh Ravichander, AR Rahman).
- **Midnight Lofi Chill** & **Devotional Bhakti Aartis**.

### 5. 🎧 5-Song Free Demo Preview Limit for Guests
- Unauthenticated guest listeners can browse and listen to **5 free preview tracks** without interruption.
- On the 6th song attempt, a glowing modal prompts the user to create a free account or log in to unlock unlimited streaming.

### 6. 🎨 Independent Artist Studio (Max 4 Songs Quota)
- Independent musicians have a separate portal to publish original audio files (`.mp3`, `.wav`, `.m4a`) and build albums.
- Strict upload quota of **4 tracks per artist account** enforced both in the UI and server-side.

### 7. 🛡️ Master Admin Console (`/admin`)
- Accessible strictly by the platform owner (`ankitrayh6475@gmail.com` / `role: 'admin'`).
- **Real-Time Analytics**: Total registered users, listeners vs. artists count, published tracks count, and total feedback received.
- **Top 10 Active Listeners Leaderboard**: Ranks users based on their listening activity (`listenCount`).
- **User Moderation (1-Click Block/Unblock)**: Administrators can suspend spam/abusive accounts. Suspended accounts are immediately locked out of login.
- **Admin Password Override**: Direct password reset for any user who loses access to their account.
- **Bug & Feedback Inbox**: Inquiries sent from users can be viewed and marked as "Resolved" with a single click.

### 8. 🔐 Enterprise Authentication & 2-Way Password Recovery
- **Password Visibility Toggle**: Interactive Eye button (`Eye` / `EyeOff`) to show or hide entered passwords.
- **Real-Time Password Strength Meter**: Enforces strong passwords on signup (8+ chars, uppercase, lowercase, numbers, special characters, anti-repeating sequences).
- **Self-Service Forgot Password Recovery**: Users can reset their password on the login page by verifying their username and registered email.

### 9. ⚡ Zero-Data Offline Audio Caching & Listening History
- Leverages the browser `CacheStorage` API to cache every played track locally.
- Replaying previously listened tracks consumes zero network bandwidth.
- Dedicated Listening History playlist saved in `localStorage` for offline access.

### 10. 🕹️ Interactive 3D Vinyl Turntable & Audio Reactive Stage
- Built with **Three.js** and WebGL.
- Photorealistic vinyl turntable rotating at 33⅓ RPM with an articulated tonearm tracking audio playback.
- Pulsing neon cyan underglow dynamically reacting to bass frequencies via Web Audio API `AnalyserNode`.

---

## 📂 Project Architecture

```
spotify-cloned/
├── backend/
│   ├── server.js                          # Unified server entrypoint & env loader
│   ├── .env.example                       # Environment variables template
│   └── src/
│       ├── app.js                         # Express 5 app, CORS, static frontend serving
│       ├── db/db.js                       # MongoDB Atlas connection
│       ├── controllers/
│       │   ├── admin.controller.js        # Admin metrics, user block/unblock, feedback
│       │   ├── auth.controller.js         # Register, Login, Forgot Password, Profile
│       │   ├── liveMusic.controller.js    # Streaming search, suggestions, and genres
│       │   └── music.controller.js        # Artist 4-track uploads, lyrics, albums
│       ├── middlewares/
│       │   └── auth.middleware.js         # JWT verification, authUser, authArtist, authAdmin
│       ├── models/
│       │   ├── user.model.js              # User schema (roles, isBlocked, listenCount)
│       │   ├── feedback.model.js          # Direct feedback and issue reports
│       │   ├── music.model.js             # Uploaded songs schema
│       │   └── album.model.js             # Album schema
│       └── routes/
│           ├── admin.routes.js            # /api/admin endpoints
│           ├── auth.routes.js             # /api/auth endpoints
│           ├── liveMusic.routes.js        # /api/live endpoints
│           └── music.routes.js            # /api/music endpoints
├── frontend/
│   ├── index.html
│   ├── vite.config.js                     # Vite build configuration & proxy
│   ├── tailwind.config.js                 # Cyberpunk & Spotify 3D palette
│   └── src/
│       ├── api/axiosClient.js             # Axios client with Bearer auth token interceptor
│       ├── context/
│       │   ├── AuthContext.jsx            # User state, auth, admin flags
│       │   └── MusicContext.jsx           # Audio player, guest limits, lyrics, cache
│       ├── utils/
│       │   ├── lrcParser.js               # Synchronized LRC lyrics parser
│       │   └── helpers.js                 # Duration formatting, cover fallbacks
│       ├── components/
│       │   ├── 3d/                        # Three.js Canvas components
│       │   │   ├── AudioSphere3D.jsx      # Interactive login constellation sphere
│       │   │   ├── VinylTurntable3D.jsx   # Interactive 3D vinyl turntable
│       │   │   └── AudioVisualizer3D.jsx  # Web Audio API frequency bars
│       │   ├── artist/                    # TrackUploadModal, AlbumCreateModal
│       │   ├── cards/                     # SongCard3D, AlbumCard3D
│       │   ├── common/                    # Navbar, SearchWithSuggestions, Modals
│       │   └── player/                    # BottomPlayerBar, Fullscreen3DPlayer, LiveLyricsModal
│       └── pages/
│           ├── HomePage.jsx               # Music discovery, search suggestions, genres
│           ├── LoginPage.jsx              # 3D login, register, password meter, forgot password
│           ├── ArtistStudioPage.jsx       # Artist studio with 4-track quota
│           └── AdminDashboardPage.jsx     # Master Admin console (stats, block user, reset pass)
├── package.json                           # Root convenience scripts
└── start.bat                              # 1-Click launcher for Windows
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas database connection string

### Quick Setup

```bash
# 1. Clone repository
git clone https://github.com/your-username/spotify-cloned.git
cd spotify-cloned

# 2. Install backend & frontend dependencies
cd backend && npm install
cd ../frontend && npm install

# 3. Configure backend environment
cd ../backend
cp .env.example .env
# Open backend/.env and set MONGO_URI and JWT_SECRET

# 4. Build frontend bundle
cd ../frontend
npm run build

# 5. Start unified server
cd ..
node backend/server.js
```

Open **`http://localhost:3000`** in your browser!

---

## ⌨️ Global Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Space` | Play / Pause current track |
| `ArrowRight` | Seek +5 seconds forward |
| `ArrowLeft` | Seek -5 seconds backward |
| `M` | Mute / Unmute audio |
| `L` | Toggle Live Synchronized Lyrics |

---

## ☁️ Step-by-Step Production Deployment Guide

### Option 1: Render (Recommended for Full Stack MERN)
1. Push your repository to **GitHub**.
2. Go to [Render Dashboard](https://dashboard.render.com/) and click **New > Web Service**.
3. Connect your GitHub repository.
4. Set the build configuration:
   - **Environment**: `Node`
   - **Build Command**: `npm install && cd frontend && npm install && npm run build && cd ../backend && npm install`
   - **Start Command**: `node backend/server.js`
5. In **Environment Variables**, add:
   - `MONGO_URI`: `mongodb+srv://...` (your MongoDB connection string)
   - `JWT_SECRET`: A secure 32+ character random secret string
   - `NODE_ENV`: `production`
6. Click **Deploy Web Service**. Your app is live with free automatic SSL!

### Option 2: Railway / VPS
You can run `npm start` directly under PM2:
```bash
npm run build --prefix frontend
pm2 start backend/server.js --name "aura-3d"
```

---

## 📱 How to Convert to an Android APK (Capacitor)

You can convert the AURA 3D web application into an installable `.apk` file for Android:

```bash
# 1. Inside the frontend folder, install Capacitor:
cd frontend
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Initialize Capacitor:
npx cap init "AURA 3D" "com.aura.music" --web-dir dist

# 3. Add the Android platform:
npm run build
npx cap add android

# 4. Open in Android Studio:
npx cap open android
```

In Android Studio:
1. Wait for Gradle sync to complete.
2. Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
3. Locate the generated `app-debug.apk` in `android/app/build/outputs/apk/debug/`.
4. Transfer the `.apk` to any Android phone and install!

---

## 📬 Contact & Support

- **Lead Developer**: Ankit Ray
- **Email**: [ankitrayh6475@gmail.com](mailto:ankitrayh6475@gmail.com)
- **Role**: Creator & Full-Stack Architect of AURA 3D
