import PropTypes from "prop-types";
import React from "react";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormError } from "../FormError/FormError";
import { CheckBoxes } from "../CheckBoxes/CheckBoxes";

export function CheckBoxForm(props) {
  const { id, onSubmit, formErrorProps, formLabelProps, checkBoxList } = props;
  let size = checkBoxList.length;

  return (
    <form id={id} onSubmit={onSubmit}>
      <FormLabel
        label={formLabelProps.label}
        required={formLabelProps.required}
        infoText={formLabelProps.infoText}
        helpText={formLabelProps.helpText}
      />
      {checkBoxList.map((value, index) => {
        let style = index === size - 1 ? "ds-pb-0" : "md:ds-pb-8px ds-pb-24px";
        return (
          <div
            className={
              index === 0 ? " md:ds-pt-2px md:ds-pb-8px ds-pb-24px" : style
            }
          >
            <CheckBoxes
              id={value.id}
              name={value.name}
              value={value.value}
              label={value.label}
              hasError={formErrorProps.hasError}
            />
          </div>
        );
      })}
      {formErrorProps.hasError ? (
        <FormError errorMessage={formErrorProps.errorMessage} />
      ) : null}
    </form>
  );
}

CheckBoxForm.defaultProps = {
  onSubmit: () => {},
};

CheckBoxForm.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

  /**
   * function to control what happens when form is submitted
   */
  onSubmit: PropTypes.func,

  /**
   * Each object represents it's own checkbox field.
   * Min of 1 checkbox field is required
   * Max of 7 checkbox fields can be created
   */
  checkBoxList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
      hasError: PropTypes.bool,
    })
  ).isRequired,

  /**
   * Form Error Props
   */
  formErrorProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string,
    })
  ),

  formLabelProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      required: PropTypes.bool,
      infoText: PropTypes.string,
    })
  ),
};
