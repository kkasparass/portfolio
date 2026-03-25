import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageLayout from "./PageLayout";

describe("PageLayout", () => {
  it("renders children", () => {
    render(
      <PageLayout>
        <p>Hello world</p>
      </PageLayout>
    );
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders a main element", () => {
    render(
      <PageLayout>
        <p>Content</p>
      </PageLayout>
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("applies the gradient background class to the outer wrapper", () => {
    const { container } = render(
      <PageLayout>
        <p>Content</p>
      </PageLayout>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("from-sky-100");
  });
});
