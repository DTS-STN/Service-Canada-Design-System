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
    case "smfooterStyle":
      basicStyle =
        "font-body bg-multi-blue-blue60g  leading-23px  text-browserh7 text-multi-neutrals-white hover:underline";
      break;
    case "smfooterStyleBottom":
      basicStyle =
        "text-multi-blue-blue70b font-body text-browserh7 leading-30px font-noraml hover:text-multi-blue-blue50b";
      break;
    case "smfooterStyleBold":
      basicStyle =
        "text-multi-blue-blue70b font-body text-browserh9  font-bold  leading-26px font-noraml hover:text-multi-blue-blue50b";
      break;
    case "smBreadcrumbs":
      basicStyle =
        "text-multi-blue-blue70b font-body text-browserh8  leading-23px font-noraml hover:text-multi-blue-blue50b";
      break;
    case "smMultiNav":
      basicStyle =
        "text-multi-blue-blue70b font-body text-browserhe leading-33px font-noraml hover:text-multi-blue-blue50b";
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
   * The text that the button will display
   */
  text: PropTypes.string,

  /**
   * Style link as a button when there's a href
   */
  href: PropTypes.string,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  lang: PropTypes.string,
  /**
   * css overrides for button
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
