# Numeric Tools

A set of browser-based utilities for manipulating numeric data.

## Tools

- **Ranges** — Expand and contract numeric ranges (e.g. `1-5` ↔ `1`, `2`, `3`, `4`, `5`).
- **Search** — Cross-reference two numeric lists and separate matches from mismatches.
- **Repeated** — Detect and analyze duplicate entries in a list, sorted by frequency.

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| [Vite](https://vitejs.dev/) | 6 | Build tool and dev server |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first CSS framework |
| [React Router](https://reactrouter.com/) | 7 | Client-side routing |
| [ESLint](https://eslint.org/) | 9 | Linting (flat config) |

## Architecture

Single-page application with client-side routing. No backend or external data sources.

```
src/
├── App.tsx                   Root component — router outlets and layout shell
├── main.tsx                  Entry point — mounts React into #root
├── index.css                 Tailwind directives
├── components/
│   ├── Header.tsx            Navigation header with responsive mobile menu
│   └── TextareaPanel.tsx     Reusable textarea with Copy and Clear actions
├── pages/
│   ├── Home.tsx              Landing page with tool navigation cards
│   ├── Ranges.tsx            Range fold/unfold tool
│   ├── Search.tsx            Cross-list search tool
│   └── Repeated.tsx          Duplicate detection tool
└── utils/
    ├── algorithms.ts         Binary search and merge sort implementations
    └── parsing.ts            Input parsing utilities
```

## Design System

Colors are defined as Tailwind theme extensions in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#367abd` | Header, footer, borders, default buttons |
| `secondary` | `#ee9611` | Primary action buttons, home card body |
| `fg` | `#262626` | Body text (light mode) |
| `fg-contrast` | `#eeeeee` | Text on dark backgrounds |
| `bg` | `#e6e6e6` | Page background (light mode) |
| `bg-dark` | `#1a1a2e` | Page background (dark mode) |

Theme follows the system preference via `darkMode: 'media'` — no manual toggle needed.

Fonts: **Quicksand** (body), **Exo 2** (headings), loaded from Google Fonts.

## Development

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint
```

## Author

Daniel Medrano Huerta — [mdanieltg](https://github.com/mdanieltg/)
