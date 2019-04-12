import React, { Component } from "react";
import "./Radios.scss";
import PropTypes from "prop-types";

class Radios extends Component {
  generateRadios = () => {
    const { radios, collection } = this.props;

    return radios.map((radio, index) => {
      return (
        <div key={`radio-${index}`}>
          <label
            htmlFor={`${collection}Choice${index}`}
            className={`ter-radio__label radio-${index}`}
          >
            {radio}
          </label>
          <input
            className={`radio-button-${index}`}
            type="radio"
            name={collection}
            onChange={() => this.props.selectRadio(radio, this.props.name)}
            checked={this.props.selected === radio}
            value={radio}
            id={`${collection}Choice${index}`}
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

Radios.propTypes = {
  radios: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  collection: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  selectRadio: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
