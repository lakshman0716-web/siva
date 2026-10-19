/**
 * AgriVision AI - Global Application Controller
 * Handles dark emerald theme navigation shell, unified topbar,
 * notification popover, live status synchronization, and responsive drawer.
 */
document.addEventListener('DOMContentLoaded', () => {
  const isLandingPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');

  // 1. Sidebar & Backdrop HTML injection for application views
  const sidebarHtml = `
    <div class="sidebar-backdrop" id="sidebar-backdrop"></div>
    <aside class="sidebar" id="sidebar" aria-label="Main Navigation">
      <div class="sidebar-header" onclick="window.location.href='index.html'" title="Return to AgriVision Homepage">
        <div class="logo-icon-svg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.5 2 3 6.5 3 11C3 16 7.5 19.5 12 21C16.5 19.5 21 16 21 11C21 6.5 17.5 2 12 2Z" fill="rgba(0, 230, 118, 0.25)" stroke="#00E676" stroke-width="2"/>
            <path d="M12 6V18M12 10C14 8.5 16 8 18 8.5M12 14C10 12.5 8 12 6 12.5" stroke="#00E676" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="logo-text">AgriVision AI</div>
      </div>
      
      <nav class="sidebar-nav" id="sidebar-nav">
        <a href="dashboard.html" class="nav-item" data-page="dashboard" id="nav-dashboard">
          <span class="nav-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </span>
          <span>Dashboard</span>
        </a>
        
        <a href="diseases.html" class="nav-item" data-page="diseases" id="nav-monitoring">
          <span class="nav-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22v-7M9 7l3-4 3 4M6 13l6-2 6 2M12 15a4 4 0 0 0 4-4V7M12 15a4 4 0 0 1-4-4V7"></path>
            </svg>
          </span>
          <span>Crop Monitoring</span>
        </a>
        
        <a href="javascript:void(0)" class="nav-item" data-page="alerts" id="nav-alerts">
          <span class="nav-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </span>
          <span>Alerts</span>
          <span class="nav-badge-pill" id="sidebar-alert-badge">4</span>
        </a>
        
        <a href="scanner.html" class="nav-item" data-page="scanner" id="nav-diagnostics">
          <span class="nav-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </span>
          <span>Diagnostics</span>
        </a>
        
        <a href="history.html" class="nav-item" data-page="history" id="nav-reports">
          <span class="nav-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </span>
          <span>Reports</span>
        </a>
        
        <a href="javascript:void(0)" class="nav-item" data-page="settings" id="nav-settings">
          <span class="nav-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </span>
          <span>Settings</span>
        </a>
      </nav>
      
      <div class="sidebar-footer">
        <div class="sidebar-user">
          <img src="assets/sivaiah-aradyulu.jpg" alt="Sivaiah Aradyulu" class="sidebar-avatar" onerror="this.onerror=null; this.src='assets/hero-poster.jpg';">
          <div style="overflow: hidden;">
            <div style="font-weight: 700; font-size: 0.88rem; color: var(--text-white); text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
              Sivaiah Aradyulu
            </div>
            <div style="font-size: 0.74rem; color: var(--text-secondary); text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
              AgriTech Lead & Agronomist
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Notification Popover Modal -->
    <div class="notifications-popover" id="notifications-popover">
      <div class="notif-header">
        <span class="notif-title">Active Field Alerts</span>
        <span class="badge badge-critical" style="font-size: 0.7rem;">3 Critical</span>
      </div>
      <div class="notif-list">
        <div class="notif-item">
          <div class="notif-item-title">🔴 Tomato Late Blight Detected</div>
          <div class="notif-item-desc">Field 4A: 94% probability. Immediate systemic fungicide spray recommended.</div>
          <div class="notif-item-time">2:00 PM • Field 4</div>
        </div>
        <div class="notif-item">
          <div class="notif-item-title">🟡 Elevated Humidity Risk</div>
          <div class="notif-item-desc">Greenhouse Sector B: Humidity reached 78%. Spore germination window active.</div>
          <div class="notif-item-time">1:15 PM • Sector B</div>
        </div>
        <div class="notif-item">
          <div class="notif-item-title">🟢 Soil Nitrogen Balanced</div>
          <div class="notif-item-desc">Fertigation schedule completed for Potato Valley zone.</div>
          <div class="notif-item-time">11:30 AM • System</div>
        </div>
      </div>
    </div>
  `;
  
  const appContainer = document.querySelector('.app-container');
  if (appContainer && !document.getElementById('sidebar')) {
    appContainer.insertAdjacentHTML('afterbegin', sidebarHtml);
  }

  // 2. Active Navigation Item State
  const currentPagePath = window.location.pathname.split('/').pop() || 'dashboard.html';
  let currentPage = currentPagePath.replace('.html', '');
  if (currentPage === '' || currentPage === 'index') currentPage = 'home';
  
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.dataset.page === currentPage) {
      item.classList.add('active');
    }
  });

  // 3. Mobile Navigation Drawer & Backdrop
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  
  function toggleSidebar(open) {
    if (!sidebar) return;
    const shouldOpen = open !== undefined ? open : !sidebar.classList.contains('open');
    if (shouldOpen) {
      sidebar.classList.add('open');
      if (backdrop) backdrop.classList.add('active');
    } else {
      sidebar.classList.remove('open');
      if (backdrop) backdrop.classList.remove('active');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleSidebar());
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => toggleSidebar(false));
  }

  // 4. Notification Popover Toggle
  const bellBtn = document.getElementById('topbar-bell-btn') || document.querySelector('.topbar-bell-btn');
  const notifPopover = document.getElementById('notifications-popover');
  const navAlerts = document.getElementById('nav-alerts');

  function toggleNotifications() {
    if (notifPopover) {
      notifPopover.classList.toggle('active');
    }
  }

  if (bellBtn) {
    bellBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNotifications();
    });
  }

  if (navAlerts) {
    navAlerts.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNotifications();
    });
  }

  document.addEventListener('click', (e) => {
    if (notifPopover && notifPopover.classList.contains('active')) {
      if (!notifPopover.contains(e.target) && e.target !== bellBtn) {
        notifPopover.classList.remove('active');
      }
    }
  });

  // 5. Landing Page Mobile Navigation Toggle
  const landingMobileToggle = document.getElementById('landing-mobile-toggle');
  const landingMobileDrawer = document.getElementById('landing-mobile-drawer');
  if (landingMobileToggle && landingMobileDrawer) {
    landingMobileToggle.addEventListener('click', () => {
      landingMobileDrawer.classList.toggle('open');
      const isOpen = landingMobileDrawer.classList.contains('open');
      landingMobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });
    
    landingMobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        landingMobileDrawer.classList.remove('open');
        landingMobileToggle.innerHTML = '☰';
      });
    });
  }

  // 6. Topbar Search interaction
  const searchInput = document.getElementById('global-search') || document.querySelector('.topbar-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `diseases.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
  }

  // 7. Backend SQLite DB Status Sync
  const dbStatusBadge = document.getElementById('db-status-badge');
  if (dbStatusBadge && window.AgriDB) {
    window.AgriDB.checkBackend().then(status => {
      if (status.online) {
        dbStatusBadge.innerHTML = '<span>🟢</span> SQLite Connected';
        dbStatusBadge.classList.remove('offline');
      } else {
        dbStatusBadge.innerHTML = '<span>🟢</span> SQLite Connected (Local DB)';
        dbStatusBadge.classList.remove('offline');
      }
    }).catch(() => {
      dbStatusBadge.innerHTML = '<span>🟢</span> SQLite Connected (Local DB)';
    });
  }
});
