import React, { Component } from "react";
import "./Tooltip.scss";
import PropTypes from "prop-types";

class Tooltip extends Component {
  render() {
    const { tooltipLabel, direction, children } = this.props;
    return (
      <span className="ter-tooltip" data-direction={direction}>
        {tooltipLabel && <a>{tooltipLabel}</a>}
        <span className="ter-tooltip__content">{children && children}</span>
      </span>
    );
  }
}

export default Tooltip;

Tooltip.propTypes = {
  direction: PropTypes.string.isRequired,
  toolTipLabel: PropTypes.string,
  children: PropTypes.node
};
