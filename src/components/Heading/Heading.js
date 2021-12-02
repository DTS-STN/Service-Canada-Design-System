import PropTypes from "prop-types";
import React from "react";

export function Header(props) {
  const { headingLevel, title, fromLink, fromText } = props;
  const Title = headingLevel;

  return (
    <>
      <Title>{title}</Title>
      {fromLink && fromLink && (
        <p className="gc-byline">
          <strong>From: </strong>
          <a href={fromLink}>{fromText}</a>
        </p>
      )}
    </>
  );
}

Header.propTypes = {
  /**
   * The value could be anyting between h1 to h6
   */
  headingLevel: PropTypes.string.isRequired,
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
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCy: PropTypes.string,
  /**
   * Test id for e2e test
   */
  dataCyHeading: PropTypes.string,
};
