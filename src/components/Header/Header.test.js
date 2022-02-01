/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./Header.stories";

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
    const renderComp = () => render(<Default {...Default.args} />);
    const { getByAltText } = renderComp();
    getByAltText(Default.args.altText);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
