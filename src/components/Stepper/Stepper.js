/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

export function Stepper(props) {
  return (
    <div className="ds-border-multi-neutrals-grey85a ds-border ds-pt-3 ds-pb-6">
      <div className="ds-px-4">
        <h1 className="sm:ds-pb-12 ds-pb-6">
          <div className="ds-text-[22px] ds-leading-[33px] ds-text-[#666666] ds-font-[400] font-display font-normal">
            {props.name}
          </div>
          <div className="ds-heading1">
            {props.step}: {props.heading}
          </div>
        </h1>
        {props.children}
        <div className="ds-flex ds-justify-center sm:ds-justify-between ds-p  t-8 sm:ds-pt-12">
          <div className="ds-mr-6 sm:ds-mr-0">
            {props.previousProps && (
              <Button
                id={props.nextProps?.id}
                iconAltText={props.previousProps?.iconAltText}
                onClick={props.previousProps?.onClick}
                styling={props.previousProps?.styling}
                text={props.previousProps?.text}
              />
            )}
          </div>

          <div className="ds-ml-6 sm:ds-ml-0">
            {props.nextProps && (
              <Button
                id={props.nextProps?.id}
                iconAltText={props.nextProps?.iconAltText}
                onClick={props.nextProps?.onClick}
                styling={props.nextProps?.styling}
                text={props.nextProps?.text}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Stepper.defaultProps = {
  href: "#",
};

Stepper.propTypes = {
  /**
   * Unique identifier in the case of multiple components
   */
  id: PropTypes.string.isRequired,
  /**
   * Tracking variable for data tests
   */
  dataTestId: PropTypes.string,
  /**
   * Aria label used for accessibility purposes. Name variable should only be included on the first step only.
   */
  ariaLabel: PropTypes.string,
  /**
   * Name of stepper, to be used as part of Heading 1
   */
  name: PropTypes.string,
  /**
   * Step in the process
   */
  step: PropTypes.string,
  /**
   * Description of the step
   */
  heading: PropTypes.string,
  /**
   * Object to define Previous button
   */
  previousProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string,
      styling: PropTypes.string,
      iconAltText: PropTypes.string,
    })
  ),
  /**
   * Object to define Next button
   */
  nextProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string,
      styling: PropTypes.string,
      iconAltText: PropTypes.string,
    })
  ),
  /**
   * code passed in to fill stepper body.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
