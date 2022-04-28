/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { EnglishAuth } from "./Header.stories";

expect.extend(toHaveNoViolations);

describe("Header", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<EnglishAuth {...EnglishAuth.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
