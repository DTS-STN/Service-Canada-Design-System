import PropTypes from "prop-types";
import React from "react";

export function Link(props) {
  //Styling for links
  const basicStyle =
    "underline text-multi-blue-blue70b font-body text-browserh5 text-mobileh5 leading-28px font-bold hover:text-multi-blue-blue50b";
  const footerStyle =
    "font-body bg-multi-blue-blue60g  leading-23px  text-browserh7 text-multi-neutrals-white hover:underline";
  const footerStyleBottom =
    "text-multi-blue-blue70b font-body text-browserh7 leading-28px font-noraml hover:text-multi-blue-blue50b";
  let linkStyle = basicStyle;
  if (props.isFooterLink)
    linkStyle =
      props.footerLinkPosition === "bottom" ? footerStyleBottom : footerStyle;

  return props.isInfo ? (
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
      [{props.text}]
    </a>
  ) : (
    <a
      href={props.href}
      className={`${linkStyle}`}
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
   * Footer link styling option
   */
  isFooterLink: PropTypes.bool,
  /**
   * Is information link
   */
  isInfo: PropTypes.bool,
  /**
   * Footer link position
   */
  footerLinkPosition: PropTypes.string,
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
