/**
 * Jorgete Design System (JDS) — Unified Header Web Component v2.1
 * Compatível com Tailwind CSS + DaisyUI e temas jorgete / jorgete-dark
 */

class JorgeteHeader extends HTMLElement {
  connectedCallback() {
    const subsystem = this.getAttribute('subsystem') || 'Módulo Jorgete';
    const userEmail = this.getAttribute('user-email') || 'usuario@jorgete.cloud';
    const userName = this.getAttribute('user-name') || (userEmail ? userEmail.split('@')[0] : 'Usuário');
    const userPicture = this.getAttribute('user-picture') || '';
    const initial = this.getAttribute('user-initials') || (userName || userEmail || 'U').substring(0, 2).toUpperCase();
    const hubUrl = this.getAttribute('hub-url') || 'https://www.jorgete.cloud';
    const logoutUrl = this.getAttribute('logout-url') || '/logout';

    // Recuperar token JWT do localStorage ou query param
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token') || localStorage.getItem('jorgete-jwt-token') || '';
    if (token) {
      localStorage.setItem('jorgete-jwt-token', token);
    }

    // Inicializar tema (jorgete = light, jorgete-dark = dark)
    const savedTheme = localStorage.getItem('jorgete-theme') || 'jorgete';
    const currentTheme = (savedTheme === 'dark' || savedTheme === 'jorgete-dark') ? 'jorgete-dark' : 'jorgete';
    document.documentElement.setAttribute('data-theme', currentTheme);

    const isDark = currentTheme === 'jorgete-dark';

    this.innerHTML = `
      <header class="navbar bg-base-100 border-b border-base-300 px-4 h-16 sticky top-0 z-50 shadow-tactile">
        <div class="flex-1 items-center gap-3">
          <!-- Brand Símbolo J + Nome -->
          <a href="${hubUrl}${token ? '?token=' + encodeURIComponent(token) : ''}" class="flex items-center gap-2 font-heading font-bold text-lg text-base-content hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-sm">
              J
            </div>
            <span>Jorgete <span class="text-primary">Executive</span></span>
          </a>
          <div class="divider divider-horizontal my-3 mx-1"></div>
          <!-- Badge do Subsistema -->
          <span class="badge badge-secondary badge-outline font-semibold px-3 py-2 text-xs">
            ${subsystem}
          </span>
        </div>

        <!-- Controles da Direita -->
        <div class="flex-none flex items-center gap-2">
          <!-- Alternador de Tema Light / Dark -->
          <button id="js-theme-toggle" class="btn btn-ghost btn-circle btn-sm" title="Alternar Tema">
            <svg id="js-theme-icon-sun" class="w-5 h-5 text-warning ${isDark ? '' : 'hidden'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <svg id="js-theme-icon-moon" class="w-5 h-5 text-base-content/70 ${isDark ? 'hidden' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </button>
          
          <!-- Perfil SSO -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar placeholder">
              ${userPicture ? `
                <div class="w-9 rounded-full shadow-tactile">
                  <img src="${userPicture}" alt="${userName}" />
                </div>
              ` : `
                <div class="bg-primary text-primary-content rounded-full w-9 shadow-tactile">
                  <span class="text-xs font-mono font-bold">${initial}</span>
                </div>
              `}
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2.5 shadow-2xl bg-base-100 rounded-2xl w-60 border border-base-300">
              <li class="px-3 py-2 border-b border-base-200 mb-1">
                <span class="font-bold text-sm block p-0 text-base-content">${userName}</span>
                <span class="text-xs text-base-content/60 block p-0 font-normal truncate">${userEmail}</span>
              </li>
              <li><a href="${hubUrl}${token ? '?token=' + encodeURIComponent(token) : ''}" class="py-2 rounded-xl">🌐 Hub Principal</a></li>
              <li><a href="${logoutUrl}" class="py-2 rounded-xl text-error font-semibold">🚪 Sair</a></li>
            </ul>
          </div>
        </div>
      </header>
    `;

    // Event Listener do Alternador de Tema
    const toggleBtn = this.querySelector('#js-theme-toggle');
    const sunIcon = this.querySelector('#js-theme-icon-sun');
    const moonIcon = this.querySelector('#js-theme-icon-moon');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const nextTheme = current === 'jorgete-dark' ? 'jorgete' : 'jorgete-dark';

        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('jorgete-theme', nextTheme);

        if (nextTheme === 'jorgete-dark') {
          sunIcon?.classList.remove('hidden');
          moonIcon?.classList.add('hidden');
        } else {
          sunIcon?.classList.add('hidden');
          moonIcon?.classList.remove('hidden');
        }
      });
    }
  }
}

if (!customElements.get('jorgete-header')) {
  customElements.define('jorgete-header', JorgeteHeader);
}
