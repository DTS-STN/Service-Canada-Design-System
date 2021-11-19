import React from "react";
import PropTypes from "prop-types";

/**
 * This utility container helps layout content across screen sizes according to
 * our TailwindCSS implementation of Bootstrap 5 breakpoints and maximum container widths.
 *
 * You can use this container to wrap a page, section or component or you could simiply add
 * the 'container' class to the top-most html element on your page, section or component.
 *
 *
 */
export default function LayoutContainer(props) {
  return (
    <div className={`container ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
}

LayoutContainer.propTypes = {
  /**
   * Pass any additional styles you want applied on the container.
   */
  className: PropTypes.string,

  /**
   * Pass any string, element or component to render out within the layout container.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
