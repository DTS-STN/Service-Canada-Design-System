import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";

export function Button(props) {
  const style = "btn-" + props.styling;
  return props.href ? (
    <a
      href={props.href}
      className={`flex flex-row btn-link focus:ring focus:ring-offset-4 `}
      onClick={props.onClick}
      id={props.id}
      disabled={props.disabled}
      role="button"
    >
      {props.icon && !props.iconEnd ? (
        <Image
          className="h-8 w-8 pr-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <Image
          className="h-8 w-8 pl-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
    </a>
  ) : (
    <button
      className={`flex flex-row ${style} focus:ring focus:ring-offset-4`}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      disabled={props.disabled}
    >
      {props.icon && !props.iconEnd ? (
        <div className="grid place-items-center h-8 w-8">
          <Image className="pr-2" src={props.icon} alt={props.iconAltText} />
        </div>
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        <Image
          className="h-8 w-8 pl-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
    </button>
  );
}

Button.defaultProps = {
  id: "btn1",
  styling: "supertask",
  text: "default",
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
  ]).isRequired,

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
  iconAltText: PropTypes.string.isRequired,

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
  type: PropTypes.oneOf(["submit", "reset"]),

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
