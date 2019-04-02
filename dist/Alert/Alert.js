import React from "react";
import "./Alert.scss";

var Alert = function Alert(props) {
  var onClick = props.onClick,
      type = props.type,
      text = props.text;
  return React.createElement("div", {
    onClick: onClick,
    className: "ter-alert ter-alert--".concat(type || "default")
  }, text);
};

export default Alert;