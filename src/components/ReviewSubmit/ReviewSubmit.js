import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";

export function ReviewSubmit(props) {
  const {
    id,
    required_results,
    optional_results,
    back_btn_props,
    submit_btn_props,
  } = props;

  return (
    <form id={id}>
      <Heading id="withoutLink" title="Please review your information" />
      <section className="ds-required_info">
        <p className="ds-heading2">Required Info</p>
      </section>
      <div className="ds-horizontal-regular"></div>
      <section className="ds-optional_info">
        <p className="ds-heading2">Optional Info</p>
      </section>
      <div className="ds-flex ds-flex-row ">
        <Button
          id="review_back_btn"
          onClick={back_btn_props.onClick}
          styling="secondary"
          text="Back"
        />
        <Button
          id="review_submit_btn"
          iconAltText="prime"
          onSubmit={submit_btn_props.onSubmit}
          styling="primary"
          type="submit"
          text="Submit"
        />
      </div>
    </form>
  );
}

ReviewSubmit.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * object containing results for any required information to display on the page
   */
  required_results: PropTypes.objectOf(PropTypes.any),

  /**
   * object containing results for any optional information to display on the page
   */
  optional_results: PropTypes.objectOf(PropTypes.any),

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
