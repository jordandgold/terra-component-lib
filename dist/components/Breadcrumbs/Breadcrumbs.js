import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Breadcrumbs.scss";

var Breadcrumbs =
/*#__PURE__*/
function (_Component) {
  _inherits(Breadcrumbs, _Component);

  function Breadcrumbs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Breadcrumbs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Breadcrumbs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.generateBreadcrumbs = function () {
      return _this.props.breadcrumbs.map(function (breadcrumb, index) {
        return React.createElement("a", {
          key: "breadcrumb-".concat(index),
          className: "breadcrumb",
          href: breadcrumb.link
        }, breadcrumb.text);
      });
    };

    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.generateBreadcrumbs);
    }
  }]);

  return Breadcrumbs;
}(Component);

export default Breadcrumbs;