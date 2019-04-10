import React, { Component } from "react";
import "./Checkbox.scss";
import PropTypes from "prop-types";

class Checkbox extends Component {
  render() {
    return (
      <React.Fragment>
        <label className="ter-checkbox__label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          id={this.props.name}
          name={this.props.name}
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.handleChange(this.props.name)}
        />
      </React.Fragment>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};
