import PropTypes from "prop-types";
import React from "react";

export function Link(props) {
  //Styling for links based on Figma Design
  let basicStyle =
    "underline text-multi-blue-blue70b font-body text-browserh5 text-mobileh5 leading-33px hover:text-multi-blue-blue50b";
  switch (props.linkStyle) {
    case "basicStyleWithEmphasis":
      basicStyle =
        "underline text-multi-blue-blue70b font-body text-browserh5 font-bold text-mobileh5 leading-33px hover:text-multi-blue-blue50b";
      break;
    case "titleLink":
      basicStyle =
        "text-multi-blue-blue70b font-header text-browserh5 leading-23px font-normal hover:text-multi-blue-blue50b";
      break;
    case "smfooterBlue":
      basicStyle =
        "text-multi-blue-blue70b font-body leading-20px text-browserh7 hover:underline";
      break;
    case "smfooterWhite":
      basicStyle =
        "text-multi-neutrals-white bg-multi-neutrals-grey100 font-body text-browserh7 leading-20px font-normal hover:text-multi-neutrals-white hover:underline";
      break;
    case "smBreadcrumbs":
      basicStyle =
        "text-multi-blue-blue70b font-body text-browserh8 leading-23px font-normal hover:text-multi-blue-blue50b";
      break;
    default:
      basicStyle =
        "underline text-multi-blue-blue70b font-body text-browserh5 text-mobileh5 leading-33px hover:text-multi-blue-blue50b";
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
      {props.text}
    </a>
  );
}

Link.propTypes = {
  /**
   * The text that Text Link will display
   */
  text: PropTypes.string,

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
