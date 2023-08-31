import PropTypes from "prop-types";
import React, { useState } from "react";
import { FormError } from "../FormError/FormError";
import { FormLabel } from "../FormLabel/FormLabel";
import { HintExpander } from "../HintExpander/HintExpander";

export function FormSelectableCard(props) {
  const [selected, setSelected] = useState(null);
  const validationClass = props.hasError
    ? "ds-border-specific-red-red50b focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input"
    : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input";
  console.log(props);
  return (
    <div id={props.id}>
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
            className={`ds-radio ds-items-start ds-relative ds-flex ds-items-start ds-cursor-pointer ds-font-body ds-text-xl ds-leading-26px ds-text-multi-neutrals-grey100 ds-mb-8px ds-shadow-[#fc03d3] hover:ds-shadow-lg`}
          >
            {/* <div className="ds-flex"> */}
            <div className="ds-min-h-[182px] ds-w-[360px]">
              <div
                className={`ds-h-[72px] ${
                  selected === id
                    ? "ds-bg-[#F2F8FF] ds-border-[#0E62C9]"
                    : "ds-bg-[#F5F5F5] ds-border-[#ACACAC]"
                } ds-rounded-t-lg  ds-border-[1px] ds-border-b-[0px]`}
              >
                <div className="ds-pt-[16px] ds-pt-[12px] ds-px-[24px] ds-flex ds-items-center">
                  <input
                    type="radio"
                    name={props.name}
                    id={id}
                    className="ds-hidden"
                    value={value}
                    tabIndex={0}
                    onChange={(e) => {
                      setSelected(id);
                      props.onChange(value, e);
                    }}
                    data-testid={`${id}-${props.dataTestId}`}
                    checked={checked}
                    defaultChecked={false}
                  />
                  <span
                    role="radio"
                    aria-label={props.name}
                    className={`ds-relative ds-label ds-block ds-mr-3.5 ds-min-w-43px ds-w-43px ds-h-43px ds-border-2 ds-border-solid ${validationClass} ds-rounded-full ds-float-left after:ds-absolute ds-outline-0`}
                    aria-checked="false"
                    tabIndex={0}
                  ></span>
                  <p className="ds-heading5">{value}</p>
                </div>
              </div>
              <div
                className={`ds-min-h-[110px] ds-bg-white ${
                  selected === id
                    ? "ds-border-[#0E62C9]"
                    : "ds-border-[#ACACAC]"
                }  ds-rounded-b-lg ds-border-[1px] ds-border-t-[0px] ds-pl-[80px] ds-pr-[24px] ds-py-[12px]`}
              >
                <p className="ds-heading5 ds-font-normal">{label}</p>
              </div>
            </div>
            {/* </div> */}
          </label>
        )
      )}
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </div>
  );
}

FormSelectableCard.defaultProps = {
  checked: false,
  dataTestId: "primary-selectable-card",
};

FormSelectableCard.propTypes = {
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
       * the label for the selectable-card
       */
      label: PropTypes.string.isRequired,
      /**
       * show hint for selectable-card
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
   * whether the selectable-card button is checked or not
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
