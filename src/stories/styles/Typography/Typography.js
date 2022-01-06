import PropTypes from "prop-types";
import React from "react";
export default function Typography(props) {
  return <div>{props.children}</div>;
}

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element)]),
};
