import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";
// Text Link component not implimented yet
import EN from "../../translations/en";
import FR from "../../translations/fr";
import btnIcon from "../../assets/downArrow.svg";
// import btnIcon from "../../assets/youtube.svg";

export function ErrorPage(props) {
  return (
    <>
      {props.lang ? (
        // English
        <>
          <Heading id="error_heading" title={EN.errorPageHeadingTitle} />
          <div>
            <p className="body mt-2">{EN.errorPageErrorText}</p>
            <br />
            <p className="error-next-text">{EN.errorPageNextText}</p>
            <h2 className="hide-element">Whats Next Links</h2>
            {props.errType === "404" ? (
              <ul>
                <li className="body pl-3">
                  {EN.error404TextLink1}
                  {/* replace with text link component in future */}
                  <a href="/">{EN.error404TextLink1_2}</a>
                </li>
              </ul>
            ) : null}
            {props.errType === "500" ? (
              <>
                <ul>
                  <li className="body pl-3">{EN.error500TextLink1}</li>
                  <li className="body pl-3">
                    {EN.error500TextLink2}
                    {/* replace with text link component in future */}
                    <a href="/">{EN.error500TextLink2_2}</a>
                  </li>
                </ul>
                <br />
                <br />
                <Button
                  icon={btnIcon}
                  iconEnd={false}
                  id="errBtnSecondary"
                  text={EN.reportAProblem}
                  style="secondary"
                  secondary={true}
                />
              </>
            ) : null}
            <br />
            <br />
            <p className="error-type-text">
              {EN.errorPageType} {props.errType}
            </p>
          </div>
        </>
      ) : (
        // French
        <>
          <Heading id="error_heading" title={FR.errorPageHeadingTitle} />
          <div>
            <p className="body mt-2">{FR.errorPageErrorText}</p>
            <br />
            <p className="error-next-text">{FR.errorPageNextText}</p>
            <h2 className="hide-element">{FR.errorPageNextText} Links</h2>
            {props.errType === "404" ? (
              <ul>
                <li className="body pl-3">
                  {FR.error404TextLink1}
                  {/* replace with text link component in future */}
                  <a href="/">{FR.error404TextLink1_2}</a>
                </li>
              </ul>
            ) : null}
            {props.errType === "500" ? (
              <>
                <ul>
                  <li className="body pl-3">{FR.error500TextLink1}</li>
                  <li className="body pl-3">
                    {FR.error500TextLink2}
                    {/* replace with text link component in future */}
                    <a href="/">{FR.error500TextLink2_2}</a>
                  </li>
                </ul>
                <br />
                <br />
                <Button
                  icon={btnIcon}
                  iconEnd={false}
                  id="errBtnSecondary"
                  text={FR.reportAProblem}
                  style="secondary"
                  secondary={true}
                />
              </>
            ) : null}
            <br />
            <br />
            <p className="error-type-text">
              {FR.errorPageType} {props.errType}
            </p>
          </div>
        </>
      )}
    </>
  );
}

ErrorPage.propTypes = {
  /**
   * If lang is true use english translations, if false use french translations
   */
  lang: PropTypes.bool.isRequired,

  /**
   * If lang is true use english translations, if false use french translations
   */
  errType: PropTypes.oneOf(["404", "500"]).isRequired,
};
