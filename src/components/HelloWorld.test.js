import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
expect.extend(toHaveNoViolations);
describe("HelloWorld", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(<HelloWorld />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
