import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Card } from "./Card";

expect.extend(toHaveNoViolations);

describe("Card", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(<Card {...Card.args} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  test("renders with default props", () => {
    const { getByText, container } = render(
      <Card title="Test Title" description="Test Description" />
    );

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("card");
    expect(container.firstChild).toHaveClass("card--standard");
  });

  test("renders with large size", () => {
    const { container } = render(
      <Card title="Test Title" description="Test Description" size="large" />
    );

    expect(container.firstChild).toHaveClass("card--large");
  });

  test("renders with image when showImage is true", () => {
    const { getByAltText } = render(
      <Card
        title="Test Title"
        description="Test Description"
        showImage={true}
        imgSrc="test.jpg"
        imgAlt="Test Image"
      />
    );

    const image = getByAltText("Test Image");
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("test.jpg");
  });

  test("renders with label when showLabel is true", () => {
    const labelText = "Test Label";
    const { getByText } = render(
      <Card
        title="Test Title"
        description="Test Description"
        showLabel={true}
        labelText={labelText}
      />
    );

    expect(getByText(labelText)).toBeInTheDocument();
  });
});

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { axe, toHaveNoViolations } from "jest-axe";
// import { TwoLink, TwoLinkCol } from "./Card.stories";

// expect.extend(toHaveNoViolations);

// describe("Cards", () => {
//   it("renders text correctly on the page", () => {
//     render(<TwoLink {...TwoLink.args} />);
//     expect(screen.getByText(TwoLink.args.description)).toBeTruthy();
//   });

//   it("has no accessibility violations", async () => {
//     const { container } = render(<TwoLink {...TwoLink.args} />);
//     const result = await axe(container);
//     expect(result).toHaveNoViolations();
//   });

//   it("renders text correctly on the page", () => {
//     render(<TwoLinkCol {...TwoLinkCol.args} />);
//     expect(screen.getByText(TwoLinkCol.args.description)).toBeTruthy();
//   });

//   it("has no accessibility violations", async () => {
//     const { container } = render(<TwoLinkCol {...TwoLink.args} />);
//     const result = await axe(container);
//     expect(result).toHaveNoViolations();
//   });
// });
