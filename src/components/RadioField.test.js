/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Checked, UnChecked } from "./RadioField.stories";

expect.extend(toHaveNoViolations);

describe("RadioField", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders in an unchecked state", () => {
    render(<UnChecked {...UnChecked.args} onChange={mockFn} />);
    expect(screen.getByText(UnChecked.args.label)).toBeTruthy();
    screen.getByTestId("unchecked-radio-field").click();
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0]).toEqual([
      false,
      UnChecked.args.name,
      UnChecked.args.value,
    ]);
  });

  it("renders in a checked state", () => {
    render(<Checked {...Checked.args} onChange={mockFn} />);
    expect(screen.getByTestId("checked-radio-field")).toBeChecked();
  });

  it("has no accessibility violations unchecked", async () => {
    const uncheckedContainer = render(<UnChecked {...UnChecked.args} />);
    const resultsUnchecked = await axe(uncheckedContainer.container);
    expect(resultsUnchecked).toHaveNoViolations();
  });

  it("has no accessibility violations checked", async () => {
    const checkedContainer = render(<Checked {...Checked.args} />);
    const resultsChecked = await axe(checkedContainer.container);
    expect(resultsChecked).toHaveNoViolations(resultsChecked);
  });
});
