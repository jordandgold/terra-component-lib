import React from "react";
import "./Hero2.scss";
import PropTypes from "prop-types";
import CTASection from "../../../CTASection/CTASection";

const Hero2 = props => {
  const { imageSide, image, title, body, ctas } = props;
  const imageStyle = {
    backgroundImage: `url(${image.url})`
  };
  return (
    <section
      className={`ter-hero2 container-fluid ${
        imageSide === "right" ? "row reverse" : "row"
      }`}
    >
      <div className="ter-hero2--image-wrapper col-xs-12 col-sm-6 col-lg-7">
        <img className="ter-hero2--image" src={image.url} alt={image.altText} />
      </div>
      <div className="ter-hero2--content col-xs-12 col-sm-6 col-lg-5 middle-lg">
        <div className="ter-hero2--content-wrapper">
          <h3 className="ter-hero2--title">{title}</h3>
          <p className="ter-hero2--body">{body}</p>
          {ctas && <CTASection ctas={ctas} />}
        </div>
      </div>
    </section>
  );
};

export default Hero2;

Hero2.propTypes = {
  imageSide: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  ctas: PropTypes.shape({
    ctaOne: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      name: PropTypes.string
    }),
    ctaTwo: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      name: PropTypes.string
    }),
    subCTA: PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  })
};
