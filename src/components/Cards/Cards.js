import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";

export function Cards(props) {
  const {
    cardId,
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
  } = props;
  return (
    // remove width after, just for testing
    <div
      id={cardId}
      className="rounded shadow-md flex flex-col py-20px px-24px"
    >
      <p className="card-title-non-link mb-8px">{titleProps.title}</p>
      {/* Replace with Label Component */}
      <p className="">Label Component</p>
      <p className="caption-large">{secondaryText}</p>
      {hasDivider ? <div className="horizontal-muted my-16px" /> : null}
      <Image
        className="mb-16px h-200px"
        id={imageProps.id}
        alt={imageProps.altText}
        src={imageProps.imgPath}
      />
      <p className="mb-20px leading-tight card-body-text">{description}</p>
      <div className="flex flex-col sm:flex-row">
        {/* update linkStyle when stlye is created */}
        {hasLinkFirst || !titleProps.hasLink ? (
          <div className="mb-20px">
            <Link
              linkStyle="titleLink"
              id={firstLinkProps.id}
              text={firstLinkProps.name}
              href={firstLinkProps.path}
            />
          </div>
        ) : null}
        {hasLinkSecond ? (
          <Link
            linkStyle="titleLink"
            id={secondLinkProps.id}
            text={secondLinkProps.name}
            href={secondLinkProps.path}
          />
        ) : null}
      </div>
    </div>
  );
}

Cards.propTypes = {
  /**
   * component id
   */
  cardId: PropTypes.string.isRequired,

  /**
   * Props for the cards title.
   * hasLink: If true creates the title as a text link (must include path)
   * title: Title of the card
   * path: path which the title link directs the user to (if hasLink is true)
   */
  titleProps: PropTypes.shape({
    hasLink: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
  }).isRequired,

  /**
   * label component needs to be created
   */
  labelProps: PropTypes.string,

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
    id: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
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
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
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
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),

  /**
   * If true will display the second link prop
   * Must also pass into secondLinkProps with its required props
   */
  hasLinkSecond: PropTypes.bool,
};
