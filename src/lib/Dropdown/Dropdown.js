import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Dropdown.scss";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      selected: null
    };
  }

  handleOpenDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleSelectOption = option => {
    if (option !== this.state.selected) {
      this.props.selectOption(option);
    }

    this.setState({
      selected: option,
      isOpen: false
    });
  };

  getOptions = () => {
    return this.props.options.map((option, index) => {
      return (
        <Option
          key={`option ${index}`}
          option={option}
          onSelect={this.handleSelectOption}
        />
      );
    });
  };

  render() {
    const selected = this.state.selected
      ? this.state.selected
      : this.props.defaultLabel;
    const openClass = this.state.isOpen ? "is-open" : "";

    return (
      <div
        className={`ter-dropdown ${openClass}`}
        onClick={this.handleOpenDropdown}
      >
        <span className="ter-dropdown__selected">{selected}</span>
        <ul className="ter-dropdown__options-list">{this.getOptions()}</ul>
      </div>
    );
  }
}

export const Option = props => {
  return (
    <li
      className="ter-dropdown__options-list-item"
      onClick={() => props.onSelect(props.option)}
    >
      {props.option}
    </li>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  defaultLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectOption: PropTypes.func.isRequired
};
