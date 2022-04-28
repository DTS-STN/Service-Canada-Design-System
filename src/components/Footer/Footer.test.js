import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ErrorPageFooter, FrFooter } from "../Footer/Footer.stories";

expect.extend(toHaveNoViolations);

describe("Fr Footer Component", () => {
  // it("renders Fr component", () => {
  //   render(<FrFooter {...FrFooter.args} />);
  //   expect(
  //     screen.getByAltText("Symbol of the Government of Canada")
  //   ).toBeTruthy();
  //   FrFooter.args.brandLinks.forEach((value) => {
  //     expect(screen.getByText(value.brandLinkText)).toBeDefined();
  //   });
  //   FrFooter.args.landscapeLinks.forEach((value) => {
  //     expect(screen.getByText(value.landscapeLinkText)).toBeDefined();
  //   });
  // });

  it("French has no a11y violations", async () => {
    const { container } = render(<FrFooter {...FrFooter.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Error FooterComponent", () => {
  it("Bilungual Page Footer has no a11y violations", async () => {
    const { container } = render(<ErrorPageFooter {...ErrorPageFooter.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
