# AgriVision AI — Plant Health Intelligence & Disease Database

An AI-powered agricultural diagnosis and crop health monitoring platform, engineered with a relational SQLite database grounded in international plant pathology standards.

---

## 🌾 Open Source Agronomic Standards Referenced

1. **[PlantVillage Dataset](https://github.com/spMohanty/PlantVillage-Dataset) (Penn State / EPFL)**:
   - 10+ standard crop classes (*Tomato, Potato, Chilli, Maize, Rice, Apple, Grape, Strawberry, Pepper, Squash*).
   - Clinical disease symptom profiles and environmental trigger modeling.
2. **[EPPO Global Database](https://gd.eppo.int/) (European and Mediterranean Plant Protection Organization)**:
   - International taxonomic nomenclature and EPPO host/pest identifier codes (`LYCES`, `SOLTU`, `ZEAMX`, `ALTESO`, `PHYTIN`, `RALSSO`).
   - Causal pathogen taxonomy (Fungi, Oomycetes, Bacteria, Viruses) and quarantine alerts.
3. **[FAO Integrated Pest Management (IPM)](https://www.fao.org/pest-and-pesticide-management/ipm/en/)**:
   - 25+ verified multi-tiered treatment protocols: **Biological**, **Chemical** (with active ingredients and Pre-Harvest Interval [PHI] safety periods), **Cultural**, and **Preventative**.
4. **FarmOS / OpenFarm**:
   - Field plot tracking, risk classification, and scouting history.

---

## 🛠️ Architecture & Database Improvements

### 1. Database Layer (`backend/database.py`)
- **Foreign Keys Enforced**: Added SQLite `PRAGMA foreign_keys=ON` hook via SQLAlchemy connection listener.
- **Multi-Host Pathogen Mapping**: Replaced the flawed 1-to-many relationship with a `crop_diseases` association table, allowing pathogens (*Phytophthora infestans*, *Ralstonia solanacearum*) to attach to all natural host plants.
- **Pathogen Entity**: Segregated causal agents into their own taxonomic entity.
- **Automated Seeding**: Curated baseline dataset automatically seeds on first launch.
- **Reliable Storage**: Database path locked to `backend/agrivision.db`.

### 2. Backend API (`backend/main.py`)
- Full RESTful service built with **FastAPI** and **SQLAlchemy 2.0**:
  - `GET /api/health` - Database connection and row statistics.
  - `GET /api/crops` - Host crop taxonomy.
  - `GET /api/diseases` - Filterable disease catalog.
  - `GET /api/fields` - Monitored farm plots.
  - `GET /api/history` - Prediction scans stored in SQLite.
  - `POST /api/analyze` - Image diagnostic engine that **persists scan results directly into SQLite**.
  - `GET /api/dashboard` - Real-time farm telemetry and KPI summaries.
  - `GET /api/export` - Structured JSON agronomic export.

### 3. Frontend & Client Bridge (`data.js`, `scanner.js`, HTML files)
- **AgriDB Bridge**: Automatically communicates with FastAPI on `http://localhost:8080` while providing offline sync through `localStorage`.
- **Plant Scanner**: Live AI diagnosis with crop selector and immediate database logging.
- **Disease Library**: Dynamic search, crop filtering, and IPM treatment drawers.
- **Scan History**: Chronological prediction history with risk level filtering.

---

## 🚀 How to Run Locally

### Option 1: One-Click Launcher (Windows)
Double-click `run_server.bat` in the project root.

### Option 2: Command Line
```powershell
# 1. Install dependencies
pip install -r backend/requirements.txt

# 2. Launch the server
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8080 --reload
```

---

## 🌐 Live URLs

- **Dashboard:** [http://localhost:8080/dashboard.html](http://localhost:8080/dashboard.html)
- **Plant Scanner:** [http://localhost:8080/scanner.html](http://localhost:8080/scanner.html)
- **Disease Library:** [http://localhost:8080/diseases.html](http://localhost:8080/diseases.html)
- **Scan History:** [http://localhost:8080/history.html](http://localhost:8080/history.html)
- **Interactive Swagger Docs:** [http://localhost:8080/docs](http://localhost:8080/docs)
