import React from "react";
import { shallow } from "enzyme";
import Pagination, { Page } from "./Pagination";
describe("Pagination", function () {
  var wrapper;
  var mockPages = 2;
  var mockActivePage = 0;
  var mockHandleClick;
  beforeEach(function () {
    mockHandleClick = jest.fn();
    wrapper = shallow(React.createElement(Pagination, {
      pages: mockPages,
      activePage: mockActivePage,
      handleClick: mockHandleClick,
      name: "name"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call handleClick on click - forward", function () {
    wrapper.find(".ter-pagination__list-item.ter-pagination__list-item--next").simulate("click");
    expect(mockHandleClick).toHaveBeenCalled();
  });
  it("should call handleClick on click - back", function () {
    mockHandleClick = jest.fn();
    wrapper = shallow(React.createElement(Pagination, {
      name: "name",
      pages: 4,
      activePage: 3,
      handleClick: mockHandleClick
    }));
    wrapper.find(".ter-pagination__list-item").simulate("click");
    expect(mockHandleClick).toHaveBeenCalled();
  });
  describe("generatePageListItems", function () {
    it("should return some JSX if pages === 2", function () {
      var expected = ['<li class="ter-pagination__list-item is-active">1</li>', '<li class="ter-pagination__list-item ">2</li>'];
      var result = wrapper.instance().generatePageListItems().map(function (item) {
        return shallow(item).html();
      });
      expect(result).toEqual(expected);
    });
    it("should return some JSX if pages === 3", function () {
      mockHandleClick = jest.fn();
      wrapper = shallow(React.createElement(Pagination, {
        name: "name",
        pages: 3,
        activePage: mockActivePage,
        handleClick: mockHandleClick
      }));
      var expected = ['<li class="ter-pagination__list-item is-active">1</li>', '<li class="ter-pagination__list-item ">2</li>', '<li class="ter-pagination__list-item ">3</li>'];
      var result = wrapper.instance().generatePageListItems().map(function (item) {
        return shallow(item).html();
      });
      expect(result).toEqual(expected);
    });
    it("should return some JSX if pages > 3 && activePage === 1", function () {
      mockHandleClick = jest.fn();
      wrapper = shallow(React.createElement(Pagination, {
        name: "name",
        pages: 4,
        activePage: mockActivePage,
        handleClick: mockHandleClick
      }));
      var expected = ['<li class="ter-pagination__list-item is-active">1</li>', '<li class="ter-pagination__list-item ">2</li>', '<li class="ter-pagination__list-item ">3</li>'];
      var result = wrapper.instance().generatePageListItems().map(function (item) {
        return shallow(item).html();
      });
      expect(result).toEqual(expected);
    });
    it("should return some JSX if pages > 3 && activePage === total pages", function () {
      mockHandleClick = jest.fn();
      wrapper = shallow(React.createElement(Pagination, {
        pages: 4,
        activePage: 3,
        handleClick: mockHandleClick
      }));
      var expected = ['<li class="ter-pagination__list-item ">2</li>', '<li class="ter-pagination__list-item ">3</li>', '<li class="ter-pagination__list-item is-active">4</li>'];
      var result = wrapper.instance().generatePageListItems().map(function (item) {
        return shallow(item).html();
      });
      expect(result).toEqual(expected);
    });
    it("should return some JSX if pages > 3 && activePage === total pages - 1", function () {
      mockHandleClick = jest.fn();
      wrapper = shallow(React.createElement(Pagination, {
        pages: 4,
        activePage: 2,
        handleClick: mockHandleClick
      }));
      var expected = ['<li class="ter-pagination__list-item ">2</li>', '<li class="ter-pagination__list-item is-active">3</li>', '<li class="ter-pagination__list-item ">4</li>'];
      var result = wrapper.instance().generatePageListItems().map(function (item) {
        return shallow(item).html();
      });
      expect(result).toEqual(expected);
    });
    it("should return some JSX if pages > 3 && activePage <= totalPages", function () {
      mockHandleClick = jest.fn();
      wrapper = shallow(React.createElement(Pagination, {
        pages: 4,
        name: "name",
        activePage: 1,
        handleClick: mockHandleClick
      }));
      var expected = ['<li class="ter-pagination__list-item ">1</li>', '<li class="ter-pagination__list-item is-active">2</li>', '<li class="ter-pagination__list-item ">3</li>'];
      var result = wrapper.instance().generatePageListItems().map(function (item) {
        return shallow(item).html();
      });
      expect(result).toEqual(expected, "name");
    });
  });
  describe("Page", function () {
    var pageWrapper;
    var mockProcessClick;
    beforeEach(function () {
      mockProcessClick = jest.fn();
      pageWrapper = shallow(React.createElement(Page, {
        name: "name",
        activePage: false,
        page: 3,
        handleClick: mockProcessClick
      }));
    });
    it("should match the snapshot", function () {
      expect(pageWrapper).toMatchSnapshot();
    });
    describe("handleClick", function () {
      it("should call handleClick on click", function () {
        var spy = jest.spyOn(pageWrapper.instance(), "handleClick");
        pageWrapper.instance().forceUpdate();
        pageWrapper.find(".ter-pagination__list-item").simulate("click");
        expect(spy).toHaveBeenCalled();
      });
      it("should call processClick if not the active page", function () {
        var expected = 2;
        pageWrapper.instance().handleClick();
        expect(mockProcessClick).toHaveBeenCalledWith(expected, "name");
      });
      it("should return if the active page", function () {
        pageWrapper = shallow(React.createElement(Page, {
          activePage: 1,
          page: 1,
          handleClick: mockProcessClick
        }));
        var spy = jest.spyOn(pageWrapper.instance(), "handleClick");
        pageWrapper.instance().handleClick();
        expect(spy).toHaveReturned();
      });
    });
  });
});