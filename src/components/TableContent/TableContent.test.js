/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { EN, FR } from "./TableContent.stories.js";

expect.extend(toHaveNoViolations);

describe("TableContent", () => {
  it("EN has no a11y", async () => {
    const { container } = render(<EN {...EN.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("FR has no a11y", async () => {
    const { container } = render(<FR {...FR.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
