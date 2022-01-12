import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
// Text Link component not implimented yet
import EN from "../../translations/en";
import FR from "../../translations/fr";

export function ErrorPage(props) {
  const { isAuth, errType, lang } = props;
  var biClassName = "";
  var language = lang === "en" ? [EN] : lang === "fr" ? [FR] : [EN, FR];
  if (lang === "bi") {
    biClassName = "grid gap-10 grid-cols-1 sm:grid-cols-2 sm:gap-6";
  }
  var errorTextEN =
    errType === "404"
      ? EN.errorPageErrorText404
      : errType === "500"
      ? EN.errorPageErrorText500
      : EN.errorPageErrorText503;
  var errorTextFR =
    errType === "404"
      ? FR.errorPageErrorText404
      : errType === "500"
      ? FR.errorPageErrorText500
      : FR.errorPageErrorText503;
  return (
    <div className={biClassName}>
      {language.map((val, index) => {
        return (
          <div>
            <Heading id={index} title={val.errorPageHeadingTitle} />
            <div>
              {val === EN ? (
                <p className="body mt-2">{errorTextEN}</p>
              ) : (
                <p className="body mt-2">{errorTextFR}</p>
              )}
              <br />
              <p className="error-next-text">{val.errorPageNextText}</p>
              <h2 className="hide-element">Whats Next Links</h2>
              <ul>
                {errType === "500" ? (
                  <li key={index} className="body pl-3">
                    {val.error500TextLink}
                  </li>
                ) : errType === "503" ? (
                  <li key={index} className="body pl-3">
                    {val.error503TextLink}
                  </li>
                ) : null}
                {!isAuth ? (
                  <li key={index} className="body pl-3">
                    {val.errorTextLinkCommon}
                    {/* replace with text link component in future */}
                    <a href="/">{val.errorTextLinkCommon_2}</a>
                  </li>
                ) : (
                  <li key={index} className="body pl-3">
                    {val.errorAuthTextLinkCommon}
                    {/* replace with text link component in future */}
                    <a href="/">{val.errorAuthTextLinkCommon_2}</a>
                  </li>
                )}
              </ul>
              <br />
              <br />
              <p className="error-type-text">
                {val.errorPageType} {errType}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ErrorPage.propTypes = {
  /**
   * Select the language for the page. If bi is selected
   * bilingual version of error pages will be used
   */
  lang: PropTypes.oneOf(["en", "fr", "bi"]).isRequired,

  /**
   * Select the type of error page you want to use
   */
  errType: PropTypes.oneOf(["404", "500", "503"]).isRequired,

  /**
   * To indicate if the user is authenticated or not
   * Will display authenticated version of plays if user is authenticated
   */
  isAuth: PropTypes.bool.isRequired,
};
