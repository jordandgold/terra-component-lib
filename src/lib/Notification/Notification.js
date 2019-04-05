import React, { Component } from "react";
import "./Notification.scss";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

class Notification extends Component {
  render() {
    const { onClick, text, type } = this.props;
    return (
      <section className={`ter-notification ter-notification--${type}`}>
        <button
          className="ter-notification__close"
          onClick={onClick}
          aria-label="Close Notification"
        >
          <Icon type="enclosed-x-dark-16px" size="16px" />
        </button>
        <div class="ter-notification__body">
          <p>{text}</p>
        </div>
      </section>
    );
  }
}

export default Notification;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
