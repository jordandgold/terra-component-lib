import React from "react";
import "./Hero2.scss";
import PropTypes from "prop-types";

const Hero = props => {
  const { imageSide, image, title, body, children } = props;
  return (
    <section
      className={`ter-hero2 container-fluid row ${
        imageSide === "right" ? "flex-row-reverse" : "flex- row"
      }`}
    >
      <img
        className="ter-hero2__image col-lg-7"
        src={image.url}
        alt={image.altText}
      />
      <div className="ter-hero2__content col-lg-5 middle-lg">
        <h3 className="ter-hero2__title">{title}</h3>
        <p className="ter-hero2__body">{body}</p>
        {children}
      </div>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  imageSide: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node
};
