/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./SearchBar.stories";

expect.extend(toHaveNoViolations);

describe("Search bar tests", () => {
  it("renders primary", async () => {
    render(<Primary {...Primary.args} />);
    const placeholder = await screen.findByPlaceholderText("Search Canada.ca");
    expect(placeholder).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
