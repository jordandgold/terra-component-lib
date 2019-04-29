import React from "react";
import "./CTASection.scss";
import Button from "../Button/Button";

var CTASection = function CTASection(props) {
  var _props$ctas = props.ctas,
      ctaOne = _props$ctas.ctaOne,
      ctaTwo = _props$ctas.ctaTwo,
      subCTA = _props$ctas.subCTA;
  return React.createElement("section", {
    className: "ter-cta-section"
  }, ctaOne && React.createElement(Button, {
    className: ctaOne.className,
    name: ctaOne.name,
    text: ctaOne.text,
    onClick: ctaOne.onClick
  }), ctaTwo && React.createElement(Button, {
    className: ctaTwo.className,
    name: ctaTwo.name,
    text: ctaTwo.text,
    onClick: ctaTwo.onClick
  }), subCTA && React.createElement("a", {
    className: "ter-hero2__link"
  }, subCTA.text));
};

export default CTASection;