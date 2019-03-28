import React from "react";
import Button from "../Button/Button";
import "./Modal.scss";

const Modal = props => {
  const { className, title, body, buttonOne, buttonTwo, closeModal } = props;
  return (
    <aside className={`ter-modal ${className}`}>
      <button className="ter-modal__close" onClick={closeModal()}>
        close
      </button>
      <div className="ter-modal__body">
        <h4 class="ter-modal__title">{title}</h4>
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
      </div>
    </aside>
  );
};

export default Modal;
