# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js 16 breaking changes

This is Next.js 16.2.6 — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed deprecation notices. Key docs to check:

- `01-app/01-getting-started/` — project structure, layouts, server/client components, data fetching
- `01-app/03-api-reference/05-config/` — `next.config.ts` options
- `01-app/03-api-reference/03-file-conventions/` — file conventions (layout, page, route, metadata)

## Commands

```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint 9 (flat config)
```

## Architecture

Single-page React micro SaaS tool (`img2gradient`) — client-side image color extraction and CSS gradient generation.

- **`src/app/layout.tsx`** — Root layout (server component): dark theme (`#0b0f19`), sticky nav bar, Google AdSense placeholder, footer with privacy/terms links.
- **`src/app/page.tsx`** — The entire app (client component, `"use client"`). Image upload via drag-and-drop or file picker → inline Web Worker runs K-Means++ clustering on sampled pixels → extracts dominant colors → interactive gradient editor with color stops, linear/radial toggle, angle control → copy CSS or export PNG/CSS file.
- **`src/app/globals.css`** — Tailwind CSS 4 import + CSS custom properties for background/foreground.
- **`@/*`** maps to `./src/*` (configured in `tsconfig.json`).

### Key implementation details

- **Web Worker** is created inline via a blob URL (`createWorker()` in `page.tsx`) — it runs K-Means++ on an `OffscreenCanvas` with a 5-second timeout.
- **Caching**: `CacheManager` class wraps `localStorage` (`STORAGE_KEY = 'img2gradient_cache'`), LRU with `CACHE_SIZE = 10`.
- **No backend**: all processing is client-side (privacy-focused positioning).
- **Ad slots**: placeholder divs for Google AdSense integration (`#google-adsense-slot`).

## Stack

Next.js 16.2.6 | React 19.2.4 | Tailwind CSS 4 (PostCSS plugin) | TypeScript 5 (strict) | ESLint 9 flat config (`eslint-config-next`)
