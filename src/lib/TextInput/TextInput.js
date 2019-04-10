import React, { Component } from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";

class TextInput extends Component {
  render() {
    const { name, placeholder, value, inputChange, status } = this.props;
    const statusMessage = {
      error: "has-error",
      success: "has-success"
    };
    return (
      <React.Fragment>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={e => inputChange(e)}
          className={`ter-input ${statusMessage[status] || ""}`}
        />
      </React.Fragment>
    );
  }
}

export default TextInput;

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  status: PropTypes.string,
  name: PropTypes.string.isRequired
};
