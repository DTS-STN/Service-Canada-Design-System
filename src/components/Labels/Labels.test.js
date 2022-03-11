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
} from "./Labels.stories";
import { Labels } from "./Labels";

expect.extend(toHaveNoViolations);

describe("Labels", () => {
  it("renders default label", () => {
    render(<Labels {...Default.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Default.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-default"
    );
  });

  it("renders primary label", () => {
    render(<Labels {...Primary.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Primary.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-primary"
    );
  });

  it("renders danger label", () => {
    render(<Labels {...Danger.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Danger.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-danger"
    );
  });

  it("renders warning label", () => {
    render(<Labels {...Warning.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Warning.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-warning"
    );
  });

  it("renders info label", () => {
    render(<Labels {...Info.args} />);
    expect(screen.getByText("Label")).toHaveTextContent(Info.args.text);
    expect(screen.getByRole("dialog")).toHaveClass(
      "ds-inline ds-border-l-4 ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-label-info"
    );
  });

  it("renders success label", () => {
    render(<Labels {...Success.args} />);
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
