import React from "react";
import PropTypes from "prop-types";

/**
 * Button component which has three main styles and the capability to override them.
 * By default this component is a \<button/\> HTML element however if the href prop is specified it will be
 * an \<a/\> element styled as a button
 */
export default function ActionButton(props) {
  /**
   * this function is used to generate the styling based on the props that are passed in
   */
  const generateStyling = () => {
    let className =
      "rounded-sm focus:ring-1 focus:ring-black focus:ring-offset-2";

    if (props.custom) {
      className = " " + props.custom;
    } else if (
      props.secondary &&
      !props.tertiary &&
      !props.disabled &&
      !props.custom
    ) {
      className +=
        " py-2 px-4 bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200";
    } else if (
      props.tertiary &&
      !props.secondary &&
      !props.disabled &&
      !props.custom
    ) {
      className +=
        " py-2 underline hover:text-canada-footer-hover-font-blue text-canada-footer-font";
    } else {
      className +=
        " py-2 px-4 bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light";
    }

    if (props.className) {
      className += " " + props.className;
    }

    if (props.disabled) {
      className +=
        " py-2 px-4 bg-gray-light text-gray-600 border border-gray-md";
    }

    return className;
  };

  return props.href ? (
    <a
      className={generateStyling()}
      onClick={props.onClick}
      onKeyDown={(event) => {
        if (event.key === "Spacebar" || event.key === " ") {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
      id={props.id}
      href={props.href}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
      role="button"
      draggable="false"
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
      className={generateStyling()}
      onKeyDown={(event) => {
        if (event.key === "Spacebar" || event.key === " ") {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
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

ActionButton.propTypes = {
  /**
   * icon to the button
   */
  icon: PropTypes.string,

  /**
   * boolean flag to specify that the icon should be placed at the end of the button
   */
  iconEnd: PropTypes.bool,

  /**
   * the text that the button will display
   */
  text: PropTypes.string,

  /**
   * optional link that can be provided... when it is provided the button will be an \<a/\> element styled as a link
   */
  href: PropTypes.string,

  /**
   * the html id attribute
   */
  id: PropTypes.string.isRequired,

  /**
   * the type of the button, this is primarily used when the button is in a form
   */
  type: PropTypes.oneOf(["submit", "reset"]),

  /**
   * flag to specify that the button should adopt secondary styles
   */
  secondary: PropTypes.bool,

  /**
   * flag to specify that the button should adopt tertiary styles
   */
  tertiary: PropTypes.bool,

  /**
   * primary, secondary and tertiary override
   */
  custom: PropTypes.string,

  /**
   * callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * additional css styles that can be included
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
   * test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * test id for e2e test
   */
  dataCy: PropTypes.string,
  /**
   * test id for e2e test
   */
  dataCyButton: PropTypes.string,
  /**
   * flag to specify that the link or button is disabled
   */
  disabled: PropTypes.bool,
};
