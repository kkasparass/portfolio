import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DayPlannerPage from "./page";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("DayPlannerPage", () => {
  it("renders the page title", () => {
    render(<DayPlannerPage />);
    expect(
      screen.getByRole("heading", { name: "Day Planner", level: 1 })
    ).toBeInTheDocument();
  });

  it("renders a back link to the home page", () => {
    render(<DayPlannerPage />);
    const backLink = screen.getByRole("link", { name: /back/i });
    expect(backLink).toHaveAttribute("href", "/");
  });

  it("renders a GitHub link", () => {
    render(<DayPlannerPage />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/kkasparass/day_planner"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("renders an APK releases link", () => {
    render(<DayPlannerPage />);
    const releasesLink = screen.getByRole("link", { name: /apk releases/i });
    expect(releasesLink).toHaveAttribute(
      "href",
      "https://github.com/kkasparass/day_planner/releases"
    );
    expect(releasesLink).toHaveAttribute("target", "_blank");
  });

  it("renders the Why I built it section", () => {
    render(<DayPlannerPage />);
    expect(
      screen.getByRole("heading", { name: /why i built it/i })
    ).toBeInTheDocument();
  });

  it("renders the Features section", () => {
    render(<DayPlannerPage />);
    expect(
      screen.getByRole("heading", { name: /features/i })
    ).toBeInTheDocument();
  });

  it("renders the Technical details section", () => {
    render(<DayPlannerPage />);
    expect(
      screen.getByRole("heading", { name: /technical details/i })
    ).toBeInTheDocument();
  });

  it("renders the tech stack tags", () => {
    render(<DayPlannerPage />);
    expect(screen.getByText("React Native")).toBeInTheDocument();
    expect(screen.getByText("Expo SQLite")).toBeInTheDocument();
    expect(screen.getByText("Redux Toolkit")).toBeInTheDocument();
  });
});
