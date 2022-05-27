/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./What.stories.js";

expect.extend(toHaveNoViolations);

describe("What component Test", () => {
  it("has no a11y", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
