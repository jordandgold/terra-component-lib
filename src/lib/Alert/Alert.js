import React from "react";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

import "./Alert.scss";

const Alert = props => {
  const { onClick, type, text, name } = props;

  return (
    <div className={`ter-alert ter-alert--${type || "default"}`}>
      <button
        className="ter-alert__close"
        onClick={() => onClick(name)}
        aria-label="Close Alert"
      >
        <Icon type="enclosed-x-dark-16px" size="16px" />
      </button>
      {text}
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string
};
