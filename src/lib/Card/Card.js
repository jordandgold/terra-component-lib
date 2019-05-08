import React, { Component } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import ButtonLink from "../ButtonLink/ButtonLink";

import PropTypes from "prop-types";

class Card extends Component {
  render() {
    const { image, title, text, button, buttonLink, link } = this.props;

    return (
      <article className="ter-card">
        {image && (
          <figure className="ter-card__image">
            <img src={image.url} alt={image.altText} />
          </figure>
        )}
        <div className="ter-card__body">
          <h4 className="ter-card__title">{title}</h4>
          {text && <p className="ter-card__text">{text}</p>}

          {button && (
            <Button
              name={button.name}
              text={button.text}
              className="ter-button--primary--1"
              onClick={button.onClick}
            />
          )}
          {buttonLink && (
            <ButtonLink
              link={buttonLink.link}
              text={buttonLink.text}
              className="ter-button--primary--1"
            />
          )}
          {link && (
            <a className="ter-card__link" href={link.link}>
              {link.text}
            </a>
          )}
        </div>
      </article>
    );
  }
}

export default Card;

Card.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  button: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  buttonLink: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  link: PropTypes.object
};
