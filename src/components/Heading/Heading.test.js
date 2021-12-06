/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default, withFromLink } from "./Heading.stories";

expect.extend(toHaveNoViolations);

describe("Heading", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders default", () => {
    render(<Default {...Default.args} />);
    expect(screen.getElementByTagName("h1")).toHaveTextContent(
      Default.args.title
    );
  });

  it("renders with from link", () => {
    render(<withFromLink {...withFromLink.args} />);
    expect(screen.getElementByTagName("a")).toHaveAttribute("href");
    expect(screen.getElementByTagName("a")).toHaveTextContent(
      withFromLink.args.fromText
    );
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
