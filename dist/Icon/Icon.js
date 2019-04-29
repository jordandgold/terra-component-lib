import React from "react";

var url = require("./svg/icons.svg");

import "./Icon.scss";

var Icon = function Icon(props) {
  return React.createElement("svg", {
    viewBox: "0 0 8 8",
    className: "ter-icon ter-icon--".concat(props.type, " ter-icon--").concat(props.size, " ").concat(props.className)
  }, React.createElement("use", {
    xlinkHref: "".concat(url, "#ter-icon--").concat(props.type)
  }));
};

export default Icon;