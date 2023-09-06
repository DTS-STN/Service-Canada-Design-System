import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import searchIcon from "../../assets/search-icon.svg";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";

/**
 *  Search bar component
 */
export function SearchBar(props) {
  const { searchIcon } = props;
  return (
    <form
      className="ds-w-full md:ds-w-max-[360px] ds-flex ds-justify-end ds-items-center"
      role="search"
      name="search-box"
      onSubmit={props.onSubmit}
    >
      <label className="ds-sr-only ds-search-label" htmlFor="search-input">
        {props.lang === "en"
          ? EN.searchPlaceholderText
          : FR.searchPlaceholderText}
      </label>
      <input
        onChange={props.onChange}
        id="search-input"
        className="ds-search-input ds-w-full ds-text-[#5C5C5C]"
        type="search"
        placeholder={
          props.lang === "en"
            ? EN.searchPlaceholderText
            : FR.searchPlaceholderText
        }
      />
      <div className="ds-search-button hover:ds-bg-[#444]">
        <button
          title={
            props.lang === "en"
              ? EN.searchButtonHoverText
              : FR.searchButtonHoverText
          }
          type="submit"
        >
          <Image
            className="ds-search-icon ds-ml-[2px]"
            src={searchIcon}
            alt="Search Service Canada"
          />
        </button>
      </div>
    </form>
  );
}

SearchBar.defaultProps = {
  searchIcon: searchIcon,
  lang: "en",
};

SearchBar.propTypes = {
  /**
   * path to icon
   */
  searchIcon: PropTypes.string,

  /**
   * Switch between english and french. Pass in "en" or "fr"
   */
  lang: PropTypes.string,

  /**
   * Action to do on input change
   */
  onChange: PropTypes.func,

  /**
   * Action to do on form submit
   */
  onSubmit: PropTypes.func,
};
