import React from "react";
import PropTypes from "prop-types";

const url = require("./svg/icons.svg");
import "./Icon.scss";

const Icon = props => (
  <svg
    viewBox="0 0 8 8"
    className={`ter-icon ter-icon--${props.type} ter-icon--${props.size} ${
      props.className
    }`}
  >
    <use xlinkHref={`${url}#icon-${props.type}`} />
  </svg>
);

export default Icon;

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string
};
