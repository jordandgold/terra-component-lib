import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = props => {
  const {
    className,
    title,
    body,
    buttonOne,
    buttonTwo,
    closeModal,
    name
  } = props;
  return (
    <aside className={`ter-modal ${className}`}>
      <button
        className="ter-modal__close"
        onClick={() => closeModal(name)}
        aria-label="Close Modal"
      >
        <Icon type="enclosed-x-dark-16px" size="16px" />
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

Modal.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  buttonOne: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  }),
  buttonTwo: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  })
};
