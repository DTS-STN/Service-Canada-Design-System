/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./Date.stories";

expect.extend(toHaveNoViolations);

describe("Date", () => {
  it("renders and formats the date properly", () => {
    render(<Default {...Default.args} />);
    screen.getByText("2020-04-20");
  });

  it("renders 'NA' as date if date is undefined", () => {
    render(<Default />);
    screen.getByText("NA");
  });

  it("renders the label properly", () => {
    render(<Default {...Default.args} />);
    screen.getByText("Date modified:");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
