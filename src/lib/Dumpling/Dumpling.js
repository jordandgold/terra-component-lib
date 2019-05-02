import React from "react";
import PropTypes from "prop-types";
import "./Dumpling.scss";
import Icon from "../Icon/Icon";

const Dumpling = ({ title, link, size, icon, image }) => {
  return (
    <article className={`ter-dumpling ter-dumpling--${size}`}>
      {icon && (
        <div className="ter-dumpling__icon-wrapper">
          <Icon type={icon.type} size={icon.size} />
        </div>
      )}
      {image && (
        <img
          src={image.url}
          alt={image.altText}
          className="ter-dumpling__image"
        />
      )}
      {size === "small" && <div className={"ter-dumpling__small-dash"} />}
      <a
        className={`ter-dumpling__link ter-dumpling__link--${size}`}
        href={link.url}
      >
        {title}
      </a>
      <div />
    </article>
  );
};

export default Dumpling;

Dumpling.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
  }),
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  })
};
