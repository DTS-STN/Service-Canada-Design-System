import PropTypes from "prop-types";
import React from "react";

export function Heading(props) {
  const { title, fromLink, fromText, id, className } = props;

  return (
    <>
      <h1 className={`ds-heading1 ${className}`} id={id}>
        {title}
      </h1>
      {fromLink && fromText && (
        <p className="">
          <strong>From: </strong>
          <a
            href={fromLink}
            className="ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-font-bold ds-text-mobileh5 ds-leading-33px hover:ds-text-multi-blue-blue50b"
          >
            {fromText}
          </a>
        </p>
      )}
    </>
  );
}

Heading.propTypes = {
  /**
   * The text / title that will be displayed as heading
   */
  title: PropTypes.string.isRequired,
  /**
   * Link that should be dispayed under the main heading level
   */
  fromLink: PropTypes.string,
  /**
   * Text that will be displyed as text link
   */
  fromText: PropTypes.string,
  /**
   * css overrides for button
   */
  className: PropTypes.string,
  /**
   * To identify the heading element
   */
  id: PropTypes.string.isRequired,
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
};
