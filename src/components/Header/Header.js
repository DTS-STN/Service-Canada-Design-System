/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Note issues with using icon when importing this component to other components.
 * Must be fixed before officially releasing this component.
 */
import PropTypes from "prop-types";
import React from "react";
import "./Header.css";
import searchIcon from "../../assets/search-icon.svg";

export function Header(props) {
  return (
    <div class="header">
      <nav class="skip-nav">
        <a class="hide-element skip-link" href="#main">
          Skip to main content
        </a>
      </nav>

      <header>
        <div class="header-top max-width-wrapper">
          <img class={props.className} src={props.logo} alt={props.altText} />

          {/* Developer Note: This will be moved as seperate component once language translater component is implemented */}

          <section class="language-select-section">
            <h2 class="hide-element">Language Selection</h2>

            <a class="language-toggle" href="/fr.html" lang="fr">
              <span class="language-toggle-text">Français</span>

              <abbr class="language-toggle-abbr" title="Français">
                fr
              </abbr>
            </a>
          </section>

          {/* Developer Note: This will be moved as seperate component once search component is implemented */}

          <section class="search-section">
            <h2 class="hide-element">Search</h2>
            <form class="search-form" role="search" name="search-box">
              <label class="hide-element search-label" for="search-input">
                Search Service Canada
              </label>

              <input
                value=""
                id="search-input"
                class="search-input"
                type="search"
                placeholder="Search Service Canada"
              />

              <button
                class="search-button"
                title="Search bar button"
                type="submit"
              >
                <img
                  class="search-icon"
                  src={searchIcon}
                  alt="Search Service Canada"
                />
              </button>
            </form>
          </section>
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
  /**
   * any other elements you want to add to the header
   */ children: PropTypes.oneOfType([
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
