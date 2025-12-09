"use client";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

const TooltipIcon = ({
  src,
  text,
  link,
  id,
  invertDarkMode = true,
}: {
  src: string;
  text: string;
  link: string;
  id: string;
  invertDarkMode?: boolean;
}) => {
  return (
    <>
      <a data-tooltip-id={id} target="_blank" href={link}>
        <Image
          className={`${invertDarkMode ? "dark:invert" : ""}`}
          src={src}
          alt={`${text} Icon`}
          width={50}
          height={50}
          priority
        />
      </a>
      <Tooltip id={id} clickable>
        {text}
      </Tooltip>
    </>
  );
};

export default TooltipIcon;
