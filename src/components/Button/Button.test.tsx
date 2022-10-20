/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  Secondary,
  DangerDisabled,
  Link,
  Supertask,
} from "./Button.stories";

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
    expect(screen.getByRole("button")).toHaveClass("ds-btn-supertask");
  });

  it("renders primary", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
    expect(screen.getByRole("button")).toHaveClass("ds-btn-primary");
  });

  it("renders secondary", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
    expect(screen.getByRole("button")).toHaveClass("ds-btn-secondary");
  });

  it("renders danger", () => {
    render(<DangerDisabled {...DangerDisabled.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      DangerDisabled.args.text
    );
    expect(screen.getByRole("button")).toHaveClass("ds-btn-danger");
  });

  it("renders link styles as button", () => {
    render(<Link {...Link.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Link.args.text);
    expect(screen.getByRole("button")).toHaveAttribute("href");
    expect(screen.getByRole("button")).toHaveClass("ds-btn-link");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Supertask {...Supertask.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
