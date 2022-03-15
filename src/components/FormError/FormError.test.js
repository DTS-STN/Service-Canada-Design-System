/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./FormError.stories";

expect.extend(toHaveNoViolations);

describe("Form Error", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders component correctly", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText(Primary.args.errorMessage);
    expect(screen.getByText(Primary.args.errorMessage).classList).toContain(
      "ds-errorText"
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
