# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — start dev server on http://localhost:3000
- `pnpm build` — production build (Vite + Nitro)
- `pnpm serve` — preview the built output
- `pnpm exec biome check --write .` — lint + format (tabs, double quotes); Biome is the only linter/formatter

There is no test runner configured.

## Architecture

Single-page portfolio built on **TanStack Start** (SSR-capable React framework on top of Vite + Nitro). Stack: React 19, Tailwind v4, TypeScript strict, Biome.

- **Routing**: file-based via `@tanstack/router-plugin`. Route files live in `src/routes/` and are compiled to `src/routeTree.gen.ts` (generated — do not edit, ignored by Biome). `__root.tsx` defines the HTML shell, head/meta, and font preconnects (Figtree + Satoshi from Google Fonts / Fontshare). `src/router.tsx` exports `getRouter()` consumed by TanStack Start.
- **Build pipeline** (`vite.config.ts`): plugin order matters — `viteTsConfigPaths` → `tailwindcss` → `tanstackStart` → `nitro` → `viteReact`. Nitro handles the server bundle; output lands in `.output/`.
- **Path alias**: `@/*` → `src/*` (via `tsconfig.json` + `vite-tsconfig-paths`).
- **Content data**: project entries live in `src/data/projects.ts` and are rendered by `src/components/Projects.tsx`. Add new portfolio items there rather than hard-coding in the component.
- **Styling**: Tailwind v4 with design tokens declared in `src/styles.css` under `@theme`. Consume tokens via utilities (`bg-primary-600`, `font-display`) — never hard-code hex values in components. `styles.css` and `routeTree.gen.ts` are excluded from Biome.

## Design system

The project ships a design-system skill at `.claude/skills/personal-site-design/SKILL.md` covering color tokens (gray neutrals, emerald primary), typography (Figtree body, Satoshi display), spacing, and component patterns. Read it before adding or modifying UI, and update it when introducing a new pattern.
