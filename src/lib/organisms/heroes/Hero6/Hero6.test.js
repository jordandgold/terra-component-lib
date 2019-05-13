import React from "react";
import { shallow } from "enzyme";
import Hero6 from "./Hero6";

describe("Hero6", () => {
  let wrapper;
  const heroSixContent = {
    images: {
      imageThreeByTwo: {
        url: "http://fpoimg.com/2400x1600?text=3:2",
        altText: "placeholder image"
      },
      imageFourByThree: {
        url: "http://fpoimg.com/1600x1200?text=4:3",
        altText: "placeholder image"
      },
      imageOneByOne: {
        url: "http://fpoimg.com/1600x1600?text=1:1",
        altText: "placeholder image"
      }
    },
    title: "Good design is innovative.",
    text:
      "Good design is aesthetic. Good design makes a product understandable. Good design is unobtrusive.",
    ctas: {
      ctaOne: {
        className: "ter-button--primary--1",
        link: "#",
        text: "Button"
      },
      ctaTwo: {
        className: "ter-button--secondary--1",
        link: "#",
        text: "Button"
      }
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <Hero6
        imageSide="left"
        images={heroSixContent.images}
        title="Good design is innovative."
        text={heroSixContent.text}
        ctas={heroSixContent.ctas}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
