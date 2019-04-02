import React from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

const Alert = props => {
  const { onClick, type, text } = props;

  return (
    <div
      onClick={onClick}
      className={`ter-alert ter-alert--${type || "default"}`}
    >
      {text}
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};
