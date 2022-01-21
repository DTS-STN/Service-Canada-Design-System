import PropTypes from "prop-types";
import { useState } from "react";
/**
 * Menu component
 */
export function Menu(props) {
  const path = window.location.pathname;

  let [headerDropdownClass, setHeaderDropdownClass] = useState("hidden"); //Function for changing menu state
  function onMenuClick() {
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuDropdown.classList.toggle("active");
    menuButton.getAttribute("aria-expanded") === "true"
      ? menuButton.setAttribute("aria-expanded", false)
      : menuButton.setAttribute("aria-expanded", true);
  } //Function for changing menu state

  function onMenuClick() {
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuDropdown.classList.toggle("active");
    menuButton.getAttribute("aria-expanded") === "true"
      ? menuButton.setAttribute("aria-expanded", false)
      : menuButton.setAttribute("aria-expanded", true);
  }

  return (
    <div className="headerNav">
      {" "}
      <nav
        title="Menu"
        data-cy="menu"
        role="navigation"
        aria-labelledby="mainSiteNav"
      >
        {" "}
        <h3 id="mainSiteNav" className="menuHeader">
          Service Canada{" "}
        </h3>{" "}
        <button
          id="menuButton"
          onClick={onMenuClick}
          className="text-h4 text-canada-footer-font focus:outline-none focus:ring-2 focus:ring-black py-4"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menuDropdown"
          data-testid="menuButton"
        >
          <span className="inline-block align-middle icon-menu" />{" "}
          <span className="inline-block align-middle pl-3 font-body text-p leading-none">
            {props.menuButtonTitle}{" "}
          </span>{" "}
        </button>{" "}
        <ul id="menuDropdown" className="menuDropdown" role="menu">
          {" "}
          {props.items.map((item, key) => {
            const exactURL = path === item.link; // it's exactly this url
            const includesURL = path.includes(item.link); // it's a child of this url (eg, "/projects/app" includes "/projects")

            return (
              <li
                key={key}
                className={`py-4 cursor-pointer text-custom-blue-projects-link `}
                role="menuitem"
                aria-current={exactURL ? "page" : null}
              >
                {" "}
                <a
                  href={item.link}
                  className={`font-body font-bold text-base ${
                    includesURL ? "activePage" : "menuLink"
                  }`}
                  title={item.text}
                >
                  {item.text}{" "}
                </a>{" "}
              </li>
            );
          })}{" "}
        </ul>{" "}
        <ul
          className="menuDropdown menuRight hover:bg-multi-blue-blue2 hover:text-multi-neutrals-grey100"
          role="menu"
        >
          {" "}
          {props.isAuthorized ? (
            <li className="py-4">
              {" "}
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                onClick={() =>
                  headerDropdownClass === "hidden"
                    ? setHeaderDropdownClass("block")
                    : setHeaderDropdownClass("hidden")
                }
                class="flex font-bold justify-between items-center py-0 pr-4 pl-3 w-full"
              >
                My Service Canada Acccount{" "}
                <svg
                  class="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>{" "}
                </svg>{" "}
              </button>{" "}
              <div
                id="dropdownNavbar absolute"
                class={`dropdown-menu absolute z-10 top-60px text-base list-none bg-blue2 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
              >
                {" "}
                <ul class="py-0" aria-labelledby="dropdownLargeButton">
                  {" "}
                  <li>
                    {" "}
                    <a
                      href="#"
                      class="block py-2 px-4 text-gray-700 bg-multi-blue-blue2"
                    >
                      My Benefits and Services
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a
                      href="#"
                      class="block py-2 px-4 text-gray-700 bg-multi-blue-blue2"
                    >
                      Account Settings
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a
                      href="#"
                      class="block py-2 px-4 text-gray-700 bg-multi-blue-blue2"
                    >
                      Switch to CRA My Accounts
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a
                      href="#"
                      class="block py-2 px-4 text-gray-700 bg-multi-blue-blue2"
                    >
                      Sign out
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </li>
          ) : (
            <li
              key="1"
              className={`py-4 cursor-pointer text-custom-blue-projects-link `}
              role="menuitem"
              aria-current="page"
            >
              My Service Canada Acccount{" "}
            </li>
          )}{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  );
}

Menu.propTypes = {
  /**
   * Menu title for small screens
   */
  menuButtonTitle: PropTypes.string.isRequired,
  /**
   * text for sign up button
   */ signUpText: PropTypes.string.isRequired,
  /**
   * Array of Items for the menu
   */ items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the menu
       */
      text: PropTypes.string,
      /**
       * Link for the menu
       */ link: PropTypes.string,
    })
  ).isRequired,
};
