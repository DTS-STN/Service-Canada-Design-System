import PropTypes from "prop-types";
import React from "react";
import { FormError } from "../FormError/FormError";
import { FormLabel } from "../FormLabel/FormLabel";
import { HintExpander } from "../HintExpander/HintExpander";

export function FormRadioButton(props) {
  const validationClass = props.hasError
    ? "ds-border-specific-red-red50b focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input"
    : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input";
  return (
    <>
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
      {props.options.map(
        ({ id, label, checked, value, hasHint, hintProps }, index) => (
          <label
            htmlFor={id}
            key={id + index}
            className={`ds-radio ds-items-start ds-relative ds-flex ds-items-start ds-cursor-pointer ds-font-body ds-text-xl ds-leading-26px ds-text-multi-neutrals-grey100 ds-mb-8px`}
          >
            <input
              type="radio"
              name={props.name}
              id={id}
              className="ds-hidden"
              value={value}
              tabIndex={0}
              onChange={(e) => {
                props.onChange(value, e);
              }}
              data-testid={`${id}-${props.dataTestId}`}
              checked={checked}
              defaultChecked={false}
            />
            {/* <div className="ds-flex"> */}
            <span
              role="radio"
              aria-label={props.name}
              className={`ds-relative ds-label ds-block ds-mr-3.5 ds-min-w-43px ds-w-43px ds-h-43px ds-border-1.5 ds-border-solid ${validationClass} ds-rounded-full ds-float-left after:ds-absolute ds-outline-0`}
              aria-checked="false"
              tabIndex={0}
            ></span>
            <span className="ds-pt-2">
              {label}
              {hasHint && (
                <HintExpander
                  linkText={hintProps.linkText}
                  withLink={hintProps.withLink}
                  externalLinkText={hintProps.externalLinkText}
                  optionalLinkText={hintProps.optionalLinkText}
                  url={hintProps.url}
                  className={hintProps.className}
                >
                  {hintProps.description}
                </HintExpander>
              )}
            </span>
            {/* </div> */}
          </label>
        )
      )}
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </>
  );
}

FormRadioButton.defaultProps = {
  checked: false,
  dataTestId: "primary-radio",
};

FormRadioButton.propTypes = {
  /**
   * the id for the input
   */
  id: PropTypes.string.isRequired,

  /**
   * the name for the input
   */
  name: PropTypes.string.isRequired,

  /**
   * List of options
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * the value for the input
       */
      value: PropTypes.string.isRequired,

      /**
       * the label for the radio button
       */
      label: PropTypes.string.isRequired,
      /**
       * show hint for radio button
       */
      hasHint: PropTypes.bool,
      /**
       * Hint Expander props
       */
      hintProps: PropTypes.shape({
        linkText: PropTypes.string,
        description: PropTypes.string,
        withLink: PropTypes.bool,
        externalLinkText: PropTypes.string,
        optionalLinkText: PropTypes.string,
        className: PropTypes.string,
      }),
    })
  ),

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
    className: PropTypes.string,
  }),

  /**
   * whether the radio button is checked or not
   */
  checked: PropTypes.bool,

  /**
   * onChange callback
   */
  onChange: PropTypes.func,

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,
};
