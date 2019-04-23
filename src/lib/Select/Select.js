import React, { Component } from "react";
import "./Select.scss";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Icon from "../Icon/Icon";

class Select extends Component {
  constructor() {
    super();

    this.state = {
      deployed: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.toggleClose);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.toggleClose);
  }

  toggleClose = e => {
    if (this.node.contains(e.target) || !this.state.deployed) {
      return;
    }

    this.toggleDeploy();
  };

  toggleDeploy = () => {
    this.setState({
      deployed: !this.state.deployed
    });
  };

  handleKeyup = e => {
    if (!this.state.deployed) {
      return;
    }

    const nodes = Array.from(
      document.querySelectorAll(".ter-select__options-list-item")
    );

    const node = nodes.find(node => {
      return node.innerText[0].toLowerCase() === e.key.toLowerCase();
    });

    node.scrollIntoView();
  };

  handleSelection = selection => {
    this.toggleDeploy();

    this.props.handleSelection(selection, this.props.name);
  };

  generateOptions = () => {
    return this.props.options.map((option, index) => {
      return (
        <SelectOption
          key={`${option}-${index}`}
          onClick={this.handleSelection}
          option={option}
        />
      );
    });
  };

  render() {
    return (
      <div
        ref={node => (this.node = node)}
        className={`ter-select ${this.state.deployed && "is-open"}`}
        onKeyUp={e => this.handleKeyup(e)}
        tabIndex="0"
      >
        <div className="ter-select__selected" onClick={this.toggleDeploy}>
          {this.props.selection || this.props.defaultText}
          <Icon
            type="open-caret-down-dark-16px"
            className="ter-search-select__caret"
            size="16px"
          />
        </div>
        <ul
          className={`ter-select__options-list ${this.state.deployed &&
            "is-open"}`}
        >
          {this.generateOptions()}
        </ul>
      </div>
    );
  }
}

export class SelectOption extends Component {
  render() {
    const { option, onClick } = this.props;
    return (
      <li
        className="ter-select__options-list-item"
        onClick={() => onClick(option)}
      >
        {option}
      </li>
    );
  }
}

export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelection: PropTypes.func.isRequired,
  selection: PropTypes.string,
  defaultText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
