import React from "react";
import LinkTile from "./LinkTile";
import { shallow } from "enzyme";

describe("LinkTile", () => {
  let wrapper;

  beforeEach(() => {
    const mockContent = {
      title: "Design is good. Period.",
      text:
        "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
      link: {
        url: "#"
      }
    };
    wrapper = shallow(<LinkTile content={mockContent} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
