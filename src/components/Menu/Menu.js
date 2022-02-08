import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
import upArrow from "../../assets/upArrow.svg";
import { Image } from "../Image/Image";

/**
 * Menu component
 */
export function Menu(props) {
  const path = window.location.pathname;

  let [headerDropdownClass, setHeaderDropdownClass] = useState("hidden");
  let [mobileMenu, setMobileMenu] = useState("hidden");

  //Function for changing menu state
  function onMenuClick() {
    setHeaderDropdownClass(
      headerDropdownClass === "hidden" ? "block" : "hidden"
    );
    setMobileMenu(mobileMenu === "hidden" ? "block" : "hidden");
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");
    const menuDropdownSub = document.getElementById("menuDropdownSub");

    menuDropdown.classList.toggle("active");
    menuDropdownSub.classList.toggle("active");
    menuButton.getAttribute("aria-expanded") === "true"
      ? menuButton.setAttribute("aria-expanded", false)
      : menuButton.setAttribute("aria-expanded", true);
  }

  const subMenuClasses = props.isAuthenticated
    ? "menuDropdown menuRight"
    : "menuDropdown menuRight lg:text-white text-gray-700";
  return (
    <div className="headerNav bg-multi-blue-blue70 absolute">
      <nav className="sm:container flex items-center justify-between flex-wrap w-full">
        <div className="flex items-center flex-shrink-0 text-white mr-6 px-4">
          <h3 id="mainSiteNav" className="menuHeader">
            {props.menuHeaderTitle}
          </h3>
        </div>
        <div
          className={`block lg:hidden pr-4 focus:bg-multi-blue-blue2 text-white border-l-2 border-white  ${
            mobileMenu === "hidden"
              ? ""
              : " bg-multi-blue-blue2 text-multi-neutrals-grey100"
          }`}
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
            <span className="inline-block font-bold align-middle pl-3 font-body text-p leading-none">
              {props.menuButtonTitle}
            </span>
            {mobileMenu !== "hidden" ? (
              <span className="inline-block align-middle">
                <Image className="px-2" src={upArrow} alt="down arrow" />
              </span>
            ) : (
              <span className="inline-block align-middle">
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            )}
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-multi-blue-blue2 lg:bg-multi-blue-blue70">
          <div className="lg:flex-grow lg:text-center">
            <ul id="menuDropdown" className="menuDropdown">
              {props.items.map((item, key) => {
                const exactURL = path === item.link; // it's exactly this url
                const includesURL = path.includes(item.link); // it's a child of this url (eg, "/projects/app" includes "/projects")

                return (
                  <li
                    key={key}
                    className={`py-4 px-4 cursor-pointer text-custom-blue-projects-link lg:text-white text-gray-700 `}
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
            </ul>
          </div>
          <div>
            <ul
              id="menuDropdownSub"
              className={`${
                mobileMenu !== "hidden"
                  ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-multi-blue-blue2 lg:bg-multi-blue-blue70"
                  : subMenuClasses +
                    `${
                      headerDropdownClass === "hidden"
                        ? " lg:text-white text-gray-700 "
                        : " bg-multi-blue-blue2 text-multi-neutrals-grey100"
                    }`
              }`}
            >
              {props.isAuthenticated ? (
                <li className="py-0 px-4 lg:py-4 lg:px-6">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={() =>
                      headerDropdownClass === "hidden"
                        ? setHeaderDropdownClass("block")
                        : setHeaderDropdownClass("hidden")
                    }
                    className="flex font-bold font-body justify-between items-center py-4 lg:py-0 md:py-4 sm:py-4 pr-4 lg:pl-3 w-full"
                  >
                    {props.lang === "fr"
                      ? FR.myAccountTitle
                      : EN.myAccountTitle}
                    {headerDropdownClass !== "hidden" ? (
                      <Image className="px-2" src={upArrow} alt="up arrow" />
                    ) : (
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </button>

                  <div
                    id="dropdownNavbar"
                    style={{
                      display:
                        headerDropdownClass === "hidden" ? "none" : "block",
                    }}
                    className={`dropdown-menu lg:absolute z-10 top-60px text-base list-none bg-blue2 rounded divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul className="py-0" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a
                          href="/"
                          className="block py-4 px-4 pr-16 text-gray-700 bg-multi-blue-blue2 font-bold font-body "
                        >
                          {props.lang === "fr"
                            ? FR.myBenfitsAndServices
                            : EN.myBenfitsAndServices}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block py-4 px-4 pr-16 text-gray-700 bg-multi-blue-blue2 font-bold font-body"
                        >
                          {props.lang === "fr"
                            ? FR.accountSettings
                            : EN.accountSettings}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block py-4 px-4 pr-16 text-gray-700 bg-multi-blue-blue2 font-bold font-body"
                        >
                          {props.lang === "fr"
                            ? FR.CRAMyAccounts
                            : EN.CRAMyAccounts}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block py-4 px-4 pr-16 text-gray-700 bg-multi-blue-blue2 font-bold font-body"
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
