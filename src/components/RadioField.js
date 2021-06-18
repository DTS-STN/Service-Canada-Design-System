import React from "react";
import PropTypes from "prop-types";

/**
 * Radio field input with label that can be used in forms or stand-alone input.
 * The checked state of this component can optionally be controlled by react or
 * by the underlying DOM
 */
export default function RadioField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        checked: props.checked,
      }
    : {};
  return (
    <div
      className={`block leading-tight relative pl-40px h-40px clear-left${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <input
        className="control-input cursor-pointer appearance-none w-40px h-40px absolute left-0 m-0 z-1 opacity-0"
        id={props.id}
        name={props.name}
        value={props.value}
        type="radio"
        onChange={(e) =>
          props.onChange(
            props.uncontrolled ? !e.currentTarget.checked : props.checked,
            props.name,
            props.value
          )
        }
        required={props.required}
        data-cy={props.dataCy}
        data-testid={props.dataTestId}
        {...ifControlledProps}
      />
      <label
        className={`radio-field-label control-label inline-block cursor-pointer pt-4px pb-5px px-15px text-xs sm:text-sm leading-tight sm:leading-6 font-normal font-body ${
          props.error ? "text-error-border-red" : ""
        }`}
        htmlFor={props.id}
        onClick={() => props.onChange(props.checked, props.name, props.value)}
      >
        {props.showRequiredLabel ? (
          <b className="text-error-border-red">*</b>
        ) : undefined}{" "}
        {props.label}{" "}
        {props.showRequiredLabel ? (
          <b className="text-error-border-red">{`(${props.requiredText})`}</b>
        ) : undefined}
      </label>
    </div>
  );
}

RadioField.defaultProps = {
  checked: false,
  value: "true",
  showRequiredLabel: false,
};

RadioField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,
  /**
   * whether or not the checkbox is checked
   */
  checked: PropTypes.bool.isRequired,

  /**
   * the value of the field when the checkbox is checked
   */
  value: PropTypes.string,

  /**
   * the name of the checkbox
   */
  name: PropTypes.string.isRequired,

  /**
   * the id of the checkbox
   */
  id: PropTypes.string.isRequired,

  /**
   * the label for the checkbox
   */
  label: PropTypes.string.isRequired,

  /**
   * whether or not there is an error, when this is specified the label will be red.
   */
  error: PropTypes.bool,

  /**
   * whether or not the field is required
   */
  required: PropTypes.bool,

  /**
   * the text that shows after the label in brackets when this input is required
   */
  requiredText: PropTypes.string,

  /**
   * show the "* ... (required)" in the label. in lists, this isn't necessary, but for an individual checkbox without a parent fieldset this is required
   */
  showRequiredLabel: PropTypes.bool,

  /**
   * callback to handle change in checked state, takes three arguments, the checked state, the name and the value
   */
  onChange: PropTypes.func,

  /**
   * boolean flag to specify that this input should not be controlled by react
   */
  uncontrolled: PropTypes.bool,

  /**
   * testing selector for cypress
   */
  dataCy: PropTypes.string,

  /**
   * testing selector for unit tests
   */
  dataTestId: PropTypes.string,
};
