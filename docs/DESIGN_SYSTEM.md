# Jorgete Design System (JDS) — Especificação Completa v1.2

O **Jorgete Design System (JDS)** é a especificação unificada de UI/UX para todo o ecossistema Jorgete (`Secretaria Google`, `Secretaria Slides`, `Secretaria Site`, `Jorgete Studio`, etc.). Ele engloba desde a tipografia e botões até a navegação por sidebar, menus dropdown e a governança Human-in-the-Loop (HITL).

---

## 1. Diretrizes Globais & Filosofia

1. **Clean UI & Business-First:** Foco absoluto na produtividade e clareza de gestores e analistas. Eliminado qualquer excesso decorativo ou ruído visual.
2. **Linguagem Humana (Zero IA na UI):** A interface utiliza estritamente termos de negócio. Termos de engenharia como "payload", "LLM", "prompt", "chunk", "agente" ou "vector DB" são estritamente proibidos. Use: *"Rascunho"*, *"Sugestão"*, *"Minuta"*, *"Processar"*, *"Consultar Acervo"*.
3. **Light Theme de Alto Contraste:** Padrão claro com fundo Slate-50 (`#f8fafc`) e superfícies brancas com bordas Slate-200 (`#e2e8f0`).
4. **Arquivos Modulares (`< 1000 linhas`):** A estrutura de folhas de estilo e scripts é dividida para garantir facilidade de manutenção sem inflar os subsistemas.

---

## 2. Tipografia, Fontes & Hierarquia de Títulos

* **Família de Fonte:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `system-ui`, `sans-serif`.

### Hierarquia de Títulos e Textos

| Elemento | Tamanho | Peso | Line Height | Cor | Uso Principal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Título Hero / H1** | `2.25rem - 3rem` (36px-48px) | Extrabold (`800`) | `1.15` | `text-slate-900` / Gradiente JDS | Título principal da aplicação/hub |
| **Título de Seção / H2** | `1.25rem - 1.5rem` (20px-24px) | Bold (`700`) | `1.25` | `text-slate-900` | Cabeçalhos de painéis e tabelas |
| **Subtítulo / Card / H3** | `1rem - 1.125rem` (16px-18px) | Bold (`700`) | `1.35` | `text-slate-800` | Títulos de cards e modais |
| **Texto de Corpo (Body)** | `0.875rem` (14px) | Normal (`400`) / Medium (`500`) | `1.5` | `text-slate-600` | Descrições, parágrafos, conteúdos |
| **Subtexto / Muted** | `0.8125rem` (13px) | Regular (`400`) | `1.4` | `text-slate-400` / `500` | Metadados, datas, IDs de demandas |
| **Rótulo / Label Microcopy**| `0.75rem` (12px) | Bold (`700`) | `1.0` | `text-slate-500` Uppercase | Legendas de inputs, headers de tabelas |

---

## 3. Paleta de Cores e Tokens Visuais

### Ações (4 Padrões Estritos)
1. **Primário (Gradiente Safira Executivo):** `linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)` — Ação principal da página.
2. **Secundário (Neutro Slate):** Fundo `#f1f5f9`, Texto `#334155`, Borda `#cbd5e1` — Cancelamentos, filtros, navegação secundária.
3. **Sucesso (Esmeralda Governança):** Fundo `#059669` com texto branco — Aprovações, confirmações e salvamentos com sucesso.
4. **Crítico (Urgente / Rose):** Fundo `#dc2626` com texto branco — Reprovações, exclusões e alertas irreversíveis.

---

## 4. Componentes de Interface

### A. Unified Header (Topo da Aplicação)
* **Altura:** `64px` fixa, `sticky top-0`, `z-index: 50`.
* **Conteúdo:** Símbolo "J" gradiente + Nome "Jorgete AI" + Divisor vertical + Badge do subsistema atual + Perfil Google SSO (foto/iniciais e e-mail).

### B. Sidebar / Navegação Lateral (Para Módulos de Painel)
* **Largura:** `240px` (desktop), retrátil em telas menores.
* **Item Inativo:** Fundo transparente, texto Slate-600, ícone Slate-400, hover `bg-slate-100`.
* **Item Ativo:** Fundo `bg-blue-50`, texto `text-blue-900` font-bold, borda lateral direita `border-r-4 border-blue-600`, ícone `text-blue-600`.

### C. Menus Dropdown e Flyouts
* **Container:** Fundo branco, `border border-slate-200`, cantos `rounded-2xl`, sombra `shadow-xl`, padding `p-2`.
* **Opções Internas:** Padding `px-3 py-2`, `rounded-xl`, `hover:bg-slate-100`, texto `text-xs font-semibold`.

### D. Navegação em Abas (Tabs)
* **Container:** Fundo `#f1f5f9`, `p-1`, `rounded-xl`, borda `#e2e8f0`.
* **Aba Ativa:** Fundo branco, texto Azul Safira (`#1e3a8a`), sombra leve `shadow-sm`.

### E. TableContainer (Tabelas)
* **Container:** Cantos `rounded-xl`, `border border-slate-200`, `overflow-hidden`.
* **Header (`thead`):** `position: sticky; top: 0;`, fundo `#f8fafc`, texto Slate-500 em caixa alta (`uppercase text-xs font-bold`).
* **Linhas (`tr`):** Borda inferior `#e2e8f0`, efeito hover `bg-slate-50`.

### F. Card HITL Universal (Human-In-The-Loop)
* **Badge de Status:** Rascunho (`amber`), Aprovado (`emerald`), Rejeitado (`rose`).
* **Edição Direta:** Botão `[✏️ Editar Texto]` alterna a visualização para modo de edição WYSIWYG/Textarea na própria tela.
* **Gaveta de Comentários & Trava de Segurança:** Permite adicionar anotações para refinamento. **Se houver 1 ou mais comentários pendentes, o botão de Aprovação/Envio é desativado.**
* **Formatação:** Preservação de quebras de linha (`white-space: pre-wrap`).
* **Links:** Todos os links externos abrem obrigatoriamente com `target="_blank"`.

### G. Splitter Inputs (Prompts & Entradas)
* **Dimensão:** `min-height: 102px` / `height: 112px`, `rounded-lg`, borda Slate-200 com foco em Azul `#3b82f6`.

---

## 5. Estrutura de Arquivos Central (`jorgete-ui`)

```text
jorgete-ui/
├── docs/
│   └── DESIGN_SYSTEM.md     # Esta especificação completa
├── css/
│   ├── tokens.css           # Tokens de cores, fontes, sombras e tamanhos
│   ├── buttons.css          # Padrões das 4 famílias de botões
│   └── components.css       # Header, Sidebar, Dropdowns, Tabs, Tables, HITL Cards
├── js/
│   ├── unified-header.js    # Componente Web do Cabeçalho Unificado
│   ├── sidebar-menu.js      # Lógica de controle de Sidebar e Dropdowns
│   └── hitl-card.js         # Comportamento interativo do Card HITL
├── prototype/
│   └── index.html           # Protótipo interativo completo
```
