# CLAUDE.md

Guidance for Claude Code when working in this repo. This file is loaded into context for every session — keep it accurate, keep it terse.

## What this is

Fifth iteration of `abhinavrajesh.com` — a personal portfolio. Server-rendered Next.js site, MDX-driven content (notes + projects), small surface area, no database. Deployed on Vercel.

## Stack

- **Next.js 15** App Router, Turbopack dev server
- **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config in `globals.css`, no `tailwind.config.*`)
- **MDX** via `next-mdx-remote` (RSC + serialize)
- **Redis** (`ioredis`) — caches Spotify access/refresh tokens only
- **Vercel** — hosting, analytics, speed insights, GA via `@next/third-parties`

Node 20+, TypeScript paths: `@/*` → `./src/*`.

## Commands

Use **yarn**, never `npm` or `npx`. The repo has `yarn.lock`; mixing package managers breaks lockfile fidelity.

```bash
yarn install
yarn dev      # next dev --turbopack
yarn lint
yarn build
yarn start
```

There are no tests in this repo. Don't claim "tests pass" — say so explicitly when you can't verify a behavior.

## Hard rules

- **Yarn only.** No `npm install`, no `npx`. If you need to run a one-off binary, prefer `yarn dlx` or invoke the local binary at `node_modules/.bin/`.
- **No emojis** in code, MDX content, commit messages, or PR bodies — unless the user explicitly asks.
- **Minimal comments.** Only when the *why* is non-obvious (hidden constraint, workaround, subtle invariant). Never explain *what* — naming should carry that.
- **Prefer editing existing files** over creating new ones. Don't scaffold new directories or barrel files unless the structure section below calls for it.
- **No `any` outside `mdx.tsx`.** That file is the documented exception (next-mdx-remote component props). New code must be typed.
- **Frontend changes need browser verification.** Type-checking and lint are not enough — run `yarn dev` and exercise the affected page before reporting done.

## Current directory layout

```
src/
  app/                       App Router
    layout.tsx               root layout, fonts, analytics, theme bootstrap script
    page.tsx                 home — hardcoded work/education/stack arrays
    globals.css              Tailwind v4 entry, CSS vars, theme tokens, animations
    sitemap.ts               exports baseUrl; aggregates notes + projects
    robots.ts
    og/route.tsx             dynamic OG image generator
    instrumentation-client.ts
    about/page.tsx
    notes/
      page.tsx               index
      utils.ts               getNotes() + NoteMetadata type
      [slug]/page.tsx        renders MDX
    projects/
      page.tsx
      utils.ts               getProjects() + ProjectMetadata type
      [slug]/page.tsx
    api/data/spotify/
      route.ts               GET handler, gated by API_KEY header
      utils.ts               getTopTracks() + TopTracks type

  components/                flat, lowercase, kebab-case filenames
    nav.tsx                  client
    footer.tsx               server
    theme-toggle.tsx         client
    socials.tsx              server
    accent-link.tsx          server, handles internal vs external
    work-list.tsx            server, exports WorkEntry type
    spotify-mosaic.tsx       async server component, Suspense-friendly
    mdx.tsx                  MDX component overrides — only file with `any`

  notes/                     MDX source for /notes/* — frontmatter + body
  projects/                  MDX source for /projects/* — frontmatter + body

  lib/                       runtime helpers consumed by components
    spotify.ts               client of the internal /api/data/spotify route
    utils.ts                 cn() — clsx + tailwind-merge

  utils/                     module-scoped helpers
    index.ts                 MDX file IO, formatDate
    config.ts                userData + analytics — site-wide config singleton
```

### Quirks worth knowing before touching things

- **Two helper directories: `src/lib/` and `src/utils/`.** Not a clean split — `lib/utils.ts` has `cn()`, `utils/index.ts` has MDX IO and `formatDate`. Both legitimate but the boundary is fuzzy. See the restructure plan below.
- **MDX content lives at `src/notes/` and `src/projects/`** (top-level), but their loaders live under `src/app/notes/utils.ts` and `src/app/projects/utils.ts`. Keep this in mind when grepping for frontmatter types.
- **`src/app/page.tsx` is ~325 lines** with `work[]`, `education[]`, and `stack[]` arrays inline. Treat that file as a content file, not a component — when adding/editing entries, don't refactor surrounding JSX unless asked.
- **The home page's "Experience" `WorkList` uses native `<details name="experience">`** for exclusive-open accordion behavior. Animation depends on `::details-content` and `interpolate-size: allow-keywords` in `globals.css`. Don't replace with a JS accordion — it will regress accessibility and the no-JS path.
- **Theme** is bootstrapped via inline script in `layout.tsx` (no-flash on first paint). `data-theme` attribute on `<html>` overrides `prefers-color-scheme`. `ThemeToggle` writes to `localStorage` + the attribute. Don't add a theme provider — the current model has zero hydration cost.
- **Spotify route is self-gated** via `API_KEY` header. `getSpotifyData()` in `src/lib/spotify.ts` calls its own origin with that header. The `APP_URL` constant there is hardcoded to production — verify before changing the production hostname.
- **`src/components/mdx.tsx`** disables `@typescript-eslint/no-explicit-any` at file scope. Intentional. Don't try to "fix" it — the next-mdx-remote component map is genuinely `any`-shaped.

## Tailwind v4 + styling conventions

- **No `tailwind.config.*` file.** All theming lives in `src/app/globals.css` via `@theme inline { ... }`.
- **Design tokens are CSS variables** on `:root`, swapped under `[data-theme="dark"]` and the `prefers-color-scheme: dark` media query. Token names: `--background`, `--foreground`, `--muted`, `--subtle`, `--accent`. Exposed to Tailwind as `bg-background`, `text-foreground`, `border-subtle`, `text-accent`, etc.
- **Fonts**: `Geist` (sans) and `Geist_Mono` via `next/font/google`. Use Tailwind's `font-sans` / `font-mono`. Mono is the visual convention for metadata, captions, periods, tags.
- **Class composition**: use `cn()` from `@/lib/utils`. It runs `clsx` then `tailwind-merge` — order matters when conditional classes override defaults.
- **Type scale & spacing**: small, dense, generous line-height. Headings stay close to body size (`text-xl` / `text-2xl`); meta uses `text-xs` mono uppercase tracking-wider. Don't introduce a new size without checking the existing pages.
- **Accessibility is non-negotiable.** Skip-to-main-content link, `scrollbar-gutter: stable`, `prefers-reduced-motion` honored on every animation, `aria-label` on icon-only buttons. Preserve these patterns.
- **Color usage**: `text-foreground` for emphasis, `text-muted` for body in secondary blocks, `text-subtle` only for hairlines/dividers, `text-accent` only for links. Don't introduce raw hex outside `globals.css`.

## MDX content authoring

### Notes (`src/notes/*.mdx`)

Frontmatter type lives at `src/app/notes/utils.ts` as `NoteMetadata`:

```yaml
---
title: string
publishedAt: string        # ISO date, e.g. "2024-08-15"
summary: string
image?: string             # absolute URL or /public path; used for OG
---
```

Filename becomes the slug. `getNotes()` reads the directory at request time (no build-time index). `generateStaticParams` in `src/app/notes/[slug]/page.tsx` produces routes.

### Projects (`src/projects/*.mdx`)

Frontmatter type at `src/app/projects/utils.ts` as `ProjectMetadata`:

```yaml
---
title: string
tagline: string
short_description: string
description: string
highlight: string
github_repo: string        # "owner/repo" — rendered as github.com/owner/repo
is_group_project: boolean
tags: string[]
image?: string
year?: string
live_url?: string
---
```

The project page header auto-renders `github_repo` and `live_url` as links — don't duplicate them in the body.

### MDX components available in content

Defined in `src/components/mdx.tsx`. Anchor, code (syntax-highlighted via `sugar-high`), Image, YouTube, Socials, Table, plus typography overrides (`h2`, `h3`, `p`, `ul`, `ol`, `li`, `blockquote`, `hr`). To add a new MDX-only component, add it there — don't pass `components` per-render unless the override is route-specific.

## Deployment & environment

### Required environment variables

Copy `.env.example` to `.env.local`. Production values live in Vercel.

| Var | Required for | Notes |
|---|---|---|
| `SPOTIFY_CLIENT_ID` | `/api/data/spotify` | From the Spotify developer dashboard |
| `SPOTIFY_CLIENT_SECRET` | `/api/data/spotify` | Same |
| `REDIS_URL` | `/api/data/spotify` | Caches access/refresh tokens — any Redis-compatible URL |
| `API_KEY` | `/api/data/spotify` | Shared secret; `getSpotifyData()` sends it as the `api_key` header |
| `NEXT_PUBLIC_GA_ID` | analytics | Optional; safe to leave empty in dev |

Refresh tokens are seeded manually in Redis (one-time OAuth flow, outside this repo). If the mosaic stops rendering, that's the usual cause — check Redis for `spotify:refresh_token`.

### Vercel-specific

- `@vercel/analytics` and `@vercel/speed-insights` are wired in `layout.tsx`. They're no-ops outside Vercel.
- `next.config.ts` whitelists remote image hosts: `*.scdn.co`, `*.spotifycdn.com`, `cdn.hashnode.com`. Add a host here before using `next/image` with a new external domain.
- `transpilePackages: ["next-mdx-remote"]` is intentional — required for ESM compatibility.

### Branch & release flow

The default branch for PRs is `main`. The repo currently sits on `release/v5`. Don't push to `main` directly; open a PR.

## Target structure for scalability

The current layout works at today's size (~10 MDX files, ~10 components, one API route). Reach for the restructure below **only when the user asks to scale this up** — don't preemptively refactor.

When the user does ask to restructure, propose this as the target and migrate incrementally:

```
src/
  app/                       routes only — pages, layouts, route handlers, sitemap, robots, og
    (marketing)/             route group for home, about
    notes/[slug]/page.tsx
    projects/[slug]/page.tsx
    api/spotify/route.ts     drop the /data/ segment — only one consumer

  content/                   all authored content (was src/notes, src/projects, and the inline arrays in app/page.tsx)
    notes/*.mdx
    projects/*.mdx
    work.ts                  WorkEntry[] — extracted from app/page.tsx
    education.ts
    stack.ts
    schemas.ts               NoteMetadata, ProjectMetadata — colocated with content, not with routes

  features/                  feature-scoped UI + data; one folder per vertical
    work-list/
      work-list.tsx
      index.ts
    spotify-mosaic/
      spotify-mosaic.tsx
      get-spotify-data.ts    moved from src/lib/spotify.ts
      types.ts
    mdx/
      mdx.tsx
      components.tsx         the per-tag overrides, separate from <Mdx>
      load.ts                getMDXData, readMDXFile, getMDXFiles
      format-date.ts

  components/                shared primitives only — nothing feature-specific
    ui/                      accent-link, theme-toggle, socials
    layout/                  nav, footer

  lib/                       cross-cutting helpers with no UI
    cn.ts                    was lib/utils.ts
    site-config.ts           was utils/config.ts
    env.ts                   new — runtime-validated env (zod or a tiny hand-rolled guard)
```

### Migration principles

- **One concept per file.** `WorkEntry` should live next to `work-list.tsx`, not be re-exported. Frontmatter types should live in `content/schemas.ts`, not in route `utils.ts` files.
- **Routes are thin.** A `page.tsx` should compose feature components and read from `content/`. No 300-line page files with embedded data.
- **`lib/` is for pure functions with no React.** `components/` is for headless/primitive UI with no domain knowledge. `features/` owns the intersection.
- **Collapse `src/utils/` and `src/lib/`.** They drift in opposite directions. After the migration, `lib/` is the only utility bucket.
- **Notes and projects share 95% of their `[slug]/page.tsx`.** Factor a `<ContentPage>` in `features/mdx/` that takes `{ frontmatter, content, schema }`. Keep route files under 30 lines each.
- **Validate env at boot.** A single `lib/env.ts` that throws on missing required vars beats `process.env.X as string` scattered across files.

When migrating, move files with `git mv` so blame survives, and do it one feature at a time with passing builds in between. Don't bundle a restructure into an unrelated PR.

## Working defaults

- **Reversible changes** (edits, local commits, branch operations on a feature branch): proceed.
- **Hard-to-reverse or shared-state actions** (`git push`, force push, PR creation, Vercel env changes, deleting branches, rewriting history): ask first.
- **When in doubt about a UI change**: run `yarn dev`, open the page, verify the golden path and the affected edge case. Say what you tested.
