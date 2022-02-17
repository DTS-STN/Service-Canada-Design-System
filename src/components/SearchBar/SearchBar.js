import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import searchIcon from "../../assets/search-icon.svg";

/**
 *  Search bar component
 */
export function SearchBar(props) {
  const { searchIcon } = props;
  return (
    <form
      className="search-form w-full"
      role="search"
      name="search-box"
      onSubmit={props.onSubmit}
    >
      <label className="sr-only search-label" htmlFor="search-input">
        Search Canada.ca
      </label>
      <input
        onChange={props.onChange}
        id="search-input"
        className="search-input"
        type="search"
        placeholder="Search Canada.ca"
      />

      <button className="search-button" title="Search bar button" type="submit">
        <Image
          className="search-icon"
          src={searchIcon}
          alt="Search Service Canada"
        />
      </button>
    </form>
  );
}

SearchBar.defaultProps = {
  searchIcon: searchIcon,
};

SearchBar.propTypes = {
  /**
   * path to icon
   */
  searchIcon: PropTypes.string,

  /**
   * Action to do on input change
   */
  onChange: PropTypes.func,

  /**
   * Action to do on form submit
   */
  onSubmit: PropTypes.func,
};
