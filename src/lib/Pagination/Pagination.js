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
          />
        );
      }
    }

    return pages;
  };

  render() {
    return (
      <nav className="ter-pagination" role="navigation">
        <ul className="ter-pagination__list">
          {this.props.activePage + 1 > 1 && this.props.activePage > 0 && (
            <li className="ter-pagination__list-item ter-pagination__list-item--previous">
              <Icon type="open-caret-left-dark-8px" size="8px" />
            </li>
          )}
          {this.generatePageListItems()}
          {this.props.activePage + 1 < this.props.pages && (
            <li className="ter-pagination__list-item ter-pagination__list-item--next">
              <Icon type="open-caret-right-dark-8px" size="8px" />
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Pagination;

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool,
      pageNumber: PropTypes.number.isRequired
    })
  ).isRequired
};

export const Page = props => {
  const { activePage, page } = props;
  return (
    <li
      className={`ter-pagination__list-item ${
        activePage === page ? "is-active" : ""
      }`}
    >
      {page}
    </li>
  );
};
