import React, { Component } from "react";
import "./TextArea.scss";
import PropTypes from "prop-types";

class TextArea extends Component {
  render() {
    return (
      <div className="ter-input__wrap">
        <label classame="ter-input__label">{this.props.label}</label>
        <textarea
          defaultValue={this.props.value}
          onChange={e => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
