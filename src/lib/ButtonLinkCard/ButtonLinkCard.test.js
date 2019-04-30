import React from "react";
import ButtonLinkCard from "./ButtonLinkCard";
import { shallow } from "enzyme";

describe("ButtonLinkCard", () => {
  let wrapper;

  beforeEach(() => {
    const mockContent = {
      title: "Design is good. Period.",
      body:
        "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
      link: {
        url: "#",
        text: "Button"
      }
    };
    wrapper = shallow(<ButtonLinkCard content={mockContent} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
