/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { TwoLink, TwoLinkCol } from "./Cards.stories";

expect.extend(toHaveNoViolations);

describe("Cards", () => {
  it("renders text correctly on the page", () => {
    render(<TwoLink {...TwoLink.args} />);
    expect(screen.getByText(TwoLink.args.description)).toBeTruthy();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<TwoLink {...TwoLink.args} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  it("renders text correctly on the page", () => {
    render(<TwoLinkCol {...TwoLinkCol.args} />);
    expect(screen.getByText(TwoLinkCol.args.description)).toBeTruthy();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<TwoLinkCol {...TwoLink.args} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
