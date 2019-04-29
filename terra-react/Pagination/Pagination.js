import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Pagination.scss";
import Icon from "../Icon/Icon";

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
      var totalPages = _this.props.pages; //totalPages.length()

      var activePage = _this.props.activePage + 1;
      var pages = [];

      if (totalPages === 2) {
        for (var i = 0; i < 2; i++) {
          pages.push(React.createElement(Page, {
            name: _this.props.name,
            key: "list-item-".concat(i + 1),
            activePage: activePage,
            page: i + 1,
            handleClick: _this.props.handleClick
          }));
        }
      }

      if (totalPages === 3) {
        for (var _i = 0; _i < 3; _i++) {
          pages.push(React.createElement(Page, {
            name: _this.props.name,
            key: "list-item-".concat(_i + 1),
            activePage: activePage,
            page: _i + 1,
            handleClick: _this.props.handleClick
          }));
        }
      }

      if (totalPages > 3 && activePage === 1) {
        for (var _i2 = 0; _i2 < 3; _i2++) {
          pages.push(React.createElement(Page, {
            name: _this.props.name,
            key: "list-item-".concat(_i2 + 1),
            activePage: activePage,
            page: _i2 + 1,
            handleClick: _this.props.handleClick
          }));
        }
      } else if (totalPages > 3 && activePage === totalPages) {
        for (var _i3 = totalPages - 3; _i3 < totalPages; _i3++) {
          pages.push(React.createElement(Page, {
            name: _this.props.name,
            key: "list-item-".concat(_i3 + 1),
            activePage: activePage,
            page: _i3 + 1,
            handleClick: _this.props.handleClick
          }));
        }
      } else if (totalPages > 3 && activePage === totalPages - 1) {
        for (var _i4 = totalPages - 3; _i4 < totalPages; _i4++) {
          pages.push(React.createElement(Page, {
            name: _this.props.name,
            key: "list-item-".concat(_i4 + 1),
            activePage: activePage,
            page: _i4 + 1,
            handleClick: _this.props.handleClick
          }));
        }
      } else if (totalPages > 3 && activePage <= totalPages) {
        for (var _i5 = activePage - 2; _i5 < activePage + 1; _i5++) {
          pages.push(React.createElement(Page, {
            name: _this.props.name,
            key: "list-item-".concat(_i5 + 1),
            activePage: activePage,
            page: _i5 + 1,
            handleClick: _this.props.handleClick
          }));
        }
      }

      return pages;
    };

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("nav", {
        className: "ter-pagination",
        role: "navigation"
      }, React.createElement("ul", {
        className: "ter-pagination__list"
      }, this.props.activePage + 1 > 1 && this.props.activePage > 0 && React.createElement("li", {
        onClick: function onClick() {
          return _this2.props.handleClick(_this2.props.activePage - 1, _this2.props.name);
        },
        className: "ter-pagination__list-item ter-pagination__list-item--previous"
      }, React.createElement(Icon, {
        type: "open-caret-left-dark-8px",
        size: "8px"
      })), this.generatePageListItems(), this.props.activePage + 1 < this.props.pages && React.createElement("li", {
        onClick: function onClick() {
          return _this2.props.handleClick(_this2.props.activePage + 1);
        },
        className: "ter-pagination__list-item ter-pagination__list-item--next"
      }, React.createElement(Icon, {
        type: "open-caret-right-dark-8px",
        size: "8px"
      }))));
    }
  }]);

  return Pagination;
}(Component);

export default Pagination;
export var Page =
/*#__PURE__*/
function (_Component2) {
  _inherits(Page, _Component2);

  function Page() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, Page);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _this3.handleClick = function () {
      if (_this3.props.activePage === _this3.props.page) {
        return;
      } else {
        _this3.props.handleClick(_this3.props.page - 1, _this3.props.name);
      }
    };

    return _this3;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activePage = _this$props.activePage,
          page = _this$props.page;
      return React.createElement("li", {
        onClick: this.handleClick,
        className: "ter-pagination__list-item ".concat(activePage === page ? "is-active" : "")
      }, page);
    }
  }]);

  return Page;
}(Component);