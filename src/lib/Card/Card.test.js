import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card", () => {
  let wrapper;

  const mockImage = {
    link: "http://www.mocklink.com/mockImage.jpg",
    description: "This is a mock image description"
  };
  const mockTitle = "This is a mock title";
  const mockText = [
    "This is the first paragraph",
    "This is the second paragraph"
  ];
  const mockLabel = "I am a mock label";
  const mockLink = {
    link: "http://www.mocklink.com",
    label: "I am a link!"
  };
  const mockCategory = "Hello! I am a category!";

  beforeEach(() => {
    wrapper = shallow(
      <Card
        image={mockImage}
        title={mockTitle}
        text={mockText}
        label={mockLabel}
        link={mockLink}
        category={mockCategory}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("generateText", () => {
    it("should return some jsx", () => {
      const expected = [
        '<p class="card-text">This is the first paragraph</p>',
        '<p class="card-text">This is the second paragraph</p>'
      ];
      const result = wrapper
        .instance()
        .generateText()
        .map(point => {
          return shallow(point).html();
        });

      expect(result).toEqual(expected);
    });
  });
});
