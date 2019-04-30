import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Feat4.scss";
import ButtonLink from "../../../ButtonLink/ButtonLink";

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

  generateACards = () => {};

  generateCCards = () => {};

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
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired
};

const ACard = ({ title, body, link }) => {
  return (
    <article>
      <div />
    </article>
  );
};

const CCard = ({ title, body, link }) => {
  return (
    <article>
      <div />
    </article>
  );
};

const DCard = ({ title, body, link }) => {
  return (
    <article>
      <div />
    </article>
  );
};
