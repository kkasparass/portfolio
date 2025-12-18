"use client";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

const TooltipIcon = ({
  src,
  text,
  link,
  id,
  invertDarkMode = true,
  size = 50,
}: {
  src: string;
  text: string;
  link: string;
  id: string;
  invertDarkMode?: boolean;
  size?: number;
}) => {
  return (
    <>
      <a data-tooltip-id={id} target="_blank" href={link}>
        <Image
          className={`${invertDarkMode ? "dark:invert" : ""}`}
          src={src}
          alt={`${text} Icon`}
          width={size}
          height={size}
          priority
        />
      </a>
      <Tooltip
        place="top"
        className="dark:bg-foreground! dark:text-background! z-1"
        id={id}
        clickable
      >
        {text}
      </Tooltip>
    </>
  );
};

export default TooltipIcon;
