import Image from "next/image";
import {
  type AccordionItemProps,
  AccordionItem as Item,
} from "@szhsin/react-accordion";
import { ChevronDown } from "lucide-react";

const TagList = ({ tags = [] }: { tags?: string[] }) => (
  <div className="flex gap-2 flex-wrap">
    {tags.map((tag, index) => (
      <p
        key={index}
        className="bg-sky-500/60 px-6 py-1 whitespace-nowrap rounded-2xl"
      >
        {tag}
      </p>
    ))}
  </div>
);

export default TagList;
