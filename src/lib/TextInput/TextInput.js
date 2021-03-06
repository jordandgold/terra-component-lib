import React, { Component } from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";

class TextInput extends Component {
  render() {
    const { name, label, placeholder, value, inputChange, status } = this.props;
    const statusMessage = {
      error: "has-error",
      success: "has-success"
    };
    return (
      <div
        className={`ter-form-item ${status && statusMessage[status.className]}`}
      >
        {label && (
          <label className="ter-form-item__label" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={e => inputChange(e)}
          className={`ter-input`}
        />
        {status && status.message && (
          <p className="ter-form-item__status-message">{status.message}</p>
        )}
      </div>
    );
  }
}

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  status: PropTypes.shape({
    className: PropTypes.string.isRequired,
    message: PropTypes.string
  }),
  name: PropTypes.string.isRequired
};
