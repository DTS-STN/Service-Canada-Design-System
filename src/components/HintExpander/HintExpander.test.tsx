import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./HintExpander.stories";
import { HintExpander } from "./HintExpander";

expect.extend(toHaveNoViolations);

describe("HintExpander", () => {
  it("renders HintExpander without accessibility violations", async () => {
    const { container } = render(<HintExpander {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
