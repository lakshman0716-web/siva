@echo off
title AgriVision AI - Local Server
echo ========================================================
echo        AgriVision AI - Plant Disease Intelligence
echo      Connected to SQLite DB (PlantVillage & EPPO)
echo ========================================================
echo Starting FastAPI server on http://localhost:8080 ...
echo Press CTRL+C to stop the server anytime.
echo.

python -m uvicorn backend.main:app --host 0.0.0.0 --port 8080 --reload
pause
