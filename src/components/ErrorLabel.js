import PropTypes from "prop-types";

/**
 * Error label component that is used with form inputs to display error messages in form elements
 */
export default function ErrorLabel(props) {
  return (
    <div className="border-l-4 border-error-border-red px-3 py-1 bg-error-background-red font-body font-bold mb-5px">
      {props.message}
    </div>
  );
}

ErrorLabel.propTypes = {
  message: PropTypes.string.isRequired,
};
