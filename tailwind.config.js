/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./prototype/**/*.html",
    "./templates/**/*.html",
    "./js/**/*.js",
    "./docs/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Outfit', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'tactile': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03)',
        'tactile-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        jorgete: {
          "primary": "#1e3a8a",          // Safira Executivo
          "primary-content": "#ffffff",
          "secondary": "#334155",        // Neutro Slate
          "secondary-content": "#ffffff",
          "accent": "#2563eb",           // Azul Real
          "accent-content": "#ffffff",
          "neutral": "#0f172a",          // Slate Escuro
          "neutral-content": "#f8fafc",
          "base-100": "#ffffff",         // Fundo de Cards / Superfície
          "base-200": "#f8fafc",         // Fundo Canvas (Slate-50)
          "base-300": "#e2e8f0",         // Bordas (Slate-200)
          "base-content": "#0f172a",     // Texto Principal
          "info": "#0284c7",
          "info-content": "#ffffff",
          "success": "#059669",          // Esmeralda Governança
          "success-content": "#ffffff",
          "warning": "#d97706",          // Amber Rascunho
          "warning-content": "#0f172a",  // Contraste WCAG 2.2 AA (escuro sobre amber)
          "error": "#dc2626",            // Rose Alerta
          "error-content": "#ffffff",
        },
        "jorgete-dark": {
          "primary": "#3b82f6",
          "primary-content": "#020617",  // Contraste WCAG 2.2 AA (escuro sobre azul claro)
          "secondary": "#94a3b8",
          "secondary-content": "#0f172a",
          "accent": "#60a5fa",
          "accent-content": "#020617",
          "neutral": "#1e293b",
          "neutral-content": "#f8fafc",
          "base-100": "#0f172a",
          "base-200": "#020617",
          "base-300": "#1e293b",
          "base-content": "#f8fafc",
          "info": "#38bdf8",
          "info-content": "#020617",
          "success": "#10b981",          // Esmeralda Dark
          "success-content": "#020617",  // Contraste WCAG 2.2 AA
          "warning": "#f59e0b",
          "warning-content": "#020617",  // Contraste WCAG 2.2 AA
          "error": "#f43f5e",
          "error-content": "#ffffff",
        }
      }
    ],
    darkTheme: "jorgete-dark",
    base: true,
    styled: true,
    utils: true,
  },
};
