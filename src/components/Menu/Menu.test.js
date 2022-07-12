/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { AuthenticatedEN, AuthenticatedFR } from "./Menu.stories";

expect.extend(toHaveNoViolations);

describe("Menu", () => {
  // it("renders the menu", () => {
  //   render(<AuthenticatedEN {...AuthenticatedEN.args} />);
  //   expect(screen.getByText("My Service Canada Account")).toHaveTextContent(
  //     "My Service Canada Account"
  //   );
  // });

  it("toggles aria-expanded attribute when clicked", () => {
    render(<AuthenticatedEN {...AuthenticatedEN.args} />);
    const inputElem = screen.getByTestId("menuButton");
    act(() => {
      inputElem.click();
    });
    expect(inputElem.getAttribute("aria-expanded")).toEqual("true");
  });

  // it("renders the menu with French language", () => {
  //   render(<AuthenticatedFR {...AuthenticatedFR.args} />);
  //   expect(screen.getByText("Mon dossier Service Canada")).toHaveTextContent(
  //     "Mon dossier Service Canada"
  //   );
  // });

  it("toggles aria-expanded attribute when clicked", () => {
    render(<AuthenticatedFR {...AuthenticatedFR.args} />);
    const inputElem = screen.getByTestId("menuButton");
    act(() => {
      inputElem.click();
    });
    expect(inputElem.getAttribute("aria-expanded")).toEqual("true");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<AuthenticatedEN {...AuthenticatedEN.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<AuthenticatedFR {...AuthenticatedFR.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
