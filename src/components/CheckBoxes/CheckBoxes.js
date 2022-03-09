import PropTypes from "prop-types";
import React, { useState } from "react";
import { Image } from "../Image/Image";
import checkMark from "../../assets/check_mark.svg";

/**
 * check box component for forms
 */
export function CheckBoxes(props) {
  const [checked, setCheckState] = useState(false);
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
    <div className="flex flex-col justifiy-center items-center">
      <label>
        <input
          id={props.id}
          name={props.name}
          value={props.value}
          type="checkbox"
          className="relative appearance-none checkbox_style accent-white"
        />
        <Image
          className="absolute h-8 w-8 text-opacity-0"
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
  error: PropTypes.bool,

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
