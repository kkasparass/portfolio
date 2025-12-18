import { FileUser, Mail } from "lucide-react";
import Image from "next/image";

const SocialsRow = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
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
      <a target="_blank" href="/cv.pdf">
        <FileUser className="opacity-75 hover:opacity-100" size={20} />
      </a>
    </div>
  );
};

export default SocialsRow;
