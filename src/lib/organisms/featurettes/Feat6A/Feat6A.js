import React from "react";
import "./Feat6A.scss";
import PropTypes from "prop-types";
import CTASection from "../../../CTASection/CTASection";

const Feat6A = props => {
  const { title, ctas } = props;
  return (
    <section className="ter-feat6a">
      <h3 className="ter-feat6a--title">{title}</h3>
      <CTASection ctas={ctas} />
    </section>
  );
};

export default Feat6A;

Feat6A.propTypes = {
  title: PropTypes.string.isRequired,
  ctas: PropTypes.shape({
    ctaOne: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      name: PropTypes.string
    }),
    ctaTwo: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  }).isRequired
};
