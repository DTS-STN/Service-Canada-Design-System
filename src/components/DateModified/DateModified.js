import PropTypes from "prop-types";
import React from "react";

export function DateModified(props) {
  // TeamCity build dates are received in the format yyyyMMdd
  const dateFormatted = props.date
    ? props.date.replace(/^(.{4})(.{2})/gm, "$1-$2-")
    : "NA";
  return (
    <dl className="mt-8 py-2 font-body font-normal text-sm">
      <dt className="inline">{props.label}</dt>
      <dd className="inline">
        {dateFormatted === "NA" ? (
          <time>{` ${dateFormatted}`}</time>
        ) : (
          <time dateTime={dateFormatted}>{` ${dateFormatted}`}</time>
        )}
      </dd>
    </dl>
  );
}

DateModified.defaultProps = {
  label: "Date Modified: ",
};

DateModified.propTypes = {
  /**
   * Text to show before date, defaults to "Date Modified: "
   */
  label: PropTypes.string,

  // Date string in format yyyyMMdd
  date: PropTypes.string,
};
