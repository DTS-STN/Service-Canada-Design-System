import React from "react";
import PropTypes from "prop-types";
import { Link } from "../Link/Link";
import { Label } from "../Label/Label";
import "./style.scss";

export function Card(props) {
  const cardStyle = `card card--${props.size}`;

  return (
    <div
      className={cardStyle}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
    >
      {props.showImage && (
        <div className="image-container">
          <img
            src={props.imgSrc}
            alt={props.imgAlt}
            className="ds-object-fill"
          />
        </div>
      )}
      <div className="body">
        <Link
          linkStyle="titleLink"
          href={props.href}
          text={props.title}
          ariaLabel={props.title}
        />
        {props.showLabel && (
          <Label type={props.labelType} text={props.labelText} />
        )}
        <p className="description">{props.description}</p>
      </div>
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
};
