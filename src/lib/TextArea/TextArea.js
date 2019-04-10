import React, { Component } from "react";
import "./TextArea.scss";
import PropTypes from "prop-types";

class TextArea extends Component {
  render() {
    return (
      <div className="ter-input__wrap">
        <label classame="ter-input__label">{this.props.label}</label>
        <textarea onChange={e => this.props.handleChange(e)}>
          {this.props.value}
        </textarea>
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
