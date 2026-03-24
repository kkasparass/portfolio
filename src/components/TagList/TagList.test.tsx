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

  it("renders tag label when passed as an object", () => {
    render(<TagList tags={[{ label: "Elixir" }]} />);
    expect(screen.getByText("Elixir")).toBeInTheDocument();
  });

  it("wraps tag in a link when href is provided", () => {
    render(<TagList tags={[{ label: "Elixir", href: "https://elixir-lang.org/" }]} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://elixir-lang.org/");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("does not render a link when href is omitted", () => {
    render(<TagList tags={[{ label: "Elixir" }]} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders a tooltip element when tooltip is provided", () => {
    render(<TagList tags={[{ label: "Elixir", tooltip: "UFirstGroup · Intermediate · 2 yrs" }]} />);
    expect(screen.getByRole("tooltip")).toHaveTextContent("UFirstGroup · Intermediate · 2 yrs");
  });
});
