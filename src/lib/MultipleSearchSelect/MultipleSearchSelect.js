import React, { Component } from "react";
import "./MultipleSearchSelect.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

class MultipleSearchSelect extends Component {
  constructor() {
    super();
    this.state = {
      deployed: false,
      searchField: ""
    };
  }

  toggleDeploy = () => {
    this.setState({
      deployed: !this.state.deployed
    });
  };

  handleSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  filterOptions = () => {
    const filteredOptions = this.getFilteredOptions();
    if (filteredOptions.length > 0) {
      return this.renderOptions(filteredOptions);
    } else {
      return (
        <li className="ter-search-select__options-list-item ter-search-select__options-list-item--inactive">
          {`No results for ${this.state.searchField}`}
        </li>
      );
    }
  };

  getFilteredOptions = () => {
    return this.props.options.filter(option => {
      return (
        option.toLowerCase().substring(0, this.state.searchField.length) ===
          this.state.searchField && !this.props.selections.includes(option)
      );
    });
  };

  renderOptions = options => {
    return options
      .filter(option => {
        return !this.props.selections.includes(option);
      })
      .map((option, index) => {
        return (
          <li
            key={`${option}-${index}`}
            onClick={() => this.handleSelect(option)}
            className="ter-multi-search-select__options-list-item"
          >
            {option}
          </li>
        );
      });
  };

  toggleSelect = () => {
    this.setState({
      deployed: !this.state.deployed
    });
  };

  handleSelect = option => {
    this.props.handleSelect(option, this.props.name);
  };

  renderSelections = () => {
    return this.props.selections.map((selection, index) => {
      return (
        <span
          onClick={e => this.removeSelection(e, selection)}
          className="ter-multi-search-select__option ter-badge"
          key={`${selection}-${index}`}
        >
          {selection}
          <Icon
            type="open-x-dark-16px"
            className="ter-multi-search-select__option-close"
            size="8px"
          />
        </span>
      );
    });
  };

  removeSelection = (e, selection) => {
    if (this.state.deployed) {
      e.stopPropagation();
    }

    this.props.removeSelection(selection, this.props.name);
  };

  render() {
    return (
      <div
        className={`ter-multi-search-select ${
          this.state.deployed ? "is-open" : ""
        }`}
      >
        <div
          className="ter-multi-search-select__selected"
          onClick={this.toggleDeploy}
        >
          {this.props.selections.length
            ? this.renderSelections()
            : this.props.defaultText}
          <Icon
            type="open-caret-down-dark-16px"
            className="ter-multi-search-select__caret"
            size="16px"
          />
        </div>
        <ul
          className={`ter-multi-search-select__options-list ${
            this.state.deployed ? "is-open" : ""
          }`}
        >
          <input
            ref={input => input && input.focus()}
            type="text"
            value={this.state.searchField}
            onChange={e => this.handleSearchChange(e)}
            className="ter-multi-search-select__search-input"
            placeholder="search"
          />
          {this.state.searchField
            ? this.filterOptions()
            : this.renderOptions(this.props.options)}
        </ul>
        <div />
      </div>
    );
  }
}

export default MultipleSearchSelect;

MultipleSearchSelect.propTypes = {
  defaultText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selections: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func.isRequired,
  removeSelection: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
