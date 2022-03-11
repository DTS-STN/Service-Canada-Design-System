import PropTypes from "prop-types";
import React from "react";

export function Labels(props) {
  const { id, type, text } = props;
  let style = "ds-label-" + type;
  return (
    <div
      id={id}
      role="dialog"
      aria-label="label"
      className={`ds-inline ds-border-l-4 ${style} ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style`}
    >
      {text}
    </div>
  );
}

Labels.defaultProps = {
  type: "default",
  text: "default text",
};

Labels.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Used to set the type of label you want to use.
   * If no type is set, will default to the default label
   */
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "default",
      "primary",
      "danger",
      "warning",
      "info",
      "success",
    ]),
  ]).isRequired,

  /**
   * label text
   */
  text: PropTypes.string,
};
