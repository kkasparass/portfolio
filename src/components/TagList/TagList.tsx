"use client";
import { Tooltip } from "react-tooltip";

type TagItem = {
  label: string;
  href?: string;
  tooltip?: string;
};

type Tag = string | TagItem;

const normalize = (tag: Tag): TagItem =>
  typeof tag === "string" ? { label: tag } : tag;

const TagList = ({ tags = [] }: { tags?: Tag[] }) => (
  <div className="flex gap-2 flex-wrap">
    {tags.map((tag, index) => {
      const { label, href, tooltip } = normalize(tag);
      const tooltipId = tooltip
        ? `tag-${label.replace(/\s+/g, "-")}-${index}`
        : undefined;

      const pill = (
        <span
          data-tooltip-id={tooltipId}
          className={`text-xs sm:text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 px-4 sm:px-6 py-1 whitespace-nowrap rounded-2xl ${href ? "hover:bg-sky-200 dark:hover:bg-sky-900/50 transition-colors" : ""} ${tooltip && !href ? "cursor-help" : ""}`}
        >
          {label}
        </span>
      );

      return (
        <span key={index} className="inline-block">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {pill}
            </a>
          ) : (
            pill
          )}
          {tooltip && tooltipId && (
            <Tooltip
              id={tooltipId}
              place="top"
              content={tooltip}
              className="dark:bg-foreground! dark:text-background! z-1 max-w-48 text-center"
            />
          )}
        </span>
      );
    })}
  </div>
);

export default TagList;
