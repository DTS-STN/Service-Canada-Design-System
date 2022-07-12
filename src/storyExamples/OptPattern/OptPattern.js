import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

/**
 * The following are coding examples of how you would implement differnt Opt-in/opt-out patterns
 */

export function OptPattern(props) {
  const { exampleCode } = props;
  return <>{exampleCode}</>;
}

OptPattern.propTypes = {
  /**
   * Refer to "Show code" option within each canvas example
   */
  exampleCode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
