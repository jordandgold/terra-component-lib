import React, { Component } from "react";
import "./Feat8.scss";
import Card from "../../../Card/Card";
import PropTypes from "prop-types";
import Button from "../../../Button/Button";
import ButtonLink from "../../../ButtonLink/ButtonLink";

class Feat8 extends Component {
  renderCards = () => {
    return this.props.cards.map((card, index) => {
      return (
        <Card
          image={card.image}
          title={card.title}
          text={card.text}
          button={card.button}
          buttonLink={card.buttonLink}
          link={card.link}
          className="ter-button--primary--1"
          key={`feat-eight-card-${index}`}
        />
      );
    });
  };
  render() {
    const { title, button, buttonLink } = this.props;
    return (
      <section className="ter-feat-eight">
        <h2 className="ter-feat-eight__title">{title}</h2>
        {button && (
          <Button
            onClick={button.onClick}
            text={button.text}
            name={button.name}
            className="ter-button--primary--1"
          />
        )}
        {buttonLink && (
          <div className="ter-feat-eight__button-link-wrapper">
            <ButtonLink
              link={buttonLink.link}
              text={buttonLink.text}
              className="ter-button--primary--1"
            />
          </div>
        )}
        <div className="ter-feat-eight__card-container">
          {this.renderCards()}
        </div>
      </section>
    );
  }
}

export default Feat8;

Feat8.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  button: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string
  }),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired
};
