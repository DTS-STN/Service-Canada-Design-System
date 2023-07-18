import React from "react";
import PropTypes from "prop-types";
import "./FormDropdown.css";
import { FormLabel } from "../FormLabel/FormLabel";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";

export const FormDropdown = (props) => {
  return (
    <>
      {props.hasLabel && (
        <FormLabel
          id={props.formLabelProps.id}
          label={props.formLabelProps.label}
          required={props.formLabelProps.required}
          requiredText={props.formLabelProps.requiredText}
          optionalText={props.formLabelProps.optionalText}
          infoText={props.formLabelProps.infoText}
          describedBy={props.formLabelProps.describedBy}
          helpText={props.formLabelProps.helpText}
          hasHint={props.hasHint}
          hintProps={props.hintProps}
        />
      )}
      {props.doubleDropdown ? (
        <div className="ds-flex">
          <div id="dropdown1" className="ds-mr-[48px] ds-w-[80px]">
            <FormLabel label={props.label1} noneBoldLabel={true} />
            <CustomDropdown
              defaultValue={props.dropdownProps.minValue}
              minValue={props.dropdownProps.minValue}
              maxValue={props.dropdownProps.maxValue}
              hasSearch={props.dropdownProps.hasSearch}
              hasError={props.dropdownProps.hasError}
              errorText={props.dropdownProps.errorText}
              onChange={props.dropdownProps.onChange}
              isNumber={true}
            />
          </div>
          <div id="dropdown2" className="ds-w-[80px]">
            <FormLabel label={props.label2} noneBoldLabel={true} />
            <CustomDropdown
              defaultValue={props.dropdown2Props.minValue}
              minValue={props.dropdown2Props.minValue}
              maxValue={props.dropdown2Props.maxValue}
              options={props.dropdown2Props.options}
              hasSearch={props.dropdown2Props.hasSearch}
              hasError={props.dropdown2Props.hasError}
              errorText={props.dropdown2Props.errorText}
              onChange={props.dropdown2Props.onChange}
              isNumber={true}
            />
          </div>
        </div>
      ) : (
        <div className={props.width === "number" ? "ds-w-[80px]" : ""}>
          <CustomDropdown
            defaultValue={
              props.width === "number"
                ? props.dropdownProps.minValue
                : props.dropdownProps.defaultValue
            }
            minValue={props.dropdownProps.minValue}
            maxValue={props.dropdownProps.maxValue}
            options={props.dropdownProps.options}
            hasSearch={props.dropdownProps.hasSearch}
            hasError={props.dropdownProps.hasError}
            errorText={props.dropdownProps.errorText}
            onChange={props.dropdownProps.onChange}
            isNumber={props.dropdownProps.isNumber}
          />
        </div>
      )}
    </>
  );
};

FormDropdown.defaultProps = {
  width: "standard",
};

FormDropdown.propTypes = {
  /**
   * Select the width of the dropdown.
   */
  width: PropTypes.oneOf(["standard", "number"]),
  /**
   * Determines if the dropdown has a label
   */
  hasLabel: PropTypes.bool,
  /**
   * Dropdown props for a single dropdown
   */
  dropdownProps: PropTypes.shape({
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string, value: PropTypes.string })
    ),
    hasError: PropTypes.bool,
    errorText: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    hasSearch: PropTypes.bool,
    isNumber: PropTypes.bool,
  }),
  /**
   * Dropdown props for the second dropdown in case of doubleDropdown
   */
  dropdown2Props: PropTypes.shape({
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string, value: PropTypes.string })
    ),
    hasError: PropTypes.bool,
    errorText: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    hasSearch: PropTypes.bool,
  }),
  /**
   * Form label props
   */
  formLabelProps: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    infoText: PropTypes.string,
    helpText: PropTypes.string,
    requiredText: PropTypes.string,
    optionalText: PropTypes.string,
    describedBy: PropTypes.string,
  }),
  /**
   * Determines if the dropdown has a hint
   */
  hasHint: PropTypes.bool,
  /**
   * Hint expander props
   */
  hintProps: PropTypes.shape({
    textLink: PropTypes.string,
    description: PropTypes.string,
    withLink: PropTypes.bool,
    externalLinkText: PropTypes.string,
    optionalLinkText: PropTypes.string,
  }),
};
