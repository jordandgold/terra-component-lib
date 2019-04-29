import React from "react";
import "./Hero2.scss";
import CTASection from "../../../CTASection/CTASection";

var Hero2 = function Hero2(props) {
  var imageSide = props.imageSide,
      image = props.image,
      title = props.title,
      body = props.body,
      ctas = props.ctas;
  var imageStyle = {
    backgroundImage: "url(".concat(image.url, ")")
  };
  return React.createElement("section", {
    className: "ter-hero2 container-fluid ".concat(imageSide === "right" ? "row reverse" : "row")
  }, React.createElement("div", {
    className: "ter-hero2--image-wrapper col-xs-12 col-sm-6 col-lg-7"
  }, React.createElement("img", {
    className: "ter-hero2--image",
    src: image.url,
    alt: image.altText
  })), React.createElement("div", {
    className: "ter-hero2--content col-xs-12 col-sm-6 col-lg-5 middle-lg"
  }, React.createElement("div", {
    className: "ter-hero2--content-wrapper"
  }, React.createElement("h3", {
    className: "ter-hero2--title"
  }, title), React.createElement("p", {
    className: "ter-hero2--body"
  }, body), ctas && React.createElement(CTASection, {
    ctas: ctas
  }))));
};

export default Hero2;