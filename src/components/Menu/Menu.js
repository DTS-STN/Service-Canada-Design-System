import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";

/**
 * Menu component
 */
export function Menu(props) {
  const { onSignOut, isAuthenticated, menuList, lang } = props;
  const ref = useRef();
  const [menuDisplayed, setMenuDisplayed] = React.useState(false);

  let [headerDropdownClass, setHeaderDropdownClass] =
    React.useState("ds-hidden");

  // too flip icon when menu is opened
  let [headerMobileDropdownClass, setHeaderMobileDropdownClass] =
    React.useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        headerDropdownClass === "ds-block" &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        if (headerMobileDropdownClass === true) {
          const menuButtonParent = document.getElementById("menuButtonParent");
          menuButtonParent.classList.toggle("ds-active");
          const menuDropdownSub = document.getElementById("menuDropdownSub");
          menuDropdownSub.classList.toggle("ds-active");
          setHeaderMobileDropdownClass(!headerMobileDropdownClass);
          const buttonNavDown = document.getElementById("buttonNav");
          buttonNavDown.classList.toggle("ds-active");
          setHeaderDropdownClass("ds-hidden");
        }
        const buttonNavDown = document.getElementById("buttonNav");
        buttonNavDown.classList.toggle("ds-active");
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
    const menuButton = document.getElementById("menuButton");
    setMenuDisplayed(!menuDisplayed);
    setHeaderMobileDropdownClass(!headerMobileDropdownClass);
    menuDropdownSub.classList.toggle("ds-active");
    menuButtonParent.classList.toggle("ds-active");
    menuButton.classList.toggle("ds-active");
    headerDropdownClass === "ds-hidden"
      ? setHeaderDropdownClass("ds-block")
      : setHeaderDropdownClass("ds-hidden");
  }

  return (
    <div className="ds-w-full ds-headerNav ds-bg-multi-blue-blue70" ref={ref}>
      <nav className="sm:ds-container ds-flex ds-items-center ds-justify-between sm:ds-flex-nowrap ds-flex-wrap ds-relative">
        <div className="menuMobile sm:ds-h-full ds-h-76px ds-flex ds-items-center">
          <p
            id="mainSiteNav"
            className="ds-text-white ds-header-font-custom sm:ds-p-0 ds-container ds-menuHeader"
          >
            {lang === "fr" ? FR.menuHeaderTitle : EN.menuHeaderTitle}
          </p>
        </div>
        <div
          id="menuButtonParent"
          className="ds-inline ds-menuButtonParent sm:ds-hidden sm:ds-pr-16px ds-pr-10px focus:ds-bg-multi-blue-blue2 ds-text-white ds-border-l-2 ds-border-white"
        >
          <button
            id="menuButton"
            onClick={onMenuClick}
            className="focus:ds-outline-none ds-py-24px"
            aria-haspopup="true"
            aria-expanded={menuDisplayed}
            aria-controls="menuDropdown"
            data-testid="menuButton"
          >
            <svg
              className="ds-mr-4"
              width="35"
              height="35"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 0.499756C7.84 0.499756 0 8.33976 0 17.9998C0 27.6598 7.84 35.4998 17.5 35.4998C27.16 35.4998 35 27.6598 35 17.9998C35 8.33976 27.16 0.499756 17.5 0.499756ZM17.5 7.49976C20.8775 7.49976 23.625 10.2473 23.625 13.6248C23.625 17.0023 20.8775 19.7498 17.5 19.7498C14.1225 19.7498 11.375 17.0023 11.375 13.6248C11.375 10.2473 14.1225 7.49976 17.5 7.49976ZM17.5 31.9998C13.9475 31.9998 9.7475 30.5648 6.755 26.9598C9.7125 24.6498 13.44 23.2498 17.5 23.2498C21.56 23.2498 25.2875 24.6498 28.245 26.9598C25.2525 30.5648 21.0525 31.9998 17.5 31.9998Z"
                fill="#26374A"
              />
            </svg>
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
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="sm:ds-w-260px ds-w-full ds-block ds-flex-grow sm:ds-flex sm:ds-items-center sm:ds-w-auto ds-bg-multi-blue-blue2 sm:ds-bg-multi-blue-blue70">
          <div className="sm:ds-flex-grow sm:ds-text-center sm:ds-flex"></div>
          <div>
            <ul
              id="menuDropdownSub"
              className={`${
                lang === "en" ? "sm:ds-mr-71px" : "sm:ds-mr-17px"
              } ds-menuDropdown ds-menuRight sm:ds-text-white ds-text-gray-700`}
            >
              {isAuthenticated ? (
                <li
                  key={"authList"}
                  id="buttonNav"
                  className={`sm:ds-pb-14px ds-pt-4 sm:ds-pl-0 sm:ds-pr-0 ds-buttonNav`}
                >
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={() => {
                      const buttonNavId = document.getElementById("buttonNav");
                      if (headerMobileDropdownClass === true) {
                        const menuButtonParent =
                          document.getElementById("menuButtonParent");
                        menuButtonParent.classList.toggle("ds-active");
                        const menuDropdownSub =
                          document.getElementById("menuDropdownSub");
                        menuDropdownSub.classList.toggle("ds-active");
                        setHeaderMobileDropdownClass(
                          !headerMobileDropdownClass
                        );
                        const buttonNavDown =
                          document.getElementById("buttonNav");
                        buttonNavDown.classList.toggle("ds-active");
                        setHeaderDropdownClass("ds-hidden");
                      }
                      buttonNavId.classList.toggle("ds-active");
                      return headerDropdownClass === "ds-hidden"
                        ? setHeaderDropdownClass("ds-block")
                        : setHeaderDropdownClass("ds-hidden");
                    }}
                    className="ds-hidden sm:ds-flex ds-whitespace-nowrap ds-font-bold ds-font-body ds-justify-between ds-items-center sm:ds-py-2px ds-py-18px ds-pl-4 sm:ds-pt-0 sm:ds-pr-16px ds-pr-10px sm:ds-pl-18px ds-w-full"
                  >
                    <svg
                      className="ds-mr-4"
                      width="35"
                      height="35"
                      viewBox="0 0 35 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 0.499756C7.84 0.499756 0 8.33976 0 17.9998C0 27.6598 7.84 35.4998 17.5 35.4998C27.16 35.4998 35 27.6598 35 17.9998C35 8.33976 27.16 0.499756 17.5 0.499756ZM17.5 7.49976C20.8775 7.49976 23.625 10.2473 23.625 13.6248C23.625 17.0023 20.8775 19.7498 17.5 19.7498C14.1225 19.7498 11.375 17.0023 11.375 13.6248C11.375 10.2473 14.1225 7.49976 17.5 7.49976ZM17.5 31.9998C13.9475 31.9998 9.7475 30.5648 6.755 26.9598C9.7125 24.6498 13.44 23.2498 17.5 23.2498C21.56 23.2498 25.2875 24.6498 28.245 26.9598C25.2525 30.5648 21.0525 31.9998 17.5 31.9998Z"
                        fill="#26374A"
                      />
                    </svg>
                    {lang === "fr" ? FR.menuButtonTitle : EN.menuButtonTitle}
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
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                  </button>

                  <div
                    className={`ds-dropdown-menu ${headerDropdownClass} sm:ds-absolute ds-z-10 ds-top-60px ds-text-base ds-list-none ds-bg-blue2 ds-rounded ds-divide-y ds-divide-gray-100 dark:ds-bg-gray-700 dark:ds-divide-gray-600`}
                  >
                    <ul
                      id="dropdownNavbar"
                      className=""
                      aria-labelledby="dropdownLargeButton"
                    >
                      {menuList.map((element) => {
                        return (
                          <li key={element.key}>
                            <a
                              href={element.path}
                              className="ds-block ds-whitespace-nowrap ds-py-18px sm:ds-pl-18px sm:ds-w-276px ds-pl-14px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body "
                            >
                              {element.value}
                            </a>
                          </li>
                        );
                      })}
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
      </nav>
    </div>
  );
}

Menu.defaultProps = {
  lang: "en",
  onSignOut: () => {},
  menuList: [
    { key: "dashKey", value: "My dashboard", path: "/" },
    { key: "securityKey", value: "Security Settings", path: "/" },
    { key: "profileKey", value: "Profile", path: "/" },
    { key: "outKey", value: "Sign out", path: "/" },
  ],
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
   * List of menu items to display in dropdown with links
   */
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
      path: PropTypes.string,
    })
  ),
};
