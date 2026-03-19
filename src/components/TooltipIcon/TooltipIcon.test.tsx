import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TooltipIcon from "./TooltipIcon";

const defaultProps = {
  src: "/react-logo.svg",
  text: "React",
  link: "https://react.dev",
  id: "react-tooltip",
};

describe("TooltipIcon", () => {
  it("renders an image with alt text derived from the text prop", () => {
    render(<TooltipIcon {...defaultProps} />);
    expect(screen.getByAltText("React Icon")).toBeInTheDocument();
  });

  it("wraps the icon in a link with the correct href", () => {
    render(<TooltipIcon {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://react.dev");
  });

  it("renders a tooltip with the correct text", () => {
    render(<TooltipIcon {...defaultProps} />);
    expect(screen.getByRole("tooltip")).toHaveTextContent("React");
  });

  it("renders the image at the specified size", () => {
    render(<TooltipIcon {...defaultProps} size={64} />);
    const img = screen.getByAltText("React Icon");
    expect(img).toHaveAttribute("width", "64");
    expect(img).toHaveAttribute("height", "64");
  });
});
