import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileUser, Github } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import TagList from "../../../components/TagList/TagList";

export const metadata: Metadata = {
  title: "Day Planner — Kasparas Morkunas",
  description:
    "A fully offline mobile productivity app built around a daily energy budget system.",
};

export default function DayPlannerPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="flex flex-col gap-4 w-full">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-foreground/50 hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="flex gap-3 items-center">
          <Image
            src="/adaptive-icon-cropped.png"
            alt="Day Planner app icon"
            width={56}
            height={56}
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">Day Planner</h1>
            <span className="text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 px-2 py-0.5 rounded-full w-fit">
              Personal project — live
            </span>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kkasparass/day_planner"
            className="flex gap-1 items-center text-sm font-semibold px-3 py-1 border rounded-sm opacity-75 hover:opacity-100 hover:bg-foreground hover:text-background transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kkasparass/day_planner/releases"
            className="flex gap-1 items-center text-sm font-semibold px-3 py-1 border rounded-sm opacity-75 hover:opacity-100 hover:bg-foreground hover:text-background transition-colors"
          >
            <FileUser size={16} />
            APK Releases
          </a>
        </div>
      </section>

      {/* Why I built it */}
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Why I built it</h2>
        <p>
          I have a lot of hobbies and interests — and for a long time I kept
          jumping between them without much focus. I&apos;d spend more time
          deciding what to work on than actually working on it. Some days the
          decision paralysis would get bad enough that I&apos;d end up doing
          nothing at all, and the day would feel like it had no real
          achievements.
        </p>
        <p>
          What I wanted was a place to map out all my recurring activities,
          personal projects, and habits — and a simple way to pull from that
          library when planning a day, without the overhead of a full project
          management tool.
        </p>
        <p>
          I tried making it work with Notion and other task apps, but none of
          them had the exact combination of features I was imagining: a
          hierarchical activity library, a daily todo list linked to it, and an
          effort/capacity system to stop me overloading a day before it started.
          So I built it myself.
        </p>
      </section>

      {/* Feature showcase */}
      <section className="flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">Features</h2>

        {/* Todos */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Daily todos</h3>
          <p>
            At its core, Day Planner is a daily todo list. Each day is its own
            container — add tasks, drag to reorder, mark them complete. Completed
            tasks collapse to the bottom so your focus stays on what&apos;s left.
          </p>
        </div>

        {/* Planner */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Planner</h3>
          <p>
            The Planner is a hierarchical library of all your recurring
            activities, hobbies, and projects — organised with unlimited nesting
            depth. Categories are grouped into swipeable tabs by tag, so you can
            split your life into areas (fitness, work, hobbies, etc.) and switch
            between them quickly.
          </p>
          <p>
            Each plan item can be edited individually — you can rename it, set
            an effort value, adjust the repeat frequency, or move it within the
            tree. Plan items can be added directly to today&apos;s todos from the
            planner view.
          </p>
          <p>
            Todos added from plan items get a completion button that marks the
            plan item as done — the same as completing it directly from the
            planner.
          </p>
        </div>

        {/* Repeat frequency */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Repeat frequency</h3>
          <p>
            For recurring tasks — change bedsheets, practice guitar, go for a
            run — you can set a repeat frequency in days. When you&apos;re adding
            that item to a day, the button colour tells you where you stand: green
            means you&apos;ve done it recently, orange means it&apos;s due soon,
            red means the window has passed.
          </p>
        </div>

        {/* Routines */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Routines</h3>
          <p>
            Routines are named collections of tasks you want to bulk-add to a
            day in one tap — a morning routine, a gym session, a work day
            template. Routine items can be linked to plan categories so they
            inherit effort values and mark plan items as done when completed.
          </p>
          <p>
            Routines can be added to a day from the routines tab or directly
            from the create todo screen.
          </p>
        </div>

        {/* Energy system */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Energy & effort system</h3>
          <p>
            Each day has an energy cap (default: 24 units — roughly one unit per
            half hour). Every task, plan item, and routine item carries an effort
            value. A progress bar at the top of the day fills up as you add tasks,
            turning yellow then red as you approach or exceed the cap.
          </p>
          <p>
            It&apos;s not a hard constraint — you can go over. It&apos;s more of a
            gut-check before you commit to a day that&apos;s already too full. When
            adding a plan item, if it would push you over the cap, the button turns
            red to flag it.
          </p>
        </div>

        {/* Settings */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Settings & data backup</h3>
          <p>
            Since everything is stored locally with no cloud sync, the app
            supports exporting and importing the full SQLite database file. You
            can back up your plans and routines, restore from a backup, or
            transfer data to another device. The settings page also lets you
            configure the default daily energy cap and selectively clear
            different parts of your data independently.
          </p>
        </div>
      </section>

      {/* Technical details */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Technical details</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Stack</h3>
          <TagList
            tags={[
              { label: "React Native", href: "https://reactnative.dev/" },
              { label: "Expo", href: "https://expo.dev/" },
              { label: "TypeScript", href: "https://www.typescriptlang.org/" },
              { label: "Expo SQLite", href: "https://docs.expo.dev/versions/latest/sdk/sqlite/" },
              { label: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
              { label: "EAS Build", href: "https://docs.expo.dev/build/introduction/" },
              { label: "React Navigation", href: "https://reactnavigation.org/" },
              { label: "React Native Paper", href: "https://reactnativepaper.com/" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Architecture</h3>
          <p>
            <strong>SQLite as the single source of truth.</strong> All persistent
            state lives in the database — there is no Redux store of app data.
            Redux is used only as a reload-signal layer: two slices hold boolean
            flags that component hooks watch to know when to re-query SQLite.
            This keeps the data layer simple and the UI always in sync with what&apos;s
            actually on disk.
          </p>
          <p>
            <strong>6-table schema with self-referential hierarchy.</strong> The
            {" "}<code>planning_categories</code> table references itself via a{" "}
            <code>parent</code> FK, enabling unlimited nesting depth without
            schema changes. A <code>parentLabel</code> column is denormalised onto
            each row to avoid recursive joins at render time. A custom{" "}
            <code>INSERT</code> trigger on <code>daily_todos</code> auto-assigns
            sort order, removing the need to manage ordering on insert.
          </p>
          <p>
            <strong>13 incremental migrations.</strong> The schema grew
            significantly as features were added after the initial release. All
            migrations run sequentially on app start against a stored schema
            version, keeping existing user data intact across updates.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Notable challenges</h3>
          <p>
            <strong>Drag-to-reorder sync with SQLite.</strong> React Native&apos;s
            drag libraries update UI state optimistically, but writing the new
            order back to SQLite without triggering redundant re-renders required
            a bulk SQL reorder on drop, coordinated with Redux reload flags to
            re-fetch cleanly after the write settled.
          </p>
          <p>
            <strong>Recursive subcategory rendering.</strong> Rendering
            arbitrarily deep nested trees efficiently in React Native is tricky —
            recursive queries are slow and recursive components can blow the call
            stack. The solution was to denormalise <code>parentLabel</code>{" "}
            directly onto each row, flattening the fetch to a single query, and
            render the tree with a collapsible accordion that only mounts visible
            nodes.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
