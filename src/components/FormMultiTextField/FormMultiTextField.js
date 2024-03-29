import PropTypes from "prop-types";
import React from "react";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormError } from "../FormError/FormError";

/**
 * multi line text field
 */
export function FormMultiTextField(props) {
  let sizeOfField = "";
  const textareaRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);
  const MIN_TEXTAREA_HEIGHT = 76;
  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight + 5,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);
  switch (props.size) {
    case "large":
      sizeOfField = "ds-w-full ds-max-w-[556px]";
      break;
    case "standard":
      sizeOfField = "ds-w-full ds-max-w-[408px]";
      break;
    default:
      sizeOfField = "ds-w-full ds-max-w-[408px]";
  }

  const validationClass = props.hasError
    ? "ds-border-specific-red-red50b"
    : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f  focus-visible:ds-border-multi-blue-blue60f";
  return (
    <div className={`block leading-tight mb-12`} id={props.id}>
      {props.label && (
        <FormLabel
          id={`${props.id}-textarea`}
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
      <textarea
        className={`ds-min-h-76px ds-resize-none ${sizeOfField} ${props.className} ds-text-input ds-leading-33px ds-rounded ds-outline-0  ds-text-mobileh5 ds-text-multi-neutrals-grey100  ds-text-form-input-gray ds-border ds-py-5px ds-px-14px ${validationClass}`}
        id={`${props.id}-textarea`}
        name={props.name}
        placeholder={props.placeholder}
        onChange={onChange}
        spellCheck={props.spellCheck}
        required={props.required}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
        aria-describedby={props.describedby}
        ref={textareaRef}
      >
        {props.value}
      </textarea>
      {props.hasError && <FormError errorMessage={props.errorText} />}
    </div>
  );
}

FormMultiTextField.defaultProps = {
  spellCheck: true,
};

FormMultiTextField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,

  /**
   * the id of the multi text field
   */
  id: PropTypes.string.isRequired,

  /**
   * the name of the multi text field
   */
  name: PropTypes.string.isRequired,
  /**
   * the label for the multi text field
   */
  label: PropTypes.string.isRequired,

  /**
   * the value for the multi text field
   */
  value: PropTypes.string,

  /**
   * whether or not spellchecking is enabled for this field, by default it is
   */
  spellCheck: PropTypes.bool,

  /**
   * whether to soft wrap or hard wrap the field
   */
  wrap: PropTypes.oneOf(["soft", "hard"]),

  /**
   * the placeholder for the multi text field
   */
  placeholder: PropTypes.string,

  /**
   * call back for when the value of the multi text field changes
   */
  onChange: PropTypes.func,

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * aria-describedby label id
   */
  describedby: PropTypes.string,

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
  }),

  /**
   * User can input one of the follow size option to apply
   * to the input field, the default size is standard.
   */
  size: PropTypes.oneOf(["standard", "large"]),
};
