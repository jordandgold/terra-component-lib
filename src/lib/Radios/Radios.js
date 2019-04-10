import React, { Component } from "react";
import "./Radios.scss";
import PropTypes from "prop-types";

class Radios extends Component {
  generateRadios = () => {
    const { radios } = this.props;

    return radios.map((radio, index) => {
      return (
        <div key={`radio-${index}`}>
          <label className={`ter-radio__label radio-${index}`}>
            {radio.name}
          </label>
          <input
            className={`radio-button-${index}`}
            type="radio"
            name={radio.name}
            onChange={() => this.props.selectRadio(radio)}
            checked={this.props.selected === radio.name}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="ter-radio-group">{this.generateRadios()}</div>;
  }
}

export default Radios;
