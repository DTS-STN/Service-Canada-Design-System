import PropTypes from "prop-types";
import React from "react";

export function Date(props) {
  const { id, label, date } = props;
  // TeamCity build dates are received in the format yyyyMMdd
  const dateFormatted = date ? date.replace(/^(.{4})(.{2})/gm, "$1-$2-") : "NA";
  return (
    <dl id={id} className="ds-mt-8 ds-py-2 ds-font-body">
      <dt className="ds-inline">{label}</dt>
      <dd className="ds-inline">
        {dateFormatted === "NA" ? (
          <time>{` ${dateFormatted}`}</time>
        ) : (
          <time dateTime={dateFormatted}>{` ${dateFormatted}`}</time>
        )}
      </dd>
    </dl>
  );
}

Date.defaultProps = {
  label: "Date Modified: ",
};

Date.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Text to show before date, defaults to "Date Modified: "
   */
  label: PropTypes.string,

  // Date string in format yyyyMMdd
  date: PropTypes.string,
};
