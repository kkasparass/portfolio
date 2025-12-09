"use client";
import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section className="flex gap-8">
      <div className="flex flex-col gap-2">
        <Image
          src="/portrait-image.png"
          alt={"Kasparas Morkunas portrait"}
          width={200}
          height={200}
        />
        <div className="flex gap-1">
          <a target="_blank" href="https://github.com/kkasparass">
            <Image
              className="dark:invert"
              src="/github-logo.svg"
              alt="Github profile link image"
              width={20}
              height={20}
              priority
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kasparas-morkunas-17b8851a9/"
          >
            <Image
              className="dark:invert"
              src="/linkedin-logo.svg"
              alt="Linkedin profile link image"
              width={20}
              height={20}
              priority
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Kasparas Morkunas</h1>
          <p>Full-Stack developer</p>
        </div>
        <p>
          Hi all! I&apos;m a seasoned <b>Full-stack engineer</b> focused on{" "}
          <b>front-end development</b> and building quality web apps.
        </p>
      </div>
    </section>
  );
}
