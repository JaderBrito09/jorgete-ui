/**
 * Jorgete Design System (JDS) — Executive Command Bar Web Component v2.1
 * Barra de comandos e atalhos rápidos corporativos com suporte a ⌘K / Ctrl+K
 */

class JorgeteCommandBar extends HTMLElement {
  connectedCallback() {
    this.placeholder = this.getAttribute('placeholder') || 'Buscar ação executiva, pauta ou minuta... (⌘K)';
    this.render();
    this.setupListeners();
  }

  render() {
    this.innerHTML = `
      <!-- Trigger / Barra Visível de Acesso Rápido -->
      <div class="executive-card p-2 flex flex-col md:flex-row items-center gap-2">
        <button id="js-cmd-open" type="button" class="flex-1 w-full flex items-center justify-between px-3 py-2 bg-base-200/60 hover:bg-base-200 border border-base-300 rounded-xl text-xs text-base-content/70 transition-colors focus-ring">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span class="font-medium">${this.placeholder}</span>
          </div>
          <kbd class="kbd kbd-xs bg-base-100 border-base-300 font-mono text-[10px] text-base-content/60 px-1.5 py-0.5 rounded shadow-2xs">⌘K</kbd>
        </button>

        <!-- Ações Executivas Rápidas (Chips de 1-Clique) -->
        <div class="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto custom-scrollbar py-0.5">
          <button type="button" data-cmd="nova-pauta" class="btn btn-xs btn-ghost border border-base-300 hover:border-primary/50 text-base-content font-medium rounded-lg whitespace-nowrap">
            📋 Nova Pauta
          </button>
          <button type="button" data-cmd="agendar-reuniao" class="btn btn-xs btn-ghost border border-base-300 hover:border-primary/50 text-base-content font-medium rounded-lg whitespace-nowrap">
            📅 Agendar Reunião
          </button>
          <button type="button" data-cmd="minuta-email" class="btn btn-xs btn-ghost border border-base-300 hover:border-primary/50 text-base-content font-medium rounded-lg whitespace-nowrap">
            ✉️ Minuta de E-mail
          </button>
          <button type="button" data-cmd="consultar-acervo" class="btn btn-xs btn-ghost border border-base-300 hover:border-primary/50 text-base-content font-medium rounded-lg whitespace-nowrap">
            🔍 Consultar Acervo
          </button>
        </div>
      </div>

      <!-- Modal Paleta de Comandos (⌘K) -->
      <dialog id="js-cmd-modal" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box p-0 bg-base-100 border border-base-300 rounded-2xl shadow-2xl max-w-xl overflow-hidden">
          <!-- Campo de Busca -->
          <div class="p-3 border-b border-base-300 flex items-center gap-2.5 bg-base-200/40">
            <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input id="js-cmd-input" type="text" placeholder="Digite uma ação (ex: pauta, agenda, aprovar)..." class="w-full bg-transparent border-none outline-none text-sm text-base-content placeholder:text-base-content/40 focus:ring-0">
            <kbd class="kbd kbd-xs bg-base-100 border-base-300 text-[10px] text-base-content/50">ESC</kbd>
          </div>

          <!-- Lista de Opções -->
          <div id="js-cmd-list" class="p-2 max-h-72 overflow-y-auto custom-scrollbar flex flex-col gap-1">
            <div class="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-base-content/50">Ações Frequentes</div>
            <button type="button" data-cmd="nova-pauta" class="js-cmd-item flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-base-200 text-xs text-base-content transition-colors group">
              <div class="flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">📋</span>
                <div>
                  <div class="font-semibold group-hover:text-primary">Estruturar Nova Pauta</div>
                  <div class="text-[11px] text-base-content/60">Organizar tópicos e atas para deliberação executiva</div>
                </div>
              </div>
              <span class="text-[10px] text-base-content/40 font-mono">Enter ↵</span>
            </button>

            <button type="button" data-cmd="agendar-reuniao" class="js-cmd-item flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-base-200 text-xs text-base-content transition-colors group">
              <div class="flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-success/10 text-success flex items-center justify-center font-bold text-xs">📅</span>
                <div>
                  <div class="font-semibold group-hover:text-success">Agendar no Google Calendar</div>
                  <div class="text-[11px] text-base-content/60">Sincronizar compromisso e convidar participantes</div>
                </div>
              </div>
              <span class="text-[10px] text-base-content/40 font-mono">Enter ↵</span>
            </button>

            <button type="button" data-cmd="minuta-email" class="js-cmd-item flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-base-200 text-xs text-base-content transition-colors group">
              <div class="flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold text-xs">✉️</span>
                <div>
                  <div class="font-semibold group-hover:text-accent">Redigir Minuta de E-mail</div>
                  <div class="text-[11px] text-base-content/60">Elaborar despacho corporativo pronto para envio</div>
                </div>
              </div>
              <span class="text-[10px] text-base-content/40 font-mono">Enter ↵</span>
            </button>

            <button type="button" data-cmd="consultar-acervo" class="js-cmd-item flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-base-200 text-xs text-base-content transition-colors group">
              <div class="flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-warning/10 text-warning flex items-center justify-center font-bold text-xs">🔍</span>
                <div>
                  <div class="font-semibold group-hover:text-warning">Consultar Acervo de Decisões</div>
                  <div class="text-[11px] text-base-content/60">Pesquisar histórico de deliberações e atas homologadas</div>
                </div>
              </div>
              <span class="text-[10px] text-base-content/40 font-mono">Enter ↵</span>
            </button>
          </div>

          <!-- Rodapé do Modal -->
          <div class="px-4 py-2 bg-base-200/50 border-t border-base-300 flex items-center justify-between text-[11px] text-base-content/60">
            <span>Navegue com as setas ↑ ↓</span>
            <span>Jorgete Executive System v2.1</span>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>Fechar</button>
        </form>
      </dialog>
    `;
  }

  setupListeners() {
    const modal = this.querySelector('#js-cmd-modal');
    const openBtn = this.querySelector('#js-cmd-open');
    const input = this.querySelector('#js-cmd-input');
    const items = this.querySelectorAll('.js-cmd-item, [data-cmd]');

    const openModal = () => {
      if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
        setTimeout(() => input?.focus(), 50);
      }
    };

    openBtn?.addEventListener('click', openModal);

    // Atalho Global de Teclado (⌘K / Ctrl+K)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal();
      }
    });

    // Filtro em tempo real no input
    input?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      this.querySelectorAll('.js-cmd-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });

    // Disparo de Evento de Ação
    items.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cmd = btn.getAttribute('data-cmd');
        if (!cmd) return;
        
        this.dispatchEvent(new CustomEvent('jorgete-command-selected', {
          bubbles: true,
          composed: true,
          detail: { command: cmd }
        }));

        if (modal?.open) {
          modal.close();
        }
      });
    });
  }
}

customElements.define('jorgete-command-bar', JorgeteCommandBar);
