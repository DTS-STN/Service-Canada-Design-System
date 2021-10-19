import React from "react";
import PropTypes from "prop-types";

/**
 * This utility container helps layout content across screen sizes according to
 * the canada-ca design system guidelines https://design.canada.ca/styles/layouts.html
 *
 * screen size 280px - full width, small margin applied
 * screen size 550px - max width 550px, padding removed
 * screen size 768px - max width 768px, margin left auto, margin right auto and padding applied
 * rest of the breakpoints - max width is the lower bound of the breakpoint
 */
export default function LayoutContainer(props) {
  return (
    <div
      className={`layout-container ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
}

LayoutContainer.propTypes = {
  /**
   * additional styles you want applied on the container
   */
  className: PropTypes.string,

  /**
   * the child elements of this container
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
