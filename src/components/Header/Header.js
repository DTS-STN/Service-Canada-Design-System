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

export function Header(props) {
  const menuItems = [
    {
      link: "#",
      text: EN.menuItems1,
    },
    {
      link: "#",
      text: EN.menuItems2,
    },
    {
      link: "#",
      text: EN.menuItems3,
    },
  ];
  return (
    <div className="header">
      <header>
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className={`flex ${props.className}`}>
            <Image src={props.logo} alt={props.altText} />
          </a>
          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}
          <section className="flex lg:hidden md:hidden">
            <h2 className="sr-only">Language Selection</h2>
            <a className="language-toggle" href="/fr.html" lang="fr">
              <span className="language-toggle-text">Françaiss</span>
              <abbr className="language-toggle-abbr" title="Français">
                fr
              </abbr>
            </a>
          </section>
          {/* Developer Note: This will be moved as seperate component once search component is implemented */}
          <section className="w-full lg:flex lg:w-auto md:flex md:w-auto py-2">
            <h2 className="sr-only">Search</h2>
            <form className="search-form" role="search" name="search-box">
              <label className="sr-only search-label" htmlFor="search-input">
                Search Service Canada
              </label>
              <input
                value=""
                id="search-input"
                className="search-input"
                type="search"
                placeholder="Search Service Canada"
              />
              <button
                className="search-button"
                title="Search bar button"
                type="submit"
              >
                <Image
                  className="search-icon"
                  src={props.searchIcon}
                  alt="Search Service Canada"
                />
              </button>
            </form>
          </section>
          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}
          <section className="hidden lg:flex md:flex pl-4 pr-8">
            <h2 className="sr-only">Language Selection</h2>
            <a className="language-toggle" href="/fr.html" lang="fr">
              <span className="language-toggle-text">Français</span>
              <abbr className="language-toggle-abbr" title="Français">
                fr
              </abbr>
            </a>
          </section>
          {/* <section className='w-full relative'> */}
          <Menu
            menuHeaderTitle={EN.menuHeaderTitle}
            menuButtonTitle={EN.menuButtonTitle}
            isAuthenticated={true}
            lang="en"
            items={menuItems}
          />
          {/* </section> */}
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  /**
   * This will add a image / icon to the header.
   */
  logo: PropTypes.string,
  /**
   * The text that will display as alternate text for logo.
   */ altText: PropTypes.string,
  /**
   * Lang attribute for links that do not match the language of the top level document
   */ lang: PropTypes.string,
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
