import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
import { Link } from "../Link/Link";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";

export function ErrorPage(props) {
  const {
    isAuth,
    errType,
    lang,
    homePageLink,
    accountPageLink,
    homePageId,
    accountPageId,
    pageHeadingId,
  } = props;
  let biClassName = "";
  let language = lang === "en" ? [EN] : lang === "fr" ? [FR] : [EN, FR];
  if (lang === "bi") {
    biClassName =
      "ds-grid ds-gap-10 ds-grid-cols-1 sm:ds-grid-cols-2 sm:ds-gap-6";
  }
  let errorHeadingEN =
    errType === "404"
      ? EN.errorPageHeadingTitle404
      : errType === "500"
      ? EN.errorPageHeadingTitle500
      : EN.errorPageHeadingTitle503;
  let errorHeadingFR =
    errType === "404"
      ? FR.errorPageHeadingTitle404
      : errType === "500"
      ? FR.errorPageHeadingTitle500
      : FR.errorPageHeadingTitle503;

  let errorTextEN =
    errType === "404"
      ? EN.errorPageErrorText404
      : errType === "500"
      ? EN.errorPageErrorText500
      : EN.errorPageErrorText503;
  let errorTextFR =
    errType === "404"
      ? FR.errorPageErrorText404
      : errType === "500"
      ? FR.errorPageErrorText500
      : FR.errorPageErrorText503;
  return (
    <div className={`${biClassName} ds-container`}>
      {language.map((val, index) => {
        return (
          <div key={(val + index).toString()}>
            <Heading
              id={pageHeadingId}
              title={val === EN ? errorHeadingEN : errorHeadingFR}
            />
            <p className="ds-body ds-mt-2">
              {val === EN ? errorTextEN : errorTextFR}
            </p>
            <br />
            <p className="ds-error-next-text">{val.errorPageNextText}</p>
            <h2 className="ds-sr-only">Whats Next Links</h2>
            <ul id="errorTypes">
              <li
                key={"errorLink1" + index.toString()}
                className={errType === "404" ? "ds-hidden" : "ds-body ds-pl-3"}
              >
                {errType === "500"
                  ? val.error500TextLink
                  : errType === "503"
                  ? val.error503TextLink
                  : null}
              </li>
              <li
                key={"errorLink2" + index.toString()}
                className="ds-body ds-pl-3"
              >
                {!isAuth
                  ? val.errorTextLinkCommon
                  : val.errorAuthTextLinkCommon}
                <Link
                  id={
                    !isAuth
                      ? errType + lang + homePageId
                      : errType + lang + accountPageId
                  }
                  href={!isAuth ? homePageLink : accountPageLink}
                  text={
                    !isAuth
                      ? val.errorTextLinkCommon_2
                      : val.errorAuthTextLinkCommon_2
                  }
                />
              </li>
            </ul>
            <br />
            <br />
            <p className="ds-error-type-text">
              {val.errorPageType} {errType}
            </p>
          </div>
        );
      })}
    </div>
  );
}

ErrorPage.defaultProps = {
  accountPageLink: "/",
  homePageLink: "/",
  accountPageId: "accountPage",
  homePageId: "homePage",
  pageHeadingId: "pageHead",
};

ErrorPage.propTypes = {
  /**
   * Select the language for the page. If bi is selected
   * bilingual version of error pages will be used
   */
  lang: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["en", "fr", "bi"]),
  ]).isRequired,

  /**
   * Select the type of error page you want to use
   */
  errType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["404", "500", "503"]),
  ]).isRequired,

  /**
   * To indicate if the user is authenticated or not
   * Will display authenticated version of pages if user is authenticated
   */
  isAuth: PropTypes.bool.isRequired,

  /**
   * Add your path to the Service Canada Home Page (not authenticated user)
   */
  homePageLink: PropTypes.string,

  /**
   * Add your path Logged in users account dashboard (authenticated user)
   */
  accountPageLink: PropTypes.string,

  /**
   * id for home page. Error Type and Language initial
   * will be added to make id unique. (Not Authenticated)
   */
  homePageId: PropTypes.string,

  /**
   * id for account dashboard text link. Error Type and
   * Language initial will be added to make id unique.
   * (Authenticated)
   *
   */
  accountPageId: PropTypes.string,

  /**
   * id for heading. Error Type and Language initial
   * will be added to make id unique.
   */
  pageHeadingId: PropTypes.string,
};
