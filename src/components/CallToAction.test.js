/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary, Secondary } from "./CallToAction.stories";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("CallToAction", () => {
  it("renders component correctly", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText(Primary.args.title);
    screen.getByText(Primary.args.description);
    screen.getByText(Primary.args.hrefText);
    screen.getByText(Primary.args.privacyLinkText);
  });

  it("renders the html content with some text", () => {
    render(<Secondary {...Secondary.args} />);
    screen.getByText(Secondary.args.title);
    screen.getByText("Title");
    screen.getByText("Text");
    screen.getByText(Secondary.args.hrefText);
    screen.getByText(Secondary.args.privacyLinkText);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
