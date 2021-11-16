import PropTypes from "prop-types";

export function Footer(props) {
  return (
    <footer className="w-full">
      {/* Optional footer elements */}
      <section className="flex flex-col pr-4 pl-4">
        {props.isOptional && (
          <div className="flex lg:justify-between lg:flex-row xxs:flex-col">
            <div className="mb-2">{props.reportAProblemBtn}</div>
            <div>{props.shareThisPageBtn}</div>
          </div>
        )}
        <div className="mb-6">{props.dateModified}</div>
      </section>
      <section
        className={`w-full h-auto footerBackground bg-custom-blue-dark bg-no-repeat bg-clip-border md:bg-right-bottom xxs:bg-bottom ${props.landscapeBgImg}`}
      >
        <nav
          className="layout-container pt-6 pb-6"
          role="navigation"
          aria-labelledby="footerNav1"
        >
          <h2 className="sr-only" id="footerNav1">
            {props.footerNav1}
          </h2>
          <ul className="flex flex-col text-xs lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 lg:gap-1">
            {" "}
            {props.landscapeLinks.map((value, index) => {
              return (
                <li
                  key={index}
                  className="text-white w-64 md:w-56 lg:w-80 my-2.5 hover:underline"
                >
                  <a className="font-body" href={value.landscapeLink}>
                    {value.landscapeLinkText}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <div className="w-full h-full bg-footer-background-color pb-4">
        <section className="h-auto bg-footer-white pt-5 layout-container flex flex-col xl:flex xl:flex-row md:justify-between">
          <nav
            className="mt-3.5 xl:mt-5"
            role="navigation"
            aria-labelledby="footerNav2"
          >
            <h2 className="sr-only" id="footerNav2">
              {props.footerNav2}
            </h2>
            <ul className="flex flex-col md:grid md:grid-cols-2 xl:flex lg:flex-row">
              {props.brandLinks.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={
                      index === 0
                        ? "lg:mb-4 mb-5 mr-2.5 list-inside list-disc xl:list-none text-xxs"
                        : "lg:mb-4 mb-5 mr-2.5 list-inside list-disc text-xxs"
                    }
                  >
                    <a
                      className="text-xs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                      href={value.brandLink}
                    >
                      {value.brandLinkText}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div>
            <div className="mt-8 mb-2.5 float-left xl:invisible">
              {props.topOfPageBtn}
            </div>
            <img
              className="mb-2.5 mt-8 xl:mt-0 h-6 md:h-10 w-auto float-right"
              // developer note: replace with your own image path
              src={props.logoUrl}
              alt={props.logoAltText}
            />
          </div>
        </section>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  /**
   * hyperlinks for top portion of footer
   */
  landscapeLinks: PropTypes.arrayOf(
    PropTypes.shape({
      landscapeLink: PropTypes.string.isRequired,
      landscapeLinkText: PropTypes.string.isRequired,
    })
  ),

  /**
   * links for bottom portion of footer
   */
  brandLinks: PropTypes.arrayOf(
    PropTypes.shape({
      brandLink: PropTypes.string.isRequired,
      brandLinkText: PropTypes.string.isRequired,
    })
  ),

  /**
   * url to canada.ca logo
   */
  logoUrl: PropTypes.string.isRequired,

  /**
   * alt text for the canada.ca logo for cases where image doesn't load
   */
  logoAltText: PropTypes.string.isRequired,

  /**
   * btn to navigate user to the top of the given page
   */
  topOfPageBtn: PropTypes.object.isRequired,

  /**
   * link to the top of the given page
   */
  topOfPageLink: PropTypes.object.isRequired,

  /**
   * bool to toggle on and off optional components
   */
  isOptional: PropTypes.bool.isRequired,

  /**
   * Displays the date modified
   */
  dateModified: PropTypes.object,

  /**
   * btn to allow user to report an issue
   */
  reportAProblemBtn: PropTypes.object,

  /**
   * btn to allow users to share the current page with others
   */
  shareThisPageBtn: PropTypes.object,
};
