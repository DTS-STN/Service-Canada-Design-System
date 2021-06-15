import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  Secondary,
  Tertiary,
  Disabled,
  Link,
} from "./ActionButton.stories";

expect.extend(toHaveNoViolations);

describe("Action Button Component", () => {
  it("renders default", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
    );
  });

  it("renders with secondary colors", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200"
    );
  });

  it("renders with tertiary colors", () => {
    render(<Tertiary {...Tertiary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Tertiary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
    );
  });

  it("renders disabled", () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Disabled.args.text);
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  it("renders link styles as button", () => {
    render(<Link {...Link.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Link.args.text);
    expect(screen.getByRole("button")).toHaveAttribute("href");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
