import React, { Component } from "react";
import "./Tabs.scss";
import PropTypes from "prop-types";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };
  }

  handleTabChange = index => {
    this.setState({
      selected: index
    });
  };

  render() {
    const variantClass = this.props.fullWidth ? "ter-tabs--full-width" : "";

    return (
      <nav
        className={`ter-tabs ${variantClass}`}
        role="navigation"
        data-controls="#tabs-one"
      >
        <ul className="ter-tabs__list" role="tablist">
          {this.props.children.map((elem, index) => {
            let selectedClass =
              index === this.state.selected ? "is-selected" : "";
            return (
              <li
                className={`ter-tabs__list-item ${selectedClass}`}
                key={index}
              >
                <button onClick={() => this.handleTabChange(index)}>
                  {elem.props.name}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="ter-tabs__content">
          {this.props.children[this.state.selected]}
        </div>
      </nav>
    );
  }
}

export const TabsPanel = props => {
  return <div>{props.children}</div>;
};

export default Tabs;

Tabs.propTypes = {
  selected: PropTypes.number.isRequired,
  fullWidth: PropTypes.bool
};
