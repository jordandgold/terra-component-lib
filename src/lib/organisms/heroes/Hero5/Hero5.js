import React from "react";
import "./Hero5.scss";
import PropTypes from "prop-types";
import CTALinkSection from "../../../CTALinkSection/CTALinkSection";

const Hero5 = props => {
  const { title, text, ctas, image, subtitle } = props;
  return (
    <section className="ter-hero-five">
      <div className="ter-hero-five__image-container">
        <img
          className="ter-hero-five__image"
          src={image.url}
          alt={image.altText}
        />
      </div>
      <div className="ter-hero-five__content-container">
        <h2 className="ter-hero-five__title">{title}</h2>
        {subtitle && <h3 className="ter-hero-five__subtitle">{subtitle}</h3>}
        {text && <p className="ter-hero-five__text">{text}</p>}
        <CTALinkSection ctas={ctas} />
      </div>
    </section>
  );
};

export default Hero5;

Hero5.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string,
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
