/**
 * @jest-environment jsdom
 */
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./FormRadioButton.stories";

expect.extend(toHaveNoViolations);

describe("FormRadioButton", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders in unchecked state and fires event when radio button selected", () => {
    render(<Primary {...Primary.args} />);
    const inputElem = screen.getByTestId("option_1-primary-radio-1");
    expect(screen.getByText(Primary.args.options[0].label)).toBeTruthy();
  });

  it("expect Primary state to have no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
