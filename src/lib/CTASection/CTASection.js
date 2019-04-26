import React from "react";
import "./CTASection.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const CTASection = props => {
  const { ctaOne, ctaTwo, subCTA } = props.ctas;
  return (
    <section className="ter-cta-section">
      {ctaOne && (
        <Button
          className={ctaOne.className}
          name={ctaOne.name}
          text={ctaOne.text}
          onClick={ctaOne.onClick}
        />
      )}
      {ctaTwo && (
        <Button
          className={ctaTwo.className}
          name={ctaTwo.name}
          text={ctaTwo.text}
          onClick={ctaTwo.onClick}
        />
      )}
      {subCTA && <a className="ter-hero2__link">{subCTA.text}</a>}
    </section>
  );
};

export default CTASection;

CTASection.propTypes = {
  ctaOne: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    name: PropTypes.string
  }),
  ctaTwo: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    name: PropTypes.string
  }),
  ctaOne: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
};
