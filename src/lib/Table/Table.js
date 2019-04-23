import React, { Component } from "react";
import "./Table.scss";
import PropTypes from "prop-types";

class Table extends Component {
  generateHeadCells = () => {
    return this.props.data.head.map((cell, index) => {
      return <th key={`t-head-cell-${index}`}>{cell}</th>;
    });
  };

  generateBody = () => {
    return this.props.data.body.map((row, index) => {
      return <tr key={`row-${index}`}>{this.generateRow(row, index)}</tr>;
    });
  };

  generateRow = (row, rowNum) => {
    return row.map((cell, index) => {
      return <td key={`cell-${rowNum}-${index}`}>{cell}</td>;
    });
  };

  render() {
    const variantClass = this.props.loose ? "ter-table--loose" : "";

    return (
      <React.Fragment>
        <table className={`ter-table ${variantClass}`}>
          {this.props.data.head && (
            <thead>
              <tr>{this.generateHeadCells()}</tr>
            </thead>
          )}
          <tbody>{this.generateBody()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;

Table.propTypes = {
  data: PropTypes.object.isRequired,
  loose: PropTypes.bool
};
