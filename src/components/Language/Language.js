import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";

export function Language(props) {
  const { id, lang, path } = props;

  return (
    <>
      <h2 className="ds-sr-only">Language Selection</h2>
      <Link
        className="ds-language-toggle-text"
        href={path}
        id={id}
        text={lang === "en" ? "Français" : "English"}
        abbr={lang === "en" ? "FR" : "EN"}
        locale={props.locale}
        component={props.customLink}
        lang={lang === "en" ? "fr" : "en"}
        dataGcAnalyticsCustomClick={`${
          props.dataGcAnalyticsCustomClickInstitutionVariable
        }:${lang === "en" ? "Français" : "English"}`}
      />
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
