import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Radios.scss";

var Radios =
/*#__PURE__*/
function (_Component) {
  _inherits(Radios, _Component);

  function Radios() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radios);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radios)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.generateRadios = function () {
      var _this$props = _this.props,
          radios = _this$props.radios,
          name = _this$props.name;
      return radios.map(function (radio, index) {
        return React.createElement("div", {
          className: "ter-radio",
          key: "radio-".concat(index)
        }, React.createElement("input", {
          className: "radio-button-".concat(index),
          type: "radio",
          name: name,
          onChange: function onChange() {
            return _this.props.selectRadio(radio, _this.props.name);
          },
          checked: _this.props.selected === radio,
          value: radio,
          id: "".concat(name, "Choice").concat(index)
        }), React.createElement("label", {
          htmlFor: "".concat(name, "Choice").concat(index),
          className: "ter-radio__label radio-".concat(index)
        }, radio));
      });
    };

    return _this;
  }

  _createClass(Radios, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "ter-radio-group"
      }, this.generateRadios());
    }
  }]);

  return Radios;
}(Component);

export default Radios;