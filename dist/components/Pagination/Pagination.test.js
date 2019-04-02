import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";
describe("Pagination", function () {
  var wrapper;
  var mockPages = [{
    pageNumber: 1,
    link: "www.mockLinkOne.com",
    isActive: false
  }, {
    pageNumber: 2,
    link: "www.mockLinkTwo.com",
    isActive: false
  }, {
    pageNumber: 3,
    link: "www.mockLinkThree.com",
    isActive: true
  }, {
    pageNumber: 4,
    link: "www.mockLinkFour.com",
    isActive: false
  }];
  beforeEach(function () {
    wrapper = shallow(React.createElement(Pagination, {
      pages: mockPages
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  describe("generatePageListItems", function () {
    it("should generate some JSX", function () {
      var expected = ['<li class="ter-pagination__list-item"><a class="ter-pagination__list-item " href="/www.mockLinkOne.com">1</a></li>', '<li class="ter-pagination__list-item"><a class="ter-pagination__list-item " href="/www.mockLinkTwo.com">2</a></li>', '<li class="ter-pagination__list-item"><a class="ter-pagination__list-item is-active" href="/www.mockLinkThree.com">3</a></li>', '<li class="ter-pagination__list-item"><a class="ter-pagination__list-item " href="/www.mockLinkFour.com">4</a></li>'];
      var result = wrapper.instance().generatePageListItems().map(function (point) {
        return shallow(point).html();
      });
      expect(result).toEqual(expected);
    });
  });
});