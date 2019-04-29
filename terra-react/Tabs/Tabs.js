import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Tabs.scss";

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));

    _this.handleTabChange = function (index) {
      _this.setState({
        selected: index
      });
    };

    _this.state = {
      selected: _this.props.selected || 0
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var variantClass = this.props.fullWidth ? "ter-tabs--full-width" : "";
      return React.createElement("nav", {
        className: "ter-tabs ".concat(variantClass),
        role: "navigation",
        "data-controls": "#tabs-one"
      }, React.createElement("ul", {
        className: "ter-tabs__list",
        role: "tablist"
      }, this.props.children.map(function (elem, index) {
        var selectedClass = index === _this2.state.selected ? "is-selected" : "";
        return React.createElement("li", {
          className: "ter-tabs__list-item ".concat(selectedClass),
          key: index
        }, React.createElement("button", {
          onClick: function onClick() {
            return _this2.handleTabChange(index);
          }
        }, elem.props.name));
      })), React.createElement("div", {
        className: "ter-tabs__content"
      }, this.props.children[this.state.selected]));
    }
  }]);

  return Tabs;
}(Component);

export var TabsPanel = function TabsPanel(props) {
  return React.createElement("div", null, props.children);
};
export default Tabs;