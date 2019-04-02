import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Notification.scss";

var Notification =
/*#__PURE__*/
function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, _getPrototypeOf(Notification).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          text = _this$props.text;
      return React.createElement("section", {
        className: "notification"
      }, React.createElement("p", null, text), React.createElement("button", {
        className: "notification-close-icon",
        onClick: onClick
      }));
    }
  }]);

  return Notification;
}(Component);

export default Notification;