import PropTypes from "prop-types";
import React, { useState } from "react";
import { FormError } from "../FormError/FormError";
import { FormLabel } from "../FormLabel/FormLabel";

export function FormTextField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};

  const [inputValue, setInputValue] = useState(props.value || "");

  const width = {
    standard: "ds-w-full ds-max-w-[408px]",
    12: "ds-w-[166px]",
    11: "ds-w-[154px]",
    8: "ds-w-[120px]",
    7: "ds-w-[109px]",
    4: "ds-w-[74px]",
    3: "ds-w-[63px]",
    2: "ds-w-[51px]",
  };

  const classname = `${
    width[props.width] || props.width
  } ds-rounded ds-text-input ds-font-body ds-text-[20px] ds-leading-[33px] ds-text-mobileh5 ds-text-multi-neutrals-grey100 ds-min-h-44px ds-text-form-input-gray ds-outline ds-outline-2 ds-outline-multi-neutrals-grey85a ds-px-[14px] ${
    props.hasError && "ds-outline-specific-red-red50b"
  } ${props.exclude ? "exclude" : ""}`;

  const maxLengths = {
    12: 12,
    11: 11,
    8: 8,
    7: 7,
    4: 4,
    3: 3,
    2: 2,
  };

  const maxLength = maxLengths[props.width] || undefined;

  // Check if the width prop is one of the numbers requiring the "number" input type
  const isNumberType = ["12", "11", "8", "7", "4", "3", "2"].includes(
    props.width
  );

  const handleInputChange = (e) => {
    let value = e.target.value;
    // Limiting the number of digits when the input type is number)
    if (isNumberType && value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setInputValue(value);
    props.onChange(value);
  };

  return (
    <div className={`ds-block ds-leading-tight ds-mb-10px`}>
      {props.label && (
        <FormLabel
          id={props.id}
          label={props.label}
          required={props.required}
          requiredText={props.requiredText}
          optionalText={props.optionalText}
          infoText={props.infoText}
          describedBy={props.describedB1y}
          helpText={props.helpText}
          hasHint={props.hasHint}
          hintProps={props.hintProps}
        />
      )}
      <input
        className={classname}
        maxLength={maxLength}
        id={props.id}
        aria-describedby={props.describedBy}
        name={props.name}
        placeholder={props.placeholder}
        type={isNumberType ? "number" : props.type}
        min={props.min}
        max={props.max}
        step={props.step}
        required={props.required}
        value={inputValue}
        onChange={handleInputChange}
        {...ifControlledProps}
        data-testid={props.dataTestId}
      />
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </div>
  );
}

FormTextField.defaultProps = {
  value: "",
  type: "text",
  width: "standard",
};

FormTextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  requiredText: PropTypes.string,
  helpText: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  uncontrolled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  dataTestId: PropTypes.string,
  exclude: PropTypes.bool,
  describedBy: PropTypes.string,
  hasHint: PropTypes.bool,
  hintProps: PropTypes.shape({
    textLink: PropTypes.string,
    description: PropTypes.string,
    withLink: PropTypes.bool,
    externalLinkText: PropTypes.string,
    optionalLinkText: PropTypes.string,
  }),
  width: PropTypes.oneOf(["standard", "12", "11", "8", "7", "4", "3", "2"]),
};
