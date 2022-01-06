import PropTypes from "prop-types";
import React from "react";

export default function Colors(props) {
  return <div>{props.children}</div>;
}

Colors.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element)]),
};
