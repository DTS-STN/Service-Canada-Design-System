import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  RegularLinkwithEmphasis,
  FooterBottomSmallLink,
  FooterTopSmallLink,
  SmallLinkSemiBold,
  BreadcrumbsLink,
  MultiNavigationLink,
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
  it("renders regular style link", () => {
    render(<Link {...Default.args} />);
    expect(screen.getByText("Regular Link")).toHaveTextContent(
      Default.args.text
    );
    expect(screen.getByText("Regular Link")).toHaveClass(
      "underline text-multi-blue-blue70b font-body text-browserh5 text-mobileh5 leading-33px hover:text-multi-blue-blue50b"
    );
  });

  it("renders regular link with emphasis", () => {
    render(<Link {...RegularLinkwithEmphasis.args} />);
    expect(screen.getByText("Regular link with Emphasis")).toHaveTextContent(
      RegularLinkwithEmphasis.args.text
    );
    expect(screen.getByText("Regular link with Emphasis")).toHaveClass(
      "underline text-multi-blue-blue70b font-body text-browserh5 font-bold text-mobileh5 leading-33px hover:text-multi-blue-blue50b"
    );
  });

  it("renders link with small font in footer", () => {
    render(<Link {...FooterTopSmallLink.args} />);
    expect(
      screen.getByText("Link with small font in footer top section")
    ).toHaveTextContent(FooterTopSmallLink.args.text);
    expect(
      screen.getByText("Link with small font in footer top section")
    ).toHaveClass(
      "font-body bg-multi-blue-blue60g  leading-23px  text-browserh7 text-multi-neutrals-white hover:underline"
    );
  });

  it("renders link with small font in footer bottom section", () => {
    render(<Link {...FooterBottomSmallLink.args} />);
    expect(
      screen.getByText("Link with small font in footer bottom section")
    ).toHaveTextContent(FooterBottomSmallLink.args.text);
    expect(
      screen.getByText("Link with small font in footer bottom section")
    ).toHaveClass(
      "text-multi-blue-blue70b font-body text-browserh7 leading-30px font-noraml hover:text-multi-blue-blue50b"
    );
  });

  it("renders link with small font in semit bold", () => {
    render(<Link {...SmallLinkSemiBold.args} />);
    expect(
      screen.getByText("Link with small font and semibold")
    ).toHaveTextContent(SmallLinkSemiBold.args.text);
    expect(screen.getByText("Link with small font and semibold")).toHaveClass(
      "text-multi-blue-blue70b font-body text-browserh9  font-bold  leading-26px font-noraml hover:text-multi-blue-blue50b"
    );
  });

  it("renders breadcrumb link", () => {
    render(<Link {...BreadcrumbsLink.args} />);
    expect(screen.getByText("Breadcrumbs link")).toHaveTextContent(
      BreadcrumbsLink.args.text
    );
    expect(screen.getByText("Breadcrumbs link")).toHaveClass(
      "text-multi-blue-blue70b font-body text-browserh8  leading-23px font-noraml hover:text-multi-blue-blue50b"
    );
  });

  it("renders navigation link", () => {
    render(<Link {...MultiNavigationLink.args} />);
    expect(screen.getByText("Navigation Link")).toHaveTextContent(
      MultiNavigationLink.args.text
    );
    expect(screen.getByText("Navigation Link")).toHaveClass(
      "text-multi-blue-blue70b font-body text-browserhe leading-33px font-noraml hover:text-multi-blue-blue50b"
    );
  });
  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
