import PropTypes from "prop-types";
import React from "react";

export function Cards(props) {
  const {
    cardId,
    titleProps,
    labelProps,
    hasDivider,
    imageProps,
    description,
    firstLinkProps,
    secondLinkProps,
  } = props;
  return <div id={cardId}></div>;
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
};
