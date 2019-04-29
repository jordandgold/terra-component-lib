import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./SearchBar.scss";

var SearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).call(this));

    _this.handleChange = function (e) {
      _this.setState({
        input: e.target.value
      });
    };

    _this.renderPredictiveSearchItems = function () {
      var filteredSearch = _this.filterSearch();

      return filteredSearch.map(function (item, index) {
        return React.createElement("li", {
          key: "".concat(item, "-").concat(index)
        }, item);
      });
    };

    _this.filterSearch = function () {
      return _this.props.searchItems.filter(function (item) {
        return item.toLowerCase().includes(_this.state.input);
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();

      if (!_this.state.input) {
        return;
      }

      _this.props.handleSubmit(_this.state.input, _this.props.name);
    };

    _this.state = {
      input: ""
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        },
        className: "ter-search-bar"
      }, React.createElement("input", {
        type: "text",
        value: this.state.input,
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: this.props.placeholder || "Search",
        className: "ter-search-bar__input"
      }), React.createElement("button", {
        className: "ter-search-bar__submit"
      }, "Submit"), this.props.predictiveSearch && this.state.input && this.renderPredictiveSearchItems() && React.createElement("ul", null, this.renderPredictiveSearchItems()));
    }
  }]);

  return SearchBar;
}(Component);

export default SearchBar;