import React from "react";
import { shallow } from "enzyme";
import Hero3 from "./Hero3";

describe("Hero4", () => {
  let wrapper;
  const mockImages = {
    imageFourByOne: {
      url: "http://fpoimg.com/1600x400?text=4:1",
      altText: "placeholder image"
    },
    imageTwoByOne: {
      url: "http://fpoimg.com/1600x800?text=2:1",
      altText: "placeholder image"
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <Hero3
        images={mockImages}
        headerText="Good design is innovative."
        subHeaderText="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
