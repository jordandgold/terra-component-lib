import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./MultipleSearchSelect.scss";
import Icon from "../Icon/Icon";

var MultipleSearchSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(MultipleSearchSelect, _Component);

  function MultipleSearchSelect() {
    var _this;

    _classCallCheck(this, MultipleSearchSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultipleSearchSelect).call(this));

    _this.toggleClose = function (e) {
      if (!_this.state.deployed || _this.node.contains(e.target)) {
        return;
      }

      _this.toggleDeploy();
    };

    _this.toggleDeploy = function () {
      _this.setState({
        deployed: !_this.state.deployed
      });
    };

    _this.handleSearchChange = function (e) {
      _this.setState({
        searchField: e.target.value
      });
    };

    _this.filterOptions = function () {
      var filteredOptions = _this.getFilteredOptions();

      if (filteredOptions.length > 0) {
        return _this.renderOptions(filteredOptions);
      } else {
        return React.createElement("li", {
          className: "ter-search-select__options-list-item ter-search-select__options-list-item--inactive"
        }, "No results for ".concat(_this.state.searchField));
      }
    };

    _this.getFilteredOptions = function () {
      return _this.props.options.filter(function (option) {
        return option.toLowerCase().substring(0, _this.state.searchField.length) === _this.state.searchField && !_this.props.selections.includes(option);
      });
    };

    _this.renderOptions = function (options) {
      return options.filter(function (option) {
        return !_this.props.selections.includes(option);
      }).map(function (option, index) {
        return React.createElement("li", {
          key: "".concat(option, "-").concat(index),
          onClick: function onClick() {
            return _this.handleSelect(option);
          },
          className: "ter-multi-search-select__options-list-item"
        }, option);
      });
    };

    _this.toggleSelect = function () {
      _this.setState({
        deployed: !_this.state.deployed
      });
    };

    _this.handleSelect = function (option) {
      _this.props.handleSelect(option, _this.props.name);
    };

    _this.renderSelections = function () {
      return _this.props.selections.map(function (selection, index) {
        return React.createElement("span", {
          onClick: function onClick(e) {
            return _this.removeSelection(e, selection);
          },
          className: "ter-multi-search-select__option ter-badge",
          key: "".concat(selection, "-").concat(index)
        }, selection, React.createElement(Icon, {
          type: "open-x-dark-16px",
          className: "ter-multi-search-select__option-close",
          size: "8px"
        }));
      });
    };

    _this.removeSelection = function (e, selection) {
      if (_this.state.deployed) {
        e.stopPropagation();
      }

      _this.props.removeSelection(selection, _this.props.name);
    };

    _this.state = {
      deployed: false,
      searchField: ""
    };
    return _this;
  }

  _createClass(MultipleSearchSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this.toggleClose, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.toggleClose, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        ref: function ref(node) {
          return _this2.node = node;
        },
        className: "ter-multi-search-select ".concat(this.state.deployed ? "is-open" : "")
      }, React.createElement("div", {
        className: "ter-multi-search-select__selected",
        onClick: this.toggleDeploy
      }, this.props.selections.length ? this.renderSelections() : this.props.defaultText, React.createElement(Icon, {
        type: "open-caret-down-dark-16px",
        className: "ter-multi-search-select__caret",
        size: "16px"
      })), React.createElement("ul", {
        className: "ter-multi-search-select__options-list ".concat(this.state.deployed ? "is-open" : "")
      }, React.createElement("input", {
        ref: function ref(input) {
          return input && input.focus();
        },
        type: "text",
        value: this.state.searchField,
        onChange: function onChange(e) {
          return _this2.handleSearchChange(e);
        },
        className: "ter-multi-search-select__search-input",
        placeholder: "search"
      }), this.state.searchField ? this.filterOptions() : this.renderOptions(this.props.options)), React.createElement("div", null));
    }
  }]);

  return MultipleSearchSelect;
}(Component);

export default MultipleSearchSelect;