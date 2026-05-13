# abhinavrajesh.com

Fifth iteration of my personal portfolio. Live at [abhinavrajesh.com](https://abhinavrajesh.com).

## Stack

- **Next.js 15** (App Router, Turbopack) on **React 19**
- **TypeScript** + **Tailwind CSS v4**
- **MDX** via `next-mdx-remote` for notes and project pages
- **Spotify** Web API for the "Recently on repeat" mosaic, cached in **Redis** (`ioredis`)
- **Vercel** for hosting, analytics, and speed insights

## Highlights

- Server-rendered experience accordion using native `<details>`/`<summary>` with smooth `::details-content` animation and exclusive open behavior
- Skip-to-main-content link, reserved scrollbar gutter, and `prefers-reduced-motion` honored throughout
- Light / dark theme with no flash on first paint
- MDX-driven notes (`src/content/notes/`) and projects (`src/content/projects/`) — drop in a new `.mdx`, ship it

## Local development

```bash
yarn install
yarn dev      # starts Next.js on http://localhost:3000
yarn lint
yarn build
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

## Project layout

```
src/
  app/            App Router pages, route handlers, sitemap, og image
  content/        Authored content (MDX notes + projects) and typed accessors
  features/       Feature-scoped UI + data (work-list, spotify-mosaic, mdx, …)
  components/     Shared primitives (ui, layout)
  lib/            Cross-cutting helpers with no UI
```

