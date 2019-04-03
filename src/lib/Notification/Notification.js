import React, { Component } from "react";
import "./Notification.scss";
import PropTypes from "prop-types";

class Notification extends Component {
  render() {
    const { onClick, text, type } = this.props;
    return (
      <section className={`ter-notification ter-notification--${type}`}>
        <button className="ter-notification__close" onClick={onClick} />
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
