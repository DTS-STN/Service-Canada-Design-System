import PropTypes from "prop-types";
import React from "react";

export function Image(props) {
  const { src, alt, rounded } = props;

  return (
    <>
      <img src={src} alt={alt} className={`marginAuto ${rounded}`} />
    </>
  );
}

Image.propTypes = {
  /**
   * The text that the image tag will display
   */
  id: PropTypes.string,

  /**
   * Alternate text will be displayed in place of an image.
   */
  alt: PropTypes.string,

  /**
   * Identify source of image
   */
  src: PropTypes.string.isRequired,

  /**
   * css overrides for image
   */
  className: PropTypes.string,
  /**
   * To identify the id of the element
   */
  id: PropTypes.string.isRequired,
  /**
   * Enables rounded corners for image
   */
  rounded: PropTypes.string,
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
