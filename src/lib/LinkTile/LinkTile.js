import React from "react";
import "./LinkTile.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const LinkTile = ({ content }) => {
  const { title, text, link } = content;

  return (
    <article className="ter-link-tile">
      <div className="ter-link-tile__link-wrapper">
        <a className="ter-link-tile__title" href={link.url}>
          {title}
        </a>
        <Icon type="enclosed-caret-right-dark-24px" size="24px" />
      </div>
      <p className="ter-link-tile__body">{text}</p>
    </article>
  );
};

export default LinkTile;

LinkTile.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  })
};
