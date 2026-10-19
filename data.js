/**
 * AgriVision AI - Agronomic Data Layer & Client Database Bridge
 * Open Source Agronomy References:
 * - PlantVillage Dataset (Mohanty et al., Penn State / EPFL)
 * - EPPO Global Database (European and Mediterranean Plant Protection Organization)
 * - FAO Integrated Pest Management (IPM) guidelines
 */

const APP_DATA = {
  user: {
    name: 'Sivaiah Aradyulu',
    avatar: 'assets/sivaiah-aradyulu.jpg',
    role: 'AgriTech Lead & Agronomist',
    location: 'Agricultural Research Sector 04'
  },
  
  dashboard: {
    healthScore: 89,
    plantsMonitored: 18,
    scansThisMonth: 114,
    activeAlerts: 4
  },
  
  crops: [
    { id: 1, name: 'Tomato', scientific: 'Solanum lycopersicum', family: 'Solanaceae', eppo: 'LYCES', emoji: '🍅' },
    { id: 2, name: 'Potato', scientific: 'Solanum tuberosum', family: 'Solanaceae', eppo: 'SOLTU', emoji: '🥔' },
    { id: 3, name: 'Chilli', scientific: 'Capsicum annuum', family: 'Solanaceae', eppo: 'CPSAN', emoji: '🌶️' },
    { id: 4, name: 'Maize', scientific: 'Zea mays', family: 'Poaceae', eppo: 'ZEAMX', emoji: '🌽' },
    { id: 5, name: 'Rice', scientific: 'Oryza sativa', family: 'Poaceae', eppo: 'ORYSA', emoji: '🌾' },
    { id: 6, name: 'Apple', scientific: 'Malus domestica', family: 'Rosaceae', eppo: 'MABSD', emoji: '🍎' },
    { id: 7, name: 'Grape', scientific: 'Vitis vinifera', family: 'Vitaceae', eppo: 'VITVI', emoji: '🍇' },
    { id: 8, name: 'Strawberry', scientific: 'Fragaria ananassa', family: 'Rosaceae', eppo: 'FRAAN', emoji: '🍓' },
    { id: 9, name: 'Pepper (Bell)', scientific: 'Capsicum annuum var. grossum', family: 'Solanaceae', eppo: 'CPSAN', emoji: '🫑' },
    { id: 10, name: 'Squash', scientific: 'Cucurbita pepo', family: 'Cucurbitaceae', eppo: 'CUZPE', emoji: '🎃' }
  ],

  plants: [
    { id: 1, name: 'Tomato Field A', crop: 'Tomato', location: 'Field 01', planted: '2026-08-12', health: 92, risk: 'Low', lastScan: 'Today', emoji: '🍅' },
    { id: 2, name: 'Chilli Field B', crop: 'Chilli', location: 'Greenhouse 1', planted: '2026-09-01', health: 78, risk: 'Medium', lastScan: 'Yesterday', emoji: '🌶️' },
    { id: 3, name: 'Rice Field C', crop: 'Rice', location: 'North Sector', planted: '2026-07-15', health: 88, risk: 'Low', lastScan: '2 Days Ago', emoji: '🌾' },
    { id: 4, name: 'Potato Farm', crop: 'Potato', location: 'West Valley', planted: '2026-08-20', health: 65, risk: 'High', lastScan: 'Today', emoji: '🥔' },
    { id: 5, name: 'Corn Acres', crop: 'Maize', location: 'East Sector', planted: '2026-09-10', health: 95, risk: 'Low', lastScan: '3 Days Ago', emoji: '🌽' },
    { id: 6, name: 'Apple Orchard', crop: 'Apple', location: 'Hillside', planted: '2024-03-10', health: 82, risk: 'Medium', lastScan: 'Yesterday', emoji: '🍎' }
  ],
  
  history: [
    { id: 101, image: 'assets/diseases/early-blight.jpg', scan_uid: 'SCAN-2026-0101', date: 'Oct 07, 2026', plant: 'Tomato', result: 'Early Blight', confidence: 94, severity: 'Moderate', risk: 'Moderate', summary: 'VGG19 CNN detected characteristic concentric ring lesions on lower leaves.' },
    { id: 102, image: 'assets/diseases/leaf-spot.jpg', scan_uid: 'SCAN-2026-0102', date: 'Oct 06, 2026', plant: 'Chilli', result: 'Cercospora Leaf Spot', confidence: 88, severity: 'Low', risk: 'Low', summary: 'Light gray circular lesions with dark purplish margins detected on outer leaves.' },
    { id: 103, image: 'assets/diseases/healthy.jpg', scan_uid: 'SCAN-2026-0103', date: 'Oct 04, 2026', plant: 'Rice', result: 'Healthy Plant (No Disease Detected)', confidence: 99, severity: 'None', risk: 'None', summary: 'Leaves show optimal chlorophyll index and zero necrotic or fungal signatures.' },
    { id: 104, image: 'assets/diseases/late-blight.jpg', scan_uid: 'SCAN-2026-0104', date: 'Oct 03, 2026', plant: 'Potato', result: 'Late Blight', confidence: 92, severity: 'Severe', risk: 'High', summary: 'High urgency: Water-soaked expanding lesions detected with risk of rapid field dissemination.' },
    { id: 105, image: 'assets/diseases/apple-scab.jpg', scan_uid: 'SCAN-2026-0105', date: 'Oct 02, 2026', plant: 'Apple', result: 'Apple Scab', confidence: 85, severity: 'Moderate', risk: 'Moderate', summary: 'Olive-green velvety fungal spots observed on fruit sepals and leaf tissue.' },
    { id: 106, image: 'assets/diseases/corn-rust.jpg', scan_uid: 'SCAN-2026-0106', date: 'Oct 01, 2026', plant: 'Maize', result: 'Common Corn Rust', confidence: 96, severity: 'Low', risk: 'Moderate', summary: 'Small cinnamon-brown rust pustules detected on upper leaf surface.' }
  ],
  
  diseases: [
    {
      id: 'early-blight',
      image: 'assets/diseases/early-blight.jpg',
      name: 'Early Blight',
      pathogen: 'Alternaria solani',
      pathogenType: 'Fungus',
      eppoCode: 'ALTESO',
      crops: ['Tomato', 'Potato'],
      risk: 'Moderate',
      severity: 'Moderate',
      optimalTemp: '24-29°C',
      optimalHumidity: '> 75%',
      symptoms: [
        'Brown circular spots with concentric rings (target-board pattern) on older leaves',
        'Progressive chlorotic yellowing around affected leaf lesions',
        'Defoliation advancing from lower base of plant upwards',
        'Dark, sunken, leathery cankers on stems and fruit calyx'
      ],
      causes: [
        'Prolonged leaf wetness from overhead watering or heavy morning dew',
        'High relative humidity combined with warm temperatures (24-29°C)',
        'Pathogen overwintering in unburied solanaceous crop residues'
      ],
      actions: [
        '[Cultural] Prune and safely incinerate lowest 12 inches of foliage.',
        '[Biological] Spray Bacillus amyloliquefaciens bio-fungicide every 7-10 days.',
        '[Chemical] Apply protectant Copper Hydroxide (2.5 g/L) before rain events (PHI: 5 days).'
      ],
      prevention: 'Maintain 3-year crop rotation away from Solanaceae crops. Implement drip irrigation.'
    },
    {
      id: 'late-blight',
      image: 'assets/diseases/late-blight.jpg',
      name: 'Late Blight',
      pathogen: 'Phytophthora infestans',
      pathogenType: 'Oomycete',
      eppoCode: 'PHYTIN',
      crops: ['Potato', 'Tomato'],
      risk: 'High',
      severity: 'Severe',
      optimalTemp: '15-22°C',
      optimalHumidity: '> 90%',
      quarantine: true,
      symptoms: [
        'Large, irregular water-soaked dark lesions on leaves and petioles',
        'Delicate white fungal downy growth on leaf undersides in high humidity',
        'Rapid collapse and blackened foliage canopy within days',
        'Firm, granular dark brown rot penetrating into tubers and fruit'
      ],
      causes: [
        'Cool, wet, or foggy weather with prolonged relative humidity (> 90%)',
        'Infected volunteer tubers surviving from previous growing seasons',
        'Airborne sporangia carried for miles on storm fronts'
      ],
      actions: [
        '[Cultural] Rogue and destroy infected plants immediately to prevent regional spore shower.',
        '[Chemical] Apply targeted oomycete systemic fungicide (Mandipropamid/Cymoxanil, PHI: 7 days).',
        '[Biological] Inoculate soil with antagonistic Trichoderma harzianum.'
      ],
      prevention: 'Plant certified disease-free seed tubers and resistant cultivars (e.g. Mountain Magic, Sarpo Mira).'
    },
    {
      id: 'powdery-mildew',
      image: 'assets/diseases/powdery-mildew.jpg',
      name: 'Powdery Mildew',
      pathogen: 'Podosphaera leucotricha',
      pathogenType: 'Fungus',
      eppoCode: 'PODSLE',
      crops: ['Grape', 'Apple', 'Squash', 'Pepper (Bell)'],
      risk: 'Low to Moderate',
      severity: 'Moderate',
      optimalTemp: '20-27°C',
      optimalHumidity: '50-70%',
      symptoms: [
        'White talcum powder-like superficial fungal patches on foliage and shoots',
        'Upward curling, distortion, and premature drying of young leaves',
        'Russeting and corky scarring on developing fruits',
        'Reduced photosynthetic capacity causing yield depression'
      ],
      causes: [
        'High relative humidity at night followed by warm, dry sunny days',
        'Dense, shaded canopy microclimates with poor interior ventilation',
        'Excessive nitrogen fertilization producing succulent foliage'
      ],
      actions: [
        '[Biological] Spray potassium bicarbonate (3 g/L) or neem oil (0.5%) thoroughly.',
        '[Chemical] Apply wettable micronized sulfur during early vegetative growth (PHI: 3 days).',
        '[Cultural] Prune non-fruiting shoots to improve interior canopy sunlight penetration.'
      ],
      prevention: 'Ensure generous plant spacing and avoid late-season high-nitrogen fertilizing.'
    },
    {
      id: 'bacterial-wilt',
      image: 'assets/diseases/bacterial-wilt.jpg',
      name: 'Bacterial Wilt',
      pathogen: 'Ralstonia solanacearum',
      pathogenType: 'Bacterium',
      eppoCode: 'RALSSO',
      crops: ['Tomato', 'Chilli', 'Potato', 'Pepper (Bell)'],
      risk: 'High',
      severity: 'Severe',
      optimalTemp: '28-35°C',
      optimalHumidity: '> 85%',
      quarantine: true,
      symptoms: [
        'Sudden, catastrophic daytime wilting while foliage remains green',
        'Dark brown vascular ring discoloration inside stem cross-sections',
        'Milky white bacterial ooze streaming from cut stems suspended in water',
        'Irreversible collapse and mortality of mature plants'
      ],
      causes: [
        'Ralstonia solanacearum bacterial persistence in warm, waterlogged soils',
        'Root nematode feeding or cultivation wounds facilitating bacterial entry',
        'Movement of contaminated flood and furrow irrigation water'
      ],
      actions: [
        '[Cultural] Rogue infected plants with root ball. Solarize soil with clear plastic for 6-8 weeks.',
        '[Biological] Drench rhizosphere with Pseudomonas fluorescens bio-agent.',
        '[Mechanical] Construct elevated raised beds with gravel drainage channels.'
      ],
      prevention: 'Rotate fields with non-host poaceae grasses (corn, sorghum) for 4-5 years.'
    },
    {
      id: 'corn-rust',
      image: 'assets/diseases/corn-rust.jpg',
      name: 'Common Corn Rust',
      pathogen: 'Puccinia sorghi',
      pathogenType: 'Fungus',
      eppoCode: 'PUCCSO',
      crops: ['Maize'],
      risk: 'Moderate',
      severity: 'Moderate',
      optimalTemp: '16-25°C',
      optimalHumidity: '> 80%',
      symptoms: [
        'Small, elongated cinnamon-brown to golden-red pustules on both leaf surfaces',
        'Pustules rupture the epidermis, releasing powdery rust-colored spores',
        'Chlorosis and partial leaf death when pustules coalesce under heavy disease pressure',
        'Poor ear fill and lodging during maturity'
      ],
      causes: [
        'Airborne urediniospores blown northward from warmer overwintering zones',
        'Moderate temperatures with prolonged nighttime leaf wetness (> 6 hours)',
        'Susceptible sweet corn and field maize hybrids'
      ],
      actions: [
        '[Chemical] Apply azoxystrobin or propiconazole at silking stage if pustules appear (PHI: 30 days).',
        '[Cultural] Shred and till maize residue post-harvest to accelerate fungal decay.',
        '[Biological] Monitor spore trap readings provided by local ag extension.'
      ],
      prevention: 'Plant certified rust-resistant maize hybrids and stagger planting dates.'
    },
    {
      id: 'leaf-spot',
      image: 'assets/diseases/leaf-spot.jpg',
      name: 'Cercospora Leaf Spot',
      pathogen: 'Cercospora capsici',
      pathogenType: 'Fungus',
      eppoCode: 'CERCIC',
      crops: ['Chilli', 'Pepper (Bell)'],
      risk: 'Low to Moderate',
      severity: 'Low',
      optimalTemp: '25-30°C',
      optimalHumidity: '> 80%',
      symptoms: [
        'Circular lesions with grayish centers and distinct dark purplish-brown borders',
        'Center of lesion may drop out, creating a characteristic shot-hole look',
        'Premature defoliation exposing peppers to sunscald',
        'Elongated dark spots on stems and petioles'
      ],
      causes: [
        'Warm temperatures (25-30°C) with persistent foliar moisture from rain or sprinklers',
        'Fungal conidia splashing from soil surface onto lower foliage',
        'Contaminated seed stocks'
      ],
      actions: [
        '[Biological] Spray aqueous Neem Seed Kernel Extract (NSKE 5%) every 10 days.',
        '[Chemical] Spray protective Copper Oxychloride (3 g/L) at first symptom onset (PHI: 3 days).',
        '[Cultural] Clear fallen diseased leaves from around plant beds.'
      ],
      prevention: 'Switch from sprinkler to drip irrigation and utilize hot-water treated seeds.'
    },
    {
      id: 'apple-scab',
      image: 'assets/diseases/apple-scab.jpg',
      name: 'Apple Scab',
      pathogen: 'Venturia inaequalis',
      pathogenType: 'Fungus',
      eppoCode: 'VENTIN',
      crops: ['Apple'],
      risk: 'Moderate to High',
      severity: 'Moderate',
      optimalTemp: '13-22°C',
      optimalHumidity: '> 85%',
      symptoms: [
        'Olive-green velvety circular spots on young leaves and sepals',
        'Spots turn dark brown, corky, and thickened with age',
        'Premature yellowing and defoliation of orchard trees',
        'Cracked, deformed, scabby apples with reduced market value'
      ],
      causes: [
        'Ascospores discharged from overwintering fallen leaf litter during spring rains',
        'Extended leaf wetness periods (Mills infection table criteria)',
        'Susceptible traditional cultivars (McIntosh, Gala)'
      ],
      actions: [
        '[Chemical] Apply Captan or Myclobutanil protectant spray during pink bud stage (PHI: 14 days).',
        '[Biological] Spray Bacillus subtilis (Serenade ASO) during active blossom periods.',
        '[Cultural] Flail mow fallen autumn orchard leaves and apply 5% urea to hasten breakdown.'
      ],
      prevention: 'Plant scab-resistant apple cultivars such as Liberty, Enterprise, or Freedom.'
    },
    {
      id: 'rice-blast',
      image: 'assets/diseases/rice-blast.jpg',
      name: 'Rice Blast',
      pathogen: 'Magnaporthe oryzae',
      pathogenType: 'Fungus',
      eppoCode: 'PYRIOR',
      crops: ['Rice'],
      risk: 'High',
      severity: 'Severe',
      optimalTemp: '24-28°C',
      optimalHumidity: '> 90%',
      symptoms: [
        'Spindle-shaped elliptical lesions with gray-white centers and brown borders on leaves',
        'Neck blast: dark necrotic lesions at panicle base causing whitehead sterility',
        'Node rot causing catastrophic lodging in paddy fields'
      ],
      causes: [
        'Excessive nitrogen fertilization resulting in succulent leaf tissue',
        'Drought stress followed by abrupt flooding',
        'Warm daytime temperatures with persistent dew periods (> 10 hours)'
      ],
      actions: [
        '[Chemical] Apply Tricyclazole 75% WP (0.6 g/L) at heading stage (PHI: 21 days).',
        '[Biological] Treat seeds with Pseudomonas fluorescens bio-agent (10 g/kg).',
        '[Cultural] Maintain consistent 3-5 cm water depth in paddy fields.'
      ],
      prevention: 'Plant blast-resistant certified cultivars and avoid excess nitrogen split dosing.'
    },
    {
      id: 'tomato-leaf-curl',
      image: 'assets/diseases/tomato-leaf-curl.jpg',
      name: 'Tomato Yellow Leaf Curl',
      pathogen: 'Tomato Yellow Leaf Curl Virus',
      pathogenType: 'Virus',
      eppoCode: 'TYLCV0',
      crops: ['Tomato', 'Pepper (Bell)'],
      risk: 'High',
      severity: 'Severe',
      optimalTemp: '27-38°C',
      optimalHumidity: '40-60%',
      quarantine: true,
      symptoms: [
        'Severe upward curling and cupping of leaflets',
        'Interveinal chlorosis with bright golden yellow leaflet margins',
        'Extreme stunting of plant with bushy, compact growth',
        'Near complete flower drop and lack of fruit set'
      ],
      causes: [
        'Transmission by Bemisia tabaci (Silverleaf Whitefly) vector',
        'Hot, dry weather driving exponential whitefly reproduction',
        'Presence of alternative solanaceous weed hosts along field borders'
      ],
      actions: [
        '[Cultural] Install silver reflective plastic mulch to deter whitefly landings.',
        '[Biological] Spray Beauveria bassiana entomopathogenic fungus targeting whitefly nymphs.',
        '[Chemical] Drench seedling root balls with systemic Thiamethoxam prior to planting (PHI: 14 days).'
      ],
      prevention: 'Erect 50-mesh insect-proof netting over nursery beds and deploy yellow sticky cards.'
    },
    {
      id: 'healthy',
      image: 'assets/diseases/healthy.jpg',
      name: 'Healthy Plant (No Disease Detected)',
      pathogen: 'Beneficial / Optimum',
      pathogenType: 'Abiotic',
      eppoCode: 'HEALTH',
      crops: ['All Crops', 'Tomato', 'Potato', 'Chilli', 'Maize', 'Rice', 'Apple', 'Grape', 'Strawberry', 'Squash'],
      risk: 'None',
      severity: 'None',
      optimalTemp: '20-28°C',
      optimalHumidity: '50-70%',
      symptoms: [
        'Vibrant, uniform green foliage with optimal chlorophyll distribution',
        'Turgid petioles and sturdy, upright vegetative structure',
        'Normal floral cluster formation and active fruit set',
        'Complete absence of necrotic lesions, spots, or viral curling'
      ],
      causes: [
        'Balanced soil nutrition (optimal N-P-K and micronutrients)',
        'Optimal soil moisture and efficient root zone aeration',
        'Sufficient photosynthetically active radiation'
      ],
      actions: [
        '[Cultural] Maintain scheduled fertigation based on soil test readings.',
        '[Biological] Apply prophylactic cold-water kelp extract to enhance systemic acquired resistance.',
        '[Monitoring] Continue weekly scouting routines.'
      ],
      prevention: 'Conduct seasonal soil chemistry testing and monitor weather alerts proactively.'
    }
  ],
  
  weather: {
    temp: 24,
    condition: 'Cloudy',
    humidity: 68,
    rainProb: 0,
    wind: '11 km/h NW',
    uv: 'Low',
    insight: 'Overcast skies and 68% humidity in Field 4. Mild conditions favorable for routine foliage inspection.'
  },
  
  alerts: [
    { id: 1, type: 'Disease', severity: 'High', message: 'Late Blight risk elevated in Potato Farm. Immediate IPM containment advised.' },
    { id: 2, type: 'Weather', severity: 'Medium', message: 'Heavy rain expected tomorrow. Ensure proper field drainage channels in North Sector.' },
    { id: 3, type: 'Irrigation', severity: 'Low', message: 'Soil moisture dropping in Chilli Field B (Greenhouse 1).' },
    { id: 4, type: 'Crop Health', severity: 'Medium', message: 'Tomato Field A health score dropped by 4% this week. Scout for Early Blight.' },
    { id: 5, type: 'System', severity: 'Low', message: 'Open source PlantVillage & EPPO agronomic database v2.4 initialized.' }
  ],

  history: [
    {
      id: 1,
      scan_uid: 'SCAN-2026-0101',
      crop: 'Tomato',
      disease: 'Early Blight',
      confidence: 94,
      severity: 'Moderate',
      risk: 'Moderate',
      image_url: 'assets/diseases/early-blight.jpg',
      summary: 'VGG19 CNN detected characteristic concentric ring lesions on lower leaves.',
      date: 'Oct 07, 2026'
    },
    {
      id: 2,
      scan_uid: 'SCAN-2026-0102',
      crop: 'Chilli',
      disease: 'Cercospora Leaf Spot',
      confidence: 88,
      severity: 'Low',
      risk: 'Low',
      image_url: 'assets/diseases/leaf-spot.jpg',
      summary: 'Light gray circular lesions with dark purplish margins detected on outer leaves.',
      date: 'Oct 06, 2026'
    },
    {
      id: 3,
      scan_uid: 'SCAN-2026-0103',
      crop: 'Rice',
      disease: 'Healthy Plant (No Disease Detected)',
      confidence: 99,
      severity: 'None',
      risk: 'None',
      image_url: 'assets/diseases/healthy.jpg',
      summary: 'Leaves show optimal chlorophyll index and zero necrotic or fungal signatures.',
      date: 'Oct 04, 2026'
    },
    {
      id: 4,
      scan_uid: 'SCAN-2026-0104',
      crop: 'Potato',
      disease: 'Late Blight',
      confidence: 92,
      severity: 'Severe',
      risk: 'High',
      image_url: 'assets/diseases/late-blight.jpg',
      summary: 'High urgency: Water-soaked expanding lesions detected with risk of rapid field dissemination.',
      date: 'Oct 03, 2026'
    },
    {
      id: 5,
      scan_uid: 'SCAN-2026-0105',
      crop: 'Apple',
      disease: 'Apple Scab',
      confidence: 85,
      severity: 'Moderate',
      risk: 'Moderate',
      image_url: 'assets/diseases/apple-scab.jpg',
      summary: 'Olive-green velvety fungal spots observed on fruit sepals and leaf tissue.',
      date: 'Oct 02, 2026'
    },
    {
      id: 6,
      scan_uid: 'SCAN-2026-0106',
      crop: 'Maize',
      disease: 'Common Corn Rust',
      confidence: 96,
      severity: 'Low',
      risk: 'Moderate',
      image_url: 'assets/diseases/corn-rust.jpg',
      summary: 'Small cinnamon-brown rust pustules detected on upper leaf surface.',
      date: 'Oct 01, 2026'
    }
  ]
};

// -------------------------------------------------------------
// Client Database Bridge (window.AgriDB)
// Interacts with FastAPI SQLite backend when online,
// and gracefully syncs with localStorage and APP_DATA when offline.
// -------------------------------------------------------------
window.AgriDB = {
  // Dynamically resolve API base to prevent host/port mismatches
  getApiBase() {
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      if (window.location.origin.includes(':8080')) {
        return `${window.location.origin}/api`;
      }
    }
    return 'http://localhost:8080/api';
  },

  // Check backend availability
  async checkBackend() {
    try {
      const res = await fetch(`${this.getApiBase()}/health`, { signal: AbortSignal.timeout(1800) });
      if (res.ok) {
        const data = await res.json();
        return { online: true, data };
      }
    } catch (e) {
      // Backend offline or unreachable
    }
    return { online: false };
  },

  // Get Diseases with search & filters
  async getDiseases(params = {}) {
    try {
      const q = new URLSearchParams();
      if (params.crop) q.append('crop', params.crop);
      if (params.risk) q.append('risk', params.risk);
      if (params.search) q.append('search', params.search);

      const res = await fetch(`${this.getApiBase()}/diseases?${q.toString()}`, { signal: AbortSignal.timeout(2200) });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      // Fallback to local dataset
    }

    // Local filtering fallback
    let list = APP_DATA.diseases;
    if (params.crop && params.crop !== 'all') {
      list = list.filter(d => d.crops.includes('All Crops') || d.crops.some(c => c.toLowerCase() === params.crop.toLowerCase()));
    }
    if (params.risk && params.risk !== 'all') {
      list = list.filter(d => d.risk.toLowerCase().includes(params.risk.toLowerCase()));
    }
    if (params.search) {
      const term = params.search.toLowerCase();
      list = list.filter(d => 
        d.name.toLowerCase().includes(term) ||
        (d.pathogen && d.pathogen.toLowerCase().includes(term)) ||
        d.crops.some(c => c.toLowerCase().includes(term)) ||
        d.symptoms.some(s => s.toLowerCase().includes(term))
      );
    }
    return list;
  },

  // Get Scan History (seamlessly synchronizes SQLite and localStorage)
  async getHistory() {
    let remoteScans = [];
    try {
      const res = await fetch(`${this.getApiBase()}/history`, { signal: AbortSignal.timeout(2200) });
      if (res.ok) {
        remoteScans = await res.json();
      }
    } catch (e) {
      // fallback to offline cache
    }

    // Read locally stored scans
    let localScans = [];
    try {
      const saved = localStorage.getItem('agrivision_user_scans');
      if (saved) localScans = JSON.parse(saved);
    } catch (err) {}

    // Combine remote and local, deduplicating by scan_uid
    const seenUids = new Set();
    const combined = [];

    // Prioritize newest remote scans from SQLite
    if (remoteScans && remoteScans.length > 0) {
      for (const s of remoteScans) {
        const uid = s.scan_uid || `SCAN-${s.id}`;
        if (!seenUids.has(uid)) {
          seenUids.add(uid);
          combined.push(s);
        }
      }
    }

    // Add local scans that may have been saved offline
    for (const s of localScans) {
      const uid = s.scan_uid || `SCAN-${s.id}`;
      if (!seenUids.has(uid)) {
        seenUids.add(uid);
        combined.push(s);
      }
    }

    // Fallback to APP_DATA if empty
    if (combined.length === 0) {
      return APP_DATA.history;
    }

    return combined;
  },

  // Save new scan to history & broadcast real-time sync event
  async saveScan(scanResult) {
    const cropName = scanResult.crop || scanResult.plant || 'Crop';
    const diseaseName = scanResult.disease || scanResult.name || scanResult.result || 'Unknown Condition';
    const scanUid = scanResult.scan_uid || `SCAN-2026-${Math.random().toString(16).substring(2, 8).toUpperCase()}`;
    const confidence = scanResult.confidence || 92;
    const severity = scanResult.severity || 'Moderate';
    const risk = scanResult.risk || 'Moderate';
    const summary = scanResult.summary || `VGG19 CNN processed leaf features matching ${diseaseName}.`;

    // 1. Try persisting directly to SQLite backend
    try {
      await fetch(`${this.getApiBase()}/history`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          crop: cropName,
          disease: diseaseName,
          confidence: confidence,
          severity: severity,
          risk: risk,
          summary: summary,
          scan_uid: scanUid
        }),
        signal: AbortSignal.timeout(2500)
      });
    } catch (apiErr) {
      console.log("Backend offline or unreachable, scan cached in localStorage.", apiErr);
    }

    // 2. Persist to localStorage for offline resilience & instant caching
    try {
      const existing = localStorage.getItem('agrivision_user_scans');
      const list = existing ? JSON.parse(existing) : [];
      
      const newEntry = {
        id: Date.now(),
        scan_uid: scanUid,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        plant: cropName,
        crop: cropName,
        result: diseaseName,
        disease: diseaseName,
        confidence: confidence,
        severity: severity,
        risk: risk,
        summary: summary
      };

      // Put at top of list
      list.unshift(newEntry);
      localStorage.setItem('agrivision_user_scans', JSON.stringify(list.slice(0, 50)));

      // Broadcast storage and custom event so any open view re-syncs immediately
      window.dispatchEvent(new CustomEvent('agrivision:scan_saved', { detail: newEntry }));
      window.dispatchEvent(new Event('storage'));
      return newEntry;
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  },

  // Get Monitored Fields
  async getFields() {
    try {
      const res = await fetch(`${this.getApiBase()}/fields`, { signal: AbortSignal.timeout(2200) });
      if (res.ok) return await res.json();
    } catch (e) {}
    return APP_DATA.plants;
  },

  // Get Dashboard Summary
  async getDashboard() {
    let dashData = null;
    try {
      const res = await fetch(`${this.getApiBase()}/dashboard`, { signal: AbortSignal.timeout(2200) });
      if (res.ok) dashData = await res.json();
    } catch (e) {}

    // Synchronize recent scans and counts with full history
    const history = await this.getHistory();
    const fields = (dashData && dashData.fields) ? dashData.fields : APP_DATA.plants;
    const avgHealth = fields.length > 0 ? Math.round(fields.reduce((acc, f) => acc + (f.health_score || f.health || 85), 0) / fields.length) : 89;

    if (!dashData) {
      return {
        user: APP_DATA.user,
        kpis: {
          healthScore: avgHealth,
          plantsMonitored: fields.length * 25,
          scansThisMonth: history.length,
          activeAlerts: APP_DATA.alerts.length
        },
        fields: fields,
        recent_scans: history.slice(0, 6),
        alerts: APP_DATA.alerts,
        weather: APP_DATA.weather
      };
    }

    // Merge recent scans so new local/remote scans appear instantly
    dashData.recent_scans = history.slice(0, 6);
    if (dashData.kpis) {
      dashData.kpis.scansThisMonth = Math.max(dashData.kpis.scansThisMonth || 0, history.length);
    }
    return dashData;
  }
};

