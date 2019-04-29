import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Card.scss";

var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.generateText = function () {
      return _this.props.text.map(function (paragraph, index) {
        return React.createElement("p", {
          className: "card-text",
          key: "card-text-".concat(index)
        }, paragraph);
      });
    };

    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          title = _this$props.title,
          text = _this$props.text,
          label = _this$props.label,
          link = _this$props.link,
          category = _this$props.category;
      return React.createElement("article", {
        className: "card"
      }, image && React.createElement("img", {
        src: image.link,
        alt: image.description,
        className: "card-hero-image"
      }), category && React.createElement("p", null, category), React.createElement("h4", {
        className: "card-title"
      }, title), text && this.generateText(), link && React.createElement("a", {
        href: link.link
      }, link.label), label && React.createElement("button", null, label));
    }
  }]);

  return Card;
}(Component);

export default Card;