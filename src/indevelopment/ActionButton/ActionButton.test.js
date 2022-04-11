/**
 * @jest-environment jsdom
 */

import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  Secondary,
  Tertiary,
  Disabled,
  Link,
} from "./ActionButton.stories";

expect.extend(toHaveNoViolations);

describe("Action Button", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders default", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Default.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "py-2 px-4 bg-multi-blue-blue60g text-white border border-multi-blue-blue60g active:bg-multi-blue-blue60c hover:bg-multi-blue-blue60f"
    );
  });

  it("renders with secondary colors", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "py-2 px-4 bg-white text-multi-blue-blue60g border border-multi-blue-blue60g active:bg-multi-neutrals-grey85a hover:bg-multi-neutrals-grey40 "
    );
  });

  it("renders with tertiary colors", () => {
    render(<Tertiary {...Tertiary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Tertiary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "py-2 underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
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

  // Test Case for keyboard interraction. Code currently not implemented, so test case can't be applied yet.
  // it("click can be executed with spacebar", () => {
  //   render(<Link {...Link.args} />);
  //   const inputElem = screen.getByRole("button");
  //   inputElem.click = mockFn;
  //   act(() => {
  //     fireEvent.keyDown(inputElem, { key: "Spacebar", code: "Spacebar" });
  //   });
  //   expect(mockFn.mock.calls.length).toBe(1);
  //   expect(global.window.location.pathname).toEqual("/");
  // })

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
