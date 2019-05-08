import React from "react";
import { shallow } from "enzyme";
import Hero5 from "./Hero5";

describe("Hero5", () => {
  let wrapper;
  const mockCTALinks = {
    ctaOne: {
      className: "ter-button--primary--1",
      text: "Button",
      link: "#"
    },
    ctaTwo: {
      className: "ter-button--secondary--1",
      text: "Button",
      link: "#"
    },
    subCTA: {
      text: "Button",
      link: "#"
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <Hero5
        title="Design is design."
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
        image={{ url: "test", altText: "test" }}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with a subtitle", () => {
    wrapper = shallow(
      <Hero5
        title="Design is design."
        subtitle="I am a subtitle"
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
        image={{ url: "test", altText: "test" }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
