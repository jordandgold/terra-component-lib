import React from "react";
import "./Hero3.scss";
import PropTypes from "prop-types";

const Hero3 = props => {
  const { images, headerText, subHeaderText } = props;
  return (
    <section className="ter-hero-3">
      <figure className="ter-hero-3__hero-image ter-hero-3__hero-image--4x1">
        <img
          src={images.imageFourByOne.url}
          alt={images.imageFourByOne.altText}
        />
      </figure>
      <figure className="ter-hero-3__hero-image ter-hero-3__hero-image--2x1">
        <img
          src={images.imageTwoByOne.url}
          alt={images.imageTwoByOne.altText}
        />
      </figure>
      <div className="ter-hero-3__container">
        <aside className="ter-hero-3__card ter-card">
          <div className="ter-card__body">
            <h1 className="ter-hero-3__header">{headerText}</h1>
            <div className="ter-hero-3__sub-header">{subHeaderText}</div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero3;
