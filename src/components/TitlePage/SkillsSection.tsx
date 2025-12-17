import TooltipIcon from "../TooltipIcon/TooltipIcon";

export default function SkillsSection() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-semibold">Core Skillset</h2>
        <p>
          The backbone of my career with 5+ years of experience in each skill
        </p>
        <div className="flex gap-4">
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
            invertDarkMode={false}
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
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Professional skills</h2>
        <p>
          Skills I have professionally utilised to build personal and work
          related projects
        </p>
        <div className="flex gap-4 items-center">
          <TooltipIcon
            src="/psql-logo.svg"
            link="https://www.postgresql.org/"
            id="PostgreSQL-Icon"
            text="PostgreSQL"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/elixir-logo.svg"
            link="https://elixir-lang.org/"
            id="Elixir-Icon"
            text="Elixir"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/react-logo.svg"
            link="https://reactnative.dev/"
            id="React-native-Icon"
            text="React Native"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/nextjs-logo.svg"
            link="https://nextjs.org/"
            id="NextJS-Icon"
            text="NextJS"
          />
          <TooltipIcon
            src="/vue-logo.svg"
            link="https://vuejs.org/"
            id="Vue-Icon"
            text="VueJS"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/ionic-logo.svg"
            link="https://ionicframework.com/"
            id="Ionic-Icon"
            text="Ionic Fromework"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/capacitor-logo.svg"
            link="https://capacitorjs.com/"
            id="Capacitor-Icon"
            text="CapacitorJS"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/php-logo.svg"
            link="https://www.php.net/"
            id="PHP-Icon"
            text="PHP"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/sendgrid-logo.svg"
            link="https://sendgrid.com/en-us"
            id="Sendgrid-Icon"
            text="Sendgrid"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/bootstrap-logo.svg"
            link="https://getbootstrap.com/"
            id="Bootstrap-Icon"
            text="Bootstrap"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/tailwind-logo.svg"
            link="https://tailwindcss.com/"
            id="Tailwind-Icon"
            text="TailwindCSS"
            invertDarkMode={false}
          />
          <TooltipIcon
            src="/mui-logo.svg"
            link="https://mui.com/material-ui/"
            id="Mui-Icon"
            text="MaterialUI"
          />
          <TooltipIcon
            src="/tanstack-logo.svg"
            link="https://tanstack.com/query/docs"
            id="Tanstack-Icon"
            text="Tanstack Query"
          />
        </div>
      </div>
    </section>
  );
}
