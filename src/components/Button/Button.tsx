import React, { MouseEvent } from "react";
import { Image } from "../Image/Image";

interface IButtonProps {
  /**
   * Identify which button being clicked
   */
  id: string;

  /**
   * The text that the button will display
   */
  text: string;

  /**
   * This will add a img inside the button when needed
   */
  icon?: string;

  /**
   * Alt text for icon added to button
   */
  iconAltText?: string;

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd?: boolean;

  /**
   * Use when button redirects to a new page.
   * Automatically applies the Link styling
   */
  href?: string;
  /**
   * the type of the button
   */
  type?: "submit" | "reset" | "button";
  /**
   * Callback for a click event on the button
   */
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /**
   * bool to disable a button
   */
  disabled?: boolean;
  /**
   * css overrides for button
   */
  className?: string;
  /**
   * User must input one of the follow button styles to apply
   * to their button. To apply the link style, the user must
   * also add a value to the href prop
   */
  styling?: "supertask" | "primary" | "secondary" | "danger" | "link" | "none";
  /**
   * any other elements you want to add to the button
   */
  children?: JSX.Element | JSX.Element | string;
}

export function Button({
  id,
  href,
  type,
  onClick,
  text,
  children,
  icon,
  iconEnd = false,
  disabled = false,
  iconAltText = "",
  className = "",
  styling = "none",
}: IButtonProps) {
  const style = "ds-btn-" + styling;
  return !href || href == "no href" ? (
    <button
      className={`ds-flex ds-flex-row ${style} focus:ds-ring focus:ds-ring-offset-4 ${className} `}
      onClick={onClick}
      type={type || "button"}
      id={id}
      disabled={disabled}
    >
      {icon && !iconEnd ? (
        <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
          <Image className="ds-pr-2" src={icon} alt={iconAltText} />
        </div>
      ) : undefined}
      {text}
      {children}
      {icon && iconEnd ? (
        <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
          <Image className="ds-pl-2" src={icon} alt={iconAltText} />
        </div>
      ) : undefined}
    </button>
  ) : (
    <a
      href={href}
      className={`ds-flex ds-flex-row ds-btn-link focus:ds-ring focus:ds-ring-offset-4 ${className} `}
      onClick={onClick}
      id={id}
      // disabled={disabled}
      role="button"
    >
      {icon && !iconEnd ? (
        <Image className="ds-h-8 ds-w-8 ds-pr-2" src={icon} alt={iconAltText} />
      ) : undefined}
      {text}
      {children}
      {icon && iconEnd ? (
        <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
          <Image className="ds-pl-2" src={icon} alt={iconAltText} />
        </div>
      ) : undefined}
    </a>
  );
}
