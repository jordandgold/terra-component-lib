import React, { Component } from "react";
import "./SearchBar.scss";
import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  renderPredictiveSearchItems = () => {
    const filteredSearch = this.filterSearch();

    return filteredSearch.map((item, index) => {
      return <li key={`${item}-${index}`}>{item}</li>;
    });
  };

  filterSearch = () => {
    return this.props.searchItems.filter(item => {
      return item.toLowerCase().includes(this.state.input);
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.input) {
      return;
    }

    this.props.handleSubmit(this.state.input, this.props.name);
  };

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
        className="ter-search-bar ter-input"
      >
        <div className="ter-search-bar__input ter-input__wrap">
          <input
            type="text"
            value={this.state.input}
            onChange={e => this.handleChange(e)}
            placeholder={this.props.placeholder || "Search"}
          />
        </div>
        <button className="ter-search-bar__submit">
          <i className="fi flaticon-magnifying-glass" />
        </button>
        {this.props.predictiveSearch &&
          this.state.input &&
          this.renderPredictiveSearchItems() && (
            <ul>{this.renderPredictiveSearchItems()}</ul>
          )}
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  predictiveSearch: PropTypes.bool,
  name: PropTypes.string
};
