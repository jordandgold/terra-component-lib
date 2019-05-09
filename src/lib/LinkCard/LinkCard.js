import React from "react";
import "./LinkCard.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const LinkCard = ({ title, text, link }) => {
  return (
    <article className="ter-link-card">
      <h4 className="ter-link-card__title">{title}</h4>
      <p className="ter-link-card__text">{text}</p>
      <a className="ter-link-card__link" url={link.url}>
        {link.text}
        <Icon type="enclosed-arrow-right-dark-32px" size="32px" />
      </a>
    </article>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
