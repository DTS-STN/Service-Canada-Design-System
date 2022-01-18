/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./Header.stories";
import { Header } from "./Header";

expect.extend(toHaveNoViolations);

describe("Header", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders default", () => {
    render(<Header {...Default.args} />);
    expect(screen.getByText("Government of Canada")).toHaveTextContent(
      Default.args.altText
    );
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Header {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
