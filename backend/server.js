const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '.env'), override: true });

console.log("JWT SECRET LOADED:", !!process.env.JWT_SECRET);

const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Keep-Alive Heartbeat: Prevents Render free tier from sleeping (Every 3 minutes)
const BACKEND_URL = process.env.RENDER_EXTERNAL_URL || 'https://aura-3d-backend.onrender.com';
setInterval(() => {
    https.get(`${BACKEND_URL}/api/ping`, (res) => {
        console.log(`[Keep-Alive Alarm] Self-ping status: ${res.statusCode} - Backend 100% awake`);
    }).on('error', (err) => {
        console.warn(`[Keep-Alive Alarm] Ping notice: ${err.message}`);
    });
}, 3 * 60 * 1000);
