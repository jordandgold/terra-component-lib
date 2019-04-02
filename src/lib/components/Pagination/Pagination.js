import React, { Component } from "react";
import "./Pagination.scss";
import PropTypes from "prop-types";

class Pagination extends Component {
  generatePageListItems = () => {
    return this.props.pages.map((page, index) => {
      return (
        <li key={`list-item-${index}`} className="ter-pagination__list-item">
          <a
            className={`ter-pagination__list-item ${
              page.isActive ? "is-active" : ""
            }`}
            href={`/${page.link}`}
          >
            {page.pageNumber}
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <nav className="ter-pagination" role="navigation">
        <ul className="ter-pagination__list">
          <li className="ter-pagination__list-item">
            <a href="/" rel="prev">
              <i className="fas fa-chevron-left" />
            </a>
          </li>
          {this.generatePageListItems}
          <li className="ter-pagination__list-item">
            <a href="/" rel="next">
              <i className="fas fa-chevron-right" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
