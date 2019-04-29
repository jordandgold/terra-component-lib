import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Tooltip.scss";

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tooltipLabel = _this$props.tooltipLabel,
          direction = _this$props.direction,
          children = _this$props.children;
      return React.createElement("span", {
        className: "ter-tooltip",
        "data-direction": direction
      }, tooltipLabel && React.createElement("a", null, tooltipLabel), React.createElement("span", {
        className: "ter-tooltip__content"
      }, children && children));
    }
  }]);

  return Tooltip;
}(Component);

export default Tooltip;