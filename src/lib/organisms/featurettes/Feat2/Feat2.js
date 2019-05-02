import React from "react";
import PropTypes from "prop-types";
import Accordion from "../../../Accordion/Accordion";
import "./Feat2.scss";

const Feat2 = ({ title, text, children, image }) => {
  return (
    <section className="ter-feat-two">
      <img
        className="ter-feat-two__image--mobile"
        src={image.url}
        alt={image.altText}
      />
      <h2 className="ter-feat-two__title">{title}</h2>
      <p className="ter-feat-two__text">{text}</p>
      <div className="ter-feat-two__accordion-image-container">
        <div className="ter-feat-two__image-wrapper">
          <img
            className="ter-feat-two__image-desktop ter-feat-two__image"
            src={image.url}
            alt={image.altText}
          />
        </div>
        <div className="ter-feat-two__accordion-wrapper">
          <Accordion defaultActive={0} children={children} />
        </div>
      </div>
    </section>
  );
};

export default Feat2;

Feat2.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }).isRequired
};
