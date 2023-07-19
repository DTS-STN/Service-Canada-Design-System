/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import { TopNav } from "../TopNav/TopNav";
import { Menu } from "../Menu/Menu";
import { Image } from "../Image/Image";
import logoFile from "../../assets/sig-blk-en.svg";
import logoFileFR from "../../assets/sig-blk-fr.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import { Language } from "../Language/Language";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

export function Header(props) {
  const {
    id,
    lang,
    locale,
    isAuthenticated,
    linkPath,
    searchProps,
    menuProps,
    breadCrumbItems,
    topnavProps,
    useParentContainer,
    customLink,
    dataGcAnalyticsCustomClickInstitutionVariable,
  } = props;

  const containerClass =
    useParentContainer || !isAuthenticated ? "" : "ds-container";

  return (
    <>
      <div className="ds-header" id={id} data-testid="ds-header">
        <TopNav
          lang={lang}
          skipToMainPath={topnavProps.skipToMainPath}
          skipToAboutPath={topnavProps.skipToAboutPath}
          switchToBasicPath={topnavProps.switchToBasicPath}
          displayAlternateLink={topnavProps.displayAlternateLink}
        />
        <header>
          <div className="ds-flex ds-flex-row ds-w-full ds-invisible sm:ds-visible">
            <div className="ds-w-full"></div>
            <Language
              id="lang1"
              lang={lang}
              path={linkPath}
              customLink={customLink}
              locale={locale}
              dataGcAnalyticsCustomClickInstitutionVariable={
                dataGcAnalyticsCustomClickInstitutionVariable
              }
            />
          </div>
          <div
            className={`${containerClass} ds-flex ds-flex-col sm:ds-flex-row md:ds-pb-14px`}
          >
            <div className={`ds-flex ds-flex-row ds-w-full sm:ds-pt-12px`}>
              <div className={`header-logo ds-pt-6px`}>
                <Image
                  className={`${
                    lang === "en"
                      ? "lg:ds-max-h-34px ds-max-h-19px"
                      : "lg:ds-max-h-35px ds-max-h-20px"
                  } md:ds-max-w-360px ds-max-w-206px`}
                  src={lang === "en" ? logoFile : logoFileFR}
                  alt="Government of Canada"
                />
              </div>
              <div className="sm:ds-hidden ds-ml-auto ds-pb-10px">
                <Language
                  id="lang2"
                  lang={lang}
                  path={linkPath}
                  locale={locale}
                  customLink={customLink}
                  dataGcAnalyticsCustomClickInstitutionVariable={
                    dataGcAnalyticsCustomClickInstitutionVariable
                  }
                />
              </div>
            </div>
            {!isAuthenticated ? (
              <>
                <div className="ds-py-0 ds-justify-end sm:ds-ml-auto ds-w-full md:ds-flex md:ds-w-332px ds-pb-20px ds-pt-10px md:ds-pt-20px md:ds-pb-10px">
                  <SearchBar
                    onChange={searchProps.onChange}
                    onSubmit={searchProps.onSubmit}
                    lang={lang}
                  />
                </div>
              </>
            ) : (
              <div className="ds-pb-10px sm:ds-pb-14px md:ds-pb-0 ds-hidden sm:ds-ml-auto sm:ds-flex sm:ds-pt-10px md:ds-pt-18px">
                <Language
                  id="lang1"
                  lang={lang}
                  path={linkPath}
                  customLink={customLink}
                  locale={locale}
                  dataGcAnalyticsCustomClickInstitutionVariable={
                    dataGcAnalyticsCustomClickInstitutionVariable
                  }
                />
              </div>
            )}
          </div>
          {!menuProps.hasNoMenu && (
            <>
              <hr className="ds-border-t-[3px] ds-border-black ds-mt-1" />
              <button
                className="ds-bg-black ds-py-2.5 ds-px-5"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it."
              >
                <span className="ds-text-white ds-text-xl ds-uppercase">
                  Main{" "}
                </span>
                Menu{" "}
                <span className="expicon glyphicon glyphicon-chevron-down"></span>
              </button>
              {/* <Menu
                lang={lang}
                isAuthenticated={isAuthenticated}
                menuList={menuProps.menuList}
                onSignOut={menuProps.onSignOut}
                dataGcAnalyticsCustomClickInstitutionVariable={
                  dataGcAnalyticsCustomClickInstitutionVariable
                }
              /> */}
            </>
          )}
          {breadCrumbItems && (
            <div className={containerClass}>
              <Breadcrumb items={breadCrumbItems} />
            </div>
          )}
        </header>
      </div>
    </>
  );
}

Header.defaultProps = {
  lang: "en",
  isAuthenticated: true,
  useParentContainer: false,
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
  },
  menuProps: {
    onSignOut: () => {},
    isAuthenticated: true,
    menuList: [
      { key: "dashKey", value: "My dashboard", path: "/" },
      { key: "securityKey", value: "Security Settings", path: "/" },
      { key: "profileKey", value: "Profile", path: "/" },
      { key: "outKey", value: "Sign out", path: "/" },
    ],
    hasNoMenu: false,
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "basic-en.html",
    displayAlternateLink: false,
  },
};

Header.propTypes = {
  /**
   * Component ID
   */
  id: PropTypes.string,

  /**
   * Switch between english and french header. Pass in "en" or "fr"
   */
  lang: PropTypes.string,

  /**
   * Language toggle redirection link
   */
  linkPath: PropTypes.string,

  /**
   * Allow user to pass in custom Link component
   **/
  customLink: PropTypes.elementType,

  /**
   * isAuthenticated: bool to switch between authenticated and non authenticated menus
   **/
  isAuthenticated: PropTypes.bool,

  /**
   * useParentContainer: bool to choose whether to use the partent container or header's container
   **/
  useParentContainer: PropTypes.bool,

  /**
   * Search Props:
   *
   * onChange: can add function for when typing in the search bar
   *
   * onSubmit: can add function for when submitting a search query
   */
  searchProps: PropTypes.shape({
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }),

  /**
   * Menu items
   *
   * profilePath: href path, which redirects to the profile page
   *
   * securityPath: href path, which redirects to the security settings page
   *
   * dashboardPath: href path, which redirects to the dashboard page
   *
   * signOutPath: href path, which the signout button will redirect to
   *
   * onSignOut: On change function used for the signout button on the browser screen
   *
   */
  menuProps: PropTypes.shape({
    onSignOut: PropTypes.func,
    menuList: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string,
        path: PropTypes.string,
      })
    ),
    hasNoMenu: PropTypes.bool,
    useParentContainer: PropTypes.bool,
  }),

  /**
   * TopNav items
   *
   * skipToMainPath: href anchor, which navigates to the H1 of the page
   *
   * skipToAboutPath: href anchor, which navigates to the Footer Id
   *
   * switchToBasicPath: href path, which redirects to the alternate HTML only page
   *
   * displayAlternateLink: Bool to display or not the alternate page link
   */
  topnavProps: PropTypes.shape({
    skipToMainPath: PropTypes.string,
    skipToAboutPath: PropTypes.string,
    switchToBasicPath: PropTypes.string,
    displayAlternateLink: PropTypes.bool,
  }),

  /**
   * Breadcrumb items
   *
   * items: set of object in breadcrumb list, give text and link for object
   */
  breadCrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),

  /**
   * Prefix for Adobe Analytics tag
   */
  dataGcAnalyticsCustomClickInstitutionVariable: PropTypes.string,

  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,

  /**
   * For tracking click events analytics
   */
  analyticsTracking: PropTypes.bool,
};
