import React from "react";
import PropTypes from "prop-types";

import "../global-styles/global-vars.scss";
import "./Button.scss";

const Button = props => {
  const { onClick, className, text } = props;

  return (
    <div>
      <button onClick={e => onClick(e)} className={`ter-button ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};
