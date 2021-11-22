import React from "react";
import PropTypes from "prop-types";

/**
 * This utility container helps to layout content across screen sizes according to
 * our TailwindCSS implementation of Bootstrap 5 breakpoints, maximum container widths and grids.
 *
 * You can use this container to wrap a page, section or component or you could simiply add
 * the 'container' and 'bootstrap5-grid' classes to the top-most html element on your page, section or component.
 *
 * Note:
 *
 * This project does not contain the Bootstrap package so we do not have access to Bootstrap classes.
 * It simiply mimics some bootstrap configurations using TailwindCSS preset files.
 *
 * For more information on Bootstrap 5 breakpoints, containers & grids visit the following links:
 * https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints, https://getbootstrap.com/docs/5.0/layout/grid/#grid-options
 *
 *
 *
 * The Primary story demonstrates how you  can implement a 12 column grid layout using Tailwind Grid utilities.
 *
 */
export default function LayoutContainer(props) {
  return (
    <div
      className={`container bootstrap5-grid ${
        props.className ? props.className : ""
      }`}
    >
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
