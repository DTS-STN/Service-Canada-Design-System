/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { English } from "./ReportAProblem.stories";
import fetchMock from "fetch-mock";

expect.extend(toHaveNoViolations);

describe("Report A Problem", () => {
  beforeEach(() => {
    fetchMock.postOnce("/api/report-a-problem", {
      status: 200,
      body: "OK",
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it("displays thank you message after submit button is pressed", () => {
    render(<English {...English.args} />);
    const submitButton = screen.getByTestId("report-a-problem-submit");
    submitButton.click();
    expect(screen.getByText("Thank you for your help!")).toBeTruthy();
  });
  it("renders an empty status div before submitting the form", () => {
    render(<English {...English.args} />);
    expect(screen.getByRole("status")).toBeTruthy();
  });
  it("no accessibility issues for form", async () => {
    const { container } = render(<English {...English.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("no accessibility issues for thank you message", async () => {
    const { container } = render(<English {...English.args} />);
    const submitButton = screen.getByTestId("report-a-problem-submit");
    submitButton.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
