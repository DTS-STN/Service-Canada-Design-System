import PropTypes from "prop-types";
import React, { useState } from "react";
import { Image } from "../Image/Image";
import checkMark from "../../assets/check_mark.svg";

/**
 * check box component for forms
 */
export function CheckBoxes(props) {
  const [checked, setCheckState] = useState(false);
  let display = checked === true ? "ds-visible" : "ds-hidden";
  return (
    // // <div
    // //   className={`block leading-tight relative pl-40px h-46px clear-left${props.className ? " " + props.className : " mb-4"
    // //     }`}
    // // >
    //     {/* <input
    //     className="control-input w-40px h-40px absolute left-0 m-0 opacity-0"
    //     id={props.id}
    //     name={props.name}
    //     value={props.value}
    //     type="checkbox"
    //     onChange={(e) =>
    //       props.onChange(
    //         props.checked ? !e.currentTarget.checked : props.checked,
    //         props.name,
    //         props.value
    //       )
    //     }
    //     required={props.required}
    //     onClick={() => setCheckState(!checked)}
    //     checked={checked}
    //   />
    //   <label
    //     className={`checkbox-label control-label inline-block pt-4px pb-5px px-15px leading-tight ${props.error ? "" : undefined
    //       }`}
    //     htmlFor={props.id}
    //   >
    //     {props.showRequiredLabel ? (
    //       <b className="">*</b>
    //     ) : undefined}
    //     {props.label}
    //     {props.showRequiredLabel ? (
    //       <b className="">{props.requiredLabel}</b>
    //     ) : undefined}
    //   </label> */}
    <div className="ds-relative ds-w-44px ds-h-44px ds-justify-items-center">
      <label>
        <input
          id={props.id}
          name={props.name}
          value={props.value}
          onClick={() => setCheckState(!checked)}
          type="checkbox"
          className={`ds-absolute ds-appearance-none ds-checkbox_style ${
            !props.hasError
              ? "ds-border-specific-red-red50b"
              : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f focus:ds-shadow-sm focus:ds-shadow-multi-blue-blue60f "
          }`}
          onChange={props.onChange}
        />
        <Image
          className={`ds-absolute ds-h-8 ds-w-8 ds-left-1.5 ds-bottom-1.5 ${display}`}
          src={checkMark}
          alt="checkMark"
        />
      </label>
    </div>
  );
}

CheckBoxes.defaultProps = {
  checked: false,
  value: "true",
  showRequiredLabel: true,
  onChange: () => {},
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
   * whether or not there is an error
   */
  hasError: PropTypes.bool,

  /**
   * whether or not the field is required
   */
  required: PropTypes.bool,

  /**
   * show the "* ... (required)" in the label. in lists, this isn't necessary, but for an individual checkbox without a parent fieldset this is required
   */
  showRequiredLabel: PropTypes.bool,

  /**
   * the text for the required label
   */
  requiredLabel: PropTypes.string,

  /**
   * callback to handle change in checked state, takes three arguments, the checked state, the name and the value
   */
  onChange: PropTypes.func,
};
