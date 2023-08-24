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
import dropdown from "../../assets/dropdown.svg";

export function GlobalHeader(props) {
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
      <div
        className="ds-header ds-px-0 ds-mx-0"
        id={id}
        data-testid="ds-header ds-px-0 ds-mx-0"
      >
        <header>
          {/* Mobile */}
          <div
            className={`${containerClass} sm:ds-hidden ds-container ds-flex ds-flex-col  md:ds-pb-14px ds-max-w-6xl`}
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
            <div>
              <SearchBar lang={lang} />
            </div>
          </div>
          {/* Desktop */}
          <div className="ds-max-w-6xl ds-mx-auto">
            <div className="ds-invisible sm:ds-visible ds-mx-auto ds-w-full">
              <div className="ds-flex ds-flex-row">
                <div className="ds-w-full"></div>
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

              <div className="ds-flex ">
                <div className={`header-logo ds-flex-initial`}>
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
                <div className="ds-flex-auto">
                  <SearchBar lang={lang} />
                </div>
              </div>
            </div>
          </div>
          {!menuProps.hasNoMenu && (
            <>
              <hr className="ds-border-t-[3px] ds-border-[#26374a] ds-mt-1 ds-px-0" />
              {/* <MenuGlobal globalMenuProps={globalMenuProps} /> */}
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
            <div className={`${containerClass} ds-container`}>
              <Breadcrumb items={breadCrumbItems} />
            </div>
          )}
        </header>
      </div>
    </>
  );
}

GlobalHeader.defaultProps = {
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
  globalMenuProps: { menuList: [] },
};

GlobalHeader.propTypes = {
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

  /**
   * A custom object configuration called booBoo
   */
  globalMenuProps: PropTypes.object,
};
