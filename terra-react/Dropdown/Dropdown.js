import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./Dropdown.scss";

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this));

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

    _this.state = {
      deployed: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
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

      var openClass = this.state.deployed ? "is-open" : "";
      return React.createElement("div", {
        className: "ter-dropdown__wrapper",
        ref: function ref(node) {
          return _this2.node = node;
        }
      }, React.createElement("div", {
        className: "ter-dropdown ".concat(openClass),
        onClick: this.toggleDeploy
      }, React.createElement("span", {
        className: "ter-dropdown__selected"
      }, this.props.label, React.createElement(Icon, {
        type: "open-caret-down-dark-16px",
        className: "ter-dropdown__caret",
        size: "16px"
      })), this.props.children));
    }
  }]);

  return Dropdown;
}(Component);

export default Dropdown;