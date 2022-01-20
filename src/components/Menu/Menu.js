import PropTypes from "prop-types";

/**
 * Menu component
 */
export function Menu(props) {
  const path = window.location.pathname;

  //Function for changing menu state
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
      <nav
        title="Menu"
        data-cy="menu"
        role="navigation"
        aria-labelledby="mainSiteNav"
      >
        <h3 id="mainSiteNav" className="menuHeader">
          Service Canada
        </h3>
        <button
          id="menuButton"
          onClick={onMenuClick}
          className="text-h4 text-canada-footer-font focus:outline-none focus:ring-2 focus:ring-black mb-4 py-1"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menuDropdown"
          data-testid="menuButton"
        >
          <span className="inline-block align-middle icon-menu" />
          <span className="inline-block align-middle pl-3 font-body text-p leading-none">
            {props.menuButtonTitle}
          </span>
        </button>

        <ul id="menuDropdown" className="menuDropdown" role="menu">
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
                <a
                  href={item.link}
                  className={`font-body text-base ${includesURL ? "activePage" : "menuLink underline"
                    }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='menuDropdown menuRight' role="menu">
          <li
            key="1"
            className={`py-4 cursor-pointer text-custom-blue-projects-link `}
            role="menuitem"
            aria-current="page"
          >
            <a
              href={`#`}
              className={`font-body text-base`}
            >
              My Benefits and Services
            </a>
            <ul className="subMenu">
              <li
                key="1"
                className={`py-4 cursor-pointer text-custom-blue-projects-link `}
                role="menuitem"
                aria-current="page"
              >
                <a
                  href={`#`}
                  className={`font-body text-base`}
                >
                  My Benefits and Services
                </a>
              </li>
              <li
                key="1"
                className={`py-4 cursor-pointer text-custom-blue-projects-link `}
                role="menuitem"
                aria-current="page"
              >
                <a
                  href={`#`}
                  className={`font-body text-base`}
                >
                  Account Settings
                </a>
              </li>
              <li
                key="1"
                className={`py-4 cursor-pointer text-custom-blue-projects-link `}
                role="menuitem"
                aria-current="page"
              >
                <a
                  href={`#`}
                  className={`font-body text-base`}
                >
                  Switch to CRA My Account
                </a>
              </li>
              <li
                key="1"
                className={`py-4 cursor-pointer text-custom-blue-projects-link `}
                role="menuitem"
                aria-current="page"
              >
                <a
                  href={`#`}
                  className={`font-body text-base`}
                >
                  Signout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
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
   */
  signUpText: PropTypes.string.isRequired,

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
