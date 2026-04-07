import Image from "next/image";
import Link from "next/link";
import TagList from "../TagList/TagList";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-semibold">Things I&apos;ve built</h2>
        <p>Personal projects outside of work</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Image
            src="/tavern-log-icon.png"
            alt="Tavern Log app icon"
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <Link href="/projects/tavern-log">
              <h3 className="text-2xl font-semibold underline hover:no-underline">
                Tavern Log
              </h3>
            </Link>
            <span className="text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 px-2 py-0.5 rounded-full w-fit">
              Personal project — live
            </span>
          </div>
        </div>
        <p>
          A full-stack character archive for TTRPG players. Users register,
          upload characters, and each gets a dedicated profile with short
          stories, voice lines, an art gallery, and a timeline — all with
          per-character theming. Built from conception to deployed MVP in under
          a week.
        </p>
        <TagList
          tags={[
            "Next.js",
            "Fastify",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "AWS S3",
            "TailwindCSS",
          ]}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Image
            src="/adaptive-icon-cropped.png"
            alt="Day Planner app icon"
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <Link href="/projects/day-planner">
              <h3 className="text-2xl font-semibold underline hover:no-underline">
                Day Planner
              </h3>
            </Link>
            <span className="text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 px-2 py-0.5 rounded-full w-fit">
              Personal project — live
            </span>
          </div>
        </div>
        <p>
          A fully offline mobile productivity app I designed and shipped solo.
          Built around a daily energy budget system — tasks have effort values,
          and a per-day cap keeps you from overloading. Includes
          drag-to-reorder, hierarchical plan categories with unlimited nesting,
          reusable routines, and SQLite backup/restore.
        </p>
        <TagList
          tags={[
            "React Native",
            "Expo",
            "TypeScript",
            "SQLite",
            "Redux Toolkit",
            "EAS Build",
          ]}
        />
      </div>
    </section>
  );
}
