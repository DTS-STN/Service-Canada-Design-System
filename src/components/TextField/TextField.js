import PropTypes from "prop-types";
import React from "react";
import { FormError } from "../FormError/FormError";
import { FormLabel } from "../FormLabel/FormLabel";
/**
 * text field component
 */
export function TextField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};
  return (
    <div className={`ds-block ds-leading-tight ds-mb-10px`}>
      {props.label && (
        <FormLabel
          id={props.id}
          label={props.label}
          required={props.required}
          requiredText={props.requiredText}
          optionalText={props.optionalText}
          infoText={props.infoText}
          describedBy={props.describedBy}
          helpText={props.helpText}
          hasHint={props.hasHint}
          hintProps={props.hintProps}
        />
      )}
      <input
        className={`${
          props.size === "standard"
            ? "ds-w-full ds-max-w-[408px]"
            : props.size === "11"
            ? "ds-w-[154px]"
            : props.size === "8"
            ? "ds-w-[120px]"
            : props.size === "7"
            ? "ds-w-[109px]"
            : props.size === "4"
            ? "ds-w-[74px]"
            : props.size === "3"
            ? "ds-w-[63px]"
            : props.size === "2"
            ? "ds-w-[51px]"
            : props.size
        } ds-rounded ds-text-input ds-text-mobileh5 ds-text-multi-neutrals-grey100 ds-min-h-44px ds-text-form-input-gray ds-border-[1.5px] ds-py-5px ds-px-14px ${
          props.hasError
            ? "ds-border-specific-red-red50b"
            : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f"
        } ${props.exclude ? "exclude" : ""}`}
        maxLength={`
          ${
            props.size === "11"
              ? "11"
              : props.size === "8"
              ? "8"
              : props.size === "7"
              ? "7"
              : props.size === "4"
              ? "4"
              : props.size === "3"
              ? "3"
              : props.size === "2"
              ? "2"
              : ""
          }`}
        id={props.id}
        aria-describedby={props.describedBy}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        min={props.min}
        max={props.max}
        step={props.step}
        required={props.required}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        {...ifControlledProps}
        data-testid={props.dataTestId}
      />
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </div>
  );
}

TextField.defaultProps = {
  value: "",
  type: "text",
  size: "standard",
};

TextField.propTypes = {
  /**
   * the id of the text field
   */
  id: PropTypes.string.isRequired,

  /**
   * the name of the text field
   */
  name: PropTypes.string.isRequired,

  /**
   * The textfield label
   */
  label: PropTypes.string.isRequired,

  /**
   * The text which fills in the parenthesis, next to the label
   */
  requiredText: PropTypes.string,

  /**
   * The text directly below the label text, used to give more information
   * inregards to the given input
   */
  helpText: PropTypes.string,

  /**
   * value of the text field
   */
  value: PropTypes.string,

  /**
   * placeholder for the text field,
   */
  placeholder: PropTypes.string,

  /**
   * the type of the input. Supports Number, Password, Email
   */
  type: PropTypes.string,

  /**
   * call back for when the value of the text field changes
   */
  onChange: PropTypes.func,

  /**
   * Check if filed has an error or not.
   */
  hasError: PropTypes.bool,

  /**
   * boolean flag to specify that this input should be uncontrolled by react
   */
  uncontrolled: PropTypes.bool,

  /**
   * min value allowed
   */
  min: PropTypes.number,

  /**
   * max value allowed
   */
  max: PropTypes.number,

  /**
   * the legal number of intervals
   */
  step: PropTypes.number,

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * Exclude option for adding exclude class to the textfield
   */
  exclude: PropTypes.bool,

  /**
   * aria-describedBy label id
   */
  describedBy: PropTypes.string,

  /**
   * Option to show and custom Hint Expander
   */
  hasHint: PropTypes.bool,

  /**
   * Hint Expander props
   */
  hintProps: PropTypes.shape({
    textLink: PropTypes.string,
    description: PropTypes.string,
    withLink: PropTypes.bool,
    externalLinkText: PropTypes.string,
    optionalLinkText: PropTypes.string,
  }),

  /**
   * User can input one of the follow size option to apply
   * to the input field, the default size is standard.
   */
  size: PropTypes.oneOf(["standard", "11", "8", "7", "4", "3", "2"]),
};
