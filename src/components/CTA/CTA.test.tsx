import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default, WithoutLink } from "./CTA.stories";
import { CTA } from "./CTA";

expect.extend(toHaveNoViolations);

describe("CTA", () => {
  it("renders default CTA look (with a link)", async () => {
    render(<CTA {...Default.args} />);
    expect(
      screen.getByText(
        "This sentence explains the action we want the users to take."
      )
    ).toHaveTextContent(Default.args.body);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
  it("renders CTA look without a link", async () => {
    const { container } = render(<CTA {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders CTA look without a link", async () => {
    render(<CTA {...WithoutLink.args} />);
    expect(
      screen.getByText(
        "This sentence explains the action we want the users to take."
      )
    ).toHaveTextContent(WithoutLink.args.body);
    expect(screen.queryByRole("link")).toBeNull();
  });
  it("renders CTA look without a link", async () => {
    const { container } = render(<CTA {...WithoutLink.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
