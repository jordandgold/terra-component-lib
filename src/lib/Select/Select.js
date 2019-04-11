import React, { Component } from "react";
import "./Select.scss";
import PropTypes from "prop-types";

class Select extends Component {
  constructor() {
    super();

    this.state = {
      deployed: false
    };
  }

  toggleDeploy = () => {
    this.setState({
      deployed: !this.state.deployed
    });
  };

  handleSelection = selection => {
    this.toggleDeploy();

    this.props.handleSelection(selection);
  };

  generateOptions = () => {
    return this.props.options.map((option, index) => {
      return (
        <li
          className="select-options__item"
          key={`${option}-${index}`}
          onClick={() => this.handleSelection(option)}
        >
          {option}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <p className="ter-select__label" onClick={this.toggleDeploy}>
          {this.props.selection || this.props.defaultText}
        </p>
        <ul className={`select-options ${!this.state.deployed && "is-open"}`}>
          {this.generateOptions()}
        </ul>
      </div>
    );
  }
}

export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelection: PropTypes.func.isRequired,
  selection: PropTypes.string,
  defaultText: PropTypes.string.isRequired
};
