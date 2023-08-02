/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";

/**
 * Menu component
 */
export function MenuGlobal(props) {
  const {
    onClick,
    isAuthenticated,
    menuList,
    lang,
    onSignOut,
    demoBuffer,
    dataGcAnalyticsCustomClickInstitutionVariable,
  } = props;

  const [showDropdown, setShowDropdown] = useState(true);
  const dropdown = useRef(null);

  useEffect(() => {
    // Hide dropdown when click outside
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);

  return !showDropdown ? (
    <div className="ds-container">
      <button
        className="ds-bg-[#26374a] ds-py-2.5 ds-px-5"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it."
        onClick={() => setShowDropdown(true)}
      >
        <div className="ds-flex ds-flex-row ds-text-white">
          <span className="ds-text-white ds-text-xl ds-uppercase">Menu</span>
          <div className="ds-parent-div ds-flex ds-items-center ds-ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ds-text-white"
              width="16"
              height="14"
              x="43"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke-width="3"
                stroke="#ffffff"
                fill-rule="evenodd"
                d="M2.646 4.646a.5.5 0 0 1 .708 0L8 9.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  ) : (
    <div className="ds-container">
      <button
        className="ds-bg-[#444] ds-py-2.5 ds-px-5"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it."
        onClick={() => setShowDropdown(false)}
      >
        <div className="ds-flex ds-flex-row ds-text-white">
          <span className="ds-text-white ds-text-xl ds-uppercase">Menu</span>
          <div className="ds-parent-div ds-flex ds-items-center ds-ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ds-text-white"
              width="16"
              height="14"
              x="43"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke-width="3"
                stroke="#ffffff"
                fill-rule="evenodd"
                d="M2.646 4.646a.5.5 0 0 1 .708 0L8 9.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </button>
      <div className="ds-flex ds-flex-row ds-border-t ds-border-gray">
        <div className="ds-bg-white ds-border-black ds-z-100 ds-bg-[#444] ds-text-white ds-w-96">
          <ul>
            <li className="text-lg ds-border-1.5 ds-border-[#555] ds-bg-[#444] hover:ds-text-black hover:ds-bg-white ds-py-3.5 ds-px-7">
              ssss
            </li>
            <li className="text-lg ds-border-1.5 ds-border-[#555] ds-bg-[#444] hover:ds-text-black hover:ds-bg-white ds-py-3.5 ds-px-7">
              ssss
            </li>
            <li className="text-lg ds-border-1.5 ds-border-[#555] ds-bg-[#444] hover:ds-text-black hover:ds-bg-white ds-py-3.5 ds-px-7">
              ssss
            </li>
            <li className="text-lg ds-border-1.5 ds-border-[#555] ds-bg-[#444] hover:ds-text-black hover:ds-bg-white ds-py-3.5 ds-px-7">
              ssss
            </li>
          </ul>
        </div>
        <div className="ds-mb-[24px] ds-pl-[39px] ds-mb-[25px] ds-bg-white ds-border-t-1 ds-border-solid ds-border-gray-200 ds-shadow-lg ds-text-black ds-min-h-[815px] ds-pt-0 ds-top-0 ds-w-full">
          <div className="">
            <ul>
              <li className="ds-mb-[24px] ds-text-[32px] ds-px-[6px] ds-font-bold ds-underline ds-underline-offset-1 ds-text-[#284162]">
                <a href="#">Jobs</a>
              </li>
              <div className="ds-flex ds-flex-row">
                <div>
                  <li role="presentation" className="ds-py-1.5 ">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/en/services/jobs/opportunities.html"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      Find a job
                    </a>
                  </li>
                  <li role="presentation" className="ds-py-1.5 ">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/en/services/jobs/training.html"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      Training
                    </a>
                  </li>
                  <li role="presentation" className="ds-py-1.5 ">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/en/services/business/hire.html"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      Hiring and managing employees
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className="ds-text-[#284162] ds-underline ds-text-[18px]"
                  >
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/start-business"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      Starting a business
                    </a>
                  </li>
                  <li role="presentation" className="ds-py-1.5 ">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/en/services/jobs/workplace.html"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      Workplace standards
                    </a>
                  </li>
                  <li role="presentation" className="ds-py-1.5 ">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/en/services/finance/pensions.html"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      Pensions and retirement
                    </a>
                  </li>
                  <li role="presentation" className="ds-py-1.5 ">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/en/services/benefits/ei.html"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      Employment Insurance benefits and leave
                    </a>
                  </li>
                </div>
                <div>
                  <li role="separator" aria-orientation="vertical"></li>
                  <li role="presentation" className="ds-py-1.5">
                    <a
                      data-keep-expanded="md-min"
                      href="#"
                      role="menuitem"
                      tabindex="-1"
                      aria-haspopup="true"
                      aria-controls="gc-mnu-jobs-sub"
                      aria-expanded="true"
                      className="ds-text-[20px] ds-font-bold ds-py-1.5"
                    >
                      Most requested
                    </a>
                    <ul
                      id="gc-mnu-jobs-sub"
                      role="menu"
                      aria-orientation="vertical"
                      className="ds-list-disc ds-pl-[39px]"
                    >
                      <li role="presentation" className="ds-py-1.5">
                        <a
                          role="menuitem"
                          tabindex="-1"
                          href="https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-roe/access-roe.html"
                          className="ds-text-[#284162] ds-underline ds-text-[18px]"
                        >
                          View your Records of Employment
                        </a>
                      </li>
                      <li role="presentation" className="ds-py-1.5">
                        <a
                          role="menuitem"
                          tabindex="-1"
                          href="https://www.canada.ca/en/employment-social-development/services/sin.html"
                          className="ds-text-[#284162] ds-underline ds-text-[18px]"
                        >
                          Apply for a Social Insurance Number (SIN)
                        </a>
                      </li>
                      <li role="presentation" className="ds-py-1.5">
                        <a
                          role="menuitem"
                          tabindex="-1"
                          href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html"
                          className="ds-text-[#284162] ds-underline ds-text-[18px]"
                        >
                          Hire a temporary foreign worker
                        </a>
                      </li>
                      <li role="presentation" className="ds-py-1.5">
                        <a
                          role="menuitem"
                          tabindex="-1"
                          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
                          className="ds-text-[#284162] ds-underline ds-text-[18px]"
                        >
                          Immigrate as a skilled worker
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

MenuGlobal.defaultProps = {
  lang: "en",
  onClick: () => {},
  menuList: [
    { key: "dashKey", value: "My dashboard", path: "/", showIcon: false },
    {
      key: "securityKey",
      value: "Security Settings",
      path: "/",
      showIcon: false,
    },
    { key: "profileKey", value: "Profile", path: "/", showIcon: false },
    {
      key: "craAccountKey",
      value: "Switch to CRA My Account",
      path: "/",
      showIcon: false,
    },
    { key: "outKey", value: "Sign out", path: "/", showIcon: true },
  ],
};

MenuGlobal.propTypes = {
  /**
   * Language code.
   */
  lang: PropTypes.string.isRequired,

  /**
   * bool to switch between authenticated and non authenticated menus
   */
  isAuthenticated: PropTypes.bool.isRequired,

  /**
   * function for handling on click
   */
  onClick: PropTypes.func,

  /**
   * Adobe Analytics Prefix
   */
  dataGcAnalyticsCustomClickInstitutionVariable: PropTypes.string,

  /**
   * set to true for Storybook demos only
   */
  demoBuffer: PropTypes.bool,

  /**
   * List of menu items to display in dropdown with links
   */
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
      path: PropTypes.string,
      component: PropTypes.elementType,
    })
  ),
};
