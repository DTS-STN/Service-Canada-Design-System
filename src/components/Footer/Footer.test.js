/**
 * @jest-environment jsdom
 */
import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Footer.stories";

expect.extend(toHaveNoViolations);

describe("Footer Component", () => {
  it("renders Footer component", () => {
    render(<Primary {...Primary.args} />);
    expect(
      screen.getByAltText("Symbol of the Government of Canada")
    ).toBeTruthy();
    Primary.args.brandLinks.forEach((value) => {
      expect(screen.getByText(value.brandLinkText)).toBeDefined();
    });
    Primary.args.landscapeLinks.forEach((value) => {
      expect(screen.getByText(value.landscapeLinkText)).toBeDefined();
    });
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
