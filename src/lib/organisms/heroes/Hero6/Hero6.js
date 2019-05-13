import React from "react";
import "./Hero6.scss";
import PropTypes from "prop-types";
import CTALinkSection from "../../../CTALinkSection/CTALinkSection";

const Hero6 = props => {
  const { title, text, ctas, images, imageSide } = props;
  const imageStyleThreeByTwo = {
    background: `url(${images.imageThreeByTwo.url})`
  };
  const imageStyleOneByOne = {
    background: `url(${images.imageOneByOne.url})`
  };
  return (
    <section class={`ter-hero-6 ter-hero-6--${imageSide}`}>
      <figure
        class="ter-hero-6__hero-image ter-hero-6__hero-image--3x2"
        style={imageStyleThreeByTwo}
      />
      <figure
        class="ter-hero-6__hero-image ter-hero-6__hero-image--1x1"
        style={imageStyleOneByOne}
      />
      <figure class="ter-hero-6__hero-image ter-hero-6__hero-image--4x3">
        <img src={images.imageFourByThree.url} />
      </figure>
      <div class="ter-hero-6__container">
        <aside class="ter-hero-6__content">
          <h2 className="ter-hero-6__title">{title}</h2>
          <p className="ter-hero-6__text">{text}</p>
          <CTALinkSection ctas={ctas} />
        </aside>
      </div>
    </section>
  );
};

export default Hero6;

Hero6.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  images: PropTypes.shape({
    imageThreeByTwo: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    imageFourByThree: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    imageOneByOne: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }),
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
