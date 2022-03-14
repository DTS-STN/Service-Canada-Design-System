import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  Required,
  DefaultWithInfo,
  RequiredWithInfo,
} from "./FormLabel.stories";
import { FormLabel } from "./FormLabel";

expect.extend(toHaveNoViolations);

describe("Form Label", () => {
  it("renders default label", () => {
    render(<FormLabel {...Default.args} />);
    expect(screen.getByText("Default Label")).toHaveTextContent(
      Default.args.label
    );
  });

  it("renders Required label", () => {
    render(<FormLabel {...Required.args} />);
    expect(screen.getByText("Required Label")).toHaveTextContent(
      Required.args.label
    );
  });

  it("renders Default With Info label", () => {
    render(<FormLabel {...DefaultWithInfo.args} />);
    expect(screen.getByText("Required Label")).toHaveTextContent(
      DefaultWithInfo.args.label
    );
  });

  it("renders warning label", () => {
    render(<FormLabel {...RequiredWithInfo.args} />);
    expect(screen.getByText("Required Label")).toHaveTextContent(
      RequiredWithInfo.args.label
    );
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
