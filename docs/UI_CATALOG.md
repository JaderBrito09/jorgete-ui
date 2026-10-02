# 🎨 Catálogo Oficial de Componentes JDS v2.0 (`UI_CATALOG.md`)

Este catálogo especifica os **snippets de código HTML/DaisyUI oficiais** para o ecossistema **Jorgete**.
Toda Inteligência Artificial ou desenvolvedor DEVE utilizar exclusivamente estes padrões ao criar ou editar telas no projeto.

---

## 1. Topo Unificado (`<jorgete-header>` ou HTML equivalente)

```html
<header class="navbar bg-base-100 border-b border-base-300 px-4 h-16 sticky top-0 z-50">
  <div class="flex-1 items-center gap-3">
    <!-- Brand Símbolo J + Nome -->
    <a href="https://www.jorgete.cloud" class="flex items-center gap-2 font-bold text-lg text-base-content hover:opacity-80 transition-opacity">
      <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-sm">
        J
      </div>
      <span>Jorgete AI</span>
    </a>
    <div class="divider divider-horizontal my-3"></div>
    <!-- Badge do Subsistema -->
    <span class="badge badge-secondary badge-outline font-semibold px-3 py-2 text-xs">
      Studio Web
    </span>
  </div>

  <!-- Controles da Direita -->
  <div class="flex-none flex items-center gap-2">
    <!-- Alternador de Tema Light / Dark -->
    <button onclick="toggleJorgeteTheme()" class="btn btn-ghost btn-circle btn-sm" title="Alternar Tema">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
    </button>
    
    <!-- Perfil SSO -->
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar placeholder">
        <div class="bg-primary text-primary-content rounded-full w-9">
          <span class="text-xs font-bold">JB</span>
        </div>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-52 border border-base-300">
        <li class="menu-title text-xs font-bold text-base-content/60">Jader Brito</li>
        <li><a href="https://www.jorgete.cloud" class="py-2">🌐 Hub Principal</a></li>
        <li><a href="/logout" class="py-2 text-error">🚪 Sair</a></li>
      </ul>
    </div>
  </div>
</header>
```

---

## 2. Botões Oficiais (4 Padrões Rígidos)

```html
<!-- 1. PRIMÁRIO: Ação principal da tela (Safira Executivo) -->
<button class="btn btn-primary shadow-sm">
  🚀 Executar Ação
</button>

<!-- 2. SECUNDÁRIO: Navegação alternativa, voltar, fechar -->
<button class="btn btn-secondary btn-outline">
  ⬅️ Voltar
</button>

<!-- 3. SUCESSO: Aprovação, salvamento concluído -->
<button class="btn btn-success text-white shadow-sm">
  ✅ Aprovar Minuta
</button>

<!-- 4. ERRO / CRÍTICO: Exclusão, rejeição, ação irreversível -->
<button class="btn btn-error text-white shadow-sm">
  🗑️ Excluir Rascunho
</button>
```

---

## 3. Navegação por Abas (`Tabs`)

```html
<div class="tabs tabs-boxed bg-base-200 p-1.5 rounded-xl border border-base-300 inline-flex">
  <a class="tab tab-active bg-base-100 text-primary font-bold shadow-sm rounded-lg">1. Roteiro</a>
  <a class="tab text-base-content/70 font-semibold hover:text-base-content">2. Animação</a>
  <a class="tab text-base-content/70 font-semibold hover:text-base-content">3. Edição Final</a>
  <a class="tab text-base-content/70 font-semibold hover:text-base-content">4. Apresentação</a>
</div>
```

---

## 4. Card HITL Universal (Human-In-The-Loop)

```html
<div class="card bg-base-100 border border-base-300 shadow-md p-5 rounded-2xl">
  <!-- Cabeçalho do Card -->
  <div class="flex justify-between items-center mb-3">
    <div class="flex items-center gap-2">
      <span class="badge badge-warning font-bold">Rascunho Pendente</span>
      <span class="text-xs text-base-content/60 font-mono">DEM-102</span>
    </div>
    <span class="text-xs text-base-content/50">16/09/2026 10:30</span>
  </div>

  <!-- Conteúdo em Markdown/Texto -->
  <div class="prose prose-sm max-w-none text-base-content my-2 bg-base-200/50 p-4 rounded-xl border border-base-300/60">
    <h4 class="font-bold text-base m-0 mb-1">Título da Minuta Gerada</h4>
    <p class="m-0 text-sm leading-relaxed">
      Esta é a proposta de texto sintetizada pela inteligência de negócios. O analista pode revisar, acrescentar anotações na gaveta de comentários ou aprovar diretamente.
    </p>
  </div>

  <!-- Gaveta de Comentários e Trava de Segurança -->
  <div class="mt-3">
    <input type="text" placeholder="Adicionar anotação para ajuste..." class="input input-sm input-bordered w-full rounded-lg" />
  </div>

  <!-- Ações -->
  <div class="card-actions justify-end mt-4 pt-3 border-t border-base-300/50">
    <button class="btn btn-sm btn-ghost text-base-content/70">✏️ Editar</button>
    <button class="btn btn-sm btn-error text-white">Rejeitar</button>
    <button class="btn btn-sm btn-success text-white">Aprovar e Enviar</button>
  </div>
</div>
```

---

## 5. Tabela de Dados (`TableContainer` com Header Fixo e Zebra)

```html
<div class="overflow-x-auto border border-base-300 rounded-2xl shadow-sm bg-base-100">
  <table class="table table-zebra w-full">
    <!-- Header Fixo -->
    <thead class="bg-base-200 text-xs text-base-content/70 uppercase font-bold sticky top-0 z-10">
      <tr>
        <th>ID</th>
        <th>Usuário</th>
        <th>Módulo</th>
        <th>Status</th>
        <th class="text-right">Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-base-200/60 transition-colors">
        <td class="font-mono text-xs">DEM-001</td>
        <td class="font-semibold">Jader Brito</td>
        <td>Studio Web</td>
        <td><span class="badge badge-success text-white badge-sm">Ativo</span></td>
        <td class="text-right">
          <button class="btn btn-ghost btn-xs text-primary">Ver Detalhes</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 6. Input de Chat / Splitter (`jorgete-google` e `jorgete-chat`)

```html
<div class="form-control w-full bg-base-100 p-2 rounded-2xl border border-base-300 shadow-sm focus-within:border-primary transition-colors">
  <textarea 
    class="textarea textarea-ghost w-full resize-none focus:bg-transparent focus:outline-none min-h-[80px] text-sm" 
    placeholder="Digite sua mensagem ou instrução para o assistente..."
  ></textarea>
  <div class="flex justify-between items-center px-2 pt-2 border-t border-base-200">
    <div class="flex items-center gap-1 text-xs text-base-content/50">
      <span>💡 Suporta Markdown</span>
    </div>
    <button class="btn btn-primary btn-sm rounded-xl px-4">
      Enviar 🚀
    </button>
  </div>
</div>
```

---

## 7. Balões de Mensagem de Chat (`jorgete-chat`)

```html
<!-- Mensagem do Assistente -->
<div class="chat chat-start">
  <div class="chat-image avatar placeholder">
    <div class="bg-primary text-primary-content rounded-full w-8">
      <span class="text-xs font-bold">J</span>
    </div>
  </div>
  <div class="chat-header text-xs text-base-content/60 mb-1">
    Jorgete AI <time class="text-[10px] opacity-50">10:42</time>
  </div>
  <div class="chat-bubble bg-base-100 border border-base-300 text-base-content shadow-xs rounded-2xl p-4">
    Análise concluída com sucesso. Aqui está a sugestão estruturada para o seu documento.
  </div>
</div>

<!-- Mensagem do Usuário -->
<div class="chat chat-end">
  <div class="chat-header text-xs text-base-content/60 mb-1">
    Você <time class="text-[10px] opacity-50">10:43</time>
  </div>
  <div class="chat-bubble chat-bubble-primary text-white shadow-xs rounded-2xl p-4">
    Perfeito, pode prosseguir com a gravação na pasta 04_Apresentacoes.
  </div>
</div>
```

---

## 8. Barra de Comandos Executivos (`<jorgete-command-bar>`)

```html
<!-- Inclusão do Web Component de Alta Produtividade (Atalho Global ⌘K / Ctrl+K) -->
<jorgete-command-bar placeholder="Buscar ação executiva, pauta ou minuta... (⌘K)"></jorgete-command-bar>

<!-- Script do Web Component -->
<script src="/static/shared/ui/js/command-bar.js"></script>
```

### Captura de Evento de Ação no Frontend
```javascript
window.addEventListener('jorgete-command-selected', (event) => {
  const selectedCommand = event.detail.command;
  // Valores: 'nova-pauta', 'agendar-reuniao', 'minuta-email', 'consultar-acervo'
  console.log('Ação acionada via Command Bar:', selectedCommand);
});
```

---

## 9. Classes de Acabamento Tátil & Editorial (JDS v2.1)

* **Cartão Executivo:** `class="executive-card p-6"` (superfície `bg-base-100` com borda e sombra tátil `shadow-tactile`).
* **Micro-Borda Tátil:** `class="hairline-border"` (borda milimétrica de alta precisão).
* **Tipografia Editorial:**
  * Títulos: `font-heading font-extrabold tracking-tight` (Plus Jakarta Sans).
  * Dados / IDs / Horários: `font-mono text-xs` (JetBrains Mono).
  * Corpo de Texto: `font-sans leading-relaxed` (Inter).

