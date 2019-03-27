import React from "react";

import "./Alert.scss";

const Alert = props => {
  const { onClick, className, text } = props;

  return (
    <div
        onClick={props.onClick}
        className={`ter-alert ${className}`}
    >
        {text}
    </div>
  );
};

export default Alert;
