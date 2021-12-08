/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary, Secondary, Danger, Link, Supertask } from "./Button.stories";

expect.extend(toHaveNoViolations);

describe("Button", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders supertask", () => {
    render(<Supertask {...Supertask.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Supertask.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-supertask");
  });

  it("renders primary", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
  });

  it("renders secondary", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-secondary");
  });

  it("renders danger", () => {
    render(<Danger {...Danger.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Danger.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-danger");
  });

  it("renders link styles as button", () => {
    render(<Link {...Link.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Link.args.text);
    expect(screen.getByRole("button")).toHaveAttribute("href");
    expect(screen.getByRole("button")).toHaveClass("btn-link");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Supertask {...Supertask.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
