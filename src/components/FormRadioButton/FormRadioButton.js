import PropTypes from "prop-types";
import { FormError } from "../FormError/FormError";
import { FormLabel } from "../FormLabel/FormLabel";

export function FormRadioButton(props) {
  const validationClass = props.hasError
    ? "ds-border-specific-red-red50b"
    : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input";
  return (
    <>
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
        />
      )}
      {props.options.map(({ id, label, checked, value }, index) => (
        <label
          for={id}
          className={`ds-radio ds-relative ds-flex ds-items-center ds-cursor-pointer ds-font-body ds-text-xl ds-leading-26px ds-text-multi-neutrals-grey100 ds-mb-8px`}
        >
          <input
            type="radio"
            name={props.name}
            id={id}
            className="ds-hidden"
            value={value}
            tabIndex={0}
            onChange={(e) => {
              props.onChange(value, e);
            }}
            data-testid={`${id}-${props.dataTestId}`}
            data-cy={props.dataCy}
            checked={checked}
            defaultChecked={false}
          />
          <span
            class={`ds-relative ds-label ds-block ds-mr-3.5 ds-w-43px ds-h-43px ds-border-1.5 ds-border-solid ${validationClass} ds-rounded-full ds-float-left after:ds-absolute ds-outline-0`}
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          ></span>
          {label}
        </label>
      ))}
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </>
  );
}

FormRadioButton.defaultProps = {
  checked: false,
};

FormRadioButton.propTypes = {
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
       * the label for the radio button
       */
      label: PropTypes.string.isRequired,
    })
  ),

  /**
   * whether the radio button is checked or not
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

  /**
   * cypress test selector
   */
  dataCy: PropTypes.string,
};
