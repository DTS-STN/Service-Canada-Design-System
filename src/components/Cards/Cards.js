import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";
import { Labels } from "../Labels/Labels";

export function Cards(props) {
  const {
    id,
    titleProps,
    labelProps,
    secondaryText,
    hasDivider,
    imageProps,
    description,
    firstLinkProps,
    secondLinkProps,
    hasLinkFirst,
    hasLinkSecond,
    displayColumn,
  } = props;
  let display = "ds-flex ds-flex-col sm:ds-grid sm:ds-grid-cols-2";
  let link2Padding = displayColumn ? "ds-mt-24px" : "ds-mt-20px ";
  return (
    // remove width after, just for testing
    <div id={id} className="ds-rounded ds-shadow-md ds-flex ds-flex-col">
      <div className="ds-pt-20px ds-px-24px">
        {titleProps.hasLink ? (
          <Link
            linkStyle="titleLink"
            id={id + "cardTitle"}
            text={titleProps.title}
            href={titleProps.path}
          />
        ) : (
          <p className="ds-card-title-non-link ds-leading-tight">
            {titleProps.title}
          </p>
        )}
        {/* Replace with Label Component */}
        <div className="ds-mb-4">
          {labelProps !== undefined ? (
            <div className="ds-mt-2">
              <Labels
                id={id + "cardLabel"}
                text={labelProps.text}
                type={labelProps.type}
              />
            </div>
          ) : null}
          {secondaryText !== undefined ? (
            <p className="ds-caption-large">{secondaryText}</p>
          ) : null}
        </div>
        {hasDivider ? <div className="ds-horizontal-muted ds-my-16px" /> : null}
      </div>
      {imageProps !== undefined ? (
        <>
          <Image
            className="ds-h-200px"
            id={id + "cardImage"}
            alt={imageProps.altText}
            src={imageProps.imgPath}
          />
          <p className="ds-px-24px ds-mt-20px ds-leading-tight ds-card-body-text">
            {description}
          </p>
        </>
      ) : (
        <p className="ds-px-24px ds-leading-tight ds-card-body-text">
          {description}
        </p>
      )}
      <div className={`ds-mb-20px ds-px-24px ${display}`}>
        {/* update linkStyle when stlye is created */}
        {hasLinkFirst || !titleProps.hasLink ? (
          <div className="sm:ds-mt-24px ds-mt-20px">
            <Link
              linkStyle="cardActionLink"
              id={id + "firstLink"}
              text={firstLinkProps.name}
              href={firstLinkProps.path}
            />
          </div>
        ) : null}
        {hasLinkSecond ? (
          <div className={link2Padding}>
            <Link
              linkStyle="cardActionLink"
              id={id + "secondLink"}
              text={secondLinkProps.name}
              href={secondLinkProps.path}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

Cards.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

  /**
   * Props for the cards title.
   * hasLink: If true creates the title as a text link (must include path)
   * title: Title of the card
   * path: path which the title link directs the user to (if hasLink is true)
   */
  titleProps: PropTypes.shape({
    hasLink: PropTypes.bool,
    title: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,

  /**
   * Props for the label component within the card
   * id: id of the label component
   * text: text that displays on the label component
   * type: one of the following label types can be passed in;
   * default, primary, danger, warning, info, success
   */
  labelProps: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,

  /**
   * Card secondary text
   */
  secondaryText: PropTypes.string,

  /**
   * If true displays divider in card
   */
  hasDivider: PropTypes.bool,

  /**
   * Props for the cards image section
   * id: id of the image prop
   * altText: image alt text
   * imgPath: path to the image that should be displayed
   */
  imageProps: PropTypes.shape({
    id: PropTypes.string,
    altText: PropTypes.string,
    imgPath: PropTypes.string,
  }),

  /**
   * Card discription
   */
  description: PropTypes.string.isRequired,

  /**
   * Props for the cards first action link
   * id: id of the first link
   * name: name of the link
   * path: path which the link directs the user to
   */
  firstLinkProps: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }),

  /**
   * If true will display the first link prop
   * Must also pass into firstLinkProps with its required props
   */
  hasLinkFirst: PropTypes.bool,

  /**
   * Props for the cards second action link
   * id: id of the second link
   * name: name of the link
   * path: path which the link directs the user to
   */
  secondLinkProps: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }),

  /**
   * If true will display the second link prop
   * Must also pass into secondLinkProps with its required props
   */
  hasLinkSecond: PropTypes.bool,
};
