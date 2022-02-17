import PropTypes from "prop-types";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumbs" id={props.id}>
      <ul className="block text-custom-blue-dark leading-23px font-body">
        {props.items
          ? props.items.map((item, key) => {
              return (
                <li
                  key={key}
                  className="inline-block min-w-0 max-w-full truncate px-2"
                >
                  {key !== 0 && (
                    <span className="inline-block align-middle text-multi-blue-blue70b icon-cheveron-right mx-4" />
                  )}
                  <a
                    href={item.link}
                    className="font-body hover:text-canada-footer-hover-font-blue text-multi-blue-blue70b underline"
                  >
                    {item.text}
                  </a>
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
      text: PropTypes.string,

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
