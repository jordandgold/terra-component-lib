import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Checkbox.scss";

var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));

    _this.handleChange = function (e) {
      _this.setState({
        checked: e.target.checked
      });

      _this.props.handleChange(e);
    };

    _this.state = {
      checked: _this.props.checked || false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var isChecked = this.state.checked ? "is-checked" : "";
      return React.createElement("div", {
        className: "ter-checkbox ".concat(isChecked)
      }, React.createElement("label", {
        className: "ter-checkbox__label",
        htmlFor: this.props.name
      }, this.props.label), React.createElement("input", {
        id: this.props.name,
        name: this.props.name,
        type: "checkbox",
        checked: this.state.checked,
        onChange: this.handleChange
      }));
    }
  }]);

  return Checkbox;
}(Component);

export default Checkbox;