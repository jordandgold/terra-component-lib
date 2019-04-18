import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Dropdown.scss";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  handleOpenDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const openClass = this.state.isOpen ? "is-open" : "";

    return (
      <div
        className={`ter-dropdown ${openClass}`}
        onClick={this.handleOpenDropdown}
      >
        <span className="ter-dropdown__selected">
          {this.props.label}
          <Icon
            type="open-caret-down-dark-16px"
            className="ter-dropdown__caret"
            size="16px"
          />
        </span>
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;

Dropdown.propTypes = {
  label: PropTypes.string.isRequired
};
