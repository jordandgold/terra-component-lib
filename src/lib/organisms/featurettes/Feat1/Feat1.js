import React from "react";
import "./Feat1.scss";
import PropTypes from "prop-types";
import ButtonLink from "../../../ButtonLink/ButtonLink";

const Feat1 = ({ image, title, subtitle, text, cta, variant }) => {
  return (
    <section className={`ter-feat-one ter-feat-one--${variant}`}>
      <div
        className={`ter-feat-one__image-wrapper ter-feat-one__image-wrapper--${variant}`}
      >
        <img
          src={image.url}
          alt={image.altText}
          className="ter-feat-one__image"
        />
      </div>
      <div
        className={`ter-feat-one__content-container ter-feat-one__content-container--${variant}`}
      >
        {" "}
        <h3 className="ter-feat-one__title">{title}</h3>
        {subtitle && <h4 className="ter-feat-one__subtitle">{subtitle}</h4>}
        <p className="ter-feat-one__text">{text}</p>
        {cta && (
          <ButtonLink
            link={cta.link}
            text={cta.text}
            className="ter-button--primary--1"
          />
        )}
      </div>
    </section>
  );
};

export default Feat1;

Feat1.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  variant: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }).isRequired
};
