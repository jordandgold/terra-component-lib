import React from "react";
import "./Hero2.scss";
import PropTypes from "prop-types";
import CTALinkSection from "../../../CTALinkSection/CTALinkSection";

const Hero2 = props => {
  const { title, text, ctas, images, subtitle, imageSide } = props;
  if (imageSide === "right") {
    return (
      <section className="ter-hero-two ter-hero-two--right-image">
        <div className="ter-hero-two__image-container ter-hero-two__image-container--right-image">
          <img
            className="ter-hero-two__image ter-hero-two__image--4x3"
            src={images.imageFourXThree.url}
            alt={images.imageFourXThree.altText}
          />
        </div>
        <div className="ter-hero-two__content-container ter-hero-two__content-container--left">
          <h2 className="ter-hero-two__title">{title}</h2>
          <h3 className="ter-hero-two__subtitle">{subtitle}</h3>
          <p className="ter-hero-two__text">{text}</p>
          <CTALinkSection ctas={ctas} />
        </div>
        <div className="ter-hero-two__image-container">
          <img
            className="ter-hero-two__image ter-hero-two__image--1x1"
            src={images.imageOneXOne.url}
            alt={images.imageOneXOne.altText}
          />
          <img
            className="ter-hero-two__image ter-hero-two__image--3x2"
            src={images.imageThreeXTwo.url}
            alt={images.imageThreeXTwo.altText}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section className="ter-hero-two">
        <div className="ter-hero-two__image-container">
          <img
            className="ter-hero-two__image ter-hero-two__image--1x1"
            src={images.imageOneXOne.url}
            alt={images.imageOneXOne.altText}
          />
          <img
            className="ter-hero-two__image ter-hero-two__image--4x3"
            src={images.imageFourXThree.url}
            alt={images.imageFourXThree.altText}
          />
          <img
            className="ter-hero-two__image ter-hero-two__image--3x2"
            src={images.imageThreeXTwo.url}
            alt={images.imageThreeXTwo.altText}
          />
        </div>
        <div className="ter-hero-two__content-container">
          <h2 className="ter-hero-two__title">{title}</h2>
          <h3 className="ter-hero-two__subtitle">{subtitle}</h3>
          <p className="ter-hero-two__text">{text}</p>
          <CTALinkSection ctas={ctas} />
        </div>
      </section>
    );
  }
};

export default Hero2;

Hero2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  ctas: PropTypes.shape({
    ctaOne: PropTypes.shape({
      className: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }),
    ctaTwo: PropTypes.shape({
      className: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }),
    subCTA: PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  })
};
