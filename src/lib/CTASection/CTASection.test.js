import CTASection from "./CTASection";
import { shallow } from "enzyme";
import React from "react";
import { heroTwoContent } from "../../stories/mockContent";

describe("CTASection", () => {
  heroTwoContent.ctas.ctaOne.onClick = jest.fn();
  heroTwoContent.ctas.ctaTwo.onClick = jest.fn();

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CTASection ctas={heroTwoContent.ctas} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
