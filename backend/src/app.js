const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');
const liveMusicRoutes = require('./routes/liveMusic.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

// CORS configuration for cross-origin SPA requests with credentials & authorization headers
app.use(cors({
    origin: function(origin, callback) {
        // Allow all origins (localhost, production domain, Vercel, etc.)
        callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

// Instant Keep-Alive Alarm / Health Ping (0ms response to prevent Render sleep)
app.get('/api/ping', (req, res) => {
    res.status(200).json({ status: 'awake', timestamp: Date.now(), service: 'aura-3d-backend' });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/live', liveMusicRoutes);
app.use('/api/admin', adminRoutes);

// Serve static frontend in production if built
const frontendDistPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendDistPath));

// Fallback to index.html for SPA client-side routing (Express 5 compatible)
app.use((req, res, next) => {
    if (!req.path.startsWith('/api') && req.method === 'GET') {
        const indexPath = path.join(frontendDistPath, 'index.html');
        return res.sendFile(indexPath, (err) => {
            if (err) {
                next();
            }
        });
    }
    next();
});

module.exports = app;
