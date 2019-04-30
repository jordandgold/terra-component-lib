import React from "react";
import "./LinkTile.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const LinkTile = ({ content }) => {
  const { title, body, link } = content;

  return (
    <article className="ter-link-tile">
      <div className="ter-link-tile--link-wrapper">
        <a className="ter-link-tile--title" href={link.url}>
          {title}
        </a>
        <Icon type="enclosed-caret-right-dark-24px" size="24px" />
      </div>
      <p className="ter-link-tile--body">{body}</p>
    </article>
  );
};

export default LinkTile;

LinkTile.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    link: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  })
};
