import React from "react";
import "./Notification.scss";
import Icon from "../Icon/Icon";

var Notification = function Notification(props) {
  var onClick = props.onClick,
      text = props.text,
      type = props.type;
  return React.createElement("section", {
    className: "ter-notification ter-notification--".concat(type)
  }, React.createElement("button", {
    className: "ter-notification__close",
    onClick: onClick,
    "aria-label": "Close Notification"
  }, React.createElement(Icon, {
    type: "enclosed-x-dark-16px",
    size: "16px"
  })), React.createElement("div", {
    className: "ter-notification__body"
  }, React.createElement("p", null, text)));
};

export default Notification;