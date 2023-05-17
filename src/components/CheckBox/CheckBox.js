/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Image } from "../Image/Image";
import checkMark from "../../assets/check_mark.svg";
import { HintExpander } from "../HintExpander/HintExpander";

/**
 * check box component for forms okay
 */
export function CheckBox(props) {
  const { id, name, value, label, hasError, hasHint, hintProps } = props;
  var onChange = props.onChange === undefined ? () => true : props.onChange;
  const [checked, setCheckState] = useState(false);
  let display = checked === true ? "ds-visible" : "ds-hidden";
  const validationClass = hasError
    ? "ds-border-specific-red-red50b focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input"
    : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input";
  return (
    <label className="ds-flex ds-flex-row">
      <div className="ds-relative ds-w-44px ds-h-44px ds-justify-items-center">
        <>
          <input
            id={id}
            name={name}
            value={value}
            onClick={() => setCheckState(!checked)}
            type="checkbox"
            className={`ds-absolute ds-appearance-none ds-checkbox_style ds-outline-none
            ${validationClass}
            `}
            onChange={onChange}
          />
          <Image
            className={`ds-left-1.5 ds-bottom-1.5 ds-bg-[#0E62C9] ds-rounded-md ${display}`}
            src={checkMark}
            alt="checkMark"
          />
        </>
      </div>
      <div className="ds-pl-10px ds-py-8px">
        <p className="ds-self-center ds-pb-2 ds-card-body-text">{label}</p>
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
      </div>
    </label>
  );
}

CheckBox.defaultProps = {
  checked: false,
  value: "false",
};

CheckBox.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,
  /**
   * whether or not the checkbox is selected
   */
  checked: PropTypes.bool.isRequired,

  /**
   * the value of the field when the checkbox is selected
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
   * callback to handle change in checked state, takes three arguments, the checked state, the name and the value
   */
  onChange: PropTypes.func,

  /**
   * proper to toggle state on error state of checkbox
   */
  hasError: PropTypes.bool,
};
