/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./ReviewSubmit.stories.js";

expect.extend(toHaveNoViolations);

describe("Review and Submit", () => {
  it("renders required text", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByText("Required Information"));
  });
  it("renders optional text", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByText("Optional Information"));
  });
  it("has no a11y", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
