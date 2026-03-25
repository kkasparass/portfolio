# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Planning policy

When a feature plan is approved, save a copy to `.claude/feature-plans/<feature-name>.md` in this repo **before** starting implementation.

---

## Architecture

Next.js portfolio site using the App Router. The main page (`src/app/page.tsx`) is composed of four sections in order:

1. **IntroductionSection** — bio, contact info, social links
2. **SkillsSection** — technical skills with icon row + categorised tag pills
3. **ProjectsSection** — personal projects (Day Planner, and more to be added)
4. **CareerSection** — work history using collapsible accordion items

### Key paths

- `src/app/` — App Router root: `layout.tsx`, `page.tsx`, `globals.css`
- `src/app/projects/` — Project detail pages (e.g. `day-planner/page.tsx`)
- `src/components/` — Reusable components grouped by feature (`TitlePage/`, `AccordionItems/`, `SocialsRow/`, `TagList/`, `TooltipIcon/`)
- `src/components/PageLayout.tsx` — Shared page wrapper (gradient + `max-w-3xl` centered layout). Use this for every page.
- `public/` — Static assets: SVG tech logos, project images, `cv.pdf`
- `public/projects/` — Per-project assets (images, GIFs) organised by project slug

### Styling

Tailwind CSS 4 via PostCSS. Custom CSS variables for light/dark theming are defined in `globals.css` and respect `prefers-color-scheme: dark`.

### Path alias

`@/*` resolves to the repo root (configured in `tsconfig.json`).

---

## Design intent

### Mood
Light-hearted, clean, and simple. Copy should be casual and first-person (e.g. "Hey, I'm Kas" not "I am a seasoned professional"). Avoid corporate/formal language throughout.

### Accent colour — sky blue
All accent elements use Tailwind's `sky` palette:
- **Tag pills** (`TagList`): `bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300`
- **Badge pills** (role badge, project status): `bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300`
- Hover state on linked tags: `hover:bg-sky-200 dark:hover:bg-sky-900/50`

### Background gradient
`bg-gradient-to-b from-sky-100 to-zinc-50` (light) / `dark:from-sky-950/40 dark:to-background` (dark).
Applied to the outer wrapper div in `page.tsx`. The `<main>` element is `bg-transparent` so the gradient shows through.

---

## Component notes

### TagList
Accepts `tags: (string | TagItem)[]` where `TagItem = { label, href?, tooltip? }`.
- Plain strings are still supported for backward compatibility (used in career section skill tags).
- When `href` is provided the pill is wrapped in an `<a>` tag opening in a new tab.
- When `tooltip` is provided a `react-tooltip` tooltip is rendered. Tooltip copy convention: lead with `"Used in: <Project(s)>"` or a short equivalent. Do not include proficiency levels or years in tooltips.
- `"use client"` is required on this component because of the Tooltip import.

### SkillsSection structure
Two sub-sections:
1. **"What I work with"** — icon row (`TooltipIcon`) for core 5+ year skills: React, TypeScript, HTML, CSS, GraphQL, Apollo Client.
2. **"More in the toolkit"** — four labelled `TagList` categories:
   - **Mobile**: React Native, Ionic, Capacitor
   - **Backend**: Elixir, PHP, PostgreSQL
   - **UI libraries**: MaterialUI, TailwindCSS, Bootstrap
   - **Testing & tooling**: Jest, React Testing Library, Cypress, Storybook, Figma, DataDog, GitLab CI/CD, Git

Category headings use `text-sm font-semibold uppercase tracking-wide text-foreground/50`.

### ProjectsSection
Displays personal/side projects. More projects will be added over time — follow the existing Day Planner card pattern: icon image (48×48) + title linking to repo/live site + sky blue status badge + description paragraph + `TagList` tags. No border on the card.

---

## Planned future work

- **More projects** in `ProjectsSection` as they are built/released
- **Additional main page sections** may be added (no specifics planned yet)
- **Separate project detail pages** for some projects (individual routes under `src/app/`)
- **Playground / learning page** — a new route, roughly a blog + list of learning exercises/experiments in web development

---

## Content source

Skills, experience, and project data lives in the Obsidian vault. The vault root is set via the `OBSIDIAN_VAULT` environment variable — the Skills Documentation folder is at `$OBSIDIAN_VAULT/Skills Documentation`.

Always cross-reference this vault when updating portfolio content (skills, career descriptions, project details, dates, metrics). Key files:
- `Personal Information.md` — contact details
- `Experience/` — per-employer notes with tech stacks and achievements
- `Projects/` — per-project notes with metrics and stack details
- `Skills/` — proficiency levels and years of experience per technology

### Setting up on a new machine

`OBSIDIAN_VAULT` is set in `.claude/settings.local.json` (gitignored, so not committed). On each machine, add the correct path for that machine:

```json
{
  "env": {
    "OBSIDIAN_VAULT": "/path/to/your/Henc/obsidian"
  }
}
```

The file lives at `<repo root>/.claude/settings.local.json`. Create it if it doesn't exist.
