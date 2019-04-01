import React, { Component } from "react";
import "./Notification.scss";
import PropTypes from "prop-types";

class Notification extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
      <section className="notification">
        <p>{text}</p>
        <button className="notification-close-icon" onClick={onClick} />
      </section>
    );
  }
}

export default Notification;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
