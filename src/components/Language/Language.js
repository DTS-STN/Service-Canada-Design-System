import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";

export function Language(props) {
  const { id, lang, path } = props;

  return (
    <>
      <h2 className="ds-sr-only">Language Selection</h2>
      {lang === "en" ? (
        <Link
          className="ds-language-toggle-text"
          href={path}
          id={id}
          text="Français"
          abbr="FR"
        />
      ) : (
        <Link
          className="ds-language-toggle-text"
          href={path}
          id={id}
          text="English"
          abbr="EN"
        />
      )}
    </>
  );
}

Language.defaultProp = {
  path: "/",
};

Language.propTypes = {
  /**
   * id
   */
  id: PropTypes.string,

  /**
   * language toggle
   */
  lang: PropTypes.string,

  /**
   * path
   */
  path: PropTypes.string,
};
