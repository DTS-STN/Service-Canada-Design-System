import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  RegularLinkwithEmphasis,
  FooterWhiteLink,
  FooterBlueLink,
  TitleLink,
  CardActionLink,
  BreadcrumbsLink,
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
    expect(screen.getByRole("link")).toHaveClass(
      "ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-leading-33px hover:ds-text-multi-blue-blue50b"
    );
    expect(screen.getByLabelText(Default.args.text)).toBeInTheDocument();
  });

  it("renders regular link with emphasis", () => {
    render(<Link {...RegularLinkwithEmphasis.args} />);
    expect(screen.getByText("Regular link with Emphasis")).toHaveTextContent(
      RegularLinkwithEmphasis.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-font-bold ds-text-mobileh5 ds-leading-33px hover:ds-text-multi-blue-blue50b"
    );
    expect(
      screen.getByLabelText(RegularLinkwithEmphasis.args.text)
    ).toBeInTheDocument();
  });

  it("renders Title link", () => {
    render(<Link {...TitleLink.args} />);
    expect(screen.getByText("Title Link")).toHaveTextContent(
      TitleLink.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "ds-underline ds-text-multi-blue-blue70b ds-font-header ds-text-browserh5  ds-leading-23px ds-font-bold hover:ds-text-multi-blue-blue50b"
    );
    expect(screen.getByLabelText(TitleLink.args.text)).toBeInTheDocument();
  });

  it("renders Card Action link", () => {
    render(<Link {...CardActionLink.args} />);
    expect(screen.getByText("Card Action Link")).toHaveTextContent(
      CardActionLink.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-underline ds-leading-28px ds-font-regular hover:ds-text-multi-blue-blue50b"
    );
    expect(screen.getByLabelText(CardActionLink.args.text)).toBeInTheDocument();
  });

  it("renders Small link - Footer Blue", () => {
    render(<Link {...FooterBlueLink.args} />);
    expect(screen.getByText("Small link - Footer blue")).toHaveTextContent(
      FooterBlueLink.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "ds-text-multi-blue-blue70b ds-font-body ds-leading-20px ds-text-browserh7 hover:ds-underline"
    );
    expect(screen.getByLabelText(FooterBlueLink.args.text)).toBeInTheDocument();
  });

  it("renders breadcrumb link", () => {
    render(<Link {...BreadcrumbsLink.args} />);
    expect(
      screen.getByText("Small link - Breadcrumbs & French toggle")
    ).toHaveTextContent(BreadcrumbsLink.args.text);
    expect(screen.getByRole("link")).toHaveClass(
      "ds-text-multi-blue-blue70b ds-font-body ds-text-browserh8 ds-leading-23px ds-font-regular hover:ds-text-multi-blue-blue50b"
    );
    expect(
      screen.getByLabelText(BreadcrumbsLink.args.text)
    ).toBeInTheDocument();
  });
  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
