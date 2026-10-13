# UltraVein Website – Client

Angular 22 front end of the UltraVein website. All public pages are prerendered at build time, so search engines and visitors get complete HTML before any JavaScript runs.

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

The prerendered static site is written to `dist/ultravein-website/browser/` and can be served by any static file server.

`npm run serve:ssr:ultravein-website` starts the Node.js server for server-side rendering (needed only for the dynamic 404 page). It accepts requests for `localhost` by default; set `ALLOWED_HOSTS` to a comma-separated list of hostnames in production, e.g. `ALLOWED_HOSTS=ultravein.pl,www.ultravein.pl`.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home: hero, facts, nearest course editions, course formats, short about, call to action for institutions |
| `/kursy` | Course catalog with a format filter (`?forma=stacjonarne`, `online`, `w-placowce`) |
| `/kursy/:slug` | Course page: description, audience, program, instructors, price, next edition and registration |
| `/terminarz` | Calendar of all scheduled editions plus courses awaiting a date |
| `/dla-placowek` | In-house trainings for hospitals, with an inquiry form |
| `/o-nas`, `/zespol`, `/publikacje` | Company story, instructors, list of publications |
| `/kontakt` | Contact details and a contact form |
| `/regulamin`, `/polityka-prywatnosci` | Participation terms and privacy policy |

## Structure

- `src/styles/_tokens.scss` – design tokens (colors, fonts, radii, spacing). Change the look of the whole site here.
- `src/styles/_base.scss` – element defaults and shared utility classes (`uv-container`, `uv-button`, `uv-surface`, `uv-chip`, `uv-field`).
- `src/app/layout/` – site header, footer, and navigation.
- `src/app/features/` – one folder per page.
- `src/app/shared/ui/` – reusable UI components: page header, course agenda, course card, icons.
- `src/app/core/models/` – data models (course programs and editions, team members, publications).
- `src/app/core/data/` – temporary static content copied from the current website, to be replaced by the backend API.
- `src/app/core/services/` – `CoursesService` (catalog and calendar) and `PageMetaService`.
- `public/images/` – optimized WebP photos and logos.

## Notes

- Fonts (Inter, Outfit) are self-hosted through `@fontsource-variable` packages, so the site makes no requests to Google Fonts.
- There is no backend yet: course registration links point to the current Google Forms, and the contact and inquiry forms open the visitor's e-mail client with a prefilled message.
