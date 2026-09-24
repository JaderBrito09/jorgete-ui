# 🌐 Diretrizes Locais — Design System & UI Components (`jorgete-ui`)

Este documento rege o desenvolvimento e as regras operacionais do **`jorgete-ui`**, a biblioteca de componentes visuais, layout compartilhado e utilitários de interface do Ecossistema Jorgete Cloud.

---

## 🏛️ 1. Papel Arquitetural e Responsabilidades
* **Design System Compartilhado:** Fornece estilos CSS modernos, tokens de design, componentes reutilizáveis e layouts padronizados para todas as interfaces da plataforma.
* **Módulo de Autenticação Frontend (`JorgeteAuth`):**
  * Captura de token JWT na URL (`?token=<JWT>`) e persistência segura em `localStorage`.
  * Injeção automática do cabeçalho `Authorization: Bearer <JWT>` em requisições `fetchWithAuth`.
  * Redirecionamento automático em caso de erro 401 para:
    `https://www.jorgete.cloud/auth/login?redirect_to=<URL_ATUAL>`.
* **Sem Banco Direto:** Consome dados e APIs exclusivamente via HTTP com autenticação Bearer JWT.

---

## 5. Diretrizes de Design e UX
* **Aparência Premium:** Cores harmoniosas, contraste acessível, micro-animações fluidas e suporte a tema escuro/claro.
* **Consistência:** Componentes desacoplados e tipados em TypeScript/JavaScript moderno.
* **Acessibilidade:** Padrões WCAG e foco em navegabilidade limpa.

---

## 5. Ciclo Obrigatório de Validação e Quality Gate Pré-Commit
Sempre que for solicitado commitar ou entregar código neste subprojeto, é mandatório executar:
1. **Revisão de Código (`code-harness-reviewer`):** Protocolo dos 4 Pilares.
2. **Auditoria de Componentes:** Validação de acessibilidade, estados de erro e integridade de layout.
3. **Testes e Build:** Validação de compilação e testes unitários.
4. **Conventional Commits:** `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `perf:`.

---

## 5. Protocolo de Homologação Em Vigor
1. **Apontar:** Relatar detalhadamente o teste realizado ou cenário a validar.
2. **Analisar:** Realizar o diagnóstico técnico de causa-raiz.
3. **Registrar:** Cadastrar formalmente a demanda (`DEM-xxx`) no arquivo de backlog.
4. **Acumular:** Acumular o lote de demandas em buffer (sem alterar código antecipadamente).
5. **Implementar:** Executar implementação, `pytest`, Quality Gate, `commit` e `push` **exclusivamente mediante o comando "implemente"**.


---

## 🤖 2. Diretrizes de Inferência e Modelos LLM (Strict Model vs. Harness Decoupling — ADR-012)
* **Zero Hardcoded Model Strings:** É **expressamente proibido** declarar strings de modelos (ex.: `"gemini-3.6-flash"`, `"gemini-3.5-flash-lite"`, `"gemini-3.1-pro-preview"`) diretamente no corpo de funções, agentes, roteadores, ferramentas ou endpoints.
* **Resolução Obrigatória por Propósito (`LLMPurpose`):** Toda instanciação de inferência ou adaptador LLM deve compulsoriamente declarar sua finalidade através do enum `LLMPurpose` definido no Harness:
  * `LLMPurpose.ROUTING`: Triagem e classificação de intenções.
  * `LLMPurpose.EXECUTIVE_AGENT`: Agentes operacionais com Tool Calling.
  * `LLMPurpose.SEARCH_GROUNDING`: Buscas web com grounding.
  * `LLMPurpose.BACKGROUND_ROUTINE`: Rotinas autônomas agendadas.
  * `LLMPurpose.DEEP_REASONING`: Síntese complexa e raciocínio profundo.
  * `LLMPurpose.HEALTH_CHECK`: Sondas de liveness e latência.
  * `LLMPurpose.CHAT_CONVERSATIONAL`: Interação conversacional direta.
* **Centralização no Harness:** O Harness é a autoridade única que mapeia o propósito para o modelo adequado, cascatas de fallback e hiperparâmetros de inferência.

---