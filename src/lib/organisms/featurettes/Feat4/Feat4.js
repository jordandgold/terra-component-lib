import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Feat4.scss";
import ButtonLinkCard from "../../../ButtonLinkCard/ButtonLinkCard";
import IconListItem from "../../../IconListItem/IconListItem";

class Feat4 extends Component {
  generateCards = () => {
    if (this.props.variant === "c") {
      return this.generateCCards();
    } else if (this.props.variant === "d") {
      return this.generateDCards();
    } else {
      return this.generateACards();
    }
  };

  generateACards = () => {
    return this.props.content.map((card, index) => {
      return (
        <IconListItem content={card} key={`icon-list-item-card-${index}`} />
      );
    });
  };

  generateCCards = () => {
    return this.props.content.map((card, index) => {
      return (
        <ButtonLinkCard content={card} key={`button-link-card-${index}`} />
      );
    });
  };

  generateDCards = () => {};

  render() {
    const { image } = this.props;
    return (
      <section className="ter-feat-four">
        {image && (
          <img
            src={image.url}
            alt={image.altText}
            className="ter-feat-four--image"
          />
        )}
        <div className="ter-feat-four--card-container">
          {this.generateCards}
        </div>
      </section>
    );
  }
}

export default Feat4;

Feat4.propTypes = {
  variant: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }),
  content: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    link: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }).isRequired
};
