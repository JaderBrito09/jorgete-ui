# Backlog de Engenharia — Jorgete Design System (`jorgete-ui`)

Este documento especifica as **Demandas de Engenharia (DEM)** para a evolução visual, tokens de design, componentes interativos e padronização de UI/UX do ecossistema **Jorgete**.

---

## 1. Visão Geral da Arquitetura Visual

O **`jorgete-ui`** atua como a biblioteca centralizada de ativos de interface (Design System) distribuída para os subsistemas (`secretaria_site`, `secretaria_studio`, `secretaria_google`, `jorgete-chat`, etc.) através de **Git Submodule** (alocado em `static/shared/ui`).

A partir da versão v2.0, o repositório adota a arquitetura baseada em **Tailwind CSS + DaisyUI**, fornecendo componentes semânticos com suporte nativo a temas Light/Dark (`data-theme="jorgete"` e `data-theme="jorgete-dark"`) e eliminando variações indesejadas em desenvolvimentos assistidos por Inteligência Artificial.

---

## 2. Quadro Resumo das Demandas (DEMs)

| ID | Demanda de Engenharia | Módulo / Arquivos | Status | Prioridade |
|---|---|---|---|---|
| **DEM-UI-01** | Migração do JDS para Tailwind CSS + DaisyUI e Catálogo `UI_CATALOG.md` | `package.json`, `tailwind.config.js`, `src/input.css`, `docs/*` | ✅ Concluído | Crítica |
| **DEM-UI-02** | Suporte a Token JWT do Hub no Header Unificado e Repasse em Links de Navegação | `js/unified-header.js`, `docs/*` | ✅ Concluído | Alta |
| **DEM-UI-03** | Pipeline de CI/CD para Build e Validação de Assets no GitHub Actions | `.github/workflows/ci.yml` | ✅ Concluído | Média |
| **DEM-UI-04** | Auditoria e Refinamento de Contraste e Acessibilidade WCAG 2.2 AA nos Temas | `tailwind.config.js`, `src/input.css` | ✅ Concluído | Alta |
| **DEM-UI-05** | Identidade Visual Autoral (Tipografia Editorial & Micro-Bordas Táteis) | `tailwind.config.js`, `src/input.css`, `docs/DESIGN_SYSTEM.md` | ✅ Concluído | Alta |
| **DEM-UI-06** | Componente Barra de Comando Executivo (`<jorgete-command-bar>` com `⌘K`) | `js/command-bar.js`, `docs/UI_CATALOG.md` | ✅ Concluído | Média |
| **DEM-UI-07** | Redesenho da Estação de Trabalho Executiva (Layout de Dossiê & Cards de Deliberação) | `prototype/index.html`, `docs/UI_CATALOG.md` | ✅ Concluído | Alta |

---

## 3. Detalhamento Técnico das Demandas

### DEM-UI-01: Migração Arquitetural do JDS para Tailwind CSS + DaisyUI & Catálogo de Componentes

- **Objetivo:** Reformular a base de estilização do `jorgete-ui` substituindo o CSS nativo customizado pelo Tailwind CSS integrado ao plugin DaisyUI, garantindo 100% de previsibilidade e aderência em edições geradas por IA.
- **Status:** ✅ Concluído.
- **Especificação Técnica:**
  1. **Ambiente & Dependências Node.js:**
     - Inicialização do `package.json` em `jorgete-ui`.
     - Instalação de `tailwindcss`, `postcss`, `autoprefixer` e `daisyui`.
     - Criação dos scripts de compilação `npm run build` e `npm run watch`.
  2. **Configuração de Temas (`tailwind.config.js`):**
     - Mapeamento das cores estritas do JDS para a paleta do DaisyUI:
       - `primary`: `#1e3a8a` (Safira Executivo)
       - `secondary`: `#334155` (Slate Neutro)
       - `accent`: `#2563eb` (Azul Real)
       - `base-100`: `#ffffff` (Superfície de Cards/Páginas)
       - `base-200`: `#f8fafc` (Fundo Canvas Slate-50)
       - `base-300`: `#e2e8f0` (Bordas e Divisores)
       - `success`: `#059669` (Esmeralda Governança)
       - `warning`: `#d97706` (Amber Rascunhos)
       - `error`: `#dc2626` (Rose Alerta)
     - Configuração do tema escuro equivalente (`jorgete-dark`).
  3. **Pipeline de Build & Distribuição:**
     - Criação do CSS fonte em `src/input.css` contendo as diretivas `@tailwind`.
     - Geração do bundle minificado em `css/jorgete-ui.min.css`.
  4. **Catálogo de Componentes para Governança de IA (`docs/UI_CATALOG.md`):**
     - Elaboração do documento de snippets copiáveis contemplando:
       - 4 Padrões de Botões (`btn-primary`, `btn-secondary`, `btn-success`, `btn-error`).
       - Card HITL Universal com badges e ações *in-place*.
       - Navegação em Abas (`tab`, `tab-active`).
       - TableContainer (`table`, `table-zebra`).
       - Splitter Textarea e Inputs de Chat.
  5. **Documentação de Transição:**
     - Atualização do `docs/DESIGN_SYSTEM.md` refletindo a especificação v2.0.

- **Artefatos a Criar/Modificar:**
  - `package.json`
  - `tailwind.config.js`
  - `src/input.css`
  - `css/jorgete-ui.min.css`
  - `docs/UI_CATALOG.md`
  - `docs/BACKLOG.md`
  - `docs/DESIGN_SYSTEM.md`

---

### DEM-UI-03: Pipeline de CI/CD para Build e Validação de Assets no GitHub Actions

- **Objetivo:** Garantir a integridade do bundle compilado `css/jorgete-ui.min.css` em cada push ou Pull Request na branch `main`.
- **Status:** ✅ Concluído.
- **Artefatos a Criar/Modificar:**
  - `.github/workflows/ci.yml`

---

### DEM-UI-04: Auditoria e Refinamento de Contraste e Acessibilidade WCAG 2.2 AA

- **Objetivo:** Adequar as variáveis de conteúdo semântico (`warning-content`, `primary-content`, `accent-content`, `success-content`) para atingir contraste mínimo de 4.5:1 (WCAG 2.2 AA) em ambos os temas (`jorgete` e `jorgete-dark`), e adicionar utilitário `.focus-ring`.
- **Status:** ✅ Concluído.
- **Artefatos a Criar/Modificar:**
  - `tailwind.config.js`
  - `src/input.css`

---

### DEM-UI-05: Identidade Visual Autoral (Tipografia Editorial & Micro-Bordas Táteis)

- **Objetivo:** Diferenciar a identidade visual do JDS do padrão genérico de templates de IA, implementando tipografia de dupla camada (Plus Jakarta Sans / Outfit para títulos executivos + Inter / JetBrains Mono para dados e identificadores), micro-bordas táteis de precisão (*hairlines* `border-t-white/10`, `border-border/60`) e paleta refinada Deep Navy / Âmbar Quente.
- **Status:** ✅ Concluído.
- **Artefatos a Criar/Modificar:**
  - `tailwind.config.js`
  - `src/input.css`
  - `docs/DESIGN_SYSTEM.md`

---

### DEM-UI-06: Componente Barra de Comando Executivo (`<jorgete-command-bar>` com `⌘K`)

- **Objetivo:** Criar um componente de entrada de alta produtividade com atalho de teclado global (`⌘K` / `Ctrl+K`), atalhos de ações rápidas corporativas (*"Criar Pauta"*, *"Agendar Reunião"*, *"Resumir E-mails"*) e filtros rápidos sem depender de prompt aberto desestruturado.
- **Status:** ✅ Concluído.
- **Artefatos a Criar/Modificar:**
  - `js/command-bar.js`
  - `docs/UI_CATALOG.md`

---

### DEM-UI-07: Redesenho da Estação de Trabalho Executiva (Layout de Dossiê & Cards de Deliberação)

- **Objetivo:** Evoluir o protótipo de chat genérico para uma Estação de Governança Executiva estruturada em 3 áreas de trabalho (Agenda de Pautas do Dia, Dossiê/Minuta Ativa em Redação, e Painel de Governança & Ações Rápidas de 1-Clique) com carimbos visuais de homologação.
- **Status:** ✅ Concluído.
- **Artefatos a Criar/Modificar:**
  - `prototype/index.html`
  - `docs/UI_CATALOG.md`


