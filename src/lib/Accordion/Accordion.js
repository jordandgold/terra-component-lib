import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./Accordion.scss";
import PropTypes from "prop-types";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: undefined
    };
  }

  checkActive = () => {
    if (this.props.defaultActive === 0 || this.props.defaultActive) {
      this.setState({
        active: this.props.defaultActive
      });
    }
  };

  accordionToggle = fold => {
    if (this.state.active === fold) {
      this.setState({
        active: undefined
      });
    } else {
      this.setState({ active: fold });
    }
  };

  generateFolds = () => {
    return this.props.children.map((child, index) => {
      let activeClass = index == this.state.active ? "is-expanded" : "";
      return (
        <div
          key={`accordion-fold-${index}`}
          className={`ter-accordion__fold ${activeClass}`}
        >
          <button
            className="ter-accordion__trigger"
            onClick={() => this.accordionToggle(index)}
          >
            {child.props.title}
            <Icon
              type="open-caret-right-dark-16px"
              className="ter-accordion__trigger-caret"
              size="16px"
            />
          </button>
          {child}
        </div>
      );
    });
  };

  componentDidMount() {
    this.checkActive();
  }

  render() {
    return <div className="ter-accordion">{this.generateFolds()}</div>;
  }
}

export default Accordion;

export class AccordionFold extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ter-accordion__content">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

Accordion.propTypes = {
  defaultActive: PropTypes.number,
  children: PropTypes.node.isRequired
};
