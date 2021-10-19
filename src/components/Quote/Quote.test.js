/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Quote.stories";

expect.extend(toHaveNoViolations);

describe("Quote", () => {
  it("renders the quote with some text", async () => {
    render(<Primary {...Primary.args} />);
    screen.getByTitle("Quote");
    const text = await screen.findByText(Primary.args.text);
    expect(text).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
