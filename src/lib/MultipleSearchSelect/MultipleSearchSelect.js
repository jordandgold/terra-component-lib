import React, { Component } from "react";
import "./MultipleSearchSelect.scss";
import PropTypes from "prop-types";

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
    return this.renderOptions(filteredOptions);
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
    this.props.handleSelect(option, this.props.name);
  };

  renderSelections = () => {
    return this.props.selections.map((selection, index) => {
      return (
        <span
          onClick={e => this.removeSelection(e, selection)}
          className="badge option"
          key={`${selection}-${index}`}
        >
          {selection}
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
      <div className="select-options__search-filter">
        <p className="ter-search-select-label" onClick={this.toggleDeploy}>
          {this.props.selections.length
            ? this.renderSelections()
            : this.props.defaultText}
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

export default MultipleSearchSelect;

MultipleSearchSelect.propTypes = {
  defaultText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selections: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func.isRequired,
  removeSelection: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
