import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TagList from "./TagList";

describe("TagList", () => {
  it("renders all provided tags", () => {
    render(<TagList tags={["TypeScript", "React", "Next.js"]} />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });

  it("renders nothing when tags is empty", () => {
    const { container } = render(<TagList tags={[]} />);
    expect(container.firstChild?.childNodes).toHaveLength(0);
  });

  it("uses default empty array when tags prop is omitted", () => {
    const { container } = render(<TagList />);
    expect(container.firstChild?.childNodes).toHaveLength(0);
  });
});
