import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./Modal.scss";

var Modal = function Modal(props) {
  var className = props.className,
      title = props.title,
      body = props.body,
      buttonOne = props.buttonOne,
      buttonTwo = props.buttonTwo,
      closeModal = props.closeModal,
      name = props.name;
  return React.createElement("aside", {
    className: "ter-modal ".concat(className)
  }, React.createElement("button", {
    className: "ter-modal__close",
    onClick: function onClick() {
      return closeModal(name);
    },
    "aria-label": "Close Modal"
  }, React.createElement(Icon, {
    type: "enclosed-x-dark-16px",
    size: "16px"
  })), React.createElement("div", {
    className: "ter-modal__body"
  }, React.createElement("h4", {
    className: "ter-modal__title"
  }, title), React.createElement("p", null, body), buttonOne && React.createElement(Button, {
    onClick: buttonOne.onClick,
    text: buttonOne.text,
    className: buttonOne.className
  }), buttonTwo && React.createElement(Button, {
    onClick: buttonTwo.onClick,
    text: buttonTwo.text,
    className: buttonTwo.className
  })));
};

export default Modal;