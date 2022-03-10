import PropTypes from "prop-types";
import React, { useState } from "react";

/**
 * text field component
 */
export function TextField(props) {
  const [displayHelpText, setHelpTextState] = useState(false);

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
        className={`block leading-24px text-xl lg:text-p font-body mb-8px relative`}
        htmlFor={props.id}
      >
        <b className="inline text-form-input-gray lg:text-xl font-bold ">
          {props.label}{" "}
        </b>
        {props.required ? (
          <span className="text-error-border-red text-xl font-medium">{`(${props.requiredText})`}</span>
        ) : (
          <p className="inline text-form-input-gray text-xl lg:text-xl font-medium">
            {`(${props.optionalText ? props.optionalText : "optional"})`}
          </p>
        )}
        {props.infoText && (
          <span
            className="infoText cursor-pointer"
            aria-hidden="true"
            role="button"
            tabIndex={0}
            onClick={() => setHelpTextState(!displayHelpText)}
          ></span>
        )}
      </label>
      {displayHelpText && (
        <div
          id={props.describedBy}
          className="rounded text-xl text-multi-neutrals-grey100 p-5px pl-14px pr-14px lg:text-sm bg-specific-cyan-cyan5 leading-33px border  border-specific-cyan-cyan50 mb-1.5"
        >
          {`${props.infoText}`}
        </div>
      )}
      <input
        className={`rounded text-input text-mobileh5 text-multi-neutrals-grey100 w-full min-h-44px text-form-input-gray border py-5px px-14px ${
          props.hasError
            ? "border-specific-red-red50b"
            : "border-multi-neutrals-grey85a focus:border-multi-blue-blue60f"
        } ${props.exclude ? "exclude" : ""}`}
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
        data-cy={props.dataCy}
      />
      {props.hasError && (
        <div className="alertWrapper mt-1.5 text-specific-red-red50b leading-26px font-medium flex">
          <div className="block">
            <span
              className="iconContainer cursor-pointer mr-8 "
              aria-hidden="true"
              role="button"
              tabIndex={0}
              onClick={() => setHelpTextState(!displayHelpText)}
            ></span>
          </div>
          <div className="errorText">{props.errorText}</div>
        </div>
      )}
    </div>
  );
}

TextField.defaultProps = {
  value: "",
  type: "text",
  size: "",
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
   * the text to show after the label in parenthesis if the field is required
   */
  requiredText: PropTypes.string.isRequired,

  /**
   * the text to show after the label in parenthesis if the field is optional
   */
  optionalText: PropTypes.string.isRequired,

  /**
   * Information text to not disclose any personal information
   */
  infoText: PropTypes.string.isRequired,

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
   * message to display if there is an error
   */
  errorText: PropTypes.string,

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

  /**
   * Exclude option for adding exclude class to the textfield
   */
  exclude: PropTypes.bool,

  /**
   * aria-describedBy label id
   */
  describedBy: PropTypes.string,
};
