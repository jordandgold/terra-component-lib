import React from "react";
import Hero2 from "./Hero2";
import { shallow, mount } from "enzyme";
import Button from "../../../Button/Button";
import { heroTwoContent } from "../../../../stories/mockContent";
describe("Hero2", function () {
  var wrapper;
  beforeEach(function () {
    var imageSide = heroTwoContent.imageSide,
        image = heroTwoContent.image,
        title = heroTwoContent.title,
        body = heroTwoContent.body,
        ctas = heroTwoContent.ctas;
    ctas.ctaOne.onClick = jest.fn();
    ctas.ctaTwo.onClick = jest.fn();
    wrapper = shallow(React.createElement(Hero2, {
      imageSide: imageSide,
      image: image,
      title: title,
      body: body,
      ctas: ctas
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
});