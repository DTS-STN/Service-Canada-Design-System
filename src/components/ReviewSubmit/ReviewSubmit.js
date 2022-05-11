import PropTypes from "prop-types";
import React from "react";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";

export function ReviewSubmit(props) {
  const {
    id,
    required_children,
    optional_children,
    back_btn_onClick,
    method,
    action,
  } = props;

  return (
    <form id={id} method={method} action={action}>
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
            onClick={back_btn_onClick}
            styling="secondary"
            type="button"
            text="Back"
          />
        </div>
        <div className="ds-place-self-end">
          <Button
            id="review_submit_btn"
            iconAltText="prime"
            styling="primary"
            type="submit"
            value="Submit"
            text="Submit"
          />
        </div>
      </div>
    </form>
  );
}

ReviewSubmit.defaultProps = {
  method: "get",
  action: "#",
  back_btn_onClick: () => {},
};

ReviewSubmit.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * form method
   */
  method: PropTypes.string,

  /**
   * form action
   */
  action: PropTypes.string,

  /**
   * required children props
   */
  required_children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * optional children props
   */
  optional_children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * Back button props
   */
  back_btn_onClick: PropTypes.func,
};
