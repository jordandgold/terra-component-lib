import React from "react";
import Button from "../Button/Button";
import "./Modal.scss";

const Modal = props => {
  const { className, title, body, buttonOne, buttonTwo, closeModal } = props;
  return (
    <aside className={`modal ${className}`}>
      <button onClick={closeModal()}>close</button>
      <h4>{title}</h4>
      <p>{body}</p>
      {buttonOne && (
        <Button
          onClick={buttonOne.onClick}
          text={buttonOne.text}
          className={buttonOne.className}
        />
      )}
      {buttonTwo && (
        <Button
          onClick={buttonTwo.onClick}
          text={buttonTwo.text}
          className={buttonTwo.className}
        />
      )}
    </aside>
  );
};

export default Modal;
