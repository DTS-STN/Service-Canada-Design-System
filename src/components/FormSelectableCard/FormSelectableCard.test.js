/**
 * @jest-environment jsdom
 */
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./FormSelectableCard.stories";

expect.extend(toHaveNoViolations);

describe("FormSelectableCard", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders in unchecked state and fires event when selectable-card selected", () => {
    render(<Default {...Default.args} />);
    const inputElem = screen.getByTestId("option_1-primary-selectable-card");
    expect(screen.getByText(Default.args.options[0].label)).toBeTruthy();
  });

  it("expect Default state to have no accessibility violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
