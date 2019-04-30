import React from "react";
import "./IconListItem.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const IconListItem = ({ content }) => {
  return (
    <article className="ter-icon-list-item">
      <div className="ter-icon-list-item--icon-wrapper">
        <Icon type="enclosed-arrow-right-dark-32px" size="32px" />
      </div>
      <div className="ter-icon-list-item--content-wrapper">
        <h4 className="ter-icon-list-item--title">{content.title}</h4>
        <p className="ter-icon-list-item--body">{content.body}</p>
      </div>
    </article>
  );
};

export default IconListItem;

IconListItem.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};
