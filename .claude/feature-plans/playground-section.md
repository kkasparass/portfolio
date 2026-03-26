# Playground / Learning Experiments Feature

## Context
Adding a "Playground" section to the portfolio to showcase learning experiments (CSS demos, auth systems, web security concepts, etc.). The goal is to keep experiments easily testable from the website and reviewable on GitHub, without over-engineering the portfolio repo.

---

## Decisions

**Repo strategy:** Simple experiments (CSS/JS/layout) live in this repo as Next.js pages. Complex backend experiments (auth systems, security tools) are separate repos, deployed independently — the portfolio only hosts the write-up and links out.

**Demo strategy:** Two tiers:
- *Simple CSS/JS/layout experiments* — live inside this repo, render at `/playground/[slug]/demo` (bare route, no `PageLayout`, clean canvas)
- *Complex experiments (auth, security, backend)* — deployed as separate projects on Vercel under subdomains (e.g. `auth.kasparas.dev`), linked via a "Try it live" button. No micro-frontend coupling — just a plain link + a `← kasparas.dev` back-link inside each experiment.

**Detail pages:** Hand-authored TSX per experiment (same as `day-planner/page.tsx`). Data-driven generation adds complexity for little gain at small scale.

---

## Routing

```
/                          → home page (PlaygroundSection teaser)
/playground                → full experiment index
/playground/[slug]         → experiment detail (prose + links)
/playground/[slug]/demo    → bare demo page (no PageLayout, full canvas)
```

---

## Files to Create

### `src/lib/experiments.ts`
Static data array — single source of truth for all experiment metadata.

```ts
type Experiment = {
  slug: string;
  title: string;
  description: string;   // 1-2 sentence summary for cards
  status: "live" | "in progress" | "concept";
  tags: string[];
  demoType: "internal" | "external" | "none";
  demoUrl?: string;      // external demo URL
  githubUrl?: string;
  category: "css" | "auth" | "security" | "js" | "other";
};
```

### `src/components/playground/ExperimentCard.tsx`
Shared card component used in both `PlaygroundSection` and the index page. Mirrors the card layout in `ProjectsSection.tsx`:
- Title as `Link` to `/playground/[slug]`
- Sky-blue status badge (`bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300`)
- Description paragraph
- `TagList` (plain strings)
- No card border (matching existing project cards)

### `src/components/TitlePage/PlaygroundSection.tsx`
Home page section, mirrors `ProjectsSection.tsx`. Shows first 3 experiments; adds "See all experiments →" link if more exist. Imports `experiments` from `src/lib/experiments.ts`.

Section heading copy: *"Things I've been tinkering with"* (casual, matching site tone)

### `src/app/playground/page.tsx`
Full experiment index. Uses `PageLayout`. Maps over all experiments and renders `ExperimentCard`. Back link to `/`. Exports `metadata`.

### `src/app/playground/[slug]/page.tsx`
Dynamic detail page. Uses `PageLayout`. Structure (following `day-planner/page.tsx` pattern):
- Back link (`← Playground`)
- Title + status badge
- Button row: "Try it live" (if has demo) + "View on GitHub" (if has repo)
- `<section>` — *"What I was exploring"* (narrative, 1–3 paragraphs)
- Demo link block (for internal: link to `/playground/[slug]/demo`; for external: already in button row)
- `<section>` — *"What I learned"*
- TagList for stack/concepts

Generates `metadata` (title, description) from `experiments` data.

### `src/app/playground/[slug]/demo/page.tsx`
Bare demo route — does NOT use `PageLayout`. Renders the actual experiment UI. Switch/map on slug to a per-experiment demo component. Includes a small "← back to write-up" link (top-left, same ArrowLeft + Link pattern).

Each new internal demo adds a case here and a component in `src/app/playground/[slug]/` alongside its page.

---

## Files to Modify

### `src/app/page.tsx`
Add `<PlaygroundSection />` between `<ProjectsSection />` and `<CareerSection />`. One import + one JSX line.

---

## Patterns to Reuse

| Pattern | Source file |
|---|---|
| Project card layout (no border, icon + badge + description + TagList) | `src/components/TitlePage/ProjectsSection.tsx` |
| Detail page structure (back link, button row, sections) | `src/app/projects/day-planner/page.tsx` |
| PageLayout wrapper | `src/components/PageLayout.tsx` |
| Sky-blue badge pill classes | `src/components/TitlePage/ProjectsSection.tsx` |
| TagList usage | `src/components/TagList/TagList.tsx` |

---

## Adding a new experiment (workflow)

1. Add entry to `src/lib/experiments.ts`
2. Create `src/app/playground/[slug]/page.tsx` with prose write-up
3. If `demoType === "internal"`: create demo component + add case in `src/app/playground/[slug]/demo/page.tsx`
4. Add any demo assets to `public/playground/[slug]/`

---

## Verification

- `npm run dev` → check `/playground` lists cards, `/playground/[slug]` shows detail, `/playground/[slug]/demo` renders full-canvas demo
- Home page: `PlaygroundSection` appears between Projects and Career
- Dark mode: all sky-blue badges/pills render correctly
- Mobile: cards stack properly at small breakpoints
- `npm run build` passes with no TS errors
- `npm run lint` passes
