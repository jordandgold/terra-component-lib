import React, { Component } from "react";
import "./SearchSelect.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

class SearchSelect extends Component {
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
    return this.renderOptions(filteredOptions);
  };

  getFilteredOptions = () => {
    return this.props.options.filter(option => {
      return (
        option.toLowerCase().substring(0, this.state.searchField.length) ===
        this.state.searchField
      );
    });
  };

  renderOptions = options => {
    return options.map((option, index) => {
      return (
        <li
          key={`${option}-${index}`}
          onClick={() => this.handleSelect(option)}
          className="ter-search-select__options-list-item"
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
    this.setState({
      deployed: false
    });

    this.props.handleSelect(option);
  };

  render() {
    return (
      <div className="ter-search-select">
        <div
          className="ter-search-select__selected"
          onClick={this.toggleDeploy}
        >
          {this.props.selection || this.props.defaultText}
          <Icon
            type="open-caret-down-dark-16px"
            className="ter-search-select__caret"
            size="16px"
          />
        </div>
        <ul
          className={`ter-search-select__options-list drop-undefined ${
            this.state.deployed ? "is-open" : ""
          }`}
        >
          <input
            ref={input => input && input.focus()}
            type="text"
            value={this.state.searchField}
            onChange={e => this.handleSearchChange(e)}
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

export default SearchSelect;

SearchSelect.propTypes = {
  defaultText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selection: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};
