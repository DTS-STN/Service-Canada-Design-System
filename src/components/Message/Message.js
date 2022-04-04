import PropTypes from "prop-types";
import React from "react";
// import { Image } from "../Image/Image";
import success_img from "../../assets/success_img.svg";
import warning_img from "../../assets/warning_img.svg";
import danger_img from "../../assets/danger_img.svg";
import info_img from "../../assets/info_img.svg";

export function Message(props) {
  const {
    message_heading,
    message_body,
    id,
    type,
    alert_icon_id,
    alert_icon_alt_text,
  } = props;
  let alert_type =
    type === "warning"
      ? warning_img
      : type === "danger"
      ? danger_img
      : type === "info"
      ? info_img
      : success_img;
  let alert_color =
    type === "warning"
      ? "ds-warning_color"
      : type === "danger"
      ? "ds-danger_color"
      : type === "info"
      ? "ds-info_color"
      : "ds-success_color";

  return (
    <div
      id={id}
      className={`ds-relative ds-${type} ds-min-w-290px sm:ds-py-28px sm:ds-px-24px ds-py-16px ds-px-16px`}
    >
      <div className="ds-absolute ds-top-10 sm:ds-left-3.5 ds-left-1.5 ds-bg-multi-neutrals-white ds-py-4px">
        {/* change back to image component once fixed */}
        <img id={alert_icon_id} src={alert_type} alt={alert_icon_alt_text} />
      </div>
      <div
        className={`ds-overflow-auto ds-border-l-6 ${alert_color} sm:ds-pl-24px ds-pl-16px`}
      >
        <p className="ds-heading3">{message_heading}</p>
        <p className="ds-body">{message_body}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

  /**
   * alert type
   */
  type: PropTypes.oneOf(["danger", "warning", "info", "success"]).isRequired,

  /**
   * id for the alert icon
   */
  alert_icon_id: PropTypes.string.isRequired,

  /**
   * Alternate text for the alert icon
   */
  alert_icon_alt_text: PropTypes.string.isRequired,

  /**
   * heading text
   */
  message_heading: PropTypes.string.isRequired,

  /**
   * body text
   */
  message_body: PropTypes.string.isRequired,
};
