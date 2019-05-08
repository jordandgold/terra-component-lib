import React from "react";
import { shallow } from "enzyme";
import Feat1 from "./Feat1";

describe("Feat1", () => {
  let wrapper;

  beforeEach(() => {
    const mockTitle = "Design is good.";
    const mockSubtitle = "You should know about it, maybe?";
    const mockText =
      "Cillum et laboris aliquip consequat. Consectetur commodo nisi laborum voluptate. Commodo est ullamco pariatur ut nostrud pariatur.";
    const mockCTA = { link: "#", text: "Button" };
    const mockImage = { url: "./1-to-1.png", altText: "placeholder" };
    wrapper = shallow(
      <Feat1
        title={mockTitle}
        subtitle={mockSubtitle}
        text={mockText}
        cta={mockCTA}
        variant="a"
        image={mockImage}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
