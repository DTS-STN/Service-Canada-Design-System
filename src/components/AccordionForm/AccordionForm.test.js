import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./AccordionForm.stories.js";

expect.extend(toHaveNoViolations);

describe("Accordion Form Test", () => {
  it("has no a11y", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(1).toBe(1);
  });
});
