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
          <div className={`ds-radio ds-relative ds-flex`}>
            <div
              className={`ds-min-h-[182px] ds-w-[360px] ds-rounded-lg hover:ds-shadow-[#0E62C9] ds-border-[1px] ${
                selected === id
                  ? "ds-border-[#0E62C9]"
                  : "ds-border-[#ACACAC]  "
              } hover:ds-border-[#0E62C9] hover:ds-shadow-sm ds-cursor-pointer ds-mb-8px`}
            >
              <UpperCard
                {...props}
                id={id}
                label={label}
                index={index}
                validationClass={validationClass}
                value={value}
                selected={selected}
                setSelected={setSelected}
                checked={checked}
              />
              <LowerCard
                {...props}
                id={id}
                label={label}
                index={index}
                validationClass={validationClass}
                value={value}
                selected={selected}
                setSelected={setSelected}
                checked={checked}
              />
            </div>
          </div>
        )
      )}
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </div>
  );
}

const UpperCard = (props) => {
  return (
    <div
      className={`ds-h-[72px] ${
        props.selected === props.id ? "ds-bg-[#F2F8FF]" : "ds-bg-[#F5F5F5]"
      } ds-rounded-t-lg  ds-border-[1px] ds-border-b-[0px]`}
    >
      <label htmlFor={props.id} key={props.id + props.index}>
        <div className="ds-pt-[16px] ds-pt-[12px] ds-px-[24px] ds-flex ds-items-center">
          <input
            type="radio"
            name={props.name}
            id={props.id}
            className="ds-hidden"
            value={props.value}
            tabIndex={0}
            onChange={(e) => {
              props.setSelected(props.id);
              props.onChange(props.value, e);
            }}
            data-testid={`${props.id}-${props.dataTestId}`}
            checked={props.checked}
            defaultChecked={false}
          />
          <span
            role="radio"
            aria-label={props.name}
            className={`ds-relative ds-label ds-block ds-mr-3.5 ds-min-w-43px ds-w-43px ds-h-43px ds-border-2 ds-border-solid ${props.validationClass} ds-rounded-full ds-float-left after:ds-absolute ds-outline-0`}
            aria-checked={props.checked}
            tabIndex={0}
          ></span>
          <p className="ds-heading5">{props.value}</p>{" "}
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="help-icon"
          >
            <path d="M26 13C26 20.1813 20.1792 26 13 26C5.8208 26 0 20.1813 0 13C0 5.8229 5.8208 0 13 0C20.1792 0 26 5.8229 26 13ZM13.3489 4.29839C10.4922 4.29839 8.67016 5.50178 7.23943 7.64054C7.05407 7.91763 7.11608 8.29133 7.38175 8.49277L9.20065 9.87193C9.47349 10.0788 9.86223 10.0296 10.0742 9.76069C11.0106 8.57298 11.6527 7.88424 13.078 7.88424C14.1489 7.88424 15.4735 8.57345 15.4735 9.61187C15.4735 10.3969 14.8254 10.8001 13.768 11.3929C12.5349 12.0841 10.9032 12.9445 10.9032 15.0968V15.3065C10.9032 15.6538 11.1849 15.9355 11.5323 15.9355H14.4677C14.8151 15.9355 15.0968 15.6538 15.0968 15.3065V15.2366C15.0968 13.7446 19.4573 13.6825 19.4573 9.64516C19.4573 6.60473 16.3035 4.29839 13.3489 4.29839ZM13 17.2984C11.6704 17.2984 10.5887 18.3801 10.5887 19.7097C10.5887 21.0392 11.6704 22.121 13 22.121C14.3296 22.121 15.4113 21.0392 15.4113 19.7097C15.4113 18.3801 14.3296 17.2984 13 17.2984Z" />
          </svg>
        </div>
      </label>
    </div>
  );
};

const LowerCard = (props) => {
  return (
    <div
      className={`ds-min-h-[110px] ds-bg-white ds-rounded-b-lg ds-border-[1px] ds-border-t-[0px] ds-pl-[80px] ds-pr-[24px] ds-py-[12px]`}
    >
      <p className="ds-card-body-text ds-font-normal">{props.label}</p>
    </div>
  );
};

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
