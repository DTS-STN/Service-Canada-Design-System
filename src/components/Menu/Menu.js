import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
/**
 * Menu component
 */
export function Menu(props) {
  const ref = useRef();
  let [headerDropdownClass, setHeaderDropdownClass] = React.useState("hidden");
  let [headerMobileDropdownClass, setHeaderMobileDropdownClass] =
    React.useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        headerDropdownClass === "block" &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setHeaderDropdownClass("hidden");
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [headerDropdownClass]);

  const path = window.location.pathname;
  //Function for changing menu state
  function onMenuClick() {
    const menuButton = document.getElementById("menuButton");
    const menuButtonParent = document.getElementById("menuButtonParent");
    const menuDropdown = document.getElementById("menuDropdown");
    const menuDropdownSub = document.getElementById("menuDropdownSub");
    setHeaderMobileDropdownClass(!headerMobileDropdownClass);
    menuDropdown.classList.toggle("active");
    menuDropdownSub.classList.toggle("active");
    menuButtonParent.classList.toggle("active");
    menuButton.getAttribute("aria-expanded") === "true"
      ? menuButton.setAttribute("aria-expanded", false)
      : menuButton.setAttribute("aria-expanded", true);
  }

  const subMenuClasses = props.isAuthenticated
    ? "menuDropdown menuRight  md:text-white text-gray-700  sm:w-full sm:left-0"
    : "menuDropdown menuRight md:text-white text-gray-700 sm:w-full sm:left-0";
  return (
    <div className="headerNav bg-multi-blue-blue70" ref={ref}>
      <nav className="md:container flex items-center justify-between flex-wrap w-full relative">
        <div className="flex items-center flex-shrink-0 text-white">
          <h3 id="mainSiteNav" className="md:p-0 container menuHeader">
            {props.menuHeaderTitle}
          </h3>
        </div>
        <div
          id="menuButtonParent"
          className="menuButtonParent block md:hidden pr-4 focus:bg-multi-blue-blue2 text-white border-l-2 border-white"
        >
          <button
            id="menuButton"
            onClick={onMenuClick}
            className="text-h4 text-canada-footer-font focus:outline-none py-4"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="menuDropdown"
            data-testid="menuButton"
          >
            <span className="inline-block align-middle pl-3 font-body font-bold text-p leading-none">
              {props.menuButtonTitle}
            </span>
            <svg
              className="ml-1 w-4 h-4 inline-block"
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
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto bg-multi-blue-blue2 md:bg-multi-blue-blue70">
          <div className="md:flex-grow md:text-center md:flex hidden">
            <ul id="menuDropdown" className="menuDropdown w-full">
              {props.items.map((item, key) => {
                const exactURL = path === item.link; // it's exactly this url
                const includesURL = path.includes(item.link); // it's a child of this url (eg, "/projects/app" includes "/projects")

                return (
                  <li
                    key={key}
                    className={`py-4 px-4 inline-block cursor-pointer text-custom-blue-projects-link md:text-white text-gray-700 `}
                    aria-current={exactURL ? "page" : null}
                  >
                    <a
                      href={item.link}
                      className={`font-body font-bold leading-20px  ${
                        includesURL ? "activePage" : "menuLink"
                      }`}
                      title={item.text}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul id="menuDropdownSub" className={subMenuClasses}>
              {props.items.map((item, key) => {
                const exactURL = path === item.link; // it's exactly this url
                const includesURL = path.includes(item.link); // it's a child of this url (eg, "/projects/app" includes "/projects")

                return (
                  <li
                    key={key}
                    className={`py-18px px-18px md:hidden cursor-pointer text-custom-blue-projects-link md:text-white text-gray-700 `}
                    aria-current={exactURL ? "page" : null}
                  >
                    <a
                      href={item.link}
                      className={`font-body font-bold text-base  ${
                        includesURL ? "activePage" : "menuLink"
                      }`}
                      title={item.text}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
              {props.isAuthenticated ? (
                <li id="buttonNav" className="py-4 md:pl-0 md:pr-0 buttonNav">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={() => {
                      const buttonNavId = document.getElementById("buttonNav");
                      buttonNavId.classList.toggle("active");
                      return headerDropdownClass === "hidden"
                        ? setHeaderDropdownClass("block")
                        : setHeaderDropdownClass("hidden");
                    }}
                    className="flex font-bold font-body justify-between items-center md:py-2px py-18px pl-4 sm:pt-0 pr-4 md:pl-3 w-full"
                  >
                    {props.lang === "fr"
                      ? FR.myAccountTitle
                      : EN.myAccountTitle}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {headerDropdownClass === "hidden" ? (
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
                    className={`dropdown-menu ${headerDropdownClass} md:absolute z-10 top-60px text-base list-none bg-blue2 rounded divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul
                      id="dropdownNavbar"
                      className="py-0"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="/"
                          className="block py-18px pl-38px lg:pl-4 pr-42px text-gray-700 bg-multi-blue-blue2 font-bold font-body "
                        >
                          {props.lang === "fr"
                            ? FR.myBenefitsAndServices
                            : EN.myBenefitsAndServices}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block py-18px pl-38px lg:pl-4 pr-42px text-gray-700 bg-multi-blue-blue2 font-bold font-body"
                        >
                          {props.lang === "fr"
                            ? FR.accountSettings
                            : EN.accountSettings}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block py-18px pl-38px lg:pl-4 pr-42px text-gray-700 bg-multi-blue-blue2 font-bold font-body"
                        >
                          {props.lang === "fr"
                            ? FR.CRAMyAccounts
                            : EN.CRAMyAccounts}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block py-18px  pl-38px lg:pl-4 pr-42px text-gray-700 bg-multi-blue-blue2 font-bold font-body"
                        >
                          {props.lang === "fr" ? FR.signOut : EN.signOut}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li
                  key="1"
                  className={`py-4 px-6 font-bold font-body`}
                  aria-current="page"
                >
                  {props.lang === "fr" ? FR.myAccountTitle : EN.myAccountTitle}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Menu.propTypes = {
  /**
   * Language code.
   */
  lang: PropTypes.string.isRequired,
  /**
   * Menu Header title
   */
  menuHeaderTitle: PropTypes.string.isRequired,

  /**
   * Menu title for small screens
   */
  menuButtonTitle: PropTypes.string.isRequired,

  /**
   * Is Authenticated
   */
  isAuthenticated: PropTypes.bool.isRequired,
  /**
   * Array of Items for the menu
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the menu
       */
      text: PropTypes.string,
      /**
       * Link for the menu
       */
      link: PropTypes.string,
    })
  ).isRequired,
};
