import React, { Component } from "react";
import "./TextArea.scss";
import PropTypes from "prop-types";

class TextArea extends Component {
  render() {
    return (
      <div className="ter-form-item">
        <label className="ter-form-item__label">{this.props.label}</label>
        <textarea
          defaultValue={this.props.value}
          onChange={e => this.props.inputChange(e)}
          name={this.props.name}
          className="ter-textarea"
        />
      </div>
    );
  }
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
