import React, { Component } from "react";
import PropTypes from "prop-types";
import IconListItem from "../../../IconListItem/IconListItem";
import LinkCard from "../../../LinkCard/LinkCard";
import ButtonLink from "../../../ButtonLink/ButtonLink";
import "./Feat3.scss";

class Feat3 extends Component {
  getContent = () => {
    if (this.props.content[0].link) {
      return this.getLinkCards();
    } else {
      return this.getIconListItems();
    }
  };

  getLinkCards = () => {
    return this.props.content.map((item, index) => {
      return (
        <LinkCard
          title={item.title}
          text={item.text}
          link={item.link}
          key={`link-card-${index}`}
        />
      );
    });
  };

  getIconListItems = () => {
    return this.props.content.map((item, index) => {
      return <IconListItem content={item} key={`icon-list-item-${index}`} />;
    });
  };

  render() {
    const { images, text, title, cta } = this.props;
    return (
      <section className="ter-feat-three">
        <div className="ter-feat-three__image-wrapper">
          <img
            src={images.desktop.url}
            alt={images.desktop.altText}
            className="ter-feat-three__image ter-feat-three__image--desktop"
          />
          <img
            src={images.tablet.url}
            alt={images.tablet.altText}
            className="ter-feat-three__image ter-feat-three__image--tablet"
          />
          <img
            src={images.mobile.url}
            alt={images.mobile.altText}
            className="ter-feat-three__image ter-feat-three__image--mobile"
          />
        </div>
        <div className="ter-feat-three__content-container">
          <h2 className="ter-feat-three__title">{title}</h2>
          <p className="ter-feat-three__text">{text}</p>
          {this.getContent()}
          {cta && (
            <ButtonLink
              link={cta.link}
              text={cta.text}
              className="ter-button--primary--1"
            />
          )}
        </div>
      </section>
    );
  }
}

export default Feat3;

Feat3.propTypes = {
  images: PropTypes.shape({
    desktop: PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired
    }),
    mobile: PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired
    }),
    tablet: PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired
    }),
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.shape({
          url: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      })
    ),
    cta: PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  })
};
