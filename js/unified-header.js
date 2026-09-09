/**
 * Jorgete Design System (JDS) — Unified Header with Theme Toggle Helper v1.2
 */

class JorgeteHeader extends HTMLElement {
  connectedCallback() {
    const subsystem = this.getAttribute('subsystem') || 'Módulo Jorgete';
    const userEmail = this.getAttribute('user-email') || 'usuario@jorgete.cloud';
    const userName = this.getAttribute('user-name') || userEmail.split('@')[0];
    const initial = userName.charAt(0).toUpperCase();

    // Recuperar tema salvo
    const currentTheme = localStorage.getItem('jorgete-theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    this.innerHTML = `
      <header class="jorgete-header">
        <div class="jorgete-brand">
          <div class="jorgete-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="url(#paint0_linear)"/>
              <path d="M7 12L10 15L17 8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1E3A8A"/>
                  <stop offset="1" stop-color="#2563EB"/>
                </linearGradient>
              </defs>
            </svg>
            Jorgete AI
          </div>
          <div class="subsystem-divider"></div>
          <span class="subsystem-badge">${subsystem}</span>
        </div>

        <div class="user-profile">
          <button id="js-theme-toggle" class="theme-toggle-btn" title="Alternar Modo Claro / Escuro">
            <span id="js-theme-icon">${currentTheme === 'dark' ? '🌙' : '☀️'}</span>
            <span id="js-theme-text" class="hidden sm:inline">${currentTheme === 'dark' ? 'Escuro' : 'Claro'}</span>
          </button>
          <span class="user-email hidden md:inline">${userEmail}</span>
          <div class="user-avatar" title="${userName}">${initial}</div>
        </div>
      </header>
    `;

    // Event Listener do Alternador de Tema
    const toggleBtn = this.querySelector('#js-theme-toggle');
    const themeIcon = this.querySelector('#js-theme-icon');
    const themeText = this.querySelector('#js-theme-text');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('jorgete-theme', newTheme);

        if (themeIcon) themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        if (themeText) themeText.textContent = newTheme === 'dark' ? 'Escuro' : 'Claro';
      });
    }
  }
}

if (!customElements.get('jorgete-header')) {
  customElements.define('jorgete-header', JorgeteHeader);
}
