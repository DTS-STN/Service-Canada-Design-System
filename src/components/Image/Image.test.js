import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  Mobile,
  DefaultWithRounded,
  MobileWithRounded,
} from "./Image.stories";
import { Image } from "./Image";

expect.extend(toHaveNoViolations);

describe("Image", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders default image", () => {
    render(<Image {...Default.args} />);
    expect(screen.getByAltText("Default Image"));
  });

  it("renders mobile image", () => {
    render(<Image {...Mobile.args} />);
    expect(screen.getByAltText("Mobile Image"));
  });

  it("renders default image with rounded corner", () => {
    render(<Image {...DefaultWithRounded.args} />);
    expect(screen.getByAltText("Default Image with rounded")).toHaveClass(
      "ds-rounded"
    );
  });

  it("renders mobile image with rounded", () => {
    render(<Image {...MobileWithRounded.args} />);
    expect(screen.getByAltText("Mobile Image with rounded")).toHaveClass(
      "ds-rounded"
    );
  });
});
