import React from "react";
import PropTypes from "prop-types";
import ErrorLabel from "./ErrorLabel";

/**
 * Text field input with label that can be used in forms or stand-alone input.
 * The value of this component can optionally be controlled by react or
 * by the underlying DOM
 */
export default function TextField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};
  return (
    <div
      className={`block leading-tight${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <label
        className={`block leading-tight text-sm font-body mb-5 ${
          props.boldLabel ? "font-bold" : ""
        }`}
        htmlFor={props.id}
      >
        {props.required ? (
          <b className="text-error-border-red">*</b>
        ) : undefined}{" "}
        {props.label}{" "}
        {props.required ? (
          <b className="text-error-border-red">{`(${props.requiredText})`}</b>
        ) : (
          <p className="inline text-form-input-gray text-sm">{`(${props.optionalText})`}</p>
        )}
      </label>
      {props.error ? <ErrorLabel message={props.error} /> : undefined}
      <input
        className={`text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px ${
          props.error ? "border-error-border-red" : "border-black"
        }`}
        id={props.id}
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
        data-cy={props.dataCy}
      />
    </div>
  );
}

TextField.defaultProps = {
  value: "",
  type: "text",
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
   * the label of the text field
   */
  label: PropTypes.string.isRequired,

  /**
   * whether ot not the field is required
   */
  required: PropTypes.bool,

  /**
   * the text to show in brackets following the label if it is required
   */
  requiredText: PropTypes.string.isRequired,

  /**
   * the text to show in brackets following the label if the field is not required
   */
  optionalText: PropTypes.string.isRequired,

  /**
   * value of the text field
   */
  value: PropTypes.string,

  /**
   * placeholder for the text field,
   */
  placeholder: PropTypes.string,

  /**
   * the type of the input
   */
  type: PropTypes.string,

  /**
   * call back for when the value of the text field changes
   */
  onChange: PropTypes.func,

  /**
   * message to display if there is an error
   */
  error: PropTypes.string,

  /**
   * if label should be bold
   */
  boldLabel: PropTypes.bool,

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
   * cypress tests selector
   */
  dataCy: PropTypes.string,
};
