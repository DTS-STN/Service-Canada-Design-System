import PropTypes from "prop-types";
import React from "react";

/**
 * The following is a coding examples of how you would implement an Exposed After Pattern,
 * using our components within your own project repo. View Canvas tab to interract with the example and
 * to view a code example, go to the docs tab and click on "Show code" button located to the bottom right,
 * within the given canvas below.
 */

export function AfterPattern(props) {
  const { exampleCode } = props;
  return <>{exampleCode}</>;
}

AfterPattern.propTypes = {
  /**
   * Refer to "Show code" option within each canvas example
   */
  exampleCode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
