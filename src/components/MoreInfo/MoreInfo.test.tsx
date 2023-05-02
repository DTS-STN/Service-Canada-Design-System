import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./MoreInfo.stories";
import { MoreInfo } from "./MoreInfo";

expect.extend(toHaveNoViolations);

describe("MoreInfo", () => {
  it("renders MoreInfo without accessibility violations", async () => {
    const { container } = render(<MoreInfo {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
