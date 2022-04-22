import PropTypes from "prop-types";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
/**
 * Menu component
 */
export function Menu(props) {
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
      <nav>
        <ul id="applicationTitle" className="z-10">
          <li className="left-0 top-2 absolute text-center box-border w-full -z-50 focus-within:z-50 ">
            <a
              className="ds-bg-multi-blue-blue70 font-bold p-1 text-white"
              href={skipToMainPath}
            >
              {lang === "fr" ? FR.skipToMain : EN.skipToMain}
            </a>
          </li>
          <li className="left-0 top-2 absolute text-center box-border w-full -z-50 focus-within:z-50 ">
            <a
              className="ds-bg-multi-blue-blue70 font-bold p-1 text-white"
              href={skipToAboutPath}
            >
              {lang === "fr" ? FR.skipToAbout : EN.skipToAbout}
            </a>
          </li>

          {displayAlternateLink ? (
            <li className="left-0 top-2 absolute text-center box-border w-full -z-50 focus-within:z-50 ">
              <a
                className="ds-bg-multi-blue-blue70 font-bold p-1 text-white"
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

Menu.defaultProps = {
  lang: "en",
  displayAlternateLink: false,
  skipToMainPath: "/",
  skipToAboutPath: "/",
  switchToBasicPath: "/",
};

Menu.propTypes = {
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
