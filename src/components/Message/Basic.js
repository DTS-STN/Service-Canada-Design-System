import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import icon_success from "../../assets/success-alert.svg";
import icon_danger from "../../assets/danger-alert.svg";
import icon_warning from "../../assets/warning-alert.svg";
import icon_info from "../../assets/info-alert.svg";
import m_icon_success from "../../assets/mobile-success-alert.svg";
import m_icon_danger from "../../assets/mobile-danger-alert.svg";
import m_icon_warning from "../../assets/mobile-warning-alert.svg";
import m_icon_info from "../../assets/mobile-info-alert.svg";

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
      ? icon_warning
      : type === "danger"
      ? icon_danger
      : type === "info"
      ? icon_info
      : icon_success;
  let m_alert_type =
    type === "warning"
      ? m_icon_warning
      : type === "danger"
      ? m_icon_danger
      : type === "info"
      ? m_icon_info
      : m_icon_success;
  return (
    <div
      id={id}
      className={`sm:h-160px h-320px flex flex-row ${type} sm:py-28px sm:px-24px py-16px px-12px`}
    >
      <div className="hidden sm:block">
        <Image
          className="min-h-104px min-w-26px"
          id={alert_icon_id}
          src={alert_type}
          alt={alert_icon_alt_text}
        />
      </div>
      <div className="sm:hidden block">
        <Image
          className="min-h-288px min-w-26px"
          id={`m_${alert_icon_id}`}
          src={m_alert_type}
          alt={alert_icon_alt_text}
        />
      </div>
      <div className="overflow-auto mx-12px">
        <p className="heading3">{message_heading}</p>
        <p className="body">{message_body}</p>
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
