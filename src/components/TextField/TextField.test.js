/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  OptionalWithInfoText,
  RequiredWithError,
} from "./TextField.stories";

expect.extend(toHaveNoViolations);

describe("TextField", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders text field in primary state", () => {
    render(<Primary {...Primary.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId("textbox-controlled");
    fireEvent.change(inputElem, { target: { value: "h" } });
    // expect(inputElem.value).toBe("h");
  });

  it("renders text field with with Error", () => {
    render(<RequiredWithError {...RequiredWithError.args} />);
    expect(screen.getByText(RequiredWithError.args.label).classList).toContain(
      "ds-text-form-input-gray"
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
