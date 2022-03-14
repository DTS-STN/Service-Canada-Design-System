import PropTypes from "prop-types";
import React from "react";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  return (
    <nav className="ds-pt-4 ds-pb-4" aria-label="breadcrumbs" id={props.id}>
      <ul className="ds-block ds-text-custom-blue-dark ds-leading-23px ds-font-body">
        {props.items
          ? props.items.map((item, key) => {
              return (
                <li key={key} className={`ds-inline-block ds-pl-2 ds-w-100`}>
                  <a
                    href={item.link}
                    className="ds-font-body hover:ds-text-canada-footer-hover-font-blue ds-text-multi-blue-blue70b ds-underline"
                  >
                    {item.text}
                  </a>
                  {key < props.items.length - 1 && (
                    <span className="ds-inline-block ds-align-middle ds-text-multi-blue-blue70b ds-icon-cheveron-right ds-pl-2" />
                  )}
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
   * Test id for e2e test
   */
  dataCy: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCyHeader: PropTypes.string,
  /**
   * For tracking click events analytics
   */ analyticsTracking: PropTypes.bool,
};
