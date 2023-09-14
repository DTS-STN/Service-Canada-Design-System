/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label/Label";
import "./style.scss";

export function Card(props) {
  const cardStyle = `card card--${props.size}`;
  const imageContainer = `image-container image-container--${props.size}`;
  const Component = props.LinkComponent ? props.LinkComponent : "a";

  return (
    <div
      className={cardStyle}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
      aria-label={props.ariaLabel}
      tabIndex="0"
    >
      <Component href={props.href} {...props.LinkProps}>
        <div>
          {props.showImage && (
            <div className={imageContainer}>
              <img
                src={props.imgSrc}
                alt={props.imgAlt}
                className="ds-object-fill"
              />
            </div>
          )}
          <div className="body">
            <p className="title">{props.title}</p>
            {props.showLabel && (
              <Label type={props.labelType} text={props.labelText} />
            )}
            <p className="description">{props.description}</p>
          </div>
        </div>
      </Component>
    </div>
  );
}

Card.defaultProps = {
  size: "standard",
  title: "Title Link",
};

Card.propTypes = {
  /**
   * Size of the card (either 'standard' or 'large')
   */
  size: PropTypes.oneOf(["standard", "large"]),
  /**
   * Title of the experiment card.
   */
  title: PropTypes.string.isRequired,

  /**
   * Link of the card
   */
  href: PropTypes.string,

  /**
   * the label of the tag card
   */
  labelText: PropTypes.string,

  /**
   * Description of the experiment card.
   */
  description: PropTypes.string.isRequired,

  /**
   * the test id for unit tests
   */
  dataTestId: PropTypes.string,

  /**
   * the test id for cypress test
   */
  dataCy: PropTypes.string,

  /**
   * Boolean value to show or hide image
   */
  showImage: PropTypes.bool,

  /**
   * Boolean value to show or hide tag
   */
  showLabel: PropTypes.bool,

  /**
   * Custom link component, e.g. next/link for client-side routing.
   */
  LinkComponent: PropTypes.elementType,

  /**
   * Props for the custom link component.
   */
  customLinkProps: PropTypes.object,
};
