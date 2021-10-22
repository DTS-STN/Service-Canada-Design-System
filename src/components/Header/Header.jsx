import React from "react";
import PropTypes from "prop-types";
import { SearchBar } from "../SearchBar/SearchBar";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

export function Header(props) {
  return (
    // main header div
    <div
      data-testid="header"
      className="grid grid-rows-2 border-black border-2"
    >
      {/* top header grid block */}
      <div className="grid grid-cols-2 border-b-4 border-black">
        {/* logo img */}
        <a className="mt-3 ml-5">{props.logo}</a>
        {/* search bar block and language hyperlink */}
        <div className="grid grid-row-2">
          <a className="place-self-end mt-4 mr-5 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            {props.language}
          </a>
          <div className="place-self-end mt-4 mr-5 mb-5 ">
            <SearchBar placeholder={props.placeholder} />
          </div>
        </div>
      </div>
      {/* bottom header grid block */}
      <div className="grid-rows-2">
        {/* fake menu D: */}
        <div className="ml-5 ">{props.menu}</div>
        {/* <Menu props={menuProps} /> */}
        {/* directory path */}
        <Breadcrumb
          primary
          items={[
            { text: "item1", link: "" },
            { text: "item2", link: "" },
          ]}
        />
      </div>
    </div>
  );
}

//should pass in props for out components used with this. example onchange and onsubmit fucntions for the SearchBar
Header.propTypes = {
  /**
   * placeholder for search bar text
   */
  placeholder: PropTypes.string,
  /**
   * placeholder for language link
   *  */
  language: PropTypes.string,
  /**
   *   Will be an image later, placeholder as string right now
   * */
  logo: PropTypes.string,
  /**
   * Placeholder for actually menu, just to show positioning
   */
  menu: PropTypes.string,
};
