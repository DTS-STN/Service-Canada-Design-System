import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
/**
 * Menu component
 */
export function Menu(props) {
  const {
    onSignOut,
    isAuthenticated,
    lang,
    dashboardPath,
    signOutPath,
    craPath,
    securityPath,
    profilePath,
  } = props;
  const ref = useRef();
  const [menuDisplayed, setMenuDisplayed] = React.useState(false);
  const [buttonNavEnabled, setButtonNavEnabled] = React.useState(false);

  let [headerDropdownClass, setHeaderDropdownClass] =
    React.useState("ds-hidden");
  let [headerMobileDropdownClass, setHeaderMobileDropdownClass] =
    React.useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        headerDropdownClass === "ds-block" &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setHeaderDropdownClass("ds-hidden");
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [headerDropdownClass]);

  //Function for changing menu state
  function onMenuClick(e) {
    e.preventDefault();
    const menuButtonParent = document.getElementById("menuButtonParent");
    const menuDropdownSub = document.getElementById("menuDropdownSub");
    setHeaderMobileDropdownClass(!headerMobileDropdownClass);
    setButtonNavEnabled(!buttonNavEnabled);
    menuDropdownSub.classList.toggle("ds-active");
    menuButtonParent.classList.toggle("ds-active");
    setMenuDisplayed(!menuDisplayed);
  }

  return (
    <div className="ds-headerNav ds-bg-multi-blue-blue70" ref={ref}>
      <nav className="sm:ds-container ds-flex ds-items-center ds-justify-between ds-flex-wrap ds-w-full ds-relative">
        <div className="ds-flex ds-items-center ds-flex-shrink-0 ds-text-white">
          <h3 id="mainSiteNav" className="sm:ds-p-0 ds-container ds-menuHeader">
            {lang === "fr" ? FR.menuHeaderTitle : EN.menuHeaderTitle}
          </h3>
        </div>
        <div
          id="menuButtonParent"
          className="ds-menuButtonParent ds-block md:ds-hidden md:ds-pr-16px ds-pr-10px focus:ds-bg-multi-blue-blue2 ds-text-white ds-border-l-2 ds-border-white"
        >
          <button
            id="menuButton"
            onClick={onMenuClick}
            className="ds-text-h4 ds-text-canada-footer-font focus:ds-outline-none ds-py-4"
            aria-haspopup="true"
            aria-expanded={menuDisplayed}
            aria-controls="menuDropdown"
            data-testid="menuButton"
          >
            <span className="ds-inline-block ds-align-middle ds-pl-3 ds-font-body ds-font-bold ds-text-p ds-leading-none">
              {lang === "fr" ? FR.menuButtonTitle : EN.menuButtonTitle}
            </span>
            <svg
              className="ds-ml-1 ds-w-4 ds-h-4 ds-inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!headerMobileDropdownClass ? (
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="ds-w-full ds-block ds-flex-grow md:ds-flex md:ds-items-center md:ds-w-auto ds-bg-multi-blue-blue2 md:ds-bg-multi-blue-blue70">
          <div className="md:ds-flex-grow md:ds-text-center md:ds-flex"></div>
          <div>
            <ul
              id="menuDropdownSub"
              className="ds-menuDropdown ds-menuRight md:ds-text-white ds-text-gray-700 sm:ds-w-full sm:ds-left-0"
            >
              {isAuthenticated ? (
                <li
                  key={"authList"}
                  id="buttonNav"
                  className="md:ds-pb-4 ds-pt-4 md:ds-pl-0 md:ds-pr-0 ds-buttonNav"
                >
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={() => {
                      const buttonNavId = document.getElementById("buttonNav");
                      buttonNavId.classList.toggle("ds-active");
                      return headerDropdownClass === "ds-hidden"
                        ? setHeaderDropdownClass("ds-block")
                        : setHeaderDropdownClass("ds-hidden");
                    }}
                    className="ds-flex ds-whitespace-nowrap ds-font-bold ds-font-body ds-justify-between ds-items-center md:ds-py-2px ds-py-18px ds-pl-4 sm:ds-pt-0 md:ds-pr-16px ds-pr-10px md:ds-pl-3 ds-w-full"
                  >
                    {lang === "fr" ? FR.myAccountTitle : EN.myAccountTitle}
                    <svg
                      className="ds-ml-1 ds-w-4 ds-h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {headerDropdownClass === "ds-hidden" ? (
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      ) : (
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      )}
                    </svg>
                  </button>

                  <div
                    className={`ds-dropdown-menu ${headerDropdownClass} md:ds-absolute ds-z-10 ds-top-60px ds-text-base ds-list-none ds-bg-blue2 ds-rounded ds-divide-y ds-divide-gray-100 dark:ds-bg-gray-700 dark:ds-divide-gray-600`}
                  >
                    <ul
                      id="dropdownNavbar"
                      className="ds-py-0"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li key={"dashKey"}>
                        <a
                          href={dashboardPath}
                          className="ds-block ds-whitespace-nowrap ds-py-18px ds-pl-38px md:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body "
                        >
                          {lang === "fr" ? FR.myDashboard : EN.myDashboard}
                        </a>
                      </li>
                      <li key={"securityKey"}>
                        <a
                          href={securityPath}
                          className="ds-block ds-whitespace-nowrap ds-py-18px ds-pl-38px md:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body"
                        >
                          {lang === "fr" ? FR.mySecurity : EN.mySecurity}
                        </a>
                      </li>
                      <li key={"profileKey"}>
                        <a
                          href={profilePath}
                          className="ds-block ds-whitespace-nowrap ds-py-18px ds-pl-38px md:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body"
                        >
                          {lang === "fr" ? FR.myProfile : EN.myProfile}
                        </a>
                      </li>
                      <li key={"craKey"}>
                        <a
                          href={craPath}
                          className="ds-block ds-whitespace-nowrap ds-py-18px ds-pl-38px md:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body"
                        >
                          {lang === "fr" ? FR.myCRA : EN.myCRA}
                        </a>
                      </li>
                      <li key={"outKey"}>
                        <a
                          href={signOutPath}
                          onClick={onSignOut}
                          className="ds-block ds-whitespace-nowrap ds-py-18px  ds-pl-38px md:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body"
                        >
                          {lang === "fr" ? FR.mySignOut : EN.mySignOut}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li
                  key={"titleKey"}
                  className={`ds-py-4 ds-px-6 ds-font-bold ds-font-body`}
                  aria-current="page"
                >
                  {lang === "fr" ? FR.myAccountTitle : EN.myAccountTitle}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="md:ds-pl-22px md:ds-block ds-hidden">
          <Button
            id="secondary"
            onClick={onSignOut}
            secondary
            styling="secondary"
            text={lang === "fr" ? FR.mySignOut : EN.mySignOut}
          />
        </div>
      </nav>
    </div>
  );
}

Menu.defaultProps = {
  lang: "en",
  onSignOut: () => {},
  signOutPath: "/",
  dashboardPath: "/",
  securityPath: "/",
  profilePath: "/",
  craPath: "/",
};

Menu.propTypes = {
  /**
   * Language code.
   */
  lang: PropTypes.string.isRequired,

  /**
   * bool to switch between authenticated and non authenticated menus
   */
  isAuthenticated: PropTypes.bool.isRequired,

  /**
   * On change function used for the signout button on the browser screen
   */
  onSignOut: PropTypes.func,

  /**
   * href path, which the signout button will redirect to
   */
  signOutPath: PropTypes.string,

  /**
   * href path, which redirects to the dashboard page
   */
  dashboardPath: PropTypes.string,

  /**
   * href path, which redirects to the security settings page
   */
  securityPath: PropTypes.string,

  /**
   * href path, which redirects to the profile page
   */
  profilePath: PropTypes.string,

  /**
   * href path, which redirects to the users CRA account page
   */
  craPath: PropTypes.string,
};
