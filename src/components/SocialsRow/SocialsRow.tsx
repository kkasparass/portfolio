import { FileUser, Mail } from "lucide-react";
import Image from "next/image";

const SocialsRow = ({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className={`flex ${compact ? "gap-3" : "gap-2"}  items-center`}>
        <a target="_blank" href="https://github.com/kkasparass">
          <Image
            className="dark:invert opacity-75 hover:opacity-100"
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
            className="dark:invert opacity-75 hover:opacity-100"
            src="/linkedin-logo.svg"
            alt="Linkedin profile link image"
            width={20}
            height={20}
            priority
          />
        </a>
        <a href="mailto:kasparas.morkunas@proton.me">
          <Mail className="opacity-75 hover:opacity-100" size={20} />
        </a>
        <a
          target="_blank"
          href="/cv.pdf"
          className={`${compact ? "hidden" : ""}`}
        >
          <div className="flex gap-1 items-center text-sm font-semibold px-2 border rounded-sm opacity-75 hover:opacity-100 hover:bg-foreground hover:text-background">
            <FileUser className="" size={16} />
            <p>CV</p>
          </div>
        </a>
      </div>
      <a
        target="_blank"
        href="/cv.pdf"
        className={`${compact ? "" : "hidden"}`}
      >
        <div className="flex gap-1 items-center justify-center text-sm font-semibold px-2 py-0.5 border rounded-sm hover:bg-foreground hover:text-background">
          <FileUser className="" size={16} />
          <p>Resume</p>
        </div>
      </a>
    </div>
  );
};

export default SocialsRow;
