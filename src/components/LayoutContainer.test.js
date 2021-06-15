import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./LayoutContainer.stories";

expect.extend(toHaveNoViolations);

describe("LayoutContainer Component", () => {
  it("renders layout container with content", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
  });
  it("renders additional styles when provided", () => {
    render(<Primary {...Primary.args} className="some-class" />);
    const elem = screen.getByText(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    expect(elem.parentElement).toHaveClass("some-class");
  });
  it("has no detectable accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
