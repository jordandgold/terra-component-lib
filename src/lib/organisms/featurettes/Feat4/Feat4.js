import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Feat4.scss";

class Feat4 extends Component {
  generateCards = () => {};

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
    link: PropTypes.string.isRequired
  })
};
