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
      <div
        className={`ter-select ${!this.state.deployed && "is-open"}`}
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
          className={`ter-select__options-list ${!this.state.deployed &&
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
