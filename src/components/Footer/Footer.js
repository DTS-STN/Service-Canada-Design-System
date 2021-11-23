import PropTypes from "prop-types";
import React from "react";
import { DateModified } from "../DateModified/DateModified";
// import { ReportAProblem } from "../ReportAProblem/ReportAProblem";
import { ActionButton } from "../ActionButton/ActionButton";

export function Footer(props) {
  return (
    <footer className="w-full">
      <section className="flex flex-col">
        <div className="flex gap-2 lg:justify-between lg:flex-row xxs:flex-col">
          {props.isOptionalCustom && <div>{props.CustomBtn}</div>}
          {props.isOptionalReport && (
            /**
             * Changes to the need to be made to the reportAProblem component
             * For now using an action button as placeholder
             */
            <div>{props.reportAProblemBtn}</div>
          )}
          {props.isOptionalShare && (
            // Need to build the ShareThisPage Component, for now using an action button as placeholder
            <div>{props.shareThisPageBtn}</div>
          )}
        </div>
        <DateModified />
      </section>
      <section
        className={`w-full h-auto footerBackground bg-custom-blue-dark bg-no-repeat bg-clip-border md:bg-right-bottom xxs:bg-bottom`}
        style={{
          backgroundImage: `url(${props.landscapeBgImg})`,
        }}
      >
        <nav
          className="pt-6 pb-6"
          role="navigation"
          aria-labelledby="accessibleSectionHeader1"
        >
          <h2 className="sr-only" id="accessibleSectionHeader1">
            {props.accessibleSectionHeader1}
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
            aria-labelledby="accessibleSectionHeader2"
          >
            <h2 className="sr-only" id="accessibleSectionHeader2">
              {props.accessibleSectionHeader2}
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
              src={props.logoUrl}
              alt={props.logoAltText}
            />
          </div>
        </section>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  landscapeBgImg:
    "https://www.canada.ca/etc/designs/canada/wet-boew/assets/landscape.png",
  isOptionalCustom: false,
  isOptionalReport: false,
  isOptionalShare: false,
  /**
   * Changes to the need to be made to the reportAProblem component
   * For now using an action button as placeholder
   */
  // reportAProblemBtn: <ReportAProblem language="en" />,
  reportAProblemBtn: (
    <ActionButton
      disabled
      id="share"
      text="Report A Problem"
      className="xxs:w-full"
    />
  ),
  shareThisPageBtn: (
    <ActionButton
      disabled
      id="share"
      text="Share this Page"
      className="xxs:w-full"
    />
  ),
  CustomBtn: (
    <ActionButton
      disabled
      id="custom_btn"
      text="Create Your Own Button"
      className="xxs:w-full"
    />
  ),
};

Footer.propTypes = {
  /**
   * hyperlinks for top portion of footer
   */
  landscapeLinks: PropTypes.arrayOf(
    PropTypes.shape({
      landscapeLink: PropTypes.string.isRequired,
      landscapeLinkText: PropTypes.string.isRequired,
    })
  ).isRequired,

  /**
   * background image for the footer
   */
  landscapeBgImg: PropTypes.string.isRequired,

  /**
   * links for bottom portion of footer
   */
  brandLinks: PropTypes.arrayOf(
    PropTypes.shape({
      brandLink: PropTypes.string.isRequired,
      brandLinkText: PropTypes.string.isRequired,
    })
  ).isRequired,

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
  topOfPageLink: PropTypes.string.isRequired,

  /**
   * This header is to help screen readers identify the about government links
   */
  accessibleSectionHeader1: PropTypes.string.isRequired,

  /**
   * This header is to help screen readers identify the about this site links
   */
  accessibleSectionHeader2: PropTypes.string.isRequired,

  /**
   * bool to toggle on and off reportAProblemBtn
   */
  isOptionalReport: PropTypes.bool,

  /**
   * bool to toggle on and off shareThisPagebtn
   */
  isOptionalShare: PropTypes.bool,

  /**
   * btn to allow user to report an issue
   */
  reportAProblemBtn: PropTypes.object,

  /**
   * btn to allow users to share the current page with others
   */
  shareThisPageBtn: PropTypes.object,

  /**
   * bool to toggle on and off CustomButton
   */
  isOptionalCustom: PropTypes.bool,

  /**
   * custom button for anyone using the component to add their own functionality
   */
  CustomBtn: PropTypes.object,
};
