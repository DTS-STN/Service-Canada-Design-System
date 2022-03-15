import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
/**
 * Menu component
 */
export function Menu(props) {
  const ref = useRef();
  const [menuDisplayed, setMenuDisplayed] = React.useState(true);
  const [buttonNavEnabled, setButtonNavEnabled] = React.useState(true);

  let [headerDropdownClass, setHeaderDropdownClass] =
    React.useState("ds-hidden");
  let [headerMobileDropdownClass, setHeaderMobileDropdownClass] =
    React.useState(true);
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

    // document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [headerDropdownClass]);

  // const path = window.location.pathname;
  //Function for changing menu state
  function onMenuClick(e) {
    e.preventDefault();
    // const menuButtonParent = document.getElementById("menuButtonParent");
    // const menuDropdownSub = document.getElementById("menuDropdownSub");
    setHeaderMobileDropdownClass(!headerMobileDropdownClass);
    setButtonNavEnabled(!buttonNavEnabled);
    // menuDropdownSub.classList.toggle("ds-active");
    // menuButtonParent.classList.toggle("ds-active");
    setMenuDisplayed(!menuDisplayed);
  }

  return (
    <div className="ds-headerNav ds-bg-multi-blue-blue70" ref={ref}>
      <nav className="md:ds-container ds-flex ds-items-center ds-justify-between ds-flex-wrap ds-w-full ds-relative">
        <div className="ds-flex ds-items-center ds-flex-shrink-0 ds-text-white">
          <h3 id="mainSiteNav" className="md:ds-p-0 ds-container ds-menuHeader">
            {props.menuHeaderTitle}
          </h3>
        </div>
        <div
          id="menuButtonParent"
          className="ds-active ds-menuButtonParent ds-block md:ds-hidden ds-pr-4 focus:ds-bg-multi-blue-blue2 ds-text-white ds-border-l-2 ds-border-white"
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
              {props.menuButtonTitle}
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
          <div className="md:ds-flex-grow md:ds-text-center md:ds-flex ds-hidden">
            <ul
              id="menuDropdown"
              className={`${
                buttonNavEnabled && "active"
              } ds-menuDropdown ds-w-full`}
            >
              {props.items.map((item, key) => {
                const exactURL = path === item.link; // it's exactly this url
                const includesURL = path.includes(item.link); // it's a child of this url (eg, "/projects/app" includes "/projects")

                return (
                  <li
                    key={key}
                    className={`ds-py-4 ds-px-4 ds-inline-block ds-cursor-pointer ds-text-custom-blue-projects-link md:ds-text-white ds-text-gray-700 `}
                    aria-current={exactURL ? "page" : null}
                  >
                    <a
                      href={item.link}
                      className={`ds-font-body ds-font-bold ds-leading-20px  ${
                        includesURL ? "ds-activePage" : "ds-menuLink"
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
              className="ds-active ds-menuDropdown ds-menuRight md:ds-text-white ds-text-gray-700 sm:ds-w-full sm:ds-left-0"
            >
              {props.items.map((item, key) => {
                return (
                  <li
                    key={key}
                    className={`ds-py-18px ds-px-18px md:ds-hidden ds-cursor-pointer ds-text-custom-blue-projects-link md:ds-text-white ds-text-gray-700 `}
                  >
                    <a
                      href={item.link}
                      className={`ds-font-body ds-font-bold ds-text-base ds-activePage
                        `}
                      title={item.text}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
              {props.isAuthenticated ? (
                <li
                  id="buttonNav"
                  className="ds-active ds-py-4 md:ds-pl-0 md:ds-pr-0 ds-buttonNav"
                >
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={() => {
                      // const buttonNavId = document.getElementById("buttonNav");
                      // buttonNavId.classList.toggle("ds-active");
                      // return headerDropdownClass === "ds-hidden"
                      //   ? setHeaderDropdownClass("ds-block")
                      //   : setHeaderDropdownClass("ds-hidden");
                    }}
                    className="ds-flex ds-font-bold ds-font-body ds-justify-between ds-items-center md:ds-py-2px ds-py-18px ds-pl-4 sm:ds-pt-0 ds-pr-4 md:ds-pl-3 ds-w-full"
                  >
                    {props.lang === "fr"
                      ? FR.myAccountTitle
                      : EN.myAccountTitle}
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
                    className={`ds-active ds-dropdown-menu ${headerDropdownClass} md:ds-absolute ds-z-10 ds-top-60px ds-text-base ds-list-none ds-bg-blue2 ds-rounded ds-divide-y ds-divide-gray-100 dark:ds-bg-gray-700 dark:ds-divide-gray-600`}
                  >
                    <ul
                      id="dropdownNavbar"
                      className="ds-py-0"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="/"
                          className="ds-block ds-py-18px ds-pl-38px lg:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body "
                        >
                          {props.lang === "fr"
                            ? FR.myBenefitsAndServices
                            : EN.myBenefitsAndServices}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="ds-block ds-py-18px ds-pl-38px lg:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body"
                        >
                          {props.lang === "fr"
                            ? FR.accountSettings
                            : EN.accountSettings}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="ds-block ds-py-18px ds-pl-38px lg:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body"
                        >
                          {props.lang === "fr"
                            ? FR.CRAMyAccounts
                            : EN.CRAMyAccounts}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="ds-block ds-py-18px  ds-pl-38px lg:ds-pl-4 ds-pr-42px ds-text-gray-700 ds-bg-multi-blue-blue2 ds-font-bold ds-font-body"
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
                  className={`ds-py-4 ds-px-6 ds-font-bold ds-font-body`}
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
