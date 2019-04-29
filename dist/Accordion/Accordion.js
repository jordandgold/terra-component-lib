import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./Accordion.scss";

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));

    _this.checkActive = function () {
      if (_this.props.defaultActive === 0 || _this.props.defaultActive) {
        _this.setState({
          active: _this.props.defaultActive
        });
      }
    };

    _this.accordionToggle = function (fold) {
      if (_this.state.active === fold) {
        _this.setState({
          active: undefined
        });
      } else {
        _this.setState({
          active: fold
        });
      }
    };

    _this.generateFolds = function () {
      return _this.props.children.map(function (child, index) {
        var activeClass = index == _this.state.active ? "is-expanded" : "";
        return React.createElement("div", {
          key: "accordion-fold-".concat(index),
          className: "ter-accordion__fold ".concat(activeClass)
        }, React.createElement("button", {
          className: "ter-accordion__trigger",
          onClick: function onClick() {
            return _this.accordionToggle(index);
          }
        }, child.props.title, React.createElement(Icon, {
          type: "open-caret-right-dark-16px",
          className: "ter-accordion__trigger-caret",
          size: "16px"
        })), child);
      });
    };

    _this.state = {
      active: undefined
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkActive();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "ter-accordion"
      }, this.generateFolds());
    }
  }]);

  return Accordion;
}(Component);

export default Accordion;
export var AccordionFold =
/*#__PURE__*/
function (_Component2) {
  _inherits(AccordionFold, _Component2);

  function AccordionFold() {
    _classCallCheck(this, AccordionFold);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionFold).apply(this, arguments));
  }

  _createClass(AccordionFold, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: "ter-accordion__content"
      }, this.props.children));
    }
  }]);

  return AccordionFold;
}(Component);