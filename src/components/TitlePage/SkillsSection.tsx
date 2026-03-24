import TagList from "../TagList/TagList";
import TooltipIcon from "../TooltipIcon/TooltipIcon";

export default function SkillsSection() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-semibold">What I work with</h2>
        <p>The backbone of my career — 5+ years with each of these</p>
        <div className="flex gap-4 mt-4">
          <TooltipIcon
            src="/react-logo.svg"
            link="https://react.dev/"
            id="React-Icon"
            text="ReactJS"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/typescript-logo.svg"
            link="https://www.typescriptlang.org/"
            id="TS-Icon"
            text="TypeScript"
          />
          <TooltipIcon
            src="/html-logo.svg"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            id="HTML-Icon"
            text="HTML"
          />
          <TooltipIcon
            src="/css-logo.svg"
            link="https://www.w3.org/Style/CSS/Overview.en.html"
            id="CSS-Icon"
            text="CSS"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/graphql-logo.svg"
            link="https://graphql.org/"
            id="GraphQL-Icon"
            text="GraphQL"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/apollo-logo.svg"
            link="https://www.apollographql.com/docs/react/"
            id="Apollo-Icon"
            text="Apollo Client"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">More in the toolkit</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Mobile</h3>
          <TagList
            tags={[
              { label: "React Native", href: "https://reactnative.dev/", tooltip: "Halo.Rent & Day Planner · Proficient · 3+ yrs" },
              { label: "Ionic", href: "https://ionicframework.com/", tooltip: "UFirstGroup (Favur) · Proficient · 2 yrs" },
              { label: "Capacitor", href: "https://capacitorjs.com/", tooltip: "UFirstGroup (Favur) · Proficient · 2 yrs" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Backend</h3>
          <TagList
            tags={[
              { label: "Elixir", href: "https://elixir-lang.org/", tooltip: "UFirstGroup (Favur) · Intermediate · 2 yrs" },
              { label: "PHP", href: "https://www.php.net/", tooltip: "UFirstGroup (SABAG) · Intermediate · <1 yr" },
              { label: "PostgreSQL", href: "https://www.postgresql.org/", tooltip: "UFirstGroup (Favur & SABAG) · Intermediate · 2+ yrs" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">UI libraries</h3>
          <TagList
            tags={[
              { label: "MaterialUI", href: "https://mui.com/", tooltip: "UFirstGroup (Favur) · Proficient · 2 yrs" },
              { label: "TailwindCSS", href: "https://tailwindcss.com/", tooltip: "Personal projects · Proficient" },
              { label: "Bootstrap", href: "https://getbootstrap.com/", tooltip: "Halo.Rent · Proficient · 3+ yrs" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Testing & tooling</h3>
          <TagList
            tags={[
              { label: "Jest", href: "https://jestjs.io/", tooltip: "Favur & SABAG · Proficient · 3+ yrs" },
              { label: "React Testing Library", href: "https://testing-library.com/docs/react-testing-library/intro/", tooltip: "Favur & SABAG · Proficient · 3+ yrs" },
              { label: "Cypress", href: "https://www.cypress.io/", tooltip: "Favur, SABAG & Halo.Rent · Intermediate · 3+ yrs" },
              { label: "Storybook", href: "https://storybook.js.org/", tooltip: "UFirstGroup & Halo.Rent · Proficient · 5+ yrs" },
              { label: "Figma", href: "https://www.figma.com/", tooltip: "All professional roles · Proficient · 5+ yrs" },
              { label: "DataDog", href: "https://www.datadoghq.com/", tooltip: "UFirstGroup · Proficient · 2 yrs" },
              { label: "GitLab CI/CD", href: "https://docs.gitlab.com/ee/ci/", tooltip: "All professional roles · Proficient · 5+ yrs" },
              { label: "Git", href: "https://git-scm.com/", tooltip: "All roles & projects · Expert · 5+ yrs" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
