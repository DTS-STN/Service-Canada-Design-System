import PropTypes from "prop-types";
import React, { useState } from "react";
import { FormError } from "../FormError/FormError";
import { FormLabel } from "../FormLabel/FormLabel";
import bank from "../../assets/bank.svg";

export function FormSelectableCard(props) {
  const [selected, setSelected] = useState(props.selected || null);
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
      <ul>
        {props.options.map(({ id, label, checked, value }, index) => (
          <li
            className={`ds-min-h-[182px] ds-max-w-[360px] max-[574px]:ds-max-w-[290px] ds-rounded-lg hover:ds-shadow-[#0E62C9] ds-border-[1px] ${
              selected === id ? "ds-border-[#0E62C9]" : "ds-border-[#ACACAC]"
            } hover:ds-border-[#0E62C9] hover:ds-drop-shadow-[0px_0px_6px_rgba(14,98,201,0.5)] ds-cursor-pointer ds-mb-8px ds-border-[1px] hover:ds-border-[2px]`}
            key={index}
            id={index}
          >
            <label
              htmlFor={id}
              key={id + index}
              className={`ds-radio ds-cursor-pointer`}
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
            </label>
          </li>
        ))}
      </ul>
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </div>
  );
}

const UpperCard = (props) => {
  props.selected === props.id && handleScroll(props.index);
  return (
    <div
      className={`ds-h-[72px] ${
        props.selected === props.id ? "ds-bg-[#F2F8FF]" : "ds-bg-[#F5F5F5]"
      } ds-rounded-t-lg ds-border-[0px]`}
    >
      <div className="ds-pt-[16px] ds-pt-[12px] ds-px-[24px] max-[574px]:ds-px-[16px] ds-flex ds-items-center">
        <input
          type="radio"
          name={props.name}
          id={props.id}
          className="ds-hidden"
          value={props.value}
          tabIndex={0}
          onChange={(e) => {
            props.setSelected((prev) => props.id);
            props.onChange(props.value, e);
          }}
          data-testid={`${props.id}-${props.dataTestId}`}
          checked={props.selected === props.id}
        />
        <span
          role="radio"
          aria-label={props.name}
          className={`ds-relative ds-label ds-block ds-mr-3.5 ds-min-w-43px ds-w-43px ds-h-43px ds-border-2 ds-border-solid ${props.validationClass} ds-rounded-full ds-float-left after:ds-absolute ds-outline-0`}
          aria-checked={props.selected === props.id}
          tabIndex={0}
        ></span>
        <p className="ds-heading5 ds-w-full">{props.value}</p>

        <img
          id={props.iconAlt}
          src={props.icon || bank}
          alt={props.iconAlt || "icon"}
        />
      </div>
    </div>
  );
};

const LowerCard = (props) => {
  return (
    <div
      className={`ds-min-h-[110px] ds-bg-white ds-rounded-b-lg ds-border-[0px] ds-pl-[80px] max-[574px]:ds-pl-[72px] ds-pr-[24px] max-[574px]:ds-pr-[16px] ds-py-[12px]`}
    >
      <p className="ds-card-body-text ds-font-normal">{props.label}</p>
    </div>
  );
};

const handleScroll = (id) => {
  const scrollTo = document.getElementById(id);
  if (scrollTo) {
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
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
   * trigger an error
   */
  hasError: PropTypes.bool,

  /**
   * Pre-selected item id
   */
  selected: PropTypes.bool,

  /**
   * Error message to be displayed
   */
  errorText: PropTypes.string,

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
   * Icon object to be displayed
   */
  icon: PropTypes.elementType,

  /**
   * Alt tag for icon
   */
  iconAlt: PropTypes.string,

  /**
   * whether the selectable-card button is checked or not
   */
  checked: PropTypes.bool,

  /**
   * Help text that appears below label
   */
  helpText: PropTypes.string,

  /**
   * onChange callback
   */
  onChange: PropTypes.func,

  /**
   * the label for the radio button
   */
  label: PropTypes.string,

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,
};
