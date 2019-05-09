import React from "react";
import "./ButtonLinkCard.scss";
import PropTypes from "prop-types";
import ButtonLink from "../ButtonLink/ButtonLink";

const ButtonLinkCard = ({ content }) => {
  return (
    <article className="ter-button-link-card">
      <h4 className="ter-button-link-card__title">{content.title}</h4>
      <p className="ter-button-link-card__body">{content.text}</p>
      <ButtonLink
        link={content.link.url}
        text={content.link.text}
        className="ter-button--primary--1"
      />
    </article>
  );
};

export default ButtonLinkCard;

ButtonLinkCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  })
};
