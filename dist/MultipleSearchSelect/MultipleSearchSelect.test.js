import React from "react";
import { shallow, mount } from "enzyme";
import MultipleSearchSelect from "./MultipleSearchSelect";
import { JSDOM } from "jsdom";
describe("MultipleSearchSelect", function () {
  var wrapper;
  var mockHandleSelect;
  var mockRemoveSelection;
  beforeEach(function () {
    mockHandleSelect = jest.fn();
    mockRemoveSelection = jest.fn();
    var mockOptions = ["cats", "dogs", "turtles", "fish", "ferrets", "hamsters", "birds"];
    wrapper = shallow(React.createElement(MultipleSearchSelect, {
      defaultText: "mock default text",
      selections: [],
      handleSelect: mockHandleSelect,
      options: mockOptions,
      removeSelection: mockRemoveSelection,
      name: "test name"
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
      wrapper.find(".ter-multi-search-select__selected").simulate("click");
      expect(spy).toHaveBeenCalled();
    });
    it("should focus the input when opening", function () {
      var mockOptions = ["cats", "dogs", "turtles", "fish", "ferrets", "hamsters", "birds"];
      wrapper = mount(React.createElement(MultipleSearchSelect, {
        defaultText: "mock default text",
        selections: [],
        handleSelect: mockHandleSelect,
        options: mockOptions,
        removeSelection: mockRemoveSelection,
        name: "test name"
      }));
      wrapper.instance().toggleSelect();
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
      var expected = ['<li class="ter-multi-search-select__options-list-item">cat</li>', '<li class="ter-multi-search-select__options-list-item">dog</li>', '<li class="ter-multi-search-select__options-list-item">fish</li>'];
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
    it("should call this.props.handleSelect", function () {
      wrapper.state().deployed = true;
      wrapper.instance().handleSelect("mock option");
      expect(mockHandleSelect).toHaveBeenCalledWith("mock option", "test name");
    });
    it("should call handleSelect on click", function () {
      wrapper = shallow(React.createElement(MultipleSearchSelect, {
        defaultText: "mock default text",
        selections: ["dogs"],
        handleSelect: mockHandleSelect,
        options: ["cats"],
        removeSelection: mockRemoveSelection,
        name: "test name"
      }));
      var spy = jest.spyOn(wrapper.instance(), "handleSelect");
      wrapper.find(".ter-multi-search-select__options-list-item").simulate("click");
      expect(spy).toHaveBeenCalledWith("cats");
    });
  });
  describe("renderSelections", function () {
    it("should return some JSX", function () {
      wrapper = shallow(React.createElement(MultipleSearchSelect, {
        defaultText: "mock default text",
        selections: ["dogs", "cats"],
        handleSelect: mockHandleSelect,
        options: ["cats"],
        removeSelection: mockRemoveSelection,
        name: "test name"
      }));
      var expected = ['<span class="ter-multi-search-select__option ter-badge">dogs<svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-x-dark-16px ter-icon--8px ter-multi-search-select__option-close"><use xlink:href="[object Object]#ter-icon--open-x-dark-16px"></use></svg></span>', '<span class="ter-multi-search-select__option ter-badge">cats<svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-x-dark-16px ter-icon--8px ter-multi-search-select__option-close"><use xlink:href="[object Object]#ter-icon--open-x-dark-16px"></use></svg></span>'];
      var response = wrapper.instance().renderSelections().map(function (selection) {
        return shallow(selection).html();
      });
      expect(response).toEqual(expected);
    });
  });
  describe("removeSelection", function () {
    beforeEach(function () {
      wrapper = shallow(React.createElement(MultipleSearchSelect, {
        defaultText: "mock default text",
        selections: ["dogs", "cats"],
        handleSelect: mockHandleSelect,
        options: ["cats"],
        removeSelection: mockRemoveSelection,
        name: "test name"
      }));
    });
    it("should call stopPropogation if deployed", function () {
      var mockStopPropagation = jest.fn();
      var mockEvent = {
        stopPropagation: mockStopPropagation
      };
      var mockSelection = "dogs";
      wrapper.state().deployed = true;
      wrapper.instance().removeSelection(mockEvent, mockSelection);
      expect(mockStopPropagation).toHaveBeenCalled();
    });
    it("should call removeSelection with the correct params", function () {
      var mockStopPropagation = jest.fn();
      var mockEvent = {
        stopPropagation: mockStopPropagation
      };
      var mockSelection = "dogs";
      wrapper.instance().removeSelection(mockEvent, mockSelection);
      expect(mockRemoveSelection).toHaveBeenCalledWith("dogs", "test name");
    });
    it("should call removeSelection on Click", function () {
      wrapper = shallow(React.createElement(MultipleSearchSelect, {
        defaultText: "mock default text",
        selections: ["dogs"],
        handleSelect: mockHandleSelect,
        options: ["cats"],
        removeSelection: mockRemoveSelection,
        name: "test name"
      }));
      var mockStopPropagation = jest.fn();
      var mockEvent = {
        stopPropagation: mockStopPropagation
      };
      var mockSelection = "dogs";
      var spy = jest.spyOn(wrapper.instance(), "removeSelection");
      wrapper.instance().forceUpdate();
      wrapper.find(".ter-multi-search-select__option.ter-badge").simulate("click", mockEvent, "dogs");
      expect(spy).toHaveBeenCalledWith(mockEvent, mockSelection);
    });
  });
});