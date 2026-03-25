# Day Planner Project Detail Page

## Context
The portfolio currently has a single home page with a brief Day Planner card in the Projects section. The goal is to give the project its own dedicated page at `/projects/day-planner` with a proper introduction, feature showcase (with GIFs/screenshots), and technical deep-dive. The home page card will be updated to link internally to this page rather than directly to GitHub.

## Planning Policy (enforced for this repo going forward)
Before starting implementation, save a copy of the approved plan to `.claude/feature-plans/<feature-name>.md` in the repo.

---

## Files to Create
- `src/components/PageLayout.tsx` — reusable page wrapper (gradient + centered layout)
- `src/app/projects/day-planner/page.tsx` — new detail page
- `public/projects/day-planner/` — asset directory with renamed GIFs/PNGs
- `.claude/feature-plans/day-planner-detail-page.md` — copy of this plan (saved before implementation begins)

## Files to Modify
- `src/app/page.tsx` — use `<PageLayout>` instead of the inline wrapper divs
- `src/components/TitlePage/ProjectsSection.tsx` — swap `<a>` for Next.js `<Link href="/projects/day-planner">`
- `CLAUDE.md` — add planning policy section + update architecture to note `/projects/` sub-routes and `PageLayout`

---

## Step-by-Step Implementation

### 1. Extract PageLayout component
Create `src/components/PageLayout.tsx` — a simple wrapper that accepts `children`:

```tsx
export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-100 to-zinc-50 font-sans dark:from-sky-950/40 dark:to-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-12 py-16 sm:py-32 px-4 sm:px-16 bg-transparent items-center sm:items-start">
        {children}
      </main>
    </div>
  );
}
```

Update `src/app/page.tsx` to use `<PageLayout>` — removing the inline wrapper divs.

### 2. Save plan copy + update CLAUDE.md
- Copy this plan to `.claude/feature-plans/day-planner-detail-page.md`
- Add to CLAUDE.md: planning policy rule and note that `/projects/` sub-routes exist

### 2. Copy & rename assets
Copy from `C:\coding\day_planner\day_planner\assets\documentation\` → `public/projects/day-planner/`:

| Original | Renamed |
|---|---|
| `Recording 2026-03-16 151828.gif` | `todos-demo.gif` |
| `Recording 2026-03-16 154555.gif` | `planner-demo.gif` |
| `Recording 2026-03-16 160942.gif` | `planner-edit-demo.gif` |
| `image.png` | `todo-complete-plan.png` |
| `image-1.png` | `planner-add-todo.png` |
| `image-2.png` | `repeat-green.png` |
| `image-3.png` | `repeat-red.png` |
| `Recording 2026-03-17 095543.gif` | `routines-demo.gif` |
| `image-4.png` | `routines-add-1.png` |
| `image-5.png` | `routines-add-2.png` |
| `Recording 2026-03-17 100419.gif` | `energy-demo.gif` |

### 3. Create src/app/projects/day-planner/page.tsx

Page uses the same outer wrapper pattern as home (`bg-gradient-to-b from-sky-100 to-zinc-50 dark:from-sky-950/40 dark:to-background`) and `max-w-3xl` centered layout.

**Section 1 — Header**
- Back link: `← Back` linking to `/`
- App icon (48×48, `public/adaptive-icon-cropped.png`)
- Title "Day Planner" + sky blue "Personal project — live" badge
- Two links: GitHub button + APK Releases button (style matching SocialsRow CV button pattern — bordered pill)

**Section 2 — Why I built it**
Personal motivation copy:
- Has many hobbies and interests; kept jumping between them without focus
- Decision paralysis — sometimes spent more time deciding what to do than actually doing it
- Days felt like they lacked real achievements
- Tried Notion and other task apps — none had the exact combination of features (hierarchical planner + daily todos + effort/capacity system)
- So he built exactly what he needed

**Section 3 — Feature showcase**
Each feature: heading + description + image(s)/GIF. Phone screenshots displayed at `max-w-xs` with rounded corners. GIFs same treatment.

| Feature | Assets |
|---|---|
| Core todos | `todos-demo.gif` |
| Planner | `planner-demo.gif`, `planner-edit-demo.gif`, `planner-add-todo.png`, `todo-complete-plan.png` |
| Repeat frequency | `repeat-green.png`, `repeat-red.png` (side by side) |
| Routines | `routines-demo.gif`, `routines-add-1.png`, `routines-add-2.png` |
| Energy & effort system | `energy-demo.gif` |
| Settings & backup | text only |

**Section 4 — Technical details**
- `TagList` for stack: React Native, Expo, TypeScript, Expo SQLite, Redux Toolkit, EAS Build, React Navigation, React Native Paper
- Architecture callouts:
  - SQLite is the single source of truth — all persistent state lives in the DB, not Redux
  - Redux used only as a reload-signal layer (boolean flags that trigger re-fetches)
  - 6-table schema with self-referential `planning_categories` for unlimited nesting
  - Custom INSERT trigger auto-assigns `itemOrder` on `daily_todos`
  - 13 incremental migrations without data loss
- Notable challenges (2–3 sentences each):
  - Drag-to-reorder sync with SQLite
  - Recursive subcategory rendering (solved with denormalised `parentLabel`)

**Suggested additional visuals (not blocking — to be added later):**
- Database schema ERD (dbdiagram.io → PNG/SVG) showing 6 tables + FK relationships
- Data-flow architecture diagram: SQLite → hooks → Redux signal → UI
- These can be added to `public/projects/day-planner/` when ready

### 4. Update ProjectsSection.tsx
- `import Link from "next/link"`
- Change `<a target="_blank" href="https://github.com/kkasparass/day_planner">` wrapping the title to `<Link href="/projects/day-planner">`

---

## Verification
1. `npm run dev` → navigate to `/projects/day-planner` — all four sections render, GIFs animate, back link returns to `/`
2. Home page card title now navigates to the detail page (not GitHub)
3. Detail page GitHub + releases buttons open in new tabs
4. `npm run lint` — no errors
5. Check responsive layout at mobile width (max-w-xs on phone screenshots prevents overflow)
