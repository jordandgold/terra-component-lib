import React from "react";
import "./CTALinkSection.scss";
import PropTypes from "prop-types";
import ButtonLink from "../ButtonLink/ButtonLink";

const CTALinkSection = props => {
  const { ctaOne, ctaTwo, subCTA } = props.ctas;
  return (
    <section className="ter-cta-section">
      {ctaOne && (
        <ButtonLink
          className={ctaOne.className}
          text={ctaOne.text}
          link={ctaOne.link}
        />
      )}
      {ctaTwo && (
        <ButtonLink
          className={ctaTwo.className}
          text={ctaTwo.text}
          link={ctaTwo.link}
        />
      )}
      {subCTA && <a className="ter-cta-section__link">{subCTA.text}</a>}
    </section>
  );
};

export default CTALinkSection;

CTALinkSection.propTypes = {
  ctaOne: PropTypes.shape({
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    link: PropTypes.string
  }),
  ctaTwo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    link: PropTypes.string
  }),
  subCTA: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
};
