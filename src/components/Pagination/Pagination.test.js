/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Mobile } from "./Pagination.stories.js";

expect.extend(toHaveNoViolations);

describe("Pagination Test", () => {
  it("has no a11y", async () => {
    const { container } = render(<Mobile {...Mobile.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
