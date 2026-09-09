# Jorgete Design System (`jorgete-ui`) — v1.2.0

Biblioteca central de tokens visuais, layout unificado (Header, Sidebar, Tabs), componentes interativos (Botões, Tabelas, Dropdowns) e governança Human-in-the-Loop (Cards HITL com suporte a temas Light e Dark) para todo o ecossistema **Jorgete**.

---

## 📦 Conteúdo da Biblioteca

```text
jorgete-ui/
├── docs/
│   └── DESIGN_SYSTEM.md        # Especificação técnica completa v1.2.0
├── css/
│   ├── tokens.css              # Variáveis CSS (Cores, Fontes, Margens, Light/Dark)
│   ├── buttons.css             # 4 Padrões de Botões (Primary, Secondary, Success, Critical)
│   └── components.css          # Header, Sidebar, Dropdowns, Tabs, Tables, HITL Cards
├── js/
│   ├── unified-header.js       # Componente Web do Header com alternador Dark/Light
│   └── hitl-card.js            # Comportamento interativo dos Rascunhos HITL
└── prototype/
    └── index.html              # Protótipo piloto interativo completo
```

---

## 🚀 Como Usar em um Subsistema

### 1. Adicionar como Git Submodule
Na raiz do subsistema (`Secretaria_site`, `Secretaria_slides`, `Secretaria_google`):

```bash
git submodule add https://github.com/JaderBrito09/jorgete-ui.git static/shared/ui
```

### 2. Importar os Arquivos no HTML
```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
    <link rel="stylesheet" href="/static/shared/ui/css/tokens.css">
    <link rel="stylesheet" href="/static/shared/ui/css/buttons.css">
    <link rel="stylesheet" href="/static/shared/ui/css/components.css">
</head>
<body>

    <jorgete-header subsystem="Nome do Subssistema"></jorgete-header>

    <script src="/static/shared/ui/js/unified-header.js"></script>
    <script src="/static/shared/ui/js/hitl-card.js"></script>
</body>
</html>
```

---

## 🎨 Cores e Ações Principais
* **Primário (Gradiente Safira):** `btn-primary` (Ação principal da tela)
* **Secundário (Neutro Slate):** `btn-secondary` (Navegação secundária, voltar, fechar)
* **Sucesso (Esmeralda):** `btn-success` (Aprovação, salvamento com sucesso)
* **Crítico (Urgente / Rose):** `btn-critical` (Exclusão, reprovação)

---

## 🌙 Suporte ao Tema Dark/Light
O tema responde ao atributo `data-theme="dark"` ou `data-theme="light"` na tag `<html>` e persiste a escolha no `localStorage`.
