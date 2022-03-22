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
    <div
      className={`ds-block ds-leading-tight ${
        props.className ? " " + props.className : "ds-mb-10px"
      }`}
    >
      {props.label && (
        <FormLabel
          id={props.id}
          label={props.label}
          required={props.required}
          requiredText={props.requiredText}
          optionalText={props.optionalText}
          infoText={props.infoText}
        />
      )}
      <input
        className={`ds-rounded ds-text-input ds-text-mobileh5 ds-text-multi-neutrals-grey100 ds-w-full ds-min-h-44px ds-text-form-input-gray ds-border ds-py-5px ds-px-14px ${
          props.hasError
            ? "ds-border-specific-red-red50b"
            : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f"
        }`}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        min={props.min}
        max={props.max}
        required={props.required}
        onChange={props.onChange}
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
  size: "",
  uncontrolled: false,
};

TextField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,

  /**
   * the id of the text field
   */
  id: PropTypes.string.isRequired,

  /**
   * the name of the text field
   */
  name: PropTypes.string.isRequired,

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
   * unit test selector
   */
  dataTestId: PropTypes.string,
};
