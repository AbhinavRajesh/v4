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

## Directory layout

```
src/
  app/                          routes only — pages, layouts, route handlers
    layout.tsx                  root layout, fonts, analytics, theme bootstrap script
    globals.css                 Tailwind v4 entry, CSS vars, theme tokens, animations
    sitemap.ts                  exports baseUrl; aggregates notes + projects
    robots.ts
    instrumentation-client.ts
    og/route.tsx                dynamic OG image generator
    (marketing)/                route group — non-URL-affecting
      page.tsx                  home (composes data from @/content)
      about/page.tsx
    notes/
      page.tsx                  index
      [slug]/page.tsx           renders MDX via <ContentPage>
    projects/
      page.tsx
      [slug]/page.tsx
    api/spotify/
      route.ts                  GET handler, gated by API_KEY header
      utils.ts                  getTopTracks() + TopTracks type (wire format)

  content/                      all authored content + its accessors
    index.ts                    NoteMetadata, ProjectMetadata, getNotes(), getProjects()
    notes/*.mdx                 MDX source for /notes/*
    projects/*.mdx              MDX source for /projects/*
    work.tsx                    WorkEntry[] (JSX in summaries/bullets)
    education.ts                EducationEntry[]
    stack.ts                    string[] of tech tags

  features/                     feature-scoped UI + data; one folder per vertical
    work-list/work-list.tsx     exports the WorkEntry type
    spotify-mosaic/
      spotify-mosaic.tsx        async server component, Suspense-friendly
      get-spotify-data.ts       client of the internal /api/spotify route
    mdx/
      mdx.tsx                   <Mdx> wrapper around next-mdx-remote/rsc
      components.tsx            per-tag overrides — the only file with `any`
      content-page.tsx          shared <article> shell for notes + projects
      load.ts                   getMDXData / readMDXFile / getMDXFiles
      format-date.ts

  components/                   shared primitives only — nothing feature-specific
    ui/                         accent-link, theme-toggle, socials
    layout/                     nav, footer

  lib/                          cross-cutting helpers with no UI
    cn.ts                       clsx + tailwind-merge
    site-config.ts              userData + analytics
```

### Quirks worth knowing before touching things

- **The home page's "Experience" `WorkList` uses native `<details name="experience">`** for exclusive-open accordion behavior. Animation depends on `::details-content` and `interpolate-size: allow-keywords` in `globals.css`. Don't replace with a JS accordion — it will regress accessibility and the no-JS path.
- **Theme** is bootstrapped via inline script in `layout.tsx` (no-flash on first paint). `data-theme` attribute on `<html>` overrides `prefers-color-scheme`. `ThemeToggle` writes to `localStorage` + the attribute. Don't add a theme provider — the current model has zero hydration cost.
- **Spotify route is self-gated** via `API_KEY` header. `getSpotifyData()` in `features/spotify-mosaic/get-spotify-data.ts` calls its own origin (`/api/spotify`) with that header. The `APP_URL` constant there is hardcoded to production — verify before changing the production hostname.
- **`src/features/mdx/components.tsx`** disables `@typescript-eslint/no-explicit-any` at file scope. Intentional. Don't try to "fix" it — the next-mdx-remote component map is genuinely `any`-shaped. `mdx.tsx` (the wrapper) carries the same disable for the same reason.
- **`src/content/index.ts` uses `fs`/`path` at module load** (Node only). It's only imported from server components and route handlers — don't import it from anything marked `"use client"`.
- **`work.tsx` lives in `content/` despite having JSX.** It's data, not a component — the JSX is just embedded React fragments inside summaries and bullets, and it consumes `<AccentLink>`. Treat it as a content file when editing; don't extract sub-components.

## Tailwind v4 + styling conventions

- **No `tailwind.config.*` file.** All theming lives in `src/app/globals.css` via `@theme inline { ... }`.
- **Design tokens are CSS variables** on `:root`, swapped under `[data-theme="dark"]` and the `prefers-color-scheme: dark` media query. Token names: `--background`, `--foreground`, `--muted`, `--subtle`, `--accent`. Exposed to Tailwind as `bg-background`, `text-foreground`, `border-subtle`, `text-accent`, etc.
- **Fonts**: `Geist` (sans) and `Geist_Mono` via `next/font/google`. Use Tailwind's `font-sans` / `font-mono`. Mono is the visual convention for metadata, captions, periods, tags.
- **Class composition**: use `cn()` from `@/lib/cn`. It runs `clsx` then `tailwind-merge` — order matters when conditional classes override defaults.
- **Type scale & spacing**: small, dense, generous line-height. Headings stay close to body size (`text-xl` / `text-2xl`); meta uses `text-xs` mono uppercase tracking-wider. Don't introduce a new size without checking the existing pages.
- **Accessibility is non-negotiable.** Skip-to-main-content link, `scrollbar-gutter: stable`, `prefers-reduced-motion` honored on every animation, `aria-label` on icon-only buttons. Preserve these patterns.
- **Color usage**: `text-foreground` for emphasis, `text-muted` for body in secondary blocks, `text-subtle` only for hairlines/dividers, `text-accent` only for links. Don't introduce raw hex outside `globals.css`.

## MDX content authoring

### Notes (`src/content/notes/*.mdx`)

Frontmatter type lives at `src/content/index.ts` as `NoteMetadata`:

```yaml
---
title: string
publishedAt: string        # ISO date, e.g. "2024-08-15"
summary: string
image?: string             # absolute URL or /public path; used for OG
---
```

Filename becomes the slug. `getNotes()` reads the directory at request time (no build-time index). `generateStaticParams` in `src/app/notes/[slug]/page.tsx` produces routes.

### Projects (`src/content/projects/*.mdx`)

Frontmatter type at `src/content/index.ts` as `ProjectMetadata`:

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

Defined in `src/features/mdx/components.tsx`. Anchor, code (syntax-highlighted via `sugar-high`), Image, YouTube, Socials, Table, plus typography overrides (`h2`, `h3`, `p`, `ul`, `ol`, `li`, `blockquote`, `hr`). To add a new MDX-only component, add it there — don't pass `components` per-render unless the override is route-specific.

## Deployment & environment

### Required environment variables

Copy `.env.example` to `.env.local`. Production values live in Vercel.

| Var | Required for | Notes |
|---|---|---|
| `SPOTIFY_CLIENT_ID` | `/api/spotify` | From the Spotify developer dashboard |
| `SPOTIFY_CLIENT_SECRET` | `/api/spotify` | Same |
| `REDIS_URL` | `/api/spotify` | Caches access/refresh tokens — any Redis-compatible URL |
| `API_KEY` | `/api/spotify` | Shared secret; `getSpotifyData()` sends it as the `api_key` header |
| `NEXT_PUBLIC_GA_ID` | analytics | Optional; safe to leave empty in dev |

Refresh tokens are seeded manually in Redis (one-time OAuth flow, outside this repo). If the mosaic stops rendering, that's the usual cause — check Redis for `spotify:refresh_token`.

### Vercel-specific

- `@vercel/analytics` and `@vercel/speed-insights` are wired in `layout.tsx`. They're no-ops outside Vercel.
- `next.config.ts` whitelists remote image hosts: `*.scdn.co`, `*.spotifycdn.com`, `cdn.hashnode.com`. Add a host here before using `next/image` with a new external domain.
- `transpilePackages: ["next-mdx-remote"]` is intentional — required for ESM compatibility.

### Branch & release flow

The default branch for PRs is `main`. The repo currently sits on `release/v5`. Don't push to `main` directly; open a PR.

## Architectural principles

These rules govern where new code goes. They survived the restructure — apply them when extending the codebase.

- **One concept per file.** `WorkEntry` lives next to `work-list.tsx`, not re-exported. Frontmatter types live in `content/index.ts`, not in route files.
- **Routes are thin.** A `page.tsx` should compose feature components and read from `@/content`. If a route grows past ~80 lines, the new code probably belongs in `features/` or `content/`.
- **Layer rules:**
  - `lib/` — pure functions, no React, no domain knowledge.
  - `components/` — shared primitives and chrome. No feature-specific logic, no data fetching.
  - `features/` — owns the intersection of UI and domain. One folder per feature, self-contained.
  - `content/` — authored data (MDX, arrays) plus typed accessors. Server-only (uses `fs`).
  - `app/` — routes. Thin compositions of the above.
- **Don't create barrel files** (`index.ts` re-export hubs) unless there's a real consolidation reason. `content/index.ts` exists because schemas + loaders belong together; `features/*/` directories don't have barrels because each feature is one or two files.
- **Env vars are accessed inline at point of use.** Don't add a `lib/env.ts` boot-time validator — it would break static prerender of pages that don't need those vars. If env handling grows complex, revisit.
- **Move files with `git mv`** so blame survives. Refactors land in their own PRs, one feature at a time, with passing builds between commits.

## Working defaults

- **Reversible changes** (edits, local commits, branch operations on a feature branch): proceed.
- **Hard-to-reverse or shared-state actions** (`git push`, force push, PR creation, Vercel env changes, deleting branches, rewriting history): ask first.
- **When in doubt about a UI change**: run `yarn dev`, open the page, verify the golden path and the affected edge case. Say what you tested.
