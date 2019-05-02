import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card", () => {
  let wrapper;

  const mockImage = {
    url: "http://www.mocklink.com/mockImage.jpg",
    altText: "This is a mock image description"
  };
  const mockTitle = "This is a mock title";
  const mockText = "This is the first paragraph";

  const mockButton = {
    name: "mock name",
    text: "mock text",
    className: "hello",
    onClick: jest.fn()
  };
  const mockButtonLink = {
    link: "mock link",
    text: "mock text"
  };
  const mockLink = {
    link: "http://www.mocklink.com",
    label: "I am a link!"
  };

  beforeEach(() => {
    wrapper = shallow(
      <Card
        image={mockImage}
        title={mockTitle}
        text={mockText}
        button={mockButton}
        buttonLink={mockButtonLink}
        link={mockLink}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
