import React from "react";
import { shallow } from "enzyme";
import Hero4 from "./Hero4";

describe("Hero4", () => {
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

  const mockVideo = { url: "test" };

  beforeEach(() => {
    wrapper = shallow(
      <Hero4
        title="Design is design."
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
        video={mockVideo}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with video allowances", () => {
    const mockVideo = { url: "test", autoplay: true, allowFullScreen: true };

    wrapper = shallow(
      <Hero4
        title="Design is design."
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
        video={mockVideo}
      />
    );
  });
});
