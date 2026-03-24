"use client";
import { MapPin } from "lucide-react";
import Image from "next/image";
import SocialsRow from "../SocialsRow/SocialsRow";

export default function IntroductionSection() {
  return (
    <section className="flex flex-col sm:flex-row gap-4">
      <div className="hidden sm:flex flex-col gap-2 ">
        <Image
          src="/portrait-image.png"
          alt={"Kasparas Morkunas portrait"}
          className="max-w-fit"
          width={100}
          height={100}
        />
        <SocialsRow compact />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center mb-2">
          <Image
            className="sm:hidden"
            src="/portrait-image.png"
            alt={"Kasparas Morkunas portrait"}
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-3xl font-semibold">Kasparas Morkunas</h1>
            <span className="inline-block mt-1 text-sm font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 px-3 py-0.5 rounded-full">
              Full-Stack Developer
            </span>
            <div className="flex gap-1 items-center mt-1">
              <MapPin size={16} />
              <p className="text-sm">Valencia, Spain</p>
            </div>
          </div>
        </div>
        <p>
          Hey, I&apos;m Kaspa — a full-stack developer with 5+ years building
          web and mobile apps. I care about clean frontends, solid test
          coverage, and shipping things that actually work.
        </p>
        <SocialsRow className="sm:hidden" />
      </div>
    </section>
  );
}
