import React from "react";
import Feat6A from "./Feat6A";
import { shallow, mount } from "enzyme";
import Button from "../../../Button/Button";
import { heroTwoContent, featSixAContent } from "../../../../stories/mockContent";
describe("Feat6A", function () {
  var wrapper;
  beforeEach(function () {
    var imageSide = featSixAContent.imageSide,
        image = featSixAContent.image,
        title = featSixAContent.title,
        body = featSixAContent.body,
        ctas = featSixAContent.ctas;
    ctas.ctaOne.onClick = jest.fn();
    ctas.ctaTwo.onClick = jest.fn();
    wrapper = shallow(React.createElement(Feat6A, {
      title: title,
      ctas: ctas
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
});