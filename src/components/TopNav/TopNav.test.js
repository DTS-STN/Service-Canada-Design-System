/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { TopNavEN, TopNavFR } from "./TopNav.stories";

expect.extend(toHaveNoViolations);

describe("TopNav", () => {
  it("renders the TopNav", () => {
    render(<TopNavEN {...TopNavEN.args} />);
    expect(screen.getByText("Skip to main content")).toHaveTextContent(
      "Skip to main content"
    );
  });

  it("renders the TopNav with French language", () => {
    render(<TopNavFR {...TopNavFR.args} />);
    expect(screen.getByText("Passer au contenu principal")).toHaveTextContent(
      "Passer au contenu principal"
    );
  });

  it("has no a11y violations", async () => {
    const { container } = render(<TopNavEN {...TopNavEN.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<TopNavFR {...TopNavFR.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
