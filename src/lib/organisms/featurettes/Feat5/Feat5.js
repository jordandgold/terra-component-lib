import React, { Component } from "react";
import Dumpling from "../../../Dumpling/Dumpling";
import PropTypes from "prop-types";
import "./Feat5.scss";

class Feat5 extends Component {
  getDumplings = () => {
    return this.props.dumplings.map((dumpling, index) => {
      if (dumpling.icon) {
        return (
          <div
            className={`ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--${
              this.props.type
            }`}
            key={`dumpling-${index}`}
          >
            <Dumpling
              title={dumpling.title}
              size={this.props.type === "b" ? "small" : "large"}
              link={dumpling.link}
              icon={dumpling.icon}
            />
          </div>
        );
      } else if (dumpling.image) {
        return (
          <div
            className={`ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--${
              this.props.type
            }`}
            key={`dumpling-${index}`}
          >
            <Dumpling
              title={dumpling.title}
              size={this.props.type === "b" ? "small" : "large"}
              link={dumpling.link}
              image={dumpling.image}
            />
          </div>
        );
      }
    });
  };

  render() {
    const { title, subtitle } = this.props;
    return (
      <section className="ter-feat-five">
        <h2 className="ter-feat-five__title">{title}</h2>
        {subtitle && <h4 className="ter-feat-five__subtitle">{subtitle}</h4>}
        <div className="ter-feat-five__dumpling-container">
          {this.getDumplings()}
        </div>
      </section>
    );
  }
}

export default Feat5;

Feat5.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  type: PropTypes.string.isRequired,
  dumplings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired
    })
  )
};
