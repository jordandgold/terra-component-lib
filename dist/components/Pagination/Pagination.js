import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Pagination.scss";

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.generatePageListItems = function () {
      return _this.props.pages.map(function (page, index) {
        return React.createElement("li", {
          key: "list-item-".concat(index),
          className: "ter-pagination__list-item"
        }, React.createElement("a", {
          className: "ter-pagination__list-item ".concat(page.isActive ? "is-active" : ""),
          href: "/".concat(page.link)
        }, page.pageNumber));
      });
    };

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      return React.createElement("nav", {
        className: "ter-pagination",
        role: "navigation"
      }, React.createElement("ul", {
        className: "ter-pagination__list"
      }, React.createElement("li", {
        className: "ter-pagination__list-item"
      }, React.createElement("a", {
        href: "/",
        rel: "prev"
      }, React.createElement("i", {
        className: "fas fa-chevron-left"
      }))), this.generatePageListItems, React.createElement("li", {
        className: "ter-pagination__list-item"
      }, React.createElement("a", {
        href: "/",
        rel: "next"
      }, React.createElement("i", {
        className: "fas fa-chevron-right"
      })))));
    }
  }]);

  return Pagination;
}(Component);

export default Pagination;