import React from "react";
import PropTypes from "prop-types";

/**
 * This utility container helps to layout content across screen sizes according to
 * our TailwindCSS implementation of Bootstrap 3 breakpoints, maximum container widths and grids.
 *
 * You can use this container to wrap a page, section or component or you could simply add
 * the 'container' and 'bootstrap3-grid' classes to the top-most html element on your page, section or component.
 *
 * Note:
 *
 * This project does not contain the Bootstrap package so we do not have access to Bootstrap classes.
 * It simply mimics some bootstrap configurations using TailwindCSS preset files.
 *
 * For more information on Bootstrap 3 breakpoints, containers & grids visit this link:
 * https://getbootstrap.com/docs/3.4/css/#grid-media-queries
 *
 *
 * The Default story demonstrates the default of the layout container, having your content automatically span all 12 columns.
 *
 * The CustomSpan Story shows how to span your content over specific columns of the 12 grid layout
 *
 */
export default function LayoutContainer(props) {
  const { spanDefault } = props;
  return (
    <div
      className={`ds-container ds-bootstrap3-grid ${
        props.className ? props.className : ""
      }`}
    >
      {spanDefault ? (
        <div className={`ds-col-span-12`}>{props.children}</div>
      ) : (
        props.children
      )}
    </div>
  );
}

LayoutContainer.defaultProps = {
  spanDefault: true,
};

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

  /**
   * Defaults to true. This prop is used to automatically span all 12 columns.
   * If False, the user must specify the columns they want their content to span.
   * Refer to "show code" toggle of the CustomSpan example to see an application of this.
   */
  spanDefault: PropTypes.bool,
};
