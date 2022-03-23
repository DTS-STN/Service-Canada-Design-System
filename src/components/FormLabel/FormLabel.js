import PropTypes from "prop-types";
import React, { useState } from "react";
import { Image } from "../Image/Image";
import infoImage from "../../assets/info_img.svg";

export function FormLabel(props) {
  const [displayHelpText, setHelpTextState] = useState(false);
  return (
    <>
      <label
        className={`ds-flex ds-items-center ds-leading-24px ds-text-xl lg:ds-text-p ds-font-body ds-mb-8px ds-relative`}
        htmlFor={props.id}
      >
        <div className="ds-inline ds-text-form-input-gray lg:ds-text-xl ds-font-bold ">
          {props.label}{" "}
        </div>
        {props.required ? (
          <div className="ds-text-error-border-red ds-text-xl ds-font-medium">{`(${props.requiredText})`}</div>
        ) : (
          <div className="ds-inline ds-text-form-input-gray ds-text-xl lg:ds-text-xl ds-font-medium">
            {`(${props.optionalText})`}
          </div>
        )}
        {props.infoText && (
          <div
            className="ds-infoText ds-cursor-pointer ds-pl-8px"
            aria-hidden="true"
            role="button"
            tabIndex={0}
            onClick={() => setHelpTextState(!displayHelpText)}
          >
            <Image src={infoImage} alt="Click on to show info" />
          </div>
        )}
      </label>
      {displayHelpText && (
        <div
          id={props.describedBy}
          className="ds-rounded ds-font-body ds-text-xl ds-text-multi-neutrals-grey100 ds-p-5px ds-pl-14px ds-pr-14px ds-bg-specific-cyan-cyan5 ds-leading-33px ds-border  ds-border-specific-cyan-cyan50 ds-mb-1.5"
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
