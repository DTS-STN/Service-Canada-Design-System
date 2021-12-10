import PropTypes from "prop-types";
import React from "react";

export function Image(props) {
  const { src, alt } = props;

  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
}

Image.propTypes = {
  /**
   * The text that the button will display
   */
  id: PropTypes.string,

  /**
   * Style link as a button when there's a href
   */
  alt: PropTypes.string,

  /**
   * Identify which button being clicked
   */
  src: PropTypes.string.isRequired,

  /**
   * css overrides for button
   */
  className: PropTypes.string,
  /**
   * To identify the heading element
   */
  id: PropTypes.string.isRequired,
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCy: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCyHeading: PropTypes.string,
};
