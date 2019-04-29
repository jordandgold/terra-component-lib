import React from "react";
import Icon from "../Icon/Icon";
import "./Alert.scss";

var Alert = function Alert(props) {
  var _onClick = props.onClick,
      type = props.type,
      text = props.text,
      name = props.name;
  return React.createElement("div", {
    className: "ter-alert ter-alert--".concat(type || "default")
  }, React.createElement("button", {
    className: "ter-alert__close",
    onClick: function onClick() {
      return _onClick(name);
    },
    "aria-label": "Close Alert"
  }, React.createElement(Icon, {
    type: "enclosed-x-dark-16px",
    size: "16px"
  })), text);
};

export default Alert;