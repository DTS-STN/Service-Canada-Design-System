import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";

export function ErrorPageTemp(props) {
  const { title, errorText, nextText, links, errorType } = props;

  return (
    <>
      <Heading id="error_heading" title={title} />
      <div>
        <p className="body mt-2">{errorText}</p>
        <br />
        <p className="error-next-text">{nextText}</p>
        <h2 className="hide-element">Whats Next Links</h2>

        <ul className="ml-3 flex flex-col md:grid md:grid-cols-2 xl:flex lg:flex-row">
          {links.map((value, index) => {
            return (
              <li key={index} className={"body mr-2.5 list-inside list-disc"}>
                {value.linkText1}
                {/* link text component goes here */}
                <a className="body" href={value.link}>
                  {value.linkText2}
                </a>
              </li>
            );
          })}
        </ul>
        {errorType === "500" ? <Button /> : null}
        <br />
        <br />
        <p className="error-type-text">{errorType}</p>
      </div>
    </>
  );
}

ErrorPageTemp.propTypes = {
  /**
   * If lang is true use english translations, if false use french translations
   */
  title: PropTypes.string.isRequired,

  /**
   * If lang is true use english translations, if false use french translations
   */
  errorText: PropTypes.string.isRequired,

  /**
   * If lang is true use english translations, if false use french translations
   */
  nextText: PropTypes.string.isRequired,

  /**
   * If lang is true use english translations, if false use french translations
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText1: PropTypes.string.isRequired,
      linkText2: PropTypes.string.isRequired,
    })
  ).isRequired,

  /**
   * If lang is true use english translations, if false use french translations
   */
  errorType: PropTypes.oneOf(["404", "500"]).isRequired,

  /**
   * If lang is true use english translations, if false use french translations
   */
  reportBtn: PropTypes.string.isRequired,
};
