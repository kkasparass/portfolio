import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import TagList from "../../../components/TagList/TagList";

export const metadata: Metadata = {
  title: "Tavern Log — Kasparas Morkunas",
  description:
    "A full-stack TTRPG character archive platform built with Next.js, Fastify, Prisma, and AWS S3.",
};

export default function TavernLogPage() {
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
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">Tavern Log</h1>
            <span className="text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 px-2 py-0.5 rounded-full w-fit">
              Personal project — live
            </span>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kkasparass/tavern-log"
            className="flex gap-1 items-center text-sm font-semibold px-3 py-1 border rounded-sm opacity-75 hover:opacity-100 hover:bg-foreground hover:text-background transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tavernlog.kasparas.dev"
            className="flex gap-1 items-center text-sm font-semibold px-3 py-1 border rounded-sm opacity-75 hover:opacity-100 hover:bg-foreground hover:text-background transition-colors"
          >
            <ExternalLink size={16} />
            Live Site
          </a>
        </div>
      </section>

      {/* Why I built it */}
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Why I built it</h2>
        <p>
          I play a lot of tabletop RPGs, and over the years I&apos;ve
          accumulated a cast of characters I care about — each with their own
          backstory, voice, and visual identity. I wanted a place to bring them
          to life beyond character sheets and scattered Google Docs. I wanted
          something with a more personal touch — a dedicated profile for each
          character that could really showcase their personality through stories,
          voice lines, artwork, and a timeline of key moments.
        </p>
        <p>
          It also doubled as a deliberate full-stack learning project. I had
          identified specific skill gaps I wanted to fill — Fastify, Prisma,
          PostgreSQL from scratch, JWT auth, AWS S3, Docker, and GitHub Actions —
          and designed the architecture to cover all of them in a single project
          I&apos;d actually want to use.
        </p>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">Features</h2>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Character profiles</h3>
          <p>
            Each character gets a dedicated profile page with a bio, personality
            section, status badge, and tags. The landing page surfaces all public
            characters on the platform with client-side filtering by name, game
            system, and tag.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Stories</h3>
          <p>
            Short stories and narrative pieces written for each character. The
            admin side uses a Tiptap rich text editor with formatting controls;
            public pages render the stored HTML through a DOMPurify sanitisation
            pass. Stories support a draft/publish toggle — drafts are never
            visible on public pages.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Voice lines</h3>
          <p>
            Audio recordings with transcripts and optional context notes.
            Uploaded directly to S3 via presigned URLs, played back through a
            custom inline audio player on the public profile.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Art gallery</h3>
          <p>
            An image gallery for character artwork, each with an optional title,
            caption, and artist credit. Images open in a fullscreen lightbox.
            Like voice lines, images upload directly to S3 from the browser.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Timeline</h3>
          <p>
            A chronological list of key moments in the character&apos;s story —
            each with a title, date label, and description. Manually ordered via
            the admin interface.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Per-character theming</h3>
          <p>
            Every character can have its own visual identity. The admin selects a
            colour theme that controls the background, text, and accent colours
            across the entire profile — plus a background pattern and page
            transition animation. Theming is powered by CSS custom properties
            wired into Tailwind&apos;s colour tokens, so the classes stay static
            while the values change per character at runtime.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Multi-user & admin</h3>
          <p>
            Anyone can register an account and create characters. Each user gets
            a full admin interface with CRUD for all content types — stories,
            voice lines, artwork, and timeline events — scoped to their own
            characters. Authentication uses JWT tokens stored in httpOnly cookies
            with CSRF protection.
          </p>
        </div>
      </section>

      {/* Technical details */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Technical details</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Stack
          </h3>
          <TagList
            tags={[
              { label: "Next.js 14", href: "https://nextjs.org/" },
              { label: "React 18", href: "https://react.dev/" },
              { label: "TypeScript", href: "https://www.typescriptlang.org/" },
              { label: "TailwindCSS", href: "https://tailwindcss.com/" },
              {
                label: "TanStack Query",
                href: "https://tanstack.com/query/latest",
              },
              { label: "Framer Motion", href: "https://www.framer.com/motion/" },
              { label: "Tiptap", href: "https://tiptap.dev/" },
              { label: "Fastify", href: "https://fastify.dev/" },
              { label: "Prisma", href: "https://www.prisma.io/" },
              { label: "PostgreSQL", href: "https://www.postgresql.org/" },
              { label: "AWS S3", href: "https://aws.amazon.com/s3/" },
              { label: "Vitest", href: "https://vitest.dev/" },
              { label: "Docker", href: "https://www.docker.com/" },
              { label: "GitHub Actions", href: "https://github.com/features/actions" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Architecture
          </h3>
          <p>
            <strong>Monorepo with strict frontend/backend split.</strong> The
            repo is an npm workspaces monorepo with two apps:{" "}
            <code>apps/web</code> (Next.js) and <code>apps/api</code> (Fastify).
            The API owns all database access via Prisma — the frontend is a pure
            client that fetches everything over HTTP. This keeps data ownership
            clean and means auth, CRUD, and file upload logic all live in one
            place.
          </p>
          <p>
            <strong>
              RSC prefetch + TanStack Query HydrationBoundary.
            </strong>{" "}
            Public pages fetch data in a React Server Component, dehydrate the
            TanStack Query cache, and pass it to client components via{" "}
            <code>HydrationBoundary</code>. Client components call{" "}
            <code>useQuery()</code> with the same key and find the data already
            present — no loading flash, no redundant network request. Admin pages
            use <code>useMutation()</code> with{" "}
            <code>invalidateQueries()</code> for automatic cache sync after CRUD
            operations.
          </p>
          <p>
            <strong>
              Auth from scratch — no NextAuth.
            </strong>{" "}
            Authentication is implemented entirely in Fastify: bcrypt password
            hashing, JWT signing via <code>@fastify/jwt</code>, httpOnly cookie
            storage (immune to XSS token theft), and CSRF protection via{" "}
            <code>@fastify/csrf-protection</code>. Next.js middleware reads the
            cookie to gate <code>/admin/*</code> routes.
          </p>
          <p>
            <strong>Presigned S3 uploads.</strong> File uploads go directly from
            the browser to S3. The client calls an authenticated Fastify endpoint
            to get a short-lived presigned PUT URL, then uploads the file
            directly — neither server touches the binary payload.
          </p>
          <p>
            <strong>
              Per-character theming via CSS custom properties.
            </strong>{" "}
            Tailwind generates static CSS at build time, so dynamically
            constructed class names from database values get purged. The solution:
            Tailwind colour tokens reference CSS variables, and the character
            layout injects actual hex values at runtime via an inline{" "}
            <code>style</code> prop. Static classes, dynamic values.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Notable challenges
          </h3>
          <p>
            <strong>Learning three new tools simultaneously under real constraints.</strong>{" "}
            Fastify, Prisma, and AWS S3 were all new. Rather than exploring them
            in isolation, the architecture required integrating them together from
            the start — Prisma behind a Fastify plugin system, S3 behind an
            authenticated presign endpoint with CORS-scoped IAM permissions.
          </p>
          <p>
            <strong>TanStack Query RSC hydration pattern.</strong> Getting
            server-fetched data into the client cache without a loading flash
            required understanding how Next.js App Router server and client
            rendering phases interact, and how TanStack Query&apos;s dehydrate /
            hydrate cycle bridges them.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
