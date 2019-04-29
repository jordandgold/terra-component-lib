import React from "react";
import "./Feat9.scss";

var Feat9 = function Feat9(props) {
  var image = props.image,
      quote = props.quote;
  return React.createElement("section", {
    className: "ter-feat9"
  }, React.createElement("img", {
    className: "ter-feat9--image",
    src: image.url,
    alt: image.altText
  }), React.createElement("div", {
    className: "ter-feat9--full-quote-wrapper"
  }, React.createElement("img", {
    className: "ter-feat9--quote-icon",
    src: "./quote.png",
    alt: "downward quote"
  }), React.createElement("div", {
    className: "ter-feat9--content"
  }, React.createElement("p", {
    className: "ter-feat9--quote-text"
  }, quote.text), React.createElement("p", {
    className: "ter-feat9--quote-source"
  }, "- ", quote.source), React.createElement("p", {
    className: "ter-feat9--quote-source-title"
  }, quote.sourceTitle))));
};

export default Feat9;