import PropTypes from "prop-types";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumbs">
      <ul className="block text-custom-blue-dark text-base font-body">
        <li className="inline-block min-w-0 max-w-full truncate px-2">
          <a
            href="https://www.canada.ca/"
            className="text-sm hover:text-custom-blue-link visited:text-purple-700 underline"
          >
            Canada.ca
          </a>
        </li>

        {props.items
          ? props.items.map((item, key) => {
              return (
                <li
                  key={key}
                  className="inline-block min-w-0 max-w-full truncate px-2"
                >
                  <span className="inline-block align-middle text-gray-breadcrumb icon-cheveron-right mx-4" />
                  <a
                    href={item.link}
                    className="text-sm hover:text-canada-footer-hover-font-blue text-canada-footer-font visited:text-purple-700 underline"
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
};
