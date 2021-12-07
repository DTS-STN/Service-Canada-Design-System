/**
 * Note issues with using icon when importing this component to other components.
 * Must be fixed before officially releasing this component.
 */
import PropTypes from "prop-types";
import React from "react";

/**
 * Note this button component is currently in development and is should be used as a demo/test component
 */
export function Button(props) {
  //Styling for buttons and links
  const basicStyle = "btn-supertask";
  const defaultStyle = "btn-supertask";
  const secondaryStyle = "btn-supertask";
  const tertiaryStyle = "btn-supertask";
  const disabledStyle = "btn-supertask";

  return props.href ? (
    <a
      href={props.href}
      className={`${basicStyle}
          ${
            !props.secondary &&
            !props.tertiary &&
            !props.disabled &&
            !props.custom
              ? defaultStyle
              : props.className
          }
          ${
            props.secondary && !props.disabled
              ? secondaryStyle
              : props.className
          }
          ${props.tertiary && !props.disabled ? tertiaryStyle : props.className}
          ${props.custom && !props.tertiary ? props.custom : ""}
          ${props.disabled ? disabledStyle : props.className}`}
      onClick={props.onClick}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
      role="button"
      draggable="false"
      lang={props.lang}
    >
      {props.icon && !props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
    </a>
  ) : (
    <button
      className={`${basicStyle}
        ${
          !props.secondary &&
          !props.tertiary &&
          !props.disabled &&
          !props.custom
            ? defaultStyle
            : props.className
        }
        ${props.secondary && !props.disabled ? secondaryStyle : props.className}
        ${props.tertiary && !props.disabled ? tertiaryStyle : props.className}
        ${props.custom && !props.tertiary ? props.custom : ""}
        ${props.disabled ? disabledStyle : props.className}`}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
      data-gc-analytics-submit={props.analyticsTracking ? "submit" : undefined}
    >
      {props.icon && !props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
    </button>
  );
}

Button.propTypes = {
  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd: PropTypes.bool,

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
   * the type of the button
   */
  type: PropTypes.oneOf(["submit", "reset"]),

  /**
   * Secondary color styling option
   */
  secondary: PropTypes.bool,

  /**
   * Tertiary color styling option
   */
  tertiary: PropTypes.bool,

  /**
   * Custom button styling option
   */
  custom: PropTypes.string,

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * css overrides for button
   */
  className: PropTypes.string,

  /**
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
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
  dataCyButton: PropTypes.string,
  /**
   * Enabled or disabled the button
   */
  disabled: PropTypes.bool,
  /**
   * For tracking reset or submit on forms for analytics
   */
  analyticsTracking: PropTypes.bool,
};
