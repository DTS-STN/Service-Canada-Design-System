import PropTypes from "prop-types";
import React from "react";
// import { Image } from "../Image/Image";
import success_img from "../../assets/success_img.svg";
import warning_img from "../../assets/warning_img.svg";
import danger_img from "../../assets/danger_img.svg";
import info_img from "../../assets/info_img.svg";

export function ContextualAlert(props) {
  const {
    message_heading,
    message_body,
    id,
    type,
    alert_icon_id,
    alert_icon_alt_text,
    asHtml,
    whiteBG,
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
      ? "ds-warning-color"
      : type === "danger"
      ? "ds-danger-color"
      : type === "info"
      ? "ds-info-color"
      : "ds-success-color";

  let white_BG = whiteBG ? "ds-bg-multi-neutrals-white" : " ";

  return (
    <div
      id={id}
      className={`ds-relative ds-min-w-290px sm:ds-px-24px ds-px-16px ${white_BG}`}
    >
      <div className="ds-absolute ds-top-3 sm:ds-left-3.5 ds-left-1.5 ds-bg-multi-neutrals-white ds-py-4px">
        {/* change back to image component once fixed */}
        <img id={alert_icon_id} src={alert_type} alt={alert_icon_alt_text} />
      </div>
      <div
        className={`ds-overflow-auto ds-border-l-6 ${alert_color} sm:ds-pl-24px ds-pl-16px`}
      >
        {asHtml ? (
          <p
            className="ds-heading3"
            dangerouslySetInnerHTML={{ __html: message_heading }}
          />
        ) : (
          <p className="ds-heading3">{message_heading}</p>
        )}
        {asHtml ? (
          <div
            className="ds-body"
            dangerouslySetInnerHTML={{ __html: message_body }}
          />
        ) : (
          <div className="ds-body">{message_body}</div>
        )}
      </div>
    </div>
  );
}

ContextualAlert.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

  /**
   * alert type
   */
  type: PropTypes.oneOf(["warning", "info", "success", "danger"]).isRequired,

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
  message_body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,

  /**
   * HTML toggle. Determines if text is parsed as plain text or HTML.
   */
  asHtml: PropTypes.bool,

  /**
   * If true the background will be white, default is transparent.
   */
  whiteBG: PropTypes.bool,
};
