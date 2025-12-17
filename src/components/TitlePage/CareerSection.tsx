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
    <section className="flex flex-col gap-8">
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
            "Apollo Client",
            "Elixir",
            "PostgreSQL",
            "Ionic",
            "Capacitor",
            "MateiralUI",
          ]}
        >
          <div className="flex flex-col gap-4">
            <p>
              With UFirst I started working as a Full-Stack developer and mainly
              contributed to two big projects:
            </p>

            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.ufirstgroup.FavurApp"
              >
                <h4 className="text-l font-semibold underline hover:no-underline">
                  Favur
                </h4>
              </a>
              <p>
                Favur is a schedule management app which has both a web app and
                a mobile app built on React and Ionic/Capacitor for any native
                functionality.
              </p>
              <p>
                The Front-End tech stack was the typical React,
                Typescript,GraphQL & Apollo Client, and MaterialUI for styling.
                The Back-End consisted of Elixir, PostgreSQL, Ecto.
              </p>
              <p>
                As the app has many communication workflows I contributed to
                many huge interactive functionalities like a calendar,
                displaying all shifts and absences of the user&#x2019;s teams
              </p>
              <p>
                I also led a whole app scale redesign/FE restructuring
                initiative to revamp the project&#x2019;s component base and set
                up testing for the project.
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
                  "MateiralUI",
                ]}
              />
            </div>

            <div className="flex flex-col gap-2">
              <a target="_blank" href="https://www.sabag.ch/de/innenausbau">
                <h4 className="text-l font-semibold underline hover:no-underline">
                  SABAG
                </h4>
              </a>
              <p>
                SABAG is a Swiss building material giant and UFirst has built
                and maintains their building materials and kitchen supply barnch
                catalog and store website.
              </p>
              <p>
                The Front-End tech stack consisted of React, Typescript, a mix
                of GraphQL & Apollo Client and RestAPI & Tanstack Query for
                APIs. The Back-End consisted of PHP, PostgreSQL, and a Commerce
                Platform called Spryker based on PHP.
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
              My first professional experience was with Halo.rent which was a
              start-up web platform to ease the peocess of letting a residance
              in the UK. I was a strictly front end developer there working with
              React, Typescript, graphQL.
            </p>
            <p>
              The application mostly consisted of a portal to upload information
              about rental units and managing tenant applications and
              communications along each step.
            </p>
            <p>
              The main complexity of it was to handle all of the different
              states that the application could be in, handle the communication
              between the applicant and the manager, and to handle many huge
              forms to fill out the details of the application and the rental
              unit.
            </p>
            <p>
              I also built and maintained the company landing page using Webflow
              (Sadly not much publicly remains of the proyect as it was bought
              and absorbed by GoodLord)
            </p>
            <p>
              And also by the tail end of my time at the company I got to work
              on a mini project building a chat app where I got to learn React
              Native and some mobile development.
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
              Not much has survived from these dark times But some more
              memorable projects have been a simple hack and slash game written
              purely with C++, A chess board 3D moddled with three.js, snake
              coded with C.
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
