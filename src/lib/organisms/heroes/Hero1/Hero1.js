import React, { Component } from "react";
import "./Hero1.scss";
import CTALinkSection from "../../../CTALinkSection/CTALinkSection";
import PropTypes from "prop-types";
import { windowSizes } from "../../../../utils/globalVariables";

class Hero1 extends Component {
  constructor() {
    super();

    this.state = {
      size: "desktop",
      contentHeight: null
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkSize);

    this.checkSize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  checkSize = () => {
    if (window.innerWidth > windowSizes.desktop) {
      this.setState({
        size: "desktop",
        contentHeight: document.querySelector(
          ".ter-hero-one__content-container"
        ).offsetHeight
      });
    } else if (window.innerWidth > windowSizes.tabletLandscape) {
      this.setState({
        size: "tablet",
        contentHeight: document.querySelector(
          ".ter-hero-one__content-container"
        ).offsetHeight
      });
    } else {
      this.setState({
        size: "mobile",
        contentHeight: document.querySelector(
          ".ter-hero-one__content-container"
        ).offsetHeight
      });
    }
  };

  render() {
    const { images, contentSide, title, text, ctas } = this.props;
    const side = {
      right: "-"
    };
    return (
      <section className="ter-hero-one">
        {this.state.size === "mobile" && (
          <img
            className="ter-hero-one__image ter-hero-one__image--mobile"
            src={images.mobile.url}
            alt={images.mobile.altText}
          />
        )}
        {this.state.size === "tablet" && (
          <img
            className="ter-hero-one__image ter-hero-one__image--tablet"
            src={images.tablet.url}
            alt={images.tablet.altText}
          />
        )}
        {this.state.size === "desktop" && (
          <img
            className="ter-hero-one__image ter-hero-one__image--desktop"
            src={images.desktop.url}
            alt={images.desktop.altText}
          />
        )}
        {contentSide === "right" ? (
          <div
            className="ter-hero-one__content-container"
            style={
              this.state.size === "desktop"
                ? {
                    transform: `translate(-48px, -${this.state.contentHeight +
                      48}px)`,
                    float: "right"
                  }
                : {}
            }
          >
            <h2 className="ter-hero-one__title">{title}</h2>
            <p className="ter-hero-one__text">{text}</p>
            <CTALinkSection ctas={ctas} />
          </div>
        ) : (
          <div
            className="ter-hero-one__content-container"
            style={
              this.state.size === "desktop"
                ? {
                    transform: `translate(48px, -${this.state.contentHeight +
                      48}px)`,
                    float: "left"
                  }
                : {}
            }
          >
            <h2 className="ter-hero-one__title">{title}</h2>
            <p className="ter-hero-one__text">{text}</p>
            <CTALinkSection ctas={ctas} />
          </div>
        )}
      </section>
    );
  }
}

export default Hero1;

Hero1.propTypes = {
  contentSide: PropTypes.string,
  images: PropTypes.shape({
    desktop: PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired
    }).isRequired,
    tablet: PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired
    }).isRequired,
    mobile: PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  ctas: PropTypes.shape({
    ctaOne: PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    ctaTwo: PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    subCTA: PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  })
};
