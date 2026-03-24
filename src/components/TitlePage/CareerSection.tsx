"use client";

import {
  ControlledAccordion,
  useAccordionProvider,
} from "@szhsin/react-accordion";
import AccordionItem from "../AccordionItems/AccordionItem";
import TagList from "../TagList/TagList";

export default function CareerSection() {
  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250,
  });

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">Career path</h2>

      <ControlledAccordion providerValue={providerValue}>
        <AccordionItem
          headerText="UFirst Group"
          subText="2023 - 2025"
          logo="/ufirst-logo.jpg"
          isOpen={
            providerValue.stateMap.get("UFirst Group")?.status === "entered"
          }
          hideSkillsWhenOpen
          skills={[
            "React",
            "Typescript",
            "GraphQL",
            "RestAPI",
            "Apollo Client",
            "Tanstack Query",
            "Elixir",
            "PHP",
            "PostgreSQL",
            "MaterialUI",
          ]}
        >
          <div className="flex flex-col gap-4">
            <p>
              At UFirst I worked as a full-stack developer across two client
              products, owning features end-to-end from frontend through backend
              and database.
            </p>

            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.ufirstgroup.FavurApp"
              >
                <h4 className="text-xl font-semibold underline hover:no-underline">
                  Favur
                </h4>
              </a>
              <p>
                Favur is a workforce scheduling platform with a cross-platform
                web and mobile app (React + Ionic/Capacitor). It has 10,000+
                downloads on the Google Play Store.
              </p>
              <p>
                I contributed to complex interactive screens — team calendars,
                shift management, approval workflows — and worked across the
                full stack including Elixir backend and PostgreSQL data
                modelling.
              </p>
              <p>
                I led a 4&#x2013;6 month app-wide frontend redesign with a team
                of 4 developers, introducing atomic design principles with
                Storybook as the source of truth and growing test coverage from
                ~30% to 80%. I also led a security permissions overhaul
                following a CNLABS cybersecurity audit.
              </p>
              <strong>Key skills:</strong>
              <TagList
                tags={[
                  "React",
                  "Typescript",
                  "GraphQL",
                  "Apollo Client",
                  "Elixir",
                  "PostgreSQL",
                  "Ionic",
                  "Capacitor",
                  "MaterialUI",
                ]}
              />
            </div>

            <div className="flex flex-col gap-2">
              <a target="_blank" href="https://www.sabag.ch/de/innenausbau">
                <h4 className="text-xl font-semibold underline hover:no-underline">
                  SABAG
                </h4>
              </a>
              <p>
                SABAG is a Swiss building materials giant. UFirst built and
                maintains their online catalogue and store. I worked across the
                React frontend and PHP/Spryker backend, shipping new product
                storefronts with advanced category filters, product variants,
                and dynamic pricing logic.
              </p>
              <strong>Key skills:</strong>
              <TagList
                tags={[
                  "React",
                  "Typescript",
                  "GraphQL",
                  "Apollo Client",
                  "Tanstack Query",
                  "RestAPI",
                  "PHP",
                  "PostgreSQL",
                ]}
              />
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          headerText="Halo.rent"
          subText="2019 - 2022"
          logo="/halo-logo.jpeg"
          isOpen={providerValue.stateMap.get("Halo.rent")?.status === "entered"}
          skills={[
            "React",
            "Typescript",
            "GraphQL",
            "Apollo Client",
            "React Native",
          ]}
        >
          <div className="flex flex-col gap-2">
            <p>
              Halo.rent was a UK property-tech startup that simplified the
              residential letting process — later acquired by GoodLord. I was
              a frontend developer there for three years, building and
              maintaining the core tenant portal as it grew.
            </p>
            <p>
              The platform was a complex multi-step SPA handling everything
              from tenant onboarding to active tenancy management. The most
              involved piece I built was the tenancy agreement contract form:
              data aggregated from across the app, dynamic lease cost
              calculations, flexible payment schedules, and custom validation
              logic throughout.
            </p>
            <p>
              I also owned the company landing page in Webflow and, in my
              final months, contributed to a React Native internal messaging
              app — my first taste of mobile development.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          headerText="Vilnius University"
          subText="2017 - 2021"
          logo="/vilnius-university-logo.jpeg"
          isOpen={
            providerValue.stateMap.get("Vilnius University")?.status ===
            "entered"
          }
          skills={[
            "C",
            "C++",
            "Java",
            "Javascript",
            "UX best practices",
            "A bunch of math",
          ]}
        >
          <div className="flex flex-col gap-2">
            <p>
              BSc Computer Science. Highlights include a hack-and-slash game in
              pure C++, a 3D chess board with three.js/WebGL, and a snake clone
              in C. Also covered Java, UX design, and a solid chunk of maths.
            </p>
          </div>
        </AccordionItem>
      </ControlledAccordion>

      {/* <div className="flex flex-col gap-4">
        <a target="_blank" href="https://www.ufirstgroup.com/">
          <h3 className="text-xl font-semibold">UFirst Group</h3>
        </a>
        <p>2023 - 2025</p>
      </div> */}

      {/* <div className="flex flex-col gap-2">
        <a
          target="_blank"
          href="https://web.archive.org/web/20220528101708/https://www.halo.rent/"
        >
          <h3 className="text-xl font-semibold">Halo.rent</h3>
        </a>
        <p>2019 - 2022</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Vilnius University</h3>
        <p>2017 - 2021</p>

      </div> */}
    </section>
  );
}
