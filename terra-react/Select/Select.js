import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Select.scss";
import ReactDOM from "react-dom";
import Icon from "../Icon/Icon";

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this));

    _this.toggleClose = function (e) {
      if (_this.node.contains(e.target) || !_this.state.deployed) {
        return;
      }

      _this.toggleDeploy();
    };

    _this.toggleDeploy = function () {
      _this.setState({
        deployed: !_this.state.deployed
      });
    };

    _this.handleKeyup = function (e) {
      if (!_this.state.deployed) {
        return;
      }

      var nodes = Array.from(document.querySelectorAll(".ter-select__options-list-item"));
      var node = nodes.find(function (node) {
        return node.innerText[0].toLowerCase() === e.key.toLowerCase();
      });
      node.scrollIntoView();
    };

    _this.handleSelection = function (selection) {
      _this.toggleDeploy();

      _this.props.handleSelection(selection, _this.props.name);
    };

    _this.generateOptions = function () {
      return _this.props.options.map(function (option, index) {
        return React.createElement(SelectOption, {
          key: "".concat(option, "-").concat(index),
          onClick: _this.handleSelection,
          option: option
        });
      });
    };

    _this.state = {
      deployed: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this.toggleClose);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.toggleClose);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        ref: function ref(node) {
          return _this2.node = node;
        },
        className: "ter-select ".concat(this.state.deployed && "is-open"),
        onKeyUp: function onKeyUp(e) {
          return _this2.handleKeyup(e);
        },
        tabIndex: "0"
      }, React.createElement("div", {
        className: "ter-select__selected",
        onClick: this.toggleDeploy
      }, this.props.selection || this.props.defaultText, React.createElement(Icon, {
        type: "open-caret-down-dark-16px",
        className: "ter-search-select__caret",
        size: "16px"
      })), React.createElement("ul", {
        className: "ter-select__options-list ".concat(this.state.deployed && "is-open")
      }, this.generateOptions()));
    }
  }]);

  return Select;
}(Component);

export var SelectOption =
/*#__PURE__*/
function (_Component2) {
  _inherits(SelectOption, _Component2);

  function SelectOption() {
    _classCallCheck(this, SelectOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectOption).apply(this, arguments));
  }

  _createClass(SelectOption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          option = _this$props.option,
          _onClick = _this$props.onClick;
      return React.createElement("li", {
        className: "ter-select__options-list-item",
        onClick: function onClick() {
          return _onClick(option);
        }
      }, option);
    }
  }]);

  return SelectOption;
}(Component);
export default Select;