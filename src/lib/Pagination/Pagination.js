import React, { Component } from "react";
import "./Pagination.scss";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

class Pagination extends Component {
  generatePageListItems = () => {
    const totalPages = this.props.pages; //totalPages.length()
    const activePage = this.props.activePage + 1;

    let pages = [];

    if (totalPages === 2) {
      for (let i = 0; i < 2; i++) {
        pages.push(
          <Page
            key={`list-item-${i + 1}`}
            activePage={activePage}
            page={i + 1}
            processClick={this.props.handleClick}
          />
        );
      }
    }

    if (totalPages === 3) {
      for (let i = 0; i < 3; i++) {
        pages.push(
          <Page
            key={`list-item-${i + 1}`}
            activePage={activePage}
            page={i + 1}
            processClick={this.props.handleClick}
          />
        );
      }
    }

    if (totalPages > 3 && activePage === 1) {
      for (let i = 0; i < 3; i++) {
        pages.push(
          <Page
            key={`list-item-${i + 1}`}
            activePage={activePage}
            page={i + 1}
            processClick={this.props.handleClick}
          />
        );
      }
    } else if (totalPages > 3 && activePage === totalPages) {
      for (let i = totalPages - 3; i < totalPages; i++) {
        pages.push(
          <Page
            key={`list-item-${i + 1}`}
            activePage={activePage}
            page={i + 1}
            processClick={this.props.handleClick}
          />
        );
      }
    } else if (totalPages > 3 && activePage === totalPages - 1) {
      for (let i = totalPages - 3; i < totalPages; i++) {
        pages.push(
          <Page
            key={`list-item-${i + 1}`}
            activePage={activePage}
            page={i + 1}
            processClick={this.props.handleClick}
          />
        );
      }
    } else if (totalPages > 3 && activePage <= totalPages) {
      for (let i = activePage - 2; i < activePage + 1; i++) {
        pages.push(
          <Page
            key={`list-item-${i + 1}`}
            activePage={activePage}
            page={i + 1}
            processClick={this.props.handleClick}
          />
        );
      }
    }

    return pages;
  };

  render() {
    return (
      <nav className="ter-pagination" role="navigation">
        {this.props.activePage + 1 > 1 && this.props.activePage > 0 && (
          <Icon type="open-caret-left-dark-8px" size="8px" />
        )}
        <ul className="ter-pagination__list">{this.generatePageListItems()}</ul>
        {this.props.activePage + 1 < this.props.pages && (
          <Icon type="open-caret-right-dark-8px" size="8px" />
        )}
      </nav>
    );
  }
}

export default Pagination;

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired
};

export class Page extends Component {
  handleClick = () => {
    if (this.props.activePage) {
      return;
    } else {
      this.props.processClick(this.props.page);
    }
  };

  render() {
    const { activePage, page } = this.props;
    return (
      <li
        onClick={this.handleClick}
        className={`ter-pagination__list-item ${
          activePage === page ? "is-active" : ""
        }`}
      >
        {page}
      </li>
    );
  }
}
