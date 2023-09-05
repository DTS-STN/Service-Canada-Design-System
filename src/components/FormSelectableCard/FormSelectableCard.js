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
          <div className={`ds-radio ds-relative ds-flex`} key={index}>
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
          <p className="ds-heading5 ds-w-full">{props.value}</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="42"
            viewBox="0 0 512 512"
            className="ds-fill-gray-500"
          >
            <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
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
