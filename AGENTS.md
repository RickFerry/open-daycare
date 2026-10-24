# AGENTS.md

Daycare app (parent/staff). Next.js 16 App Router + React 19 + Tailwind v4 + TypeScript strict. The app code in `app/` is still create-next-app boilerplate — the real sources of truth are the design references and the OpenSpec workflow below.

## Commands

- `npm run dev` — dev server on :3000 (Next 16 runs Turbopack by default).
- `npm run lint` — bare `eslint` (flat config, lints the whole repo).
- `npx tsc --noEmit` — typecheck. There is no `typecheck` script; typecheck then lint is the verification loop.
- `npm run build` — full build check before calling work done.
- No tests exist. No CI. This directory is **not** a git repo, so there is no history/branch tooling.

## Next.js 16 gotchas

- `cacheComponents: true` (non-default) in `next.config.ts`: dynamic data must be read with awaited request APIs (`await params` / `props`) and wrapped in Suspense boundaries, or cached with `use cache` — otherwise build errors.
- No `src/` dir. Path alias `@/*` maps to the **repo root** (e.g. `@/app/page`), not `@/src`.

## Tailwind v4 (no JS config)

- No `tailwind.config` file. All theming lives in `app/globals.css` via `@theme`; the CSS is wired through the Turbopack loader rule in `next.config.ts`.

## Design references (`references/`)

- `references/pantallas/*.dc.html` are the approved screen designs (Spanish names: feed, ninos, resumen-dia, avisos, vincular-padre, ...) — implement UI to match these and `references/screenshots/`. Fonts are Nunito + Fredoka on a warm palette (`#f6ecdf` bg, `#3f362e` text) — different from the Geist/zinc boilerplate in `app/`.
- `references/pantallas/support.js` and the `.dc.html` files are generated mockups — treat as read-only.

## OpenSpec (spec-driven workflow)

- Config: `openspec/config.yaml` (schema: spec-driven). Currently empty — new features should go through it.
- Commands already set up in `.opencode/commands/`: `/opsx-propose` (proposal in `openspec/changes/<id>/`) → `/opsx-apply` (implement tasks) → `/opsx-verify` → `/opsx-archive`.
- Don't hand-edit specs without a proposal; use `/opsx-update` / `/opsx-sync` when revising.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
