/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
import downArrow from "../../assets/downArrow.svg";
import { useMediaQuery } from "react-responsive";

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
  const [menuItem, setMenuItem] = useState({ top: 0, mostRequested: false });
  const [expandedPanel, setExpandedPanel] = useState({
    itemTitle: null,
    items: [],
    mostRequested: [],
    value: "",
  });
  const dropdown = useRef(null);

  console.log(
    props,
    props.globalMenuProps.menuList.length,
    menuItem,
    "======="
  );

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  console.log("isDesktop", isDesktop);

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
              className="ds-text-white"
              width="16"
              height="14"
              x="43"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                strokeWidth="3"
                stroke="#ffffff"
                fillRule="evenodd"
                d="M2.646 4.646a.5.5 0 0 1 .708 0L8 9.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  ) : (
    <>
      {isDesktop ? (
        <DesktopMenu
          setShowDropdown={setShowDropdown}
          globalMenuProps={props.globalMenuProps}
          menuItem={menuItem}
          setMenuItem={setMenuItem}
          expandedPanel={expandedPanel}
          setExpandedPanel={setExpandedPanel}
        />
      ) : (
        <MobileMenu
          setShowDropdown={setShowDropdown}
          globalMenuProps={props.globalMenuProps}
          menuItem={menuItem}
          setMenuItem={setMenuItem}
          expandedPanel={expandedPanel}
          setExpandedPanel={setExpandedPanel}
        />
      )}
    </>
  );
}

const DesktopMenu = (props) => (
  <div className="ds-container">
    <button
      className="ds-bg-[#444] ds-py-2.5 ds-px-5"
      type="button"
      aria-haspopup="true"
      aria-expanded="false"
      aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it."
      onClick={() => props.setShowDropdown(false)}
    >
      <div className="ds-flex ds-flex-row ds-text-white">
        <span className="ds-text-white ds-text-xl ds-uppercase">Menu</span>
        <div className="ds-parent-div ds-flex ds-items-center ds-ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ds-text-white"
            width="16"
            height="14"
            x="43"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              strokeWidth="3"
              stroke="#ffffff"
              fillRule="evenodd"
              d="M2.646 4.646a.5.5 0 0 1 .708 0L8 9.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </button>
    <div className="ds-flex ds-flex-row ds-border-t ds-border-gray">
      <div className="ds-bg-white ds-border-black ds-z-100 ds-bg-[#444] ds-text-white ds-w-[360px]">
        <ul>
          {props.globalMenuProps.menuList.map((x, i) => (
            <li className="text-lg ds-border-1.5 ds-border-[#555] ds-bg-[#444] hover:ds-text-black hover:ds-bg-white ds-py-3.5 ds-px-7 ds-w-[360px]">
              <div
                onClick={() => {
                  props.setExpandedPanel((prev) => {
                    return { ...prev, ...x };
                  });
                }}
              >
                <p className="ds-text-[18px]">{x.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="ds-mb-[24px] ds-pl-[39px] ds-mb-[25px] ds-bg-white ds-border-t-1 ds-border-solid ds-border-gray-200 ds-shadow-lg ds-text-black ds-min-h-[815px] ds-pt-0 ds-top-0 ds-w-full">
        <div className="">
          <ul>
            <li className="ds-mb-[24px] ds-text-[32px] ds-px-[6px] ds-font-bold ds-underline ds-underline-offset-1 ds-text-[#284162]">
              <a href="#">{props.expandedPanel.itemTitle}</a>
            </li>
            <div className="ds-flex ds-flex-col lg:ds-flex-row">
              <div>
                {props.expandedPanel.items.map((x) => (
                  <li role="presentation" className="ds-py-1.5 ">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.canada.ca/en/services/jobs/opportunities.html"
                      className="ds-text-[#284162] ds-underline ds-text-[18px]"
                    >
                      {x.value}
                    </a>
                  </li>
                ))}
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
                    className="ds-list-disc ds-px-[39px] ds-text-[20px] ds-font-body"
                  >
                    {props.expandedPanel.mostRequested.map((x) => (
                      <li role="presentation" className="ds-py-[6px]">
                        <a
                          role="menuitem"
                          tabindex="-1"
                          href="https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-roe/access-roe.html"
                          className="ds-text-[#284162] ds-underline ds-text-[18px]"
                        >
                          {x.value}
                        </a>
                      </li>
                    ))}
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

const MobileMenu = (props) => (
  <div className="ds-container">
    <button
      className="ds-bg-[#444] ds-py-2.5 ds-px-5"
      type="button"
      aria-haspopup="true"
      aria-expanded="false"
      aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it."
      onClick={() => props.setShowDropdown(false)}
    >
      <div className="ds-flex ds-flex-row ds-text-white">
        <span className="ds-text-white ds-text-xl ds-uppercase">Menu</span>
        <div className="ds-parent-div ds-flex ds-items-center ds-ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ds-text-white"
            width="16"
            height="14"
            x="43"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              strokeWidth="3"
              stroke="#ffffff"
              fillRule="evenodd"
              d="M2.646 4.646a.5.5 0 0 1 .708 0L8 9.293l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </button>
    <div className="ds-flex ds-flex-row ds-border-t ds-border-gray">
      <div className="ds-bg-white ds-border-black ds-z-100 ds-bg-[#444] ds-text-white ds-w-full">
        <ul>
          {props.globalMenuProps.menuList.map((x, i) => (
            <>
              <li
                className="ds-text-[18px] ds-border-1.5 ds-border-[#555] ds-bg-[#444] hover:ds-text-black hover:ds-bg-white ds-py-[14px] ds-px-[30px]"
                key={i}
              >
                <div
                  onClick={() => {
                    props.setMenuItem({
                      top: i,
                      mostRequested: false,
                    });
                  }}
                >
                  <span className="ds-flex ds-flex-horizontal">
                    <svg
                      className="ds-text-white"
                      width="26"
                      height="24"
                      x="43"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.285876 10.606C0.372154 10.6509 0.469024 10.6714 0.566089 10.6654C0.663154 10.6594 0.756749 10.6271 0.836827 10.5719L7.77039 5.77174C7.84124 5.72265 7.89913 5.65713 7.93912 5.58077C7.97911 5.50442 8 5.41951 8 5.33332C8 5.24713 7.97911 5.16222 7.93912 5.08587C7.89913 5.00952 7.84124 4.94399 7.77039 4.89491L0.836827 0.0947528C0.756811 0.039387 0.663173 0.00696588 0.566052 0.000999826C0.468932 -0.00496623 0.37203 0.0157502 0.285838 0.0609059C0.199647 0.106062 0.127451 0.173936 0.0770675 0.257179C0.026684 0.340423 3.28455e-05 0.435863 7.24456e-09 0.533167V10.1335C-1.60365e-05 10.2308 0.0266158 10.3263 0.077009 10.4096C0.127402 10.4929 0.199634 10.5609 0.285876 10.606Z"
                        fill="white"
                      />
                    </svg>
                    {x.value}
                  </span>
                </div>
              </li>
              {props.menuItem.top === i && (
                <ul key={i}>
                  {x.items.map((y) => (
                    <li className="ds-underline ds-text-black ds-text-[18px] ds-bg-white ds-border-b-2 ds-border-solid ds-py-[14px] ds-pr-[30px] ds-pl-[65px]">
                      {y.value}
                    </li>
                  ))}
                  <li className="ds-text-[18px] ds-bg-[#999] ds-border-b-2 ds-border-solid ds-py-[14px] ds-pr-[30px] ds-pl-[65px]">
                    <div
                      onClick={() => {
                        props.setMenuItem((prev) => {
                          return {
                            ...prev,
                            top: i,
                            mostRequested: !prev.mostRequested,
                          };
                        });
                      }}
                    >
                      <a href="#" className="ds-text-black ">
                        <span className="ds-flex ds-flex-horizontal">
                          <svg
                            className="ds-text-white"
                            width="26"
                            height="24"
                            x="43"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.285876 10.606C0.372154 10.6509 0.469024 10.6714 0.566089 10.6654C0.663154 10.6594 0.756749 10.6271 0.836827 10.5719L7.77039 5.77174C7.84124 5.72265 7.89913 5.65713 7.93912 5.58077C7.97911 5.50442 8 5.41951 8 5.33332C8 5.24713 7.97911 5.16222 7.93912 5.08587C7.89913 5.00952 7.84124 4.94399 7.77039 4.89491L0.836827 0.0947528C0.756811 0.039387 0.663173 0.00696588 0.566052 0.000999826C0.468932 -0.00496623 0.37203 0.0157502 0.285838 0.0609059C0.199647 0.106062 0.127451 0.173936 0.0770675 0.257179C0.026684 0.340423 3.28455e-05 0.435863 7.24456e-09 0.533167V10.1335C-1.60365e-05 10.2308 0.0266158 10.3263 0.077009 10.4096C0.127402 10.4929 0.199634 10.5609 0.285876 10.606Z"
                              fill="black"
                            />
                          </svg>
                          Most Requested {props.menuItem.mostRequested}
                        </span>
                      </a>
                    </div>
                  </li>
                  {props.menuItem.mostRequested &&
                    x.items.map((y, j) => (
                      <li className="ds-ml-[100px] ds-underline ds-text-black ds-text-[18px] ds-bg-white ds-border-b-2 ds-border-solid ds-py-[14px] ds-pr-[30px] ">
                        {y.value}
                      </li>
                    ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

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
