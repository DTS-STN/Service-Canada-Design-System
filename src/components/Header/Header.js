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
    isAuthenticated,
    linkPath,
    searchProps,
    menuProps,
    breadCrumbItems,
    topnavProps,
  } = props;

  return (
    <div className="ds-header" id={id}>
      <TopNav
        lang={lang}
        skipToMainPath={topnavProps.skipToMainPath}
        skipToAboutPath={topnavProps.skipToAboutPath}
        switchToBasicPath={topnavProps.switchToBasicPath}
        displayAlternateLink={topnavProps.displayAlternateLink}
      />
      <header>
        <div className="ds-container ds-flex ds-flex-col sm:ds-flex-row md:ds-pb-14px">
          <div className="ds-flex ds-flex-row sm:ds-pt-12px">
            <div className={`header-logo ds-pt-6px`}>
              <Image
                className="md:ds-max-w-360px md:ds-max-h-34px ds-max-w-206px ds-max-h-19px"
                src={lang === "en" ? logoFile : logoFileFR}
                alt="Government of Canada"
              />
            </div>
            <div className="sm:ds-hidden ds-ml-auto ds-pb-10px">
              <Language id="lang2" lang={lang} path={linkPath} />
            </div>
          </div>
          {!isAuthenticated ? (
            <>
              <div className="sm:ds-ml-auto ds-w-full md:ds-flex md:ds-w-332px ds-pb-20px ds-pt-10px sm:ds-pr-14px md:ds-pt-20px md:ds-pb-10px">
                <SearchBar
                  onChange={searchProps.onChange}
                  onSubmit={searchProps.onSubmit}
                />
              </div>
              <div className="ds-hidden sm:ds-flex sm:ds-pt-10px md:ds-pt-18px">
                <Language id="lang1" lang={lang} path={linkPath} />
              </div>
            </>
          ) : (
            <div className="ds-pb-10px sm:ds-pb-14px md:ds-pb-0 ds-hidden sm:ds-ml-auto sm:ds-flex sm:ds-pt-10px md:ds-pt-18px">
              <Language id="lang1" lang={lang} path={linkPath} />
            </div>
          )}
        </div>
        {!menuProps.hasNoMenu && (
          <Menu
            craPath={menuProps.craPath}
            dashboardPath={menuProps.dashboardPath}
            profilePath={menuProps.profilePath}
            securityPath={menuProps.securityPath}
            signOutPath={menuProps.signOutPath}
            lang={lang}
            isAuthenticated={isAuthenticated}
            onSignOut={menuProps.onSignOut}
          />
        )}
        {breadCrumbItems && (
          <div className="ds-container">
            <Breadcrumb items={breadCrumbItems} />
          </div>
        )}
      </header>
    </div>
  );
}

Header.defaultProps = {
  lang: "en",
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
  },
  menuProps: {
    onSignOut: () => {},
    isAuthenticated: true,
    signOutPath: "/",
    dashboardPath: "/",
    securityPath: "/",
    profilePath: "/",
    craPath: "/",
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
  lang: PropTypes.oneOf(["en", "fr"]),

  /**
   * Language toggle redirection link
   */
  linkPath: PropTypes.string,

  /**
   * isAuthenticated: bool to switch between authenticated and non authenticated menus
   **/
  isAuthenticated: PropTypes.bool,

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
    dashboardPath: PropTypes.string,
    onSignOut: PropTypes.func,
    profilePath: PropTypes.string,
    securityPath: PropTypes.string,
    signOutPath: PropTypes.string,
    hasNoMenu: PropTypes.bool,
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
   * Test id for unit test
   */
  dataTestId: PropTypes.string,

  /**
   * For tracking click events analytics
   */
  analyticsTracking: PropTypes.bool,
};
