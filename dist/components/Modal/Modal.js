import React from "react";
import Button from "../Button/Button";
import "./Modal.scss";

var Modal = function Modal(props) {
  var className = props.className,
      title = props.title,
      body = props.body,
      buttonOne = props.buttonOne,
      buttonTwo = props.buttonTwo,
      closeModal = props.closeModal;
  return React.createElement("aside", {
    className: "ter-modal ".concat(className)
  }, React.createElement("button", {
    className: "ter-modal__close",
    onClick: closeModal()
  }, "close"), React.createElement("div", {
    className: "ter-modal__body"
  }, React.createElement("h4", {
    class: "ter-modal__title"
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