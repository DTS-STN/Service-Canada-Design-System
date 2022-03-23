import PropTypes from "prop-types";
import React, { useState } from "react";
import { Image } from "../Image/Image";
import errorImage from "../../assets/error.svg";
/**
 * FormError is used to display the inline error messages of form inputs
 */
export function FormError(props) {
  return (
    <div
      id={props.id}
      className="ds-alertWrapper ds-mt-1.5 ds-text-specific-red-red50b ds-leading-26px ds-font-medium ds-font-body ds-flex"
    >
      <div className="ds-block">
        <span className="ds-iconContainer ds-mr-8" aria-hidden="true">
          <Image src={errorImage} alt={props.errorMessage} />
        </span>
      </div>
      <div className="ds-errorText ds-text-xl">{props.errorMessage}</div>
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
