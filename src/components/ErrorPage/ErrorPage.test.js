/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  enErrorPage404,
  enAuthErrorPage404,
  frErrorPage500,
  frAuthErrorPage500,
} from "./ErrorPage.stories";

expect.extend(toHaveNoViolations);

describe("Error Pages", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  // it("renders 404 error page", () => {
  //   render(<enErrorPage404 {...enErrorPage404.args} />);
  //   expect(screen.getByRole("p")).toBeDefined();
  // });
  // it("renders 404 Auth error page", () => {
  //   render(<enAuthErrorPage404 {...enAuthErrorPage404.args} />);
  //   expect(screen.getByText(enAuthErrorPage404.args.errType)).toBeDefined();
  // });

  it("has no a11y violations", async () => {
    const { container } = render(<enErrorPage404 {...enErrorPage404.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
