import React, { Component } from "react";
import "./Checkbox.scss";
import PropTypes from "prop-types";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked || false
    };
  }

  handleChange = e => {
    this.setState({ checked: e.target.checked });
    this.props.handleChange(e);
  };

  render() {
    let isChecked = this.state.checked ? "is-checked" : "";

    return (
      <div className={`ter-checkbox ${isChecked}`}>
        <label className="ter-checkbox__label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          id={this.props.name}
          name={this.props.name}
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired
};
