import PropTypes from "prop-types";
import React from "react";

/**
 * The following are coding examples of how you would implement a consequential call out,
 * using our components within your own project repo. To view code example click on
 * "Show code" button located to the bottom right, within a given canvas below.
 */

export function ReviewSubmit(props) {
  const { exampleCode } = props;
  return <>{exampleCode}</>;
}

ReviewSubmit.propTypes = {
  /**
   * Refer to "Show code" option within each canvas example
   */
  exampleCode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
