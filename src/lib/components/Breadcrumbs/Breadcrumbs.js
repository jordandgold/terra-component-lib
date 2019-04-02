import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Breadcrumbs.scss";

class Breadcrumbs extends Component {
  generateBreadcrumbs = () => {
    return this.props.breadcrumbs.map((breadcrumb, index) => {
      return (
        <a
          key={`breadcrumb-${index}`}
          className="breadcrumb"
          href={breadcrumb.link}
        >
          {breadcrumb.text}
        </a>
      );
    });
  };

  render() {
    return <div>{this.generateBreadcrumbs}</div>;
  }
}

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
};
