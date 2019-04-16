import React from "react";
import "./Checkbox.scss";
import PropTypes from "prop-types";

const Checkbox = props => {
  return (
    <React.Fragment>
      <label className="ter-checkbox__label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type="checkbox"
        checked={props.checked}
        onChange={() => props.handleChange(props.name)}
      />
    </React.Fragment>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};
