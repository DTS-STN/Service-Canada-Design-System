/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { English } from "./VideoPlayer.stories.js";

expect.extend(toHaveNoViolations);

describe("Video Player", () => {
  it("has no a11y violations", async () => {
    const { container } = render(<English {...English.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
