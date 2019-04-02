import React, { Component } from "react";
import "./Card.scss";

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
    const { image, title, text, label, link, category } = this.props;
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
        {label && <button>{label}</button>}
      </article>
    );
  }
}

export default Card;

Card.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.array,
  label: PropTypes.string,
  link: PropTypes.object,
  category: PropTypes.string
};
