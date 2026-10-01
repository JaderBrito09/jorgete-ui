/**
 * Jorgete Design System (JDS) — Unified Header Web Component v1.2
 */

class JorgeteHeader extends HTMLElement {
  connectedCallback() {
    const subsystem = this.getAttribute('subsystem') || 'Cloud';
    const isAuth = this.getAttribute('user-authenticated') === 'true' || 
                   (this.hasAttribute('user-email') && this.getAttribute('user-email') !== '' && this.getAttribute('user-email') !== 'None');
    const userEmail = this.getAttribute('user-email') || '';
    const userName = this.getAttribute('user-name') || (userEmail ? userEmail.split('@')[0] : 'Usuário');
    const userPicture = this.getAttribute('user-picture') || '';
    const loginUrl = this.getAttribute('login-url') || '/auth/login';
    const logoutUrl = this.getAttribute('logout-url') || '/auth/logout';
    const initial = (userName || userEmail || 'U').charAt(0).toUpperCase();

    // Recuperar tema salvo ou preferência do sistema
    const savedTheme = localStorage.getItem('jorgete-theme');
    const currentTheme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    const authSection = isAuth ? `
      <div class="user-profile">
        <button id="js-theme-toggle" class="theme-toggle-btn" title="Alternar Modo Claro / Escuro" aria-label="Alternar Modo Claro / Escuro">
          <span id="js-theme-icon">${currentTheme === 'dark' ? '🌙' : '☀️'}</span>
          <span id="js-theme-text" class="hidden sm:inline">${currentTheme === 'dark' ? 'Escuro' : 'Claro'}</span>
        </button>
        <div class="user-info-box" style="display: flex; align-items: center; gap: 0.625rem; padding: 0.375rem 0.75rem; border-radius: var(--radius-xl, 0.75rem); background-color: var(--bg-surface-subtle); border: 1px solid var(--border-color);">
          ${userPicture ? `<img src="${userPicture}" class="user-avatar" style="object-fit: cover;" alt="Avatar de ${userName}">` : `<div class="user-avatar" title="${userName}">${initial}</div>`}
          <div class="text-left hidden sm:block">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-main); line-height: 1.2;">${userName}</div>
            <div style="font-size: 0.625rem; font-weight: 600; color: var(--color-success, #059669);">Conectado</div>
          </div>
        </div>
        <a href="${logoutUrl}" class="btn btn-secondary btn-sm" style="color: var(--color-critical); border-color: rgba(220, 38, 38, 0.2);" aria-label="Encerrar sessão">
          Sair
        </a>
      </div>
    ` : `
      <div class="user-profile">
        <button id="js-theme-toggle" class="theme-toggle-btn" title="Alternar Modo Claro / Escuro" aria-label="Alternar Modo Claro / Escuro">
          <span id="js-theme-icon">${currentTheme === 'dark' ? '🌙' : '☀️'}</span>
          <span id="js-theme-text" class="hidden sm:inline">${currentTheme === 'dark' ? 'Escuro' : 'Claro'}</span>
        </button>
        <a href="${loginUrl}" class="btn btn-emerald btn-sm" style="display: inline-flex; align-items: center; gap: 0.5rem;" aria-label="Entrar com o Google">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
          </svg>
          <span>Entrar com o Google</span>
        </a>
      </div>
    `;

    this.innerHTML = `
      <header class="jorgete-header">
        <div class="jorgete-brand">
          <a href="/" class="jorgete-logo" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 2.25rem; height: 2.25rem; border-radius: 0.625rem; background: var(--color-primary-grad); display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 1.125rem; box-shadow: var(--shadow-sm);">
              J
            </div>
            <div style="display: flex; flex-direction: column; text-align: left;">
              <span style="font-weight: 800; font-size: 1.125rem; letter-spacing: -0.025em; color: var(--text-main); line-height: 1.1;">Jorgete</span>
              <span style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-primary-end, #2563eb);">Cloud</span>
            </div>
          </a>
          <div class="subsystem-divider"></div>
          <span class="subsystem-badge">${subsystem}</span>
        </div>

        ${authSection}
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
