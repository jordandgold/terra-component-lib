import React from "react";
import "./Feat6A.scss";
import CTASection from "../../../CTASection/CTASection";

var Feat6A = function Feat6A(props) {
  var title = props.title,
      ctas = props.ctas;
  return React.createElement("section", {
    className: "ter-feat6a"
  }, React.createElement("h3", {
    className: "ter-feat6a--title"
  }, title), React.createElement(CTASection, {
    ctas: ctas
  }));
};

export default Feat6A;