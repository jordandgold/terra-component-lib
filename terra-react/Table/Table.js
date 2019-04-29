import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./Table.scss";

var Table =
/*#__PURE__*/
function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.generateHeadCells = function () {
      return _this.props.data.head.map(function (cell, index) {
        return React.createElement("th", {
          key: "t-head-cell-".concat(index)
        }, cell);
      });
    };

    _this.generateBody = function () {
      return _this.props.data.body.map(function (row, index) {
        return React.createElement("tr", {
          key: "row-".concat(index)
        }, _this.generateRow(row, index));
      });
    };

    _this.generateRow = function (row, rowNum) {
      return row.map(function (cell, index) {
        return React.createElement("td", {
          key: "cell-".concat(rowNum, "-").concat(index)
        }, cell);
      });
    };

    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var variantClass = this.props.loose ? "ter-table--loose" : "";
      return React.createElement(React.Fragment, null, React.createElement("table", {
        className: "ter-table ".concat(variantClass)
      }, this.props.data.head && React.createElement("thead", null, React.createElement("tr", null, this.generateHeadCells())), React.createElement("tbody", null, this.generateBody())));
    }
  }]);

  return Table;
}(Component);

export default Table;