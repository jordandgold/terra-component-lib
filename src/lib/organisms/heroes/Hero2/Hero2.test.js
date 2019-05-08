import React from "react";
import Hero2 from "./Hero2";
import { shallow, mount } from "enzyme";
import Button from "../../../Button/Button";
import { heroTwoContent } from "../../../../stories/mockContent";

describe("Hero2", () => {
  let wrapper;

  beforeEach(() => {
    const heroTwoContent = {
      images: {
        imageThreeXTwo: {
          url: "./3x2-ph.png",
          altText: "placeholder"
        },
        imageFourXThree: {
          url: "./800x600.png",
          altText: "placeholder"
        },
        imageOneXOne: {
          url: "./1-to-1.png",
          altText: "placeholder"
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
        },
        subCTA: {
          text: "Sub-CTA",
          link: "#"
        }
      }
    };

    wrapper = shallow(
      <Hero2
        imageSide="left"
        images={{
          imageThreeXTwo: {
            url: "./3x2-ph.png",
            altText: "placeholder"
          },
          imageFourXThree: {
            url: "./800x600.png",
            altText: "placeholder"
          },
          imageOneXOne: {
            url: "./1-to-1.png",
            altText: "placeholder"
          }
        }}
        title="Good design is innovative."
        text={heroTwoContent.text}
        ctas={heroTwoContent.ctas}
      />
    );
  });

  it("should match the snapshot left", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot right", () => {
    const heroTwoContent = {
      images: {
        imageThreeXTwo: {
          url: "./3x2-ph.png",
          altText: "placeholder"
        },
        imageFourXThree: {
          url: "./800x600.png",
          altText: "placeholder"
        },
        imageOneXOne: {
          url: "./1-to-1.png",
          altText: "placeholder"
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
        },
        subCTA: {
          text: "Sub-CTA",
          link: "#"
        }
      }
    };

    wrapper = shallow(
      <Hero2
        imageSide="right"
        images={{
          imageThreeXTwo: {
            url: "./3x2-ph.png",
            altText: "placeholder"
          },
          imageFourXThree: {
            url: "./800x600.png",
            altText: "placeholder"
          },
          imageOneXOne: {
            url: "./1-to-1.png",
            altText: "placeholder"
          }
        }}
        title="Good design is innovative."
        text={heroTwoContent.text}
        ctas={heroTwoContent.ctas}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
