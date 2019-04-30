import React, { Component } from "react";
import "./Feat7.scss";
import PropTypes from "prop-types";
import Icon from "../../../Icon/Icon";

class Feat7 extends Component {
  renderCards = () => {
    return this.props.content.map((card, index) => {
      return <Feat7Card card={card} key={`feat-9-card-${index}`} />;
    });
  };
  render() {
    const { title, content } = this.props;
    return (
      <section className="ter-feat-nine">
        <h2 className="ter-feat-nine--title">{title}</h2>
        <div className="ter-feat-nine--card-container">
          {this.renderCards()}
        </div>
      </section>
    );
  }
}

export default Feat7;

Feat7.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }).isRequired
  )
};

export const Feat7Card = props => {
  const { title, body, link } = props.card;
  return (
    <React.Fragment>
      <a className="ter-feat-nine--card" href={link}>
        <div className="ter-feat-nine--card-content-wrapper">
          <h4 className="ter-feat-nine--card-title">{title}</h4>
          <p className="ter-feat-nine--card-body">{body}</p>
        </div>
        <div className="ter-feat-nine--icon-wrapper">
          <Icon type="enclosed-arrow-right-dark-32px" size="32px" />
        </div>
      </a>
    </React.Fragment>
  );
};
