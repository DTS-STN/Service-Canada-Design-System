// /**
//  * @jest-environment jsdom
//  */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Stepper } from "./Stepper";

describe("Stepper", () => {
  const name = "Test Stepper";
  const step = 1;
  const heading = "Test Heading";

  const previousProps = {
    id: "previous-button",
    iconAltText: "Previous",
    onClick: jest.fn(),
    styling: "previous-button-styling",
    text: "Previous",
  };

  const nextProps = {
    id: "next-button",
    iconAltText: "Next",
    onClick: jest.fn(),
    styling: "next-button-styling",
    text: "Next",
  };

  const renderStepper = (props) => {
    render(
      <Stepper name={name} step={step} heading={heading} {...props}>
        <div data-testid="child-component">Test child component</div>
      </Stepper>
    );
  };

  test("renders Stepper component with Default template", () => {
    renderStepper({
      previousProps,
      nextProps,
    });

    // Assertions for the Default template
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`${step}: ${heading}`)).toBeInTheDocument();

    // Check if the previous button is rendered correctly
    const previousButton = screen.getByTestId(previousProps.id);
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toHaveAttribute("alt", previousProps.iconAltText);
    expect(previousButton).toHaveClass(`ds-btn-${previousProps.styling}`);
    expect(previousProps.onClick).toHaveBeenCalledTimes(0); // Make sure onClick is not called yet

    // Check if the next button is rendered correctly
    const nextButton = screen.getByTestId(nextProps.id);
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute("alt", nextProps.iconAltText);
    expect(nextButton).toHaveClass(`ds-btn-${nextProps.styling}`);
    expect(nextProps.onClick).toHaveBeenCalledTimes(0); // Make sure onClick is not called yet

    // Check if the child component is rendered correctly
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });

  test("renders Stepper component with First template", () => {
    renderStepper({
      previousProps: null,
      nextProps,
    });

    // Assertions for the First template
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`${step}: ${heading}`)).toBeInTheDocument();

    // Check if the previous button is not rendered
    expect(screen.queryByTestId(previousProps.id)).not.toBeInTheDocument();

    // Check if the next button is rendered correctly
    const nextButton = screen.getByTestId(nextProps.id);
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveAttribute("alt", nextProps.iconAltText);
    expect(nextButton).toHaveClass(`ds-btn-${nextProps.styling}`);
    expect(nextProps.onClick).toHaveBeenCalledTimes(0); // Make sure onClick is not called yet

    // Check if the child component is rendered correctly
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });

  test("renders Stepper component with Last template", () => {
    renderStepper({
      previousProps,
      nextProps: null,
    });

    // Assertions for the Last template
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`${step}: ${heading}`)).toBeInTheDocument();

    // Check if the previous button is rendered correctly
    const previousButton = screen.getByTestId(previousProps.id);
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toHaveAttribute("alt", previousProps.iconAltText);
    expect(previousButton).toHaveClass(`ds-btn-${previousProps.styling}`);
    expect(previousProps.onClick).toHaveBeenCalledTimes(0);

    // Check if the next button is not rendered
    expect(screen.queryByTestId(nextProps.id)).not.toBeInTheDocument();

    // Check if the child component is rendered correctly
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });
});
