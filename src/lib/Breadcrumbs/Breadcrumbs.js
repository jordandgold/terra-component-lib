import React, { Component } from "react";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

import "./Breadcrumbs.scss";

class Breadcrumbs extends Component {
  generateBreadcrumbs = () => {
    let breadcrumbArrow;
    let breadcrumbLink;

    return this.props.breadcrumbs.map((breadcrumb, index) => {
      if (this.props.breadcrumbs.length - 1 === index) {
        breadcrumbArrow = null;
        breadcrumbLink = breadcrumb.text;
      } else {
        breadcrumbArrow = (
          <Icon
            className="ter-breadcrumbs__caret"
            type="open-caret-right-dark-8px"
            size="8px"
          />
        );
        breadcrumbLink = <a href={breadcrumb.link}>{breadcrumb.text}</a>;
      }

      return (
        <li className="ter-breadcrumbs__list-item" key={`breadcrumb-${index}`}>
          {breadcrumbLink}
          {breadcrumbArrow}
        </li>
      );
    });
  };

  render() {
    return (
      <nav className="ter-breadcrumbs">
        <ul className="ter-breadcrumbs__list">{this.generateBreadcrumbs()}</ul>
      </nav>
    );
  }
}

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
};
