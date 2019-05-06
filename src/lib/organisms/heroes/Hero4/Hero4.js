import React from "react";
import "./Hero4.scss";
import PropTypes from "prop-types";
import CTALinkSection from "../../../CTALinkSection/CTALinkSection";

const Hero4 = props => {
  const { title, text, ctas, video } = props;
  return (
    <section className="ter-hero-four">
      <div className="ter-hero-four__video-container">
        <iframe
          width="560"
          height="315"
          src={video.url}
          frameBorder="0"
          allow={`accelerometer; ${video.autoplay &&
            "autoplay"}; encrypted-media; gyroscope; picture-in-picture ${video.allowFullScreen &&
            "fullscreen"}`}
          className="ter-hero-four__video"
        />
      </div>
      <div className="ter-hero-four__content-container">
        <h2 className="ter-hero-four__title">{title}</h2>
        <p className="ter-hero-four__text">{text}</p>
        <CTALinkSection ctas={ctas} />
      </div>
    </section>
  );
};

export default Hero4;

Hero4.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    allowFullScreen: PropTypes.bool
  }).isRequired,
  title: PropTypes.string.isRequired,
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
