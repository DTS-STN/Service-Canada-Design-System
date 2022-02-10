import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";

export function Search(props) {
  const { searchIcon } = props;

  return (
    <>
      <h2 className="sr-only">Search</h2>
      <form className="search-form w-full" role="search" name="search-box">
        <label className="sr-only search-label" htmlFor="search-input">
          Search Canada.ca
        </label>
        <input
          value=""
          id="search-input"
          className="search-input"
          type="search"
          placeholder="Search Canada.ca"
        />
        <button
          className="search-button"
          title="Search bar button"
          type="submit"
        >
          <Image
            className="search-icon"
            src={searchIcon}
            alt="Search Service Canada"
          />
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  /**
   * path to icon
   */
  searchIcon: PropTypes.string,
};
