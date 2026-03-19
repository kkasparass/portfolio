import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SocialsRow from "./SocialsRow";

describe("SocialsRow", () => {
  it("renders GitHub, LinkedIn, and email links with correct hrefs", () => {
    render(<SocialsRow />);

    const githubLink = screen.getByRole("link", {
      name: /github profile/i,
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/kkasparass");

    const linkedinLink = screen.getByRole("link", {
      name: /linkedin profile/i,
    });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/kasparas-morkunas-17b8851a9/"
    );

    const emailLink = document.querySelector('a[href^="mailto:"]');
    expect(emailLink).toHaveAttribute("href", "mailto:kasparas.morkunas@proton.me");
  });

  it("shows CV button and hides Resume button in default (non-compact) mode", () => {
    render(<SocialsRow />);
    expect(screen.getByText("CV")).toBeInTheDocument();
    // Resume link exists in DOM but is hidden via 'hidden' class
    const resumeLink = screen.getByText("Resume").closest("a");
    expect(resumeLink).toHaveClass("hidden");
  });

  it("shows Resume button and hides CV button in compact mode", () => {
    render(<SocialsRow compact />);
    expect(screen.getByText("Resume")).toBeInTheDocument();
    // CV link exists in DOM but is hidden via 'hidden' class
    const cvLink = screen.getByText("CV").closest("a");
    expect(cvLink).toHaveClass("hidden");
  });

  it("both CV and Resume links point to /cv.pdf", () => {
    render(<SocialsRow />);
    const cvLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href") === "/cv.pdf");
    expect(cvLinks.length).toBe(2);
  });
});
