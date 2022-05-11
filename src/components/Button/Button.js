import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";

export function Button(props) {
  const style = "ds-btn-" + props.styling;
  return props.href === "no ref" ? (
    <button
      className={`ds-flex ds-flex-row ${style} focus:ds-ring focus:ds-ring-offset-4 ${props.className} `}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      disabled={props.disabled}
    >
      {props.icon && !props.iconEnd ? (
        <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
          <Image className="ds-pr-2" src={props.icon} alt={props.iconAltText} />
        </div>
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
          <Image className="ds-pl-2" src={props.icon} alt={props.iconAltText} />
        </div>
      ) : undefined}
    </button>
  ) : (
    <a
      href={props.href}
      className={`ds-flex ds-flex-row ds-btn-link focus:ds-ring focus:ds-ring-offset-4 ${props.className} `}
      onClick={props.onClick}
      id={props.id}
      disabled={props.disabled}
      role="button"
    >
      {props.icon && !props.iconEnd ? (
        <Image
          className="ds-h-8 ds-w-8 ds-pr-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
          <Image className="ds-pl-2" src={props.icon} alt={props.iconAltText} />
        </div>
      ) : undefined}
    </a>
  );
}

Button.defaultProps = {
  id: "btn1",
  styling: "supertask",
  text: "default",
  href: "no ref",
};

Button.propTypes = {
  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * User must input one of the follow button styles to apply
   * to their button. To apply the link style, the user must
   * also add a value to the href prop
   */
  styling: PropTypes.oneOf([
    "supertask",
    "primary",
    "secondary",
    "danger",
    "link",
    "none",
  ]),

  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * Alt text for icon added to button
   */
  iconAltText: PropTypes.string,

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd: PropTypes.bool,

  /**
   * Use when button redirects to a new page.
   * Automatically applies the Link styling
   */
  href: PropTypes.string,

  /**
   * the type of the button
   */
  type: PropTypes.oneOf(["submit", "reset", "button"]),

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * bool to disable a button
   */
  disabled: PropTypes.bool,

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
};
