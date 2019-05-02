import React, { Component } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import ButtonLink from "../ButtonLink/ButtonLink";

import PropTypes from "prop-types";

class Card extends Component {
  generateText = () => {
    return this.props.text.map((paragraph, index) => {
      return (
        <p className="card-text" key={`card-text-${index}`}>
          {paragraph}
        </p>
      );
    });
  };

  render() {
    const {
      image,
      title,
      text,
      button,
      buttonLink,
      link,
      category
    } = this.props;
    return (
      <article className="card">
        {image && (
          <img
            src={image.link}
            alt={image.description}
            className="card-hero-image"
          />
        )}
        {category && <p>{category}</p>}
        <h4 className="card-title">{title}</h4>
        {text && this.generateText()}
        {link && <a href={link.link}>{link.label}</a>}
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
      </article>
    );
  }
}

export default Card;

Card.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.array,
  button: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  buttonLink: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  link: PropTypes.object,
  category: PropTypes.string
};
