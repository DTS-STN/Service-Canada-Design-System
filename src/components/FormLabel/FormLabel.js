import PropTypes from "prop-types";
import React, { useState } from "react";

export function FormLabel(props) {
  const [displayHelpText, setHelpTextState] = useState(false);
  return (
    <>
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
            {`(${props.optionalText})`}
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
          className="rounded font-body text-xl text-multi-neutrals-grey100 p-5px pl-14px pr-14px bg-specific-cyan-cyan5 leading-33px border  border-specific-cyan-cyan50 mb-1.5"
        >
          {`${props.infoText}`}
        </div>
      )}
    </>
  );
}

FormLabel.defaultProps = {
  label: "Label Text",
  optionalText: "optional",
  requiredText: "required",
};

FormLabel.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Label text
   */
  label: PropTypes.string,

  /**
   * Check if the field is required or not
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
  infoText: PropTypes.string,

  /**
   * Unit test selector
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
