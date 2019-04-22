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

  componentDidMount() {
    document.addEventListener("mousedown", this.toggleClose, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.toggleClose, false);
  }

  toggleClose = e => {
    if (!this.state.deployed || this.node.contains(e.target)) {
      return;
    }

    this.toggleDeploy();
  };

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
      <div
        ref={node => (this.node = node)}
        className={`ter-search-select ${this.state.deployed ? "is-open" : ""}`}
      >
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
        <ul className="ter-search-select__options-list">
          <input
            ref={input => input && input.focus()}
            type="text"
            value={this.state.searchField}
            onChange={e => this.handleSearchChange(e)}
            className="ter-search-select__search-input"
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

export default SearchSelect;

SearchSelect.propTypes = {
  defaultText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selection: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};
