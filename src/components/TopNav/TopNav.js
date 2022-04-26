import PropTypes from "prop-types";
import React from "react";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
/**
 * TopNav component
 */
export function TopNav(props) {
  const {
    lang,
    skipToMainPath,
    skipToAboutPath,
    switchToBasicPath,
    displayAlternateLink,
  } = props;

  return (
    <>
      {/* Top navigation accessible only when using a keyboard to navigate the page */}
      <nav role="navigation" aria-label="topNavigation">
        <ul id="TopNavLinks" className="ds-z-10">
          <li className="ds-left-0 ds-top-2 ds-absolute ds-text-center ds-box-border ds-w-full -ds-z-50 focus-within:ds-z-50 ">
            <a
              className="focus:ds-bg-multi-blue-blue70 ds-font-bold ds-p-1 ds-text-white"
              href={skipToMainPath}
            >
              {lang === "fr" ? FR.skipToMain : EN.skipToMain}
            </a>
          </li>
          <li className="ds-left-0 ds-top-2 ds-absolute ds-text-center ds-box-border ds-w-full -ds-z-50 focus-within:ds-z-50 ">
            <a
              className="focus:ds-bg-multi-blue-blue70 ds-font-bold ds-p-1 ds-text-white"
              href={skipToAboutPath}
            >
              {lang === "fr" ? FR.skipToAbout : EN.skipToAbout}
            </a>
          </li>

          {displayAlternateLink ? (
            <li className="ds-left-0 ds-top-2 ds-absolute ds-text-center ds-box-border ds-w-full -ds-z-50 focus-within:ds-z-50 ">
              <a
                className="focus:ds-bg-multi-blue-blue70 ds-font-bold ds-p-1 ds-text-white"
                href={switchToBasicPath}
                rel="alternate"
              >
                {lang === "fr" ? FR.switchToBasic : EN.switchToBasic}
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
}

TopNav.defaultProps = {
  lang: "en",
  displayAlternateLink: false,
  skipToMainPath: "/",
  skipToAboutPath: "/",
  switchToBasicPath: "/",
};

TopNav.propTypes = {
  /**
   * Language code.
   */
  lang: PropTypes.string.isRequired,

  /**
   * Bool to display or not the alternate page link
   */
  displayAlternateLink: PropTypes.bool.isRequired,

  /**
   * href anchor, which navigates to the H1 of the page
   */
  skipToMainPath: PropTypes.string.isRequired,

  /**
   * href anchor, which navigates to the Footer Id
   */
  skipToAboutPath: PropTypes.string.isRequired,

  /**
   * href path, which redirects to the alternate HTML only page
   */
  switchToBasicPath: PropTypes.string.isRequired,
};
