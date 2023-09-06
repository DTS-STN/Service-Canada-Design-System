import PropTypes from "prop-types";
import React from "react";

/**
 *  Breadcrumb components
 */
export function Breadcrumb(props) {
  const Component = props.component || "a";
  return (
    <nav className="ds-py-6" aria-label="breadcrumbs" id={props.id}>
      <ul className="ds-block ds-text-custom-blue-dark ds-leading-23px ds-font-body ">
        {props.items
          ? props.items.map((item, index) => {
              return (
                <li
                  key={`list-${index}`}
                  className={`ds-inline-block ds-w-100 ds-pb-4 sm:ds-pb-0`}
                >
                  {index > 0 && (
                    <span className="ds-mx-2 ds-inline-block ds-align-middle ds-text-multi-blue-blue70b ds-icon-cheveron-right ds-pr-2 ds-pl-2" />
                  )}
                  <Component
                    href={item.link}
                    className="ds-font-body hover:ds-text-canada-footer-hover-font-blue ds-text-multi-blue-blue70b ds-underline"
                  >
                    {item.text}
                  </Component>
                </li>
              );
            })
          : null}
      </ul>
    </nav>
  );
}

Breadcrumb.propTypes = {
  /**
   * Component ID
   */
  id: PropTypes.string,

  /**
   * Array of Items for the breadcrumb
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the breadcrumb
       */
      text: (props, propName, componentName) => {
        if (props[propName].length > 28) {
          return new Error(
            "Invalid prop `" +
              propName +
              "` supplied to" +
              " `" +
              componentName +
              "` component is more that 28."
          );
        }
      },

      /**
       * Link for the breadcrumb
       */
      link: PropTypes.string,
    })
  ),

  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,

  /**
   * For tracking click events analytics
   */
  analyticsTracking: PropTypes.bool,

  /**
   * Allow user to use configurable component, default is html anchor tag
   */
  component: PropTypes.elementType,
};
