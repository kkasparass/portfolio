import Image from "next/image";
import {
  type AccordionItemProps,
  AccordionItem as Item,
} from "@szhsin/react-accordion";
import { ChevronDown } from "lucide-react";
import TagList from "../TagList/TagList";

const AccordionItem = ({
  headerText,
  logo,
  subText,
  children,
  skills = [],
  isOpen,
  hideSkillsWhenOpen,
  ...rest
}: {
  logo: string;
  headerText: string;
  subText: string;
  skills?: string[];
  isOpen: boolean;
  hideSkillsWhenOpen?: boolean;
} & AccordionItemProps) => (
  <div className="border-b pb-2">
    <Item
      {...rest}
      itemKey={headerText}
      header={({ state: { isEnter } }) => (
        <>
          <div className="flex gap-2 align-center">
            <Image src={logo} alt={"Workplace logo"} width={48} height={48} />
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">{headerText}</h3>
              <p className="text-xs">{subText}</p>
            </div>
          </div>

          <ChevronDown
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
          />
        </>
      )}
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left hover:bg-hover ${isEnter && "bg-focus"}`,
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out",
      }}
      panelProps={{ className: "p-4" }}
    >
      {children}
    </Item>
    {skills.length > 0 && !(hideSkillsWhenOpen && isOpen) && (
      <div className="px-4">
        <strong>Key skills:</strong>
        <TagList tags={skills} />
      </div>
    )}
  </div>
);

export default AccordionItem;
