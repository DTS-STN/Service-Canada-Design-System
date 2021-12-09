import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  FooterLink,
  FooterLinkBottom,
  InformationLink,
  DownlaodLink,
} from "./Link.stories";
import { Link } from "./Link";

expect.extend(toHaveNoViolations);

describe("Link", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders default", () => {
    render(<Link {...Default.args} />);
    expect(screen.getByText("Link")).toHaveTextContent(Default.args.text);
    expect(screen.getByText("Link")).toHaveClass(
      "underline text-multi-blue-blue70b font-body text-browserh5 text-mobileh5 leading-28px font-bold hover:text-multi-blue-blue50b"
    );
  });
  it("renders with FooterLink", () => {
    render(<Link {...FooterLink.args} />);
    expect(screen.getByText("Link")).toHaveTextContent(FooterLink.args.text);
    expect(screen.getByText("Link")).toHaveClass(
      "font-body bg-multi-blue-blue60g  leading-23px  text-browserh7 text-multi-neutrals-white hover:underline"
    );
  });

  it("renders with FooterLinkBottom", () => {
    render(<Link {...FooterLinkBottom.args} />);
    expect(screen.getByText("Link")).toHaveTextContent(
      FooterLinkBottom.args.text
    );
    expect(screen.getByText("Link")).toHaveClass(
      "text-multi-blue-blue70b font-body text-browserh7 leading-28px font-noraml hover:text-multi-blue-blue50b"
    );
  });
  it("renders with InformationLink", () => {
    render(<Link {...InformationLink.args} />);
    expect(screen.getByText("[Link]")).toHaveTextContent([
      InformationLink.args.text,
    ]);
    expect(screen.getByText("[Link]")).toHaveClass(
      "underline text-multi-blue-blue70b font-body text-browserh5 text-mobileh5 leading-28px font-bold hover:text-multi-blue-blue50b"
    );
  });
  it("has no a11y violations", async () => {
    const { container } = render(<Link {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
