import React from "react";

import "./Button.scss";

const Button = props => {
  const { onClick, className, text } = props;

  return (
    <div>
      <button
        onClick={e => onClick(e)}
        className={`ter-button ter-button--${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
