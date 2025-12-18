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
          width={115}
          height={115}
        />
        <SocialsRow />
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
            <p>Full-Stack developer</p>
            <div className="flex gap-1 align-center">
              <MapPin />
              <p>Valencia, Spain</p>
            </div>
          </div>
        </div>
        <p>
          Hi all! I&apos;m a seasoned <b>Full-stack developer</b> focused on{" "}
          <b>front-end development</b> and building quality web apps.
        </p>
        <SocialsRow className="sm:hidden" />
      </div>
    </section>
  );
}
