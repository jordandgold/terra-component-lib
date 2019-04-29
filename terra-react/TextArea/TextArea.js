import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./TextArea.scss";

var TextArea =
/*#__PURE__*/
function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextArea).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        className: "ter-form-item"
      }, React.createElement("label", {
        className: "ter-form-item__label"
      }, this.props.label), React.createElement("textarea", {
        defaultValue: this.props.value,
        onChange: function onChange(e) {
          return _this.props.inputChange(e, _this.props.name);
        },
        name: this.props.name,
        className: "ter-textarea"
      }));
    }
  }]);

  return TextArea;
}(Component);

export default TextArea;