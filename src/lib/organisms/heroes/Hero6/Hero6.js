import React from "react";
import "./Hero6.scss";
import PropTypes from "prop-types";
import CTALinkSection from "../../../CTALinkSection/CTALinkSection";

const Hero6 = props => {
  const { title, text, ctas, image, imageSide } = props;
  const imageStyle = {
    background: `url(${image.url})`
  };
  if (imageSide === "right") {
    return (
      <section className="ter-hero-six ter-hero-six--right-image">
        <div className="ter-hero-six__content-container ter-hero-six__content-container--left">
          <h2 className="ter-hero-six__title">{title}</h2>
          <p className="ter-hero-six__text">{text}</p>
          <CTALinkSection ctas={ctas} />
        </div>
        <div
          style={imageStyle}
          className="ter-hero-six__image-container ter-hero-six__image-container--right-image"
        />
      </section>
    );
  } else {
    return (
      <section className="ter-hero-six">
        <div className="ter-hero-six__image-container" />
        <div className="ter-hero-six__content-container">
          <h2 className="ter-hero-six__title">{title}</h2>
          <p className="ter-hero-six__text">{text}</p>
          <CTALinkSection ctas={ctas} />
        </div>
      </section>
    );
  }
};

export default Hero6;

Hero6.propTypes = {
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
