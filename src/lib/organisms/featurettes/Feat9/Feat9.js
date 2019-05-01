import React from "react";
import "./Feat9.scss";
import PropTypes from "prop-types";

const Feat9 = props => {
  const { image, quote } = props;
  return (
    <section className="ter-feat9">
      <img className="ter-feat9__image" src={image.url} alt={image.altText} />
      <div className="ter-feat9__full-quote-wrapper">
        <img
          className="ter-feat9__quote-icon"
          src="./ico-quote.svg"
          alt="downward quote"
        />
        <div className="ter-feat9__content">
          <p className="ter-feat9__quote-text">{quote.text}</p>
          <p className="ter-feat9__quote-source">- {quote.source}</p>
          <p className="ter-feat9__quote-source-title">{quote.sourceTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Feat9;

Feat9.propTypes = {
  imageSide: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }).isRequired,
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    source: PropTypes.string,
    sourceTitle: PropTypes.string
  }).isRequired
};
