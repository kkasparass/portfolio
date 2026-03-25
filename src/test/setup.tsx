import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next/image — it relies on Next.js internals unavailable in jsdom
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    priority: _priority,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  }) => <img src={src} alt={alt} width={width} height={height} {...props} />,
}));

// Mock react-tooltip — it uses DOM APIs not available in jsdom
vi.mock("react-tooltip", () => ({
  Tooltip: ({
    id,
    content,
    children,
  }: {
    id: string;
    content?: string;
    children?: React.ReactNode;
  }) => (
    <div role="tooltip" id={id}>
      {content ?? children}
    </div>
  ),
}));
