/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

export function Stepper(props) {
  return (
    <div className="ds-border-multi-neutrals-grey85a ds-border ds-px-4 ds-pt-3 ds-pb-7">
      <h1 className="ds-caption-large">{props.name}</h1>
      <h1 className="ds-heading1 ds-mb-14">{props.heading}</h1> {props.children}
      <div className="ds-flex ds-flex-horizontal ds-justify-between ds-pt-10">
        <div>
          <Button
            id={props.nextProps?.id}
            iconAltText={props.previousProps?.iconAltText}
            onClick={props.previousProps?.onClick}
            styling={props.previousProps?.styling}
            text={props.previousProps?.text}
          />
        </div>
        <div className="ds-w-min">
          <Button
            id={props.nextProps?.id}
            iconAltText={props.nextProps?.iconAltText}
            onClick={props.nextProps?.onClick}
            styling={props.nextProps?.styling}
            text={props.nextProps?.text}
          />
        </div>
      </div>
    </div>
  );
}

Stepper.defaultProps = {
  href: "#",
};

Stepper.propTypes = {
  id: PropTypes.string.isRequired,
  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  dataTestId: PropTypes.string,
  /**
   * Use ariaLabel to provide more descriptive text for a link (screen reader friendly)
   */
  ariaLabel: PropTypes.string,
  /**
   * Name of stepper, to be used as part of Heading 1
   */
  name: PropTypes.string,
  /**
   * Name of stepper, to be used as part of Heading 1
   */
  heading: PropTypes.string,
  /**
   * code passed in to fill stepper body.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
