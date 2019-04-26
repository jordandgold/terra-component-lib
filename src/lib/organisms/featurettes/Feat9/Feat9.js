import React from "react";
import "./Feat9.scss";
import PropTypes from "prop-types";

const Feat9 = props => {
  const { image, quote } = props;
  return (
    <section className="ter-feat9">
      <img className="ter-feat9--image" src={image.url} alt={image.altText} />
      <img
        className="ter-feat9--quote-icon"
        src="./quote.png"
        alt="downward quote"
      />
      <div className="ter-feat9--content">
        <p className="ter-feat9--quote-text">{quote.text}</p>
        <p className="ter-feat9--quote-source">- {quote.source}</p>
        <p className="ter-feat9--quote-source-title">{quote.sourceTitle}</p>
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
