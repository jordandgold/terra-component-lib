import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Dropdown.scss";

class Dropdown extends Component {
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

  render() {
    const openClass = this.state.deployed ? "is-open" : "";

    return (
      <div className="ter-dropdown__wrapper" ref={node => (this.node = node)}>
        <div
          className={`ter-dropdown ${openClass}`}
          onClick={this.toggleDeploy}
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
      </div>
    );
  }
}

export default Dropdown;

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node
};
