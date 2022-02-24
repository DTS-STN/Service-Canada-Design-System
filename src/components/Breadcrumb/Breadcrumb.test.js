/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  WithItems,
  WithItemsWithLongText,
} from "./Breadcrumb.stories";

expect.extend(toHaveNoViolations);

describe("BreadCrumb", () => {
  it("renders primary", () => {
    const primary = render(<Primary {...Primary.args} />);
    expect(primary).toBeTruthy();
  });

  it("renders breadcrumb with items", () => {
    render(<WithItems {...WithItems.args} />);

    WithItems.args.items.forEach((value) => {
      screen.getByText(value.text);
    });
  });

  it("renders breadcrumb with items with longest text", () => {
    render(<WithItemsWithLongText {...WithItemsWithLongText.args} />);

    WithItemsWithLongText.args.items.forEach((value) => {
      screen.getByText(value.text);
    });
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
