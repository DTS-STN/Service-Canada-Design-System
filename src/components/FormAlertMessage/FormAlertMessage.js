import PropTypes from "prop-types";
import React from "react";
import { ContextualAlert } from "../ContextualAlert/ContextualAlert";

export function FormAlertMessage(props) {
  const {
    message_heading,
    id,
    alert_icon_id,
    alert_icon_alt_text,
    error_list,
    whiteBG,
  } = props;

  return (
    <ContextualAlert
      id={`${id}-alert`}
      alert_icon_alt_text={alert_icon_id}
      alert_icon_id={alert_icon_alt_text}
      message_heading={message_heading}
      whiteBG={whiteBG}
      type="danger"
      message_body={[
        <ol className="ds-list-decimal ds-pl-7" key="errors">
          {error_list.map((line, i) => (
            <li className="ds-body" key={i}>
              <p className="ds-underline ds-text-multi-blue-blue70b ds-underline-offset-2 ds-decoration-1">
                {line}
              </p>
            </li>
          ))}
        </ol>,
      ]}
    />
  );
}

FormAlertMessage.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

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
   * A list of plaintext error messages
   */
  error_list: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string)])
    .isRequired,

  /**
   * If true the background will be white, default is transparent.
   */
  whiteBG: PropTypes.bool,
};
