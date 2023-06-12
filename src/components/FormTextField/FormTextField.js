import PropTypes from "prop-types";
import React from "react";
import { FormError } from "../FormError/FormError";
import { FormLabel } from "../FormLabel/FormLabel";
/**
 * text field component
 */
export function FormTextField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};

  // Define a map of width-to-classname mappings
  const width = {
    standard: "ds-w-full ds-max-w-[408px]",
    12: "ds-w-[166px]",
    11: "ds-w-[154px]",
    8: "ds-w-[120px]",
    7: "ds-w-[109px]",
    4: "ds-w-[74px]",
    3: "ds-w-[63px]",
    2: "ds-w-[51px]",
  };

  // Use the width-to-classname map to get the classname based on the selected width
  const classname = `${
    width[props.width] || props.width
  } ds-rounded ds-text-input ds-text-mobileh5 ds-text-multi-neutrals-grey100 ds-min-h-44px ds-text-form-input-gray ds-border-2 ds-py-5px ds-px-14px ${
    props.hasError
      ? "ds-border-specific-red-red50b"
      : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f"
  } ${props.exclude ? "exclude" : ""}`;

  // Define a map of width-to-maxLength mappings
  const maxLengths = {
    12: 12,
    11: 11,
    8: 8,
    7: 7,
    4: 4,
    3: 3,
    2: 2,
  };

  // Use the width-to-maxLength map to get the maxLength based on the selected width
  const maxLength = maxLengths[props.width] || undefined;

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
        className={classname}
        maxLength={maxLength}
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

FormTextField.defaultProps = {
  value: "",
  type: "text",
  width: "standard",
};

FormTextField.propTypes = {
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
   * User can input one of the follow width option to apply
   * to the input field, the default width is standard.
   */
  width: PropTypes.oneOf(["standard", "12", "11", "8", "7", "4", "3", "2"]),
};
