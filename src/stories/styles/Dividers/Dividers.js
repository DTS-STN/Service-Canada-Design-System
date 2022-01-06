import PropTypes from "prop-types";
import React from "react";
export default function Dividers(props) {
  return <div>{props.children}</div>;
}

Dividers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element)]),
};
