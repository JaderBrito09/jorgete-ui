# Jorgete Design System (`jorgete-ui`) — v2.0.0

Biblioteca central de tokens visuais, layout unificado (Header, Sidebar, Tabs), componentes interativos (Botões, Tabelas, Dropdowns, Chat Bubbles) e governança Human-in-the-Loop (Cards HITL com suporte a temas Light e Dark) para todo o ecossistema **Jorgete**.

A partir da versão **v2.0.0**, o `jorgete-ui` utiliza arquitetura baseada em **Tailwind CSS + DaisyUI**, distribuindo um bundle compilado e minificado em `css/jorgete-ui.min.css` com contratos estritos catalogados em `docs/UI_CATALOG.md`.

---

## 📦 Conteúdo da Biblioteca

```text
jorgete-ui/
├── css/
│   └── jorgete-ui.min.css      # Bundle CSS compilado e minificado (Tailwind + DaisyUI)
├── src/
│   └── input.css               # Diretivas Tailwind e utilitários de camadas (@layer)
├── docs/
│   ├── DESIGN_SYSTEM.md        # Especificação técnica completa de arquitetura e UI v2.0
│   ├── UI_CATALOG.md           # Catálogo oficial de snippets e componentes para IA/Devs
│   ├── MODELO_DADOS_POSTGRES.md# Especificação de Schemas Postgres 17 e integração de UI
│   └── BACKLOG.md              # Registro das Demandas de Engenharia (DEMs)
├── js/
│   ├── unified-header.js       # Web Component <jorgete-header> com suporte a temas e SSO
│   └── hitl-card.js            # Lógica interativa para cartões de governança HITL
├── prototype/
│   └── index.html              # Protótipo piloto interativo completo
├── tailwind.config.js          # Definição dos temas `jorgete` e `jorgete-dark`
└── package.json                # Dependências de compilação e scripts de build
```

---

## 🚀 Como Usar em um Subsistema

### 1. Adicionar como Git Submodule
Na raiz do subsistema (`secretaria_site`, `secretaria_studio`, `jorgete-chat`, `jorgete-google`):

```bash
git submodule add https://github.com/JaderBrito09/jorgete-ui.git static/shared/ui
```

### 2. Importar o Bundle CSS e Componentes no HTML
```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="jorgete">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/shared/ui/css/jorgete-ui.min.css">
</head>
<body class="bg-base-200 text-base-content min-h-screen font-sans">

    <!-- Header Unificado Web Component -->
    <jorgete-header subsystem="Studio Web" user-name="Jader Brito" user-email="jader@jorgete.cloud"></jorgete-header>

    <main class="p-6">
        <!-- Conteúdo do Subsistema -->
    </main>

    <script src="/static/shared/ui/js/unified-header.js"></script>
    <script src="/static/shared/ui/js/hitl-card.js"></script>
</body>
</html>
```

---

## 🎨 Cores e Ações Principais (Classes DaisyUI Semânticas)

* **Primário (Safira Executivo `#1e3a8a`):** `btn btn-primary` (Ação principal da tela)
* **Secundário (Neutro Slate `#334155`):** `btn btn-secondary btn-outline` (Navegação secundária, voltar, fechar)
* **Sucesso (Esmeralda Governança `#059669`):** `btn btn-success` (Aprovação, salvamento concluído)
* **Crítico / Erro (Rose Alerta `#dc2626`):** `btn btn-error` (Exclusão, reprovação, ações irreversíveis)

---

## 🌙 Suporte ao Tema Dark/Light

O design system possui dois temas configurados via DaisyUI:
- **Tema Claro:** `data-theme="jorgete"` (Fundo Slate-50, cards brancos, bordas Slate-200)
- **Tema Escuro:** `data-theme="jorgete-dark"` (Fundo Slate-950, cards Slate-900, bordas Slate-800)

A persistência do tema é armazenada na chave `jorgete-theme` do `localStorage`.

---

## 🛠️ Desenvolvimento & Compilação

Para compilar ou acompanhar alterações nos estilos:

```bash
# Instalar dependências
npm install

# Compilar CSS minificado para produção
npm run build

# Executar Tailwind em modo watch (desenvolvimento contínuo)
npm run watch
```
