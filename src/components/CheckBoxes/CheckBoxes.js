import PropTypes from "prop-types";
import React, { useState } from "react";
import { Image } from "../Image/Image";
import checkMark from "../../assets/check_mark.svg";

/**
 * check box component for forms okay
 */
export function CheckBoxes(props) {
  const { id, name, value, label, hasError } = props;
  var onChange = props.onChange === undefined ? () => {} : props.onChange;
  const [checked, setCheckState] = useState(false);
  let display = checked === true ? "ds-visible" : "ds-hidden";
  const validationClass = hasError
    ? "ds-border-specific-red-red50b focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input"
    : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input";
  return (
    <div className="ds-flex ds-flex-row">
      <div className="ds-relative ds-w-44px ds-h-44px ds-justify-items-center">
        <label>
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
            className={`ds-absolute ds-h-8 ds-w-8 ds-left-1.5 ds-bottom-1.5 ${display}`}
            src={checkMark}
            alt="checkMark"
          />
        </label>
      </div>
      <div className="ds-flex">
        <p className="ds-pl-10px ds-self-center ds-card-body-text">{label}</p>
      </div>
    </div>
  );
}

CheckBoxes.defaultProps = {
  checked: false,
  value: "false",
};

CheckBoxes.propTypes = {
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
