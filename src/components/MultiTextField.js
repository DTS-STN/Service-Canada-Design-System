import PropTypes from "prop-types";
import ErrorLabel from "./ErrorLabel";

/**
 * Multi line text field with label that can be used in forms or stand-alone input.
 * The value of this component can optionally be controlled by react or by the underlying DOM
 */
export default function MultiTextField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};
  return (
    <div
      className={`block leading-tight${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <label
        className={`block leading-tight text-sm font-body mb-5px ${
          props.boldLabel ? "font-bold" : ""
        }`}
        htmlFor={props.id}
      >
        {props.required ? (
          <b className="text-error-border-red">*</b>
        ) : undefined}{" "}
        {props.label}{" "}
        {props.required ? (
          <b className="text-error-border-red">{`(${props.requiredText})`}</b>
        ) : (
          <p className="inline text-form-input-gray text-sm">{`(${props.optionalText})`}</p>
        )}
      </label>
      {props.error ? <ErrorLabel message={props.error} /> : undefined}
      <textarea
        className={`text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px ${
          props.error ? "border-error-border-red" : "border-black"
        }`}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        cols={props.cols}
        rows={props.rows}
        spellCheck={props.spellCheck}
        wrap={props.wrap}
        required={props.required}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
        {...ifControlledProps}
      >
        {props.value}
      </textarea>
    </div>
  );
}

MultiTextField.defaultProps = {
  spellCheck: true,
  wrap: "soft",
};

MultiTextField.propTypes = {
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
   * whether or not the component is controlled by react
   */
  uncontrolled: PropTypes.bool,
  /**
   * the value for the multi text field
   */
  value: PropTypes.string,

  /**
   * message to display if there is an error
   */
  error: PropTypes.string,

  /**
   * whether or not the field is required
   */
  required: PropTypes.bool,

  /**
   * the text to show after the label in parenthesis if the field is required
   */
  requiredText: PropTypes.string.isRequired,

  /**
   * the text to show after the label in parenthesis if the field is optional
   */
  optionalText: PropTypes.string.isRequired,

  /**
   * whether or not spellchecking is enabled for this field, by default it is
   */
  spellCheck: PropTypes.bool,

  /**
   * whether or not the label is bold
   */
  boldLabel: PropTypes.bool,
  /**
   * whether to soft wrap or hard wrap the field
   */
  wrap: PropTypes.oneOf(["soft", "hard"]),
  /**
   * the placeholder for the multi text field
   */
  placeholder: PropTypes.string,
  /**
   * how much lines should the multi text field show
   */
  rows: PropTypes.number,
  /**
   * how much columns should the multi text field show
   */
  cols: PropTypes.number,
  /**
   * the minimum length of characters for the multi text field
   */
  minLength: PropTypes.number,
  /**
   * the maximum length of characters for the multi text field
   */
  maxLength: PropTypes.number,
  /**
   * call back for when the value of the multi text field changes
   */
  onChange: PropTypes.func,
  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,
};
