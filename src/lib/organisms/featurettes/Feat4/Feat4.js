import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Feat4.scss";
import IconListItem from "../../../IconListItem/IconListItem";
import ButtonLinkCard from "../../../ButtonLinkCard/ButtonLinkCard";
import LinkTile from "../../../LinkTile/LinkTile";
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

  generateDCards = () => {
    return this.props.content.map((card, index) => {
      return <LinkTile content={card} key={`link-tile-${index}`} />;
    });
  };

  render() {
    const { image, columns, title } = this.props;
    return (
      <section className="ter-feat-four">
        {image && (
          <img
            src={image.url}
            alt={image.altText}
            className="ter-feat-four__image"
          />
        )}
        {title && (
          <h3
            className={`ter-feat-four__title ${
              !image ? "ter-feat-four__title--no-image" : ""
            }`}
          >
            {title}
          </h3>
        )}
        <div
          className={`ter-feat-four__card-container ${
            columns === 3 ? "three-columns" : "two-columns"
          }`}
        >
          {this.generateCards()}
        </div>
      </section>
    );
  }
}

export default Feat4;

Feat4.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }),
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    })
  ),
  columns: PropTypes.number
};
