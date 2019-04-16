import React, { Component } from "react";
import "./SearchSelect.scss";
import PropTypes from "prop-types";

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
          className="select-options__items"
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
      <div className="select-options__search-filter">
        <p className="ter-search-select-label" onClick={this.toggleDeploy}>
          {this.props.selection || this.props.defaultText}
        </p>
        <ul
          className={`select-options drop-undefined ${
            this.state.deployed ? "is-open" : ""
          }`}
        >
          <input
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
  selection: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired
};
