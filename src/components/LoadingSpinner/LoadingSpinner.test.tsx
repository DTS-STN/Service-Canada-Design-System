import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./LoadingSpinner.stories";
import { LoadingSpinner } from "./LoadingSpinner";

expect.extend(toHaveNoViolations);

describe("LoadingSpinner", () => {
  it("renders LoadingSpinner without accessibility violations", async () => {
    const { container } = render(<LoadingSpinner {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
