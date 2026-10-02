# Jorgete Design System (JDS) — Especificação Completa v2.0

O **Jorgete Design System (JDS v2.0)** é a especificação arquitetural unificada de UI/UX para todo o ecossistema Jorgete (`jorgete_site`, `jorgete_studio`, `jorgete-google`, `jorgete-chat`, etc.). 

Nesta versão v2.0, toda a camada de estilização é alimentada pelo **Tailwind CSS + DaisyUI**, empacotada no arquivo compilado **`css/jorgete-ui.min.css`** (66 KB) e catalogada em **`docs/UI_CATALOG.md`**.

---

## 1. Diretrizes Globais & Filosofia Visualmente Estrita

1. **Clean UI & Business-First:** Foco absoluto na produtividade e clareza de gestores e analistas. Eliminado qualquer excesso decorativo ou ruído visual.
2. **Linguagem Humana (Zero IA na UI):** A interface utiliza estritamente termos de negócio. Termos de engenharia como *"payload"*, *"LLM"*, *"prompt"*, *"chunk"*, *"agente"* ou *"vector DB"* são estritamente proibidos em rótulos do usuário. Use: *"Rascunho"*, *"Sugestão"*, *"Minuta"*, *"Processar"*, *"Consultar Acervo"*.
3. **Temas Centralizados (`data-theme`):**
   * **Light (`jorgete`):** Fundo Slate-50 (`#f8fafc`), superfícies brancas (`#ffffff`), bordas Slate-200 (`#e2e8f0`).
   * **Dark (`jorgete-dark`):** Fundo Slate-950 (`#020617`), superfícies Slate-900 (`#0f172a`), bordas Slate-800 (`#1e293b`).
4. **Contrato Rígido para IAs:** Todas as IAs geradoras de código devem utilizar **exclusivamente** os componentes e classes semânticas do DaisyUI definidos em `docs/UI_CATALOG.md`. É proibidíssimo criar CSS inline (`style="..."`) ou definir cores hexadecimais avulsas no HTML.

---

## 2. Catálogo Estruturado de Componentes Padronizados

### A. Unified Header (Cabeçalho Unificado)
* **Especificação:** Altura fixa `64px` (`h-16`), `sticky top-0`, `z-index: 50`, borda inferior `border-b border-base-300`.
* **Conteúdo:**
  * Símbolo gradiente "J" + Nome "Jorgete AI" clicável direcionando para o Hub (`www.jorgete.cloud`).
  * Dropdown/Badge do subsistema ativo ("Studio Web", "Jorgete Chat", "Secretária GWS", "Portal Hub").
  * Botão discreto de alternância do Painel Lateral (`toggleSidebar()`).
  * Botão de alternância do Tema Light/Dark (`toggleTheme()`).
  * Perfil SSO do Usuário Logado (Foto/Iniciais e e-mail via Google SSO).

### B. Sidebar Retrátil & Painéis Laterais
* **Especificação:** Largura padrão `384px` (`w-96`) ou `320px` (`w-80`), `sidebar-transition` (`transition-all duration-300 ease-in-out`).
* **Regra do Canvas 100% Dinâmico:** O fechamento da sidebar oculta o elemento (`hidden`), expandindo a área central do Canvas para 100% da viewport.
* **Proibição de Flutuantes:** É estritamente proibido incluir chevrons ou botões flutuantes soltos sobre a área do Canvas. O acionamento é feito unicamente no Unified Header ou no botão 'X' do topo do painel.

### C. Input de Chat / Splitter Textarea (`jorgete-google` e `jorgete-chat`)
* **Especificação:** Container `rounded-2xl`, borda `border-base-300`, altura mínima `102px` a `112px`.
* **Recursos Internos:**
  * Textarea sem bordas próprias (`textarea-ghost`), redimensionamento desativado (`resize-none`).
  * Rodapé com indicador discreto (*"💡 Suporta Markdown"* ou modelo ativo) + Botão de Envio com destaque Safira (`btn-primary`).
  * Animação de foco com borda destacada em Safira/Azul Real.

### D. Card HITL Universal (Human-In-The-Loop)
* **Especificação:** Container `card bg-base-100 border border-base-300 shadow-md p-5 rounded-2xl`.
* **Componentes Obrigatórios:**
  1. **Badges de Estado:** Rascunho (`badge-warning`), Aprovado (`badge-success`), Rejeitado (`badge-error`).
  2. **Identificador da Demanda:** Código em fonte mono espaçada (ex: `DEM-102`).
  3. **Edição In-Place:** Permite alterar texto diretamente na tela sem redirecionamentos.
  4. **Gaveta de Comentários & Trava de Segurança:** Permite registrar ressalvas do analista. **Existindo comentário pendente, o botão de aprovação é desativado ou sinalizado para ajuste.**
  5. **Botoeira de Governança:** `[✏️ Editar]`, `[🗑️ Rejeitar]` (Rose) e `[✅ Aprovar Minuta]` (Esmeralda).

### E. Balões de Mensagem de Chat (`Chat Bubbles`)
* **Especificação:** Padrão DaisyUI `chat chat-start` (Assistente) e `chat chat-end` (Usuário).
* **Balão do Assistente:** Fundo `bg-base-200`, borda `border-base-300`, texto do corpo `text-base-content`, avatar com iniciais "J".
* **Balão do Usuário:** Fundo `chat-bubble-primary` (Safira), texto branco, avatar com foto/iniciais do SSO.

### F. Navegação por Abas (`Tabs`)
* **Especificação:** Container `tabs tabs-boxed bg-base-200 p-1.5 rounded-xl border border-base-300`.
* **Aba Ativa:** `tab-active bg-base-100 text-primary font-bold shadow-xs rounded-lg`.
* **Aba Inativa:** `text-base-content/70 font-semibold hover:text-base-content`.

### G. TableContainer (Tabelas de Auditoria e Dados)
* **Especificação:** Container `border border-base-300 rounded-2xl shadow-sm bg-base-100 overflow-x-auto`.
* **Estilização:** Tabela com linhas alternadas (`table table-zebra`), header sticky `thead bg-base-200 uppercase font-bold text-xs`, células alinhadas.

### H. Botões Oficiais (4 Padrões Rígidos)
1. **Primário:** `btn btn-primary` (Safira Executivo `#1e3a8a`) — Ação principal da tela.
2. **Secundário:** `btn btn-secondary btn-outline` (Slate `#334155`) — Navegação, cancelar, voltar.
3. **Sucesso:** `btn btn-success` (Esmeralda Governança `#059669`) — Aprovações e confirmações.
4. **Erro / Crítico:** `btn btn-error` (Rose Alerta `#dc2626`) — Exclusões e rejeições.

---

## 3. Matriz de Mapeamento dos Componentes

| Componente | Padrão `jorgete-ui` v2.0 | Classe / Elemento DaisyUI | Finalidade |
| :--- | :--- | :--- | :--- |
| **Header** | Topo Unificado | `<header class="navbar bg-base-100 border-b border-base-300">` | Navegação e perfil global |
| **Sidebar** | Painel Contextual | `<aside class="w-96 bg-base-100 border-l sidebar-transition">` | Formulários e ações do passo |
| **Input Chat** | Splitter Textarea | `<div class="form-control rounded-2xl border"> <textarea>` | Prompts e comandos |
| **Card HITL** | Governança Human-In-The-Loop | `<div class="card bg-base-100 border p-5">` | Aprovação e revisão de IA |
| **Chat Bubbles** | Mensagens de Diálogo | `<div class="chat chat-start"> / <div class="chat chat-end">` | Conversação do chatbot/assistente |
| **Tabs** | Abas de Navegação | `<div class="tabs tabs-boxed bg-base-200">` | Troca de telas no módulo |
| **Tables** | Tabela de Auditoria | `<table class="table table-zebra w-full">` | Exibição de demandas e logs |
| **Botões** | 4 Padrões de Ação | `btn-primary`, `btn-secondary`, `btn-success`, `btn-error` | Interações de ação |

---

## 4. Como Importar nos Subsistemas

Em qualquer arquivo HTML/Template dos subsistemas Python (`secretaria_site`, `secretaria_studio`, `jorgete-chat`, `jorgete-google`), inclua uma única linha na tag `<head>`:

```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="jorgete">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/static/shared/ui/css/jorgete-ui.min.css">
</head>
<body class="bg-base-200 text-base-content min-h-screen font-sans">
    ...
</body>
</html>
```
