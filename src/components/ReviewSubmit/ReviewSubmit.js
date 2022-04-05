import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";

export function ReviewSubmit(props) {
  const {
    id,
    required_children,
    optional_children,
    back_btn_props,
    submit_btn_props,
  } = props;

  return (
    <form id={id}>
      <div className="ds-leading-tight">
        <Heading id="withoutLink" title="Please review your information" />
      </div>
      <section className="ds-required_info">
        <p className="ds-heading2 ds-leading-tight ds-pt-38px ds-pb-24px">
          Required Information
        </p>
        {required_children}
      </section>
      <div className="ds-horizontal-regular ds-my-24px"></div>
      <section className="ds-optional_info">
        <p className="ds-heading2 ds-leading-tight ds-pb-24px">
          Optional Information
        </p>
        {optional_children}
      </section>
      <div className="ds-grid ds-grid-cols-2 md:ds-flex md:ds-flex-row">
        <div className="md:ds-pr-38px">
          <Button
            id="review_back_btn"
            onClick={back_btn_props.onClick}
            styling="secondary"
            text="Back"
          />
        </div>
        <div className="ds-place-self-end">
          <Button
            id="review_submit_btn"
            iconAltText="prime"
            onSubmit={submit_btn_props.onSubmit}
            styling="primary"
            type="submit"
            text="Submit"
          />
        </div>
      </div>
    </form>
  );
}

ReviewSubmit.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  required_children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  optional_children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * Back button props
   */
  back_btn_props: PropTypes.shape({
    onClick: PropTypes.func,
  }),

  /**
   * Submit button props
   */
  submit_btn_props: PropTypes.shape({
    onSubmit: PropTypes.func,
  }),
};
