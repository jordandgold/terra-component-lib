import React, { Component } from "react";
import "./Select.scss";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Select extends Component {
  constructor() {
    super();

    this.state = {
      deployed: false
    };

    this.selectOptionRefs = [];
  }

  toggleDeploy = () => {
    this.setState({
      deployed: !this.state.deployed
    });
  };

  handleKeyup = e => {
    if (!this.state.deployed) {
      return;
    }

    const node = this.selectOptionRefs.find(option => {
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

    this.selectOptionRefs.push(optionRef);

    return optionRef;
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
          ref={this.createOptionRef()}
          option={option}
        />
      );
    });
  };

  render() {
    return (
      <div onKeyUp={e => this.handleKeyup(e)} tabIndex="0">
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

export class SelectOption extends Component {
  render() {
    const { option, onClick } = this.props;
    return (
      <li className="select-options__item" onClick={() => onClick(option)}>
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
