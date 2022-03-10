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
import { SearchBar } from "../SearchBar/SearchBar";
import { Language } from "../Language/Language";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

export function Header(props) {
  var onChange =
    props.searchProps.onChange === undefined ? {} : props.searchProps.onChange;
  var onSubmit =
    props.searchProps.onSubmit === undefined ? {} : props.searchProps.onSubmit;
  return (
    <div className="header" id={props.id}>
      <header>
        <div className="px-4 sm:container md:flex-nowrap md:flex-row flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className={`flex w-20px h-20px ${props.className}`}>
            <Image src={props.logo} alt={props.altText} />
          </a>
          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}
          <section className="flex md:hidden">
            <Language id="lang2" />
          </section>
          {/* Developer Note: This will be moved as seperate component once search component is implemented */}
          <section className="w-full md:flex md:w-284px py-2">
            <SearchBar
              searchIcon={props.searchIcon}
              onChange={onChange}
              onSubmit={onSubmit}
            />
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
        {props.breadCrumbItems && (
          <div className="container">
            <Breadcrumb items={props.breadCrumbItems.items} />
          </div>
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
  searchProps: {
    onChange: {},
    onSubmit: {},
  },
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

  /**
   * Search Props:
   * onChange: can add function for when typing in the search bar
   * onSubmit: can add function for when submitting a search query
   * searchIcon: Default already assigned, can be changed if needed
   */
  searchIcon: PropTypes.string,
  searchProps: PropTypes.shape({
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }),

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
