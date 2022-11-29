import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  Primary,
  Danger,
  Warning,
  Info,
  Success,
} from "./Label.stories";
import { Label } from "./Label";

expect.extend(toHaveNoViolations);

describe("Label", () => {
  it("renders default label", () => {
    render(<Label {...Default.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Default.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-default"
    );
  });

  it("renders primary label", () => {
    render(<Label {...Primary.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Primary.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-primary"
    );
  });

  it("renders danger label", () => {
    render(<Label {...Danger.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Danger.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-danger"
    );
  });

  it("renders warning label", () => {
    render(<Label {...Warning.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Warning.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-warning"
    );
  });

  it("renders info label", () => {
    render(<Label {...Info.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Info.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-info"
    );
  });

  it("renders success label", () => {
    render(<Label {...Success.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Success.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-success"
    );
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
