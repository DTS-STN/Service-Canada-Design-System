import PropTypes from "prop-types";
import React from "react";

export function Link(props) {
  //Styling for links based on Figma Design
  let basicStyle = "";
  switch (props.linkStyle) {
    case "basicStyleWithEmphasis":
      basicStyle =
        "ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-font-bold ds-text-mobileh5 ds-leading-33px hover:ds-text-multi-blue-blue50b";
      break;
    case "titleLink":
      basicStyle =
        "ds-underline ds-text-multi-blue-blue70b ds-font-header ds-text-browserh5 ds-leading-23px ds-font-bold hover:ds-text-multi-blue-blue50b";
      break;
    case "smfooterBlue":
      basicStyle =
        "ds-underline ds-text-multi-blue-blue70b ds-font-body ds-leading-20px ds-text-browserh7 hover:ds-underline";
      break;
    case "smfooterWhite":
      basicStyle =
        "ds-text-multi-neutrals-white ds-font-body ds-text-browserh7 ds-leading-20px ds-font-regular hover:ds-text-multi-neutrals-white hover:ds-underline";
      break;
    case "smBreadcrumbs":
      basicStyle =
        "ds-text-multi-blue-blue70b ds-font-body ds-text-browserh8 ds-leading-23px ds-font-regular hover:ds-text-multi-blue-blue50b";
      break;
    case "cardActionLink":
      basicStyle =
        "ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-underline ds-leading-28px ds-font-regular hover:ds-text-multi-blue-blue50b";
      break;
    default:
      basicStyle =
        "lg:ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-font-bold ds-text-mobileh5 ds-leading-33px hover:ds-text-multi-blue-blue50b";
      break;
  }

  return (
    <a
      href={props.href}
      className={`${basicStyle}`}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
      lang={props.lang}
    >
      {/* <!-- English Text: English --> */}
      <span className={props.abbr ? "ds-language-toggle-text" : ""}>
        {props.text}
      </span>
      {/* <!-- English Text: title="English", en --> */}
      <abbr className="ds-language-toggle-abbr" title={props.text}>
        {props.abbr}
      </abbr>
    </a>
  );
}

Link.propTypes = {
  /**
   * The text that Text Link will display
   */
  text: PropTypes.string,
  /**
   * Abbrivation for text
   */
  abbr: PropTypes.string,
  /**
   * Style link as a Text Link when there's a href
   */
  href: PropTypes.string,

  /**
   * Identify which Text Link being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  lang: PropTypes.string,
  /**
   * css overrides for Link
   */
  className: PropTypes.string,
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
  dataCyLink: PropTypes.string,
  /**
   * For tracking on click of forms for analytics
   */
  analyticsTracking: PropTypes.bool,
};
