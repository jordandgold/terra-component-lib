import React from "react";
import "./IconListItem.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const IconListItem = ({ content }) => {
  return (
    <article className="ter-icon-list-item">
      <div className="ter-icon-list-item__icon-wrapper">
        <Icon type="enclosed-arrow-right-dark-32px" size="32px" />
      </div>
      <div className="ter-icon-list-item__content-wrapper">
        <h4 className="ter-icon-list-item__title">{content.title}</h4>
        <p className="ter-icon-list-item__body">{content.text}</p>
      </div>
    </article>
  );
};

export default IconListItem;

IconListItem.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};
