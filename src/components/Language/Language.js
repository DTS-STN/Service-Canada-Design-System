import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";

export function Language(props) {
  const { id, onClick } = props;

  return (
    <>
      <h2 className="sr-only">Language Selection</h2>
      <Link
        className="language-toggle-text"
        href="./fr.html"
        id={id}
        text="Français"
        abbr="FR"
      />
    </>
  );
}

Language.propTypes = {
  /**
   * id
   */
  id: PropTypes.string,
};
