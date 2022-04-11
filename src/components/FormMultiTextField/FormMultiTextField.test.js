/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./FormMultiTextField.stories";

expect.extend(toHaveNoViolations);

describe("FormMultiTextField", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders multi text field in primary state", () => {
    render(<Primary {...Primary.args} onChange={mockFn} />);
    expect(screen.getByText(Primary.args.label)).toBeTruthy();
    const inputElem = screen.getByTestId("multitext-one");
    fireEvent.change(inputElem, { target: { value: "h" } });
    expect(inputElem.value).toBe("h");
    expect(mockFn.mock.calls.length).toBe(0);
  });

  it("no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
