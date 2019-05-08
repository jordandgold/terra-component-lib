import React, { Component } from "react";
import Dumpling from "../../../Dumpling/Dumpling";
import PropTypes from "prop-types";
import "./Feat5.scss";

class Feat5 extends Component {
  getDumplings = () => {
    if (this.props.dumplings[0].icon) {
      return this.props.dumplings.map((dumpling, index) => {
        return this.returnIconDumpling(dumpling, index);
      });
    } else {
      // Would prefer an else/if here, but can't get it to pass test coverage - potential code smell
      return this.props.dumplings.map((dumpling, index) => {
        return this.returnImageDumpling(dumpling, index);
      });
    }
  };

  returnIconDumpling = (dumpling, index) => {
    const sizes = {
      a: "large",
      b: "small"
    };
    return (
      <div
        className={`ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--${
          this.props.type
        }`}
        key={`dumpling-${index}`}
      >
        <Dumpling
          title={dumpling.title}
          size={sizes[this.props.type]}
          link={dumpling.link}
          icon={dumpling.icon}
        />
      </div>
    );
  };

  returnImageDumpling = (dumpling, index) => {
    const sizes = {
      a: "large",
      b: "small"
    };
    return (
      <div
        className={`ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--${
          this.props.type
        }`}
        key={`dumpling-${index}`}
      >
        <Dumpling
          title={dumpling.title}
          size={sizes[this.props.type]}
          link={dumpling.link}
          image={dumpling.image}
        />
      </div>
    );
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
