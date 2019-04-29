import React from "react";
import { shallow, mount } from "enzyme";
import SearchSelect from "./SearchSelect";
import { JSDOM } from "jsdom";
describe("SearchSelect", function () {
  var wrapper;
  var mockHandleSelect;
  beforeEach(function () {
    mockHandleSelect = jest.fn();
    var mockOptions = ["cats", "dogs", "turtles", "fish", "ferrets", "hamsters", "birds"];
    wrapper = shallow(React.createElement(SearchSelect, {
      defaultText: "mock default text",
      selection: undefined,
      handleSelect: mockHandleSelect,
      options: mockOptions,
      name: "name"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call removeEventListener on unmount", function () {
    var dom = new JSDOM(wrapper.html());
    global.document = dom.window.document;
    global.window = dom.window;
    var mockRemoveEventListener = jest.fn();
    global.document.removeEventListener = mockRemoveEventListener;
    wrapper.instance().componentWillUnmount();
    expect(mockRemoveEventListener).toHaveBeenCalled();
  });
  describe("toggleClose", function () {
    it("should return if node contains target", function () {
      var mockEvent = {
        target: "hello"
      };
      var spy = jest.spyOn(wrapper.instance(), "toggleClose");
      wrapper.instance().forceUpdate();
      var mockContains = jest.fn().mockImplementation(function () {
        return true;
      });
      wrapper.instance().node = {
        contains: mockContains
      };
      wrapper.state().deployed = true;
      wrapper.instance().toggleClose(mockEvent);
      expect(spy).toHaveReturned();
    });
    it("should return if closed", function () {
      var mockEvent = {
        target: "no"
      };
      var spy = jest.spyOn(wrapper.instance(), "toggleClose");
      wrapper.instance().forceUpdate();
      var mockContains = jest.fn().mockImplementation(function () {
        return false;
      });
      wrapper.instance().node = {
        contains: mockContains
      };
      wrapper.state().deployed = false;
      wrapper.instance().toggleClose(mockEvent);
      expect(spy).toHaveReturned();
    });
    it("should call toggleDeploy", function () {
      var mockEvent = {
        target: "no"
      };
      var spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();
      var mockContains = jest.fn().mockImplementation(function () {
        return false;
      });
      wrapper.instance().node = {
        contains: mockContains
      };
      wrapper.state().deployed = true;
      wrapper.instance().toggleClose(mockEvent);
      expect(spy).toHaveBeenCalled();
    });
  });
  describe("toggleDeploy", function () {
    it("should set state", function () {
      wrapper.instance().toggleDeploy();
      expect(wrapper.state().deployed).toEqual(true);
    });
    it("should call toggleDeploy on click", function () {
      var spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();
      wrapper.find(".ter-search-select__selected").simulate("click");
      expect(spy).toHaveBeenCalled();
    });
    it("should focus the input when opening", function () {
      var mockOptions = ["cats", "dogs", "turtles", "fish", "ferrets", "hamsters", "birds"];
      wrapper = mount(React.createElement(SearchSelect, {
        defaultText: "mock default text",
        selection: undefined,
        handleSelect: mockHandleSelect,
        options: mockOptions
      }));
      expect(document.activeElement[Object.keys(document.activeElement)[0]].type).toEqual("input");
    });
  });
  describe("handleSearchChange", function () {
    it("should set state", function () {
      var mockEvent = {
        target: {
          value: "mock value"
        }
      };
      wrapper.instance().handleSearchChange(mockEvent);
      expect(wrapper.state().searchField).toEqual("mock value");
    });
    it("should call handleSearchChange on change", function () {
      var spy = jest.spyOn(wrapper.instance(), "handleSearchChange");
      wrapper.instance().forceUpdate();
      var mockEvent = {
        target: {
          value: "testing"
        }
      };
      wrapper.find("input").simulate("change", mockEvent);
      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });
  describe("filterOptions", function () {
    it("should call getFilteredOptions", function () {
      var spy = jest.spyOn(wrapper.instance(), "getFilteredOptions");
      wrapper.instance().forceUpdate();
      wrapper.instance().filterOptions();
      expect(spy).toHaveBeenCalled();
    });
    it("should call renderOptions", function () {
      var spy = jest.spyOn(wrapper.instance(), "renderOptions");
      wrapper.instance().forceUpdate();
      wrapper.instance().filterOptions();
      expect(spy).toHaveBeenCalled();
    });
    it("should return", function () {
      var spy = jest.spyOn(wrapper.instance(), "filterOptions");
      wrapper.instance().forceUpdate();
      wrapper.instance().filterOptions();
      expect(spy).toReturn();
    });
  });
  describe("getFilteredOptions", function () {
    it("should return a filtered array", function () {
      var expected = ["fish", "ferrets"];
      wrapper.state().searchField = "f";
      var result = wrapper.instance().getFilteredOptions();
      expect(result).toEqual(expected);
    });
  });
  describe("renderOptions", function () {
    it("should return some JSX", function () {
      var mockOptions = ["cat", "dog", "fish"];
      var expected = ['<li class="ter-search-select__options-list-item">cat</li>', '<li class="ter-search-select__options-list-item">dog</li>', '<li class="ter-search-select__options-list-item">fish</li>'];
      var result = wrapper.instance().renderOptions(mockOptions).map(function (option) {
        return shallow(option).html();
      });
      expect(result).toEqual(expected);
    });
  });
  describe("toggleSelect", function () {
    it("should setState", function () {
      wrapper.instance().toggleSelect();
      expect(wrapper.state().deployed).toEqual(true);
    });
  });
  describe("handleSelect", function () {
    it("should set state", function () {
      wrapper.state().deployed = true;
      wrapper.instance().handleSelect("mock option");
      expect(wrapper.state().deployed).toEqual(false);
    });
    it("should call this.props.handleSelect", function () {
      wrapper.state().deployed = true;
      wrapper.instance().handleSelect("mock option");
      expect(mockHandleSelect).toHaveBeenCalledWith("mock option", "name");
    });
    it("should call handleSelect on click", function () {
      wrapper = shallow(React.createElement(SearchSelect, {
        defaultText: "mock default text",
        selection: undefined,
        handleSelect: mockHandleSelect,
        options: ["cats"]
      }));
      var spy = jest.spyOn(wrapper.instance(), "handleSelect");
      wrapper.find(".ter-search-select__options-list-item").simulate("click");
      expect(spy).toHaveBeenCalledWith("cats");
    });
  });
});