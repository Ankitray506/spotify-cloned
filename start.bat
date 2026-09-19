@echo off
echo ====================================================
echo Starting AURA 3D Music Streaming Platform...
echo ====================================================
cd /d "%~dp0\backend"
node server.js
pause
