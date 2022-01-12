/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  ENErrorPage404,
  ENAuthErrorPage404,
  FRErrorPage500,
  BIErrorPage503,
} from "./ErrorPage.stories.js";

expect.extend(toHaveNoViolations);

describe("Error Pages", () => {
  it("has no a11y violations 404", async () => {
    const { container } = render(<ENErrorPage404 {...ENErrorPage404.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations 404auth", async () => {
    const { container } = render(
      <ENAuthErrorPage404 {...ENAuthErrorPage404.args} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations 500", async () => {
    const { container } = render(<FRErrorPage500 {...FRErrorPage500.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations 503", async () => {
    const { container } = render(<BIErrorPage503 {...BIErrorPage503.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
