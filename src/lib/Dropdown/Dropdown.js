import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Dropdown.scss";

class Dropdown extends Component {
  constructor() {
    super();

    this.optionRefs = [];

    this.state = {
      isOpen: false
    };
  }

  handleKeyup = e => {
    if (!this.state.isOpen) {
      return;
    }

    const node = this.optionRefs.find(option => {
      return (
        option.current.props.option[0].toLowerCase() === e.key.toLowerCase()
      );
    });

    if (!node) {
      return;
    }

    const nodeLocation = ReactDOM.findDOMNode(node.current);

    window.scrollTo(0, nodeLocation.offsetTop);
  };

  createOptionRef = () => {
    const optionRef = React.createRef();

    this.optionRefs.push(optionRef);

    return optionRef;
  };

  handleOpenDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.optionRefs = [];
  };

  handleSelectOption = option => {
    if (option !== this.props.selected) {
      this.props.selectOption(this.props.name, option);
    }

    this.setState({
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
          ref={this.createOptionRef()}
        />
      );
    });
  };

  render() {
    const selected = this.props.selected
      ? this.props.selected
      : this.props.defaultLabel;
    const openClass = this.state.isOpen ? "is-open" : "";

    return (
      <div
        className={`ter-dropdown ${openClass}`}
        onClick={this.handleOpenDropdown}
        onKeyUp={e => this.handleKeyup(e)}
        tabIndex="0"
      >
        <span className="ter-dropdown__selected">
          {selected}
          <Icon
            type="open-caret-down-dark-16px"
            className="ter-dropdown__caret"
            size="16px"
          />
        </span>
        <ul className="ter-dropdown__options-list">{this.getOptions()}</ul>
      </div>
    );
  }
}

export class Option extends Component {
  render() {
    const { option, onSelect } = this.props;
    return (
      <li
        className="ter-dropdown__options-list-item"
        onClick={() => onSelect(option)}
      >
        {option}
      </li>
    );
  }
}

export default Dropdown;

Dropdown.propTypes = {
  defaultLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectOption: PropTypes.func.isRequired,
  selected: PropTypes.string,
  name: PropTypes.string.isRequired
};
