import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";
describe("SearchBar", function () {
  var wrapper;
  var mockHandleSubmit;
  var mockSearchItems = ["cat", "cow", "dog", "bird"];
  beforeEach(function () {
    mockHandleSubmit = jest.fn();
    wrapper = shallow(React.createElement(SearchBar, {
      handleSubmit: mockHandleSubmit,
      searchItems: mockSearchItems,
      placeholder: "test placeholder",
      predictiveSearch: true,
      name: "name"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot without placeholder props", function () {
    mockHandleSubmit = jest.fn();
    wrapper = shallow(React.createElement(SearchBar, {
      handleSubmit: mockHandleSubmit,
      searchItems: mockSearchItems,
      predictiveSearch: true,
      name: "name"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot with predictiveSearch", function () {
    mockHandleSubmit = jest.fn();
    wrapper = shallow(React.createElement(SearchBar, {
      handleSubmit: mockHandleSubmit,
      searchItems: mockSearchItems,
      predictiveSearch: true,
      name: "name"
    }));
    wrapper.instance().setState({
      input: "d"
    });
    var response = wrapper.instance().renderPredictiveSearchItems();
    expect(wrapper).toMatchSnapshot();
  });
  describe("handleChange", function () {
    it("should set state", function () {
      var mockEvent = {
        target: {
          value: "Hello"
        }
      };
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().input).toEqual("Hello");
    });
    it("should call handleChange on text input", function () {
      var mockEvent = {
        target: {
          value: "test"
        }
      };
      var spy = jest.spyOn(wrapper.instance(), "handleChange");
      wrapper.instance().forceUpdate();
      wrapper.find("input").simulate("change", mockEvent);
      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });
  describe("renderPredictiveSearchItems", function () {
    it("should call filterSearch", function () {
      var spy = jest.spyOn(wrapper.instance(), "filterSearch");
      wrapper.instance().forceUpdate();
      wrapper.instance().renderPredictiveSearchItems();
      expect(spy).toHaveBeenCalled();
    });
    it("should return some JSX", function () {
      wrapper.instance().filterSearch = jest.fn().mockImplementation(function () {
        return ["cat", "dog"];
      });
      var expected = ["<li>cat</li>", "<li>dog</li>"];
      var result = wrapper.instance().renderPredictiveSearchItems().map(function (item) {
        return shallow(item).html();
      });
      expect(result).toEqual(expected);
    });
  });
  describe("filterSearch", function () {
    it("should return a filtered array", function () {
      wrapper.state().input = "d";
      var expected = ["dog", "bird"];
      var result = wrapper.instance().filterSearch();
      expect(result).toEqual(expected);
    });
  });
  describe("handleSubmit", function () {
    it("should call preventDefault", function () {
      var mockPreventDefault = jest.fn();
      var mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockPreventDefault).toHaveBeenCalled();
    });
    it("should return if input is empty", function () {
      var spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      var mockPreventDefault = jest.fn();
      var mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.instance().handleSubmit(mockEvent);
      expect(spy).toReturn();
    });
    it("should cll handleSubmit if conditions are met", function () {
      var mockPreventDefault = jest.fn();
      wrapper.state().input = "test input";
      var mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleSubmit).toHaveBeenCalledWith("test input", "name");
    });
    it("should call handleSubmit on submit", function () {
      var spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      var mockPreventDefault = jest.fn();
      var mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.find("form").simulate("submit", mockEvent);
      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });
});