import CTALinkSection from "./CTALinkSection";
import { shallow } from "enzyme";
import React from "react";
import { heroTwoContent } from "../../stories/mockContent";

describe("CTALinkSection", () => {
  let wrapper;
  beforeEach(() => {
    const ctas = {
      ctaOne: {
        className: "ter-button--primary--1",
        text: "ctaOne",
        link: "Button"
      },
      ctaTwo: {
        className: "ter-button--secondary--1",
        text: "ctaOne",
        link: "Button"
      },
      subCTA: {
        text: "Sub-CTA",
        link: "mock link"
      }
    };
    wrapper = shallow(<CTALinkSection ctas={ctas} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
