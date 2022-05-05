/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

export function DatePicker(props) {
  const { id, method, action, startMin, startMax, endMin, endMax } = props;

  return (
    <form id={id} method={method} action={action}>
      <div>
        <label for="startdate">
          Start Date
          <span class="datepicker-format">
            (
            <abbr title="Four digits year, dash, two digits month, dash, two digits day">
              YYYY-MM-DD
            </abbr>
            )
          </span>
        </label>
        <br />
        <input
          type="date"
          id="startdate"
          className="ds-date-style ds-date-font"
          name="startdate"
          min={startMin}
          max={startMax}
        />
      </div>
      <div className="ds-pt-10px">
        <label for="enddate">
          End Date
          <span class="datepicker-format">
            (
            <abbr title="Four digits year, dash, two digits month, dash, two digits day">
              YYYY-MM-DD
            </abbr>
            )
          </span>
        </label>
        <br />
        <input
          type="date"
          id="enddate"
          className="ds-date-style ds-date-font"
          name="enddate"
          min={endMin}
          max={endMax}
        />
      </div>
      <div className="ds-pt-10px">
        <Button
          id="review_submit_btn"
          iconAltText="prime"
          styling="secondary"
          type="submit"
          value="Submit"
          text="Submit"
        />
      </div>
    </form>
  );
}

DatePicker.defaultProps = {
  method: "get",
  action: "/",
};

DatePicker.propTypes = {
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
   * Start day min
   */
  startMin: PropTypes.string,

  /**
   * Start day max
   */
  startMax: PropTypes.string,

  /**
   * End day min
   */
  endMin: PropTypes.string,

  /**
   * End day max
   */
  endMax: PropTypes.string,
};
