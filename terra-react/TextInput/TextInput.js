import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./TextInput.scss";

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          inputChange = _this$props.inputChange,
          status = _this$props.status;
      var statusMessage = {
        error: "has-error",
        success: "has-success"
      };
      return React.createElement("div", {
        className: "ter-form-item ".concat(status && statusMessage[status.className])
      }, label && React.createElement("label", {
        className: "ter-form-item__label",
        htmlFor: name
      }, label), React.createElement("input", {
        type: "text",
        name: name,
        placeholder: placeholder,
        value: value,
        onChange: function onChange(e) {
          return inputChange(e);
        },
        className: "ter-input"
      }), status && status.message && React.createElement("p", {
        className: "ter-form-item__status-message"
      }, status.message));
    }
  }]);

  return TextInput;
}(Component);

export default TextInput;