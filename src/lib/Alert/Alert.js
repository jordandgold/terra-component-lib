import React from "react";

import "./Alert.scss";

const Alert = props => {
  const { onClick, className, text } = props;

  return (
    <div
        className={`ter-alert ${className}`}
    >
        {text}
    </div>
  );
};

export default Alert;
