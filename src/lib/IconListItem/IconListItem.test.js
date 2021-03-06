import React from "react";
import IconListItem from "./IconListItem";
import { shallow } from "enzyme";

describe("IconListItem", () => {
  let wrapper;

  beforeEach(() => {
    const mockContent = {
      title: "Design is good. Period.",
      text:
        "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!"
    };
    wrapper = shallow(<IconListItem content={mockContent} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
