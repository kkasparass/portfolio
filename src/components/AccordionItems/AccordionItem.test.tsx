import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Accordion } from "@szhsin/react-accordion";
import AccordionItem from "./AccordionItem";

// AccordionItem must be wrapped in <Accordion> to function
const renderItem = (props: Partial<Parameters<typeof AccordionItem>[0]> = {}) =>
  render(
    <Accordion>
      <AccordionItem
        logo="/company-logo.svg"
        headerText="Acme Corp"
        subText="Jan 2023 – Present"
        isOpen={false}
        {...props}
      />
    </Accordion>
  );

describe("AccordionItem", () => {
  it("renders the header text and sub text", () => {
    renderItem();
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.getByText("Jan 2023 – Present")).toBeInTheDocument();
  });

  it("renders the workplace logo with a descriptive alt text", () => {
    renderItem();
    expect(screen.getByAltText("Workplace logo")).toBeInTheDocument();
  });

  it("expands to show children when header is clicked", async () => {
    const user = userEvent.setup();
    renderItem({ children: <p>Job description content</p> });

    const button = screen.getByRole("button");
    await user.click(button);

    expect(await screen.findByText("Job description content")).toBeVisible();
  });

  it("shows skills when skills are provided", () => {
    renderItem({ skills: ["TypeScript", "React"] });
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("does not render the skills section when skills array is empty", () => {
    renderItem({ skills: [] });
    expect(screen.queryByText("Key skills:")).not.toBeInTheDocument();
  });

  it("hides skills when hideSkillsWhenOpen=true and isOpen=true", () => {
    renderItem({
      skills: ["TypeScript"],
      hideSkillsWhenOpen: true,
      isOpen: true,
    });
    expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
  });

  it("shows skills when hideSkillsWhenOpen=true but isOpen=false", () => {
    renderItem({
      skills: ["TypeScript"],
      hideSkillsWhenOpen: true,
      isOpen: false,
    });
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
