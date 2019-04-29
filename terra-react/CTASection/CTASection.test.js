import CTASection from "./CTASection";
import { shallow } from "enzyme";
import React from "react";
import { heroTwoContent } from "../../stories/mockContent";
describe("CTASection", function () {
  heroTwoContent.ctas.ctaOne.onClick = jest.fn();
  heroTwoContent.ctas.ctaTwo.onClick = jest.fn();
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(React.createElement(CTASection, {
      ctas: heroTwoContent.ctas
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
});