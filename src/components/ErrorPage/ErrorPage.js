import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
// Text Link component not implimented yet
import EN from "../../translations/en";
import FR from "../../translations/fr";

export function ErrorPage(props) {
  var language =
    props.lang === "en" ? EN : props.lang === "fr" ? FR : { EN, FR };
  return (
    <>
      {props.lang === "en" || "fr" ? (
        createPage(props, language)
      ) : (
        <>
          {createPage(props, language.EN)}
          {createPage(props, language.FR)}
        </>
      )}
    </>
  );
}

function createPage(props, language) {
  console.log(language);
  const { isAuth, errType } = props;
  var errorText =
    errType === "404"
      ? language.errorPageErrorText404
      : errType === "500"
      ? language.errorPageErrorText500
      : language.errorPageErrorText503;
  return (
    <>
      <Heading id="error_heading" title={language.errorPageHeadingTitle} />
      <div>
        <p className="body mt-2">{errorText}</p>
        <br />
        <p className="error-next-text">{language.errorPageNextText}</p>
        <h2 className="hide-element">Whats Next Links</h2>
        <ul>
          {errType === "500" ? (
            <li className="body pl-3">{language.error500TextLink}</li>
          ) : errType === "503" ? (
            <li className="body pl-3">{language.error503TextLink}</li>
          ) : null}
          {!isAuth ? (
            <li className="body pl-3">
              {language.errorTextLinkCommon}
              {/* replace with text link component in future */}
              <a href="/">{language.errorTextLinkCommon_2}</a>
            </li>
          ) : (
            <li className="body pl-3">
              {language.errorAuthTextLinkCommon}
              {/* replace with text link component in future */}
              <a href="/">{language.errorAuthTextLinkCommon_2}</a>
            </li>
          )}
        </ul>
        <br />
        <br />
        <p className="error-type-text">
          {language.errorPageType} {errType}
        </p>
      </div>
    </>
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
