import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Optional, Required } from "../Footer/Footer.stories";

expect.extend(toHaveNoViolations);

describe("Required Footer Component", () => {
  it("renders Required component", () => {
    render(<Required {...Required.args} />);
    expect(
      screen.getByAltText("Symbol of the Government of Canada")
    ).toBeTruthy();
    Required.args.brandLinks.forEach((value) => {
      expect(screen.getByText(value.brandLinkText)).toBeDefined();
    });
    Required.args.landscapeLinks.forEach((value) => {
      expect(screen.getByText(value.landscapeLinkText)).toBeDefined();
    });
  });

  it("Required has no a11y violations", async () => {
    const { container } = render(<Required {...Required.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Optional Footer Component", () => {
  it("renders Optional component", () => {
    render(<Optional {...Optional.args} />);
    expect(
      screen.getByAltText("Symbol of the Government of Canada")
    ).toBeTruthy();
    Optional.args.brandLinks.forEach((value) => {
      expect(screen.getByText(value.brandLinkText)).toBeDefined();
    });
    Optional.args.landscapeLinks.forEach((value) => {
      expect(screen.getByText(value.landscapeLinkText)).toBeDefined();
    });
  });

  it("Optional has no a11y violations", async () => {
    const { container } = render(<Optional {...Optional.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
