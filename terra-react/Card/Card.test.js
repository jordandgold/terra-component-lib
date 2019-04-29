import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
describe("Card", function () {
  var wrapper;
  var mockImage = {
    link: "http://www.mocklink.com/mockImage.jpg",
    description: "This is a mock image description"
  };
  var mockTitle = "This is a mock title";
  var mockText = ["This is the first paragraph", "This is the second paragraph"];
  var mockLabel = "I am a mock label";
  var mockLink = {
    link: "http://www.mocklink.com",
    label: "I am a link!"
  };
  var mockCategory = "Hello! I am a category!";
  beforeEach(function () {
    wrapper = shallow(React.createElement(Card, {
      image: mockImage,
      title: mockTitle,
      text: mockText,
      label: mockLabel,
      link: mockLink,
      category: mockCategory
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  describe("generateText", function () {
    it("should return some jsx", function () {
      var expected = ['<p class="card-text">This is the first paragraph</p>', '<p class="card-text">This is the second paragraph</p>'];
      var result = wrapper.instance().generateText().map(function (point) {
        return shallow(point).html();
      });
      expect(result).toEqual(expected);
    });
  });
});