/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { English } from "./Header.stories";

expect.extend(toHaveNoViolations);

describe("Header", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders English", () => {
    const renderComp = () => render(<English {...English.args} />);
    const { getByAltText } = renderComp();
    getByAltText(English.args.altText);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<English {...English.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
