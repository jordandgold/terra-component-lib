import React, { Component } from "react";
import "./SearchSelect.scss";

class SearchSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: props.selections,
      deployed: false,
      searchField: "",
      selection: ""
    };
  }

  filterSelections = e => {
    this.setState({
      search: e.target.value
    });

    return this.state.selections.filter(selection => {
      return (
        selection.toLowerCase().substring(0, e.target.value.length - 1) ===
        e.target.value.toLowerCase()
      );
    });
  };

  renderOptions = () => {
    return this.state.selections.map((selection, index) => {
      <li key={`${selection}-${index}`}>{selection}</li>;
    });
  };

  toggleSelect = () => {
    this.setState({
      deployed: !this.state.deployed
    });
  };
}
