/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Note issues with using icon when importing this component to other components.
 * Must be fixed before officially releasing this component.
 */
import PropTypes from "prop-types";
import React from "react";
import { Menu } from "../Menu/Menu";
import { Image } from "../Image/Image";
import EN from "../../translations/en.json";
import logoFile from "../../assets/sig-blk-en.svg";
import searchIcon from "../../assets/search-icon.svg";
import { Search } from "../Search/search";
import { Language } from "../Language/Language";

export function Header(props) {
  return (
    <div className="header" id={props.id}>
      <header>
        <div className="px-4 sm:container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className={`flex ${props.className}`}>
            <Image src={props.logo} alt={props.altText} />
          </a>
          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}
          <section className="flex md:hidden">
            <Language id="lang2" />
          </section>
          {/* Developer Note: This will be moved as seperate component once search component is implemented */}
          <section className="w-full md:flex md:w-22.5 py-2">
            <Search searchIcon={searchIcon} />
          </section>
          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}
          <section className="hidden md:flex pl-4 pr-8">
            <Language id="lang1" />
          </section>
        </div>
        {props.menuItems && (
          <Menu
            menuHeaderTitle={EN.menuHeaderTitle}
            menuButtonTitle={EN.menuButtonTitle}
            isAuthenticated={true}
            lang="en"
            items={props.menuItems}
          />
        )}
      </header>
    </div>
  );
}

Header.defaultProps = {
  className: "header-logo",
  logo: logoFile,
  altText: "Government of Canada",
  searchIcon: searchIcon,
};

Header.propTypes = {
  /**
   * Component ID
   */
  id: PropTypes.string,
  /**
   * This will add a image / icon to the header.
   */
  logo: PropTypes.string,
  /**
   * The text that will display as alternate text for logo.
   */
  altText: PropTypes.string,

  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  lang: PropTypes.string,

  //Developer Notes will be moved to search Component later
  searchIcon: PropTypes.string,

  /**
   * any other elements you want to add to the header
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * Menu items
   *
   */
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ),

  /**
   * Test id for unit test
   */ dataTestId: PropTypes.string,
  /**
   * Test id for e2e test
   */ dataCy: PropTypes.string,
  /**
   * Test id for e2e test
   */ dataCyHeader: PropTypes.string,
  /**
   * For tracking click events analytics
   */ analyticsTracking: PropTypes.bool,
};
