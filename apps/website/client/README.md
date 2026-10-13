# UltraVein Website – Client

Angular 22 front end of the UltraVein website. The home page is prerendered at build time, so search engines and visitors get complete HTML before any JavaScript runs.

All paths and commands below are relative to this directory (`apps/website/client/`).

## Prerequisites

- Node.js 24 LTS (Angular 22 requires Node.js `^22.22.3`, `^24.15.0`, or `>=26`)
- npm

## Commands

```bash
npm install      # install dependencies
npm start        # development server at http://localhost:4200
npm run build    # production build with prerendering -> dist/ultravein-website
npm test         # unit tests (Vitest)
```

The prerendered static site is written to `dist/ultravein-website/browser/` and can be served by any static file server. `npm run serve:ssr:ultravein-website` starts the Node.js server for server-side rendering.

## Structure

- `src/styles/_tokens.scss` – design tokens (colors, fonts, radii, spacing). Change the look of the whole site here.
- `src/styles/_base.scss` – element defaults and shared utility classes (`uv-container`, `uv-button`, `uv-section`).
- `src/app/layout/` – site header, footer, and navigation.
- `src/app/features/home/` – home page and its sections.
- `src/app/shared/ui/` – reusable UI components, such as the course card.
- `src/app/core/models/` and `src/app/core/data/` – data models and temporary static data, to be replaced by the backend API.
- `public/images/` – optimized WebP photos and logos.

## Notes

- Fonts (Inter, Outfit) are self-hosted through `@fontsource-variable` packages, so the site makes no requests to Google Fonts.
- Until course pages exist in this application, "Szczegóły i zapisy" links point to the course pages of the current WordPress site.
