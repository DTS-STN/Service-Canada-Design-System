/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./Collapse.stories";

expect.extend(toHaveNoViolations);

describe("Collapse", () => {
  it("renders Default", () => {
    const Primary = render(<Default {...Default.args} />);
    expect(Primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
