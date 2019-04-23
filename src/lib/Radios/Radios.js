import React, { Component } from "react";
import "./Radios.scss";
import PropTypes from "prop-types";

class Radios extends Component {
  generateRadios = () => {
    const { radios, name } = this.props;

    return radios.map((radio, index) => {
      return (
        <div className="ter-radio" key={`radio-${index}`}>
          <input
            className={`radio-button-${index}`}
            type="radio"
            name={name}
            onChange={() => this.props.selectRadio(radio, this.props.name)}
            checked={this.props.selected === radio}
            value={radio}
            id={`${name}Choice${index}`}
          />
          <label
            htmlFor={`${name}Choice${index}`}
            className={`ter-radio__label radio-${index}`}
          >
            {radio}
          </label>
        </div>
      );
    });
  };

  render() {
    return <div className="ter-radio-group">{this.generateRadios()}</div>;
  }
}

export default Radios;

Radios.propTypes = {
  radios: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  selectRadio: PropTypes.func.isRequired
};
