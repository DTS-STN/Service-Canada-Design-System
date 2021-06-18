import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Checked, UnChecked, Error, Required } from "./CheckBox.stories";

expect.extend(toHaveNoViolations);

describe("CheckBox", () => {
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
    screen.getByTestId("unchecked-checkbox").click();
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0]).toEqual([
      false,
      UnChecked.args.name,
      UnChecked.args.value,
    ]);
  });

  it("renders in a checked state", () => {
    render(<Checked {...Checked.args} onChange={mockFn} />);
    expect(screen.getByTestId("checked-checkbox")).toBeChecked();
    screen.getByTestId("checked-checkbox").click();
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0]).toEqual([
      true,
      Checked.args.name,
      Checked.args.value,
    ]);
  });

  it("renders in an error state correctly", () => {
    render(<Error {...Error.args} />);
    expect(screen.getByText(Error.args.label)).toHaveClass(
      "text-error-border-red"
    );
  });

  it("renders required state correctly", () => {
    render(<Required {...Required.args} />);
    expect(screen.getByText("*")).toHaveClass("text-error-border-red");
    expect(screen.getByText(`(${Required.args.requiredText})`)).toHaveClass(
      "text-error-border-red"
    );
  });

  it("has no accessibility violations Error", async () => {
    const { container } = render(<Error {...Error.args} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no accessibility violations unchecked", async () => {
    const { container } = render(<UnChecked {...UnChecked.args} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no accessibility violations checked", async () => {
    const { container } = render(<Checked {...Checked.args} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
