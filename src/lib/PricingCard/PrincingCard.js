import React from "react";
import PropTypes from "prop-types";
import "./PricingCard.scss";
import ButtonLink from "../ButtonLink/ButtonLink";

const PricingCard = ({
  product,
  version,
  description,
  cost,
  currency,
  buttonLink
}) => {
  return (
    <article className="ter-pricing-card">
      <p className="ter-pricing-card__product">{product}</p>
      <p className="ter-pricing-card__version">{version}</p>
      <p className="ter-pricing-card__description">{description}</p>
      <h3 className="ter-pricing-card__cost">{cost}</h3>
      <p className="ter-pricing-card__currency">{currency}</p>
      <ButtonLink
        link={buttonLink.link}
        text={buttonLink.text}
        className="ter-button--secondary--1"
      />
    </article>
  );
};

export default PricingCard;

PricingCard.propTypes = {
  product: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
