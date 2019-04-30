import React from "react";
import PropTypes from "prop-types";
import "./ButtonLink.scss";

const ButtonLink = props => {
  const { link, className, text } = props;

  return (
    <React.Fragment>
      <a href={link} className={`ter-button ${className}`}>
        {text}
      </a>
    </React.Fragment>
  );
};

export default ButtonLink;

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};
