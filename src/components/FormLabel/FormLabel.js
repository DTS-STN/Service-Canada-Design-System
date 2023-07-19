import PropTypes from "prop-types";
import React from "react";
import { HintExpander } from "../HintExpander/HintExpander";

export function FormLabel(props) {
  return (
    <>
      <label
        className={`ds-flex ds-text-multi-neutrals-grey100 ds-items-center ds-leading-24px ds-text-xl lg:ds-text-p ds-font-body ds-relative`}
        htmlFor={props.id}
      >
        <span className="ds-inline ds-text-form-input-gray lg:ds-text-xl ds-font-bold ds-flex ds-items-center">
          <p className={props.noneBoldLabel ? "ds-font-normal" : ""}>
            {props.label}
          </p>{" "}
          {props.required && (
            <span className="ds-inline ds-text-error-border-red ds-text-xl ds-font-medium">
              &nbsp;{`(${props.requiredText})`}
            </span>
          )}{" "}
          {props.optional && (
            <span className="ds-inline ds-text-form-input-gray ds-text-multi-neutrals-grey90a ds-text-xl lg:ds-text-xl ds-font-medium">
              &nbsp;{`(${props.optionalText})`}
            </span>
          )}
        </span>
      </label>
      {props.hasHint && (
        <HintExpander
          linkText={props.hintProps.linkText}
          withLink={props.hintProps.withLink}
          externalLinkText={props.hintProps.externalLinkText}
          optionalLinkText={props.hintProps.optionalLinkText}
          url={props.hintProps.href}
        >
          {props.hintProps.description}
        </HintExpander>
      )}
      <div className="ds-font-body ds-text-[20px] ds-leading-[26px] ds-font-medium ds-my-[8px] ds-text-multi-neutrals-grey90a">
        {props.helpText}
      </div>
    </>
  );
}

FormLabel.defaultProps = {
  label: "Label Text",
  optionalText: "optional",
  requiredText: "required",
  hintProps: {
    linkText: "Why are we asking about [topic]?",
    description:
      "We need to know this because your partner’s annual net income...",
    withLink: false,
    externalLinkText: "",
    optionalLinkText: "",
    url: "",
  },
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
   * Help text provide primary information
   */
  helpText: PropTypes.string,

  /**
   * Unit test selector
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
};
