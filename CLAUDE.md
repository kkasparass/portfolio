# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

Single-page Next.js portfolio site using the App Router. There are no multiple routes — the entire site is one page (`src/app/page.tsx`) composed of three sections:

1. **IntroductionSection** — bio, contact info, social links
2. **SkillsSection** — technical skills with tag/tooltip components
3. **CareerSection** — work history using collapsible accordion items

### Key paths

- `src/app/` — App Router root: `layout.tsx`, `page.tsx`, `globals.css`
- `src/components/` — Reusable components grouped by feature (`TitlePage/`, `AccordionItems/`, `SocialsRow/`, `TagList/`, `TooltipIcon/`)
- `public/` — Static assets: SVG tech logos, project images, `cv.pdf`

### Styling

Tailwind CSS 4 via PostCSS. Custom CSS variables for light/dark theming are defined in `globals.css` and respect `prefers-color-scheme: dark`.

### Path alias

`@/*` resolves to the repo root (configured in `tsconfig.json`).
