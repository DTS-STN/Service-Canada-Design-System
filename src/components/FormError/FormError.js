import PropTypes from "prop-types";

/**
 * FormError is used to display the inline error messages of form inputs
 */
export function FormError(props) {
  return (
    <div
      id={props.id}
      className="alertWrapper mt-1.5 text-specific-red-red50b leading-26px font-medium flex"
    >
      <div className="block">
        <span className="iconContainer mr-8 " aria-hidden="true"></span>
      </div>
      <div className="errorText">{props.errorMessage}</div>
    </div>
  );
}

FormError.defaultProps = {
  errorMessage: "",
};

FormError.propTypes = {
  /**
   * Unique id assigned for the component
   */
  id: PropTypes.string,

  /**
   * An error message to be displayed below the input.
   */
  errorMessage: PropTypes.string,

  /**
   * Unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * cypress tests selector
   */
  dataCy: PropTypes.string,

  /**
   * aria-describedBy label id
   */
  describedBy: PropTypes.string,
};
