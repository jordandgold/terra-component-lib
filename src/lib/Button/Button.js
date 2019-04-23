import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = props => {
  const { onClick, className, text, name } = props;

  return (
    <React.Fragment>
      <button
        onClick={e => onClick(e)}
        className={`ter-button ${className}`}
        name={name}
      >
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string
};
