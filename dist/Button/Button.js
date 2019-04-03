import React from "react";
import "../global-styles/global-vars.scss";
import "./Button.scss";

var Button = function Button(props) {
  var _onClick = props.onClick,
      className = props.className,
      text = props.text;
  return React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: function onClick(e) {
      return _onClick(e);
    },
    className: "ter-button ".concat(className)
  }, text));
};

export default Button;