/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./Stepper.stories";
import { Stepper } from "./Stepper";

expect.extend(toHaveNoViolations);

describe("Stepper", () => {
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
  });

  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders regular style stepper", () => {
    render(<Stepper {...Default.args} />);
  });
});
