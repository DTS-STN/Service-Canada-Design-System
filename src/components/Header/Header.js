/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import { Menu } from "../Menu/Menu";
import { Image } from "../Image/Image";
import EN from "../../translations/en.json";
import logoFile from "../../assets/sig-blk-en.svg";
import logoFilefr from "../../assets/sig-blk-fr.svg";
import { SearchBar } from "../SearchBar/SearchBar";
import { Language } from "../Language/Language";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

export function Header(props) {
  var onChange =
    props.searchProps.onChange === undefined ? {} : props.searchProps.onChange;
  var onSubmit =
    props.searchProps.onSubmit === undefined ? {} : props.searchProps.onSubmit;
  return (
    <div className="ds-header" id={props.id}>
      <header>
        <div className="ds-px-4 sm:ds-container md:ds-flex-nowrap md:ds-flex-row ds-flex ds-flex-wrap ds-justify-between ds-items-center ds-mx-auto">
          <a href="#" className={`${props.className} ds-mb-8px`}>
            <Image
              src={props.lng === "fr" ? { logoFilefr } : props.logo}
              alt={props.altText}
            />
          </a>
          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}
          <section className="ds-flex md:ds-hidden">
            <Language id="lang2" />
          </section>
          {/* Developer Note: This will be moved as seperate component once search component is implemented */}
          <section className="ds-w-full md:ds-flex md:ds-w-332px ds-py-2">
            <SearchBar onChange={onChange} onSubmit={onSubmit} />
          </section>
          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}
          <section className="ds-hidden md:ds-flex ds-pl-4 ds-pr-8 md:ds-pr-0">
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
          <div className="ds-container">
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
