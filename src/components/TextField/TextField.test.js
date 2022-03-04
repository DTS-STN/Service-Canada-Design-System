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
    expect(inputElem.value).toBe("");
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe("h");
  });

  it("renders text field in with Info Text state", () => {
    render(
      <OptionalWithInfoText {...OptionalWithInfoText.args} onChange={mockFn} />
    );
    const inputElem = screen.getByTestId("textbox-uncontrolled");
    fireEvent.change(inputElem, { target: { value: "hello" } });
    expect(inputElem.value).toEqual("hello");
    expect(mockFn.mock.calls.length).toEqual(1);
    expect(mockFn.mock.calls[0][0]).toEqual("hello");
  });

  it("renders text field with with Error", () => {
    render(<RequiredWithError {...RequiredWithError.args} />);
    expect(screen.getByText(RequiredWithError.args.label).classList).toContain(
      "text-form-input-gray"
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
