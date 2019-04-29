import React from "react";
import { shallow, mount } from "enzyme";
import Select, { SelectOption } from "./Select";
import { JSDOM } from "jsdom";
describe("Select", function () {
  var wrapper;
  var mockHandleSelection;
  var mockOptions = ["cats", "dogs", "birds"];
  beforeEach(function () {
    mockHandleSelection = jest.fn();
    wrapper = shallow(React.createElement(Select, {
      handleSelection: mockHandleSelection,
      options: mockOptions,
      selection: undefined,
      defaultText: "Test default text",
      name: "test name"
    }));
  });
  it("should match the snapshop", function () {
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
    it("should call setState", function () {
      wrapper.instance().toggleDeploy();
      expect(wrapper.state().deployed).toEqual(true);
    });
    it("should call toggleDeploy on click", function () {
      mockHandleSelection = jest.fn();
      wrapper = shallow(React.createElement(Select, {
        handleSelection: mockHandleSelection,
        options: ["dogs"],
        selection: undefined,
        defaultText: "Test default text",
        name: "test name"
      }));
      var spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();
      wrapper.find(".ter-select__selected").simulate("click");
      expect(spy).toHaveBeenCalled();
    });
  });
  describe("handleKeyup", function () {
    beforeEach(function () {
      mockHandleSelection = jest.fn();
      var alphaOptions = ["apple", "banana", "cat", "dog", "elephant"];
      wrapper = mount(React.createElement(Select, {
        handleSelection: mockHandleSelection,
        options: alphaOptions,
        selection: undefined,
        defaultText: "Test default text",
        name: "test name"
      }));
    });
    var mockEventObject = {
      key: "c"
    };
    it("should call handleKeyup", function () {
      var spy = jest.spyOn(wrapper.instance(), "handleKeyup");
      wrapper.instance().forceUpdate();
      wrapper.find(".ter-select").simulate("keyup", mockEventObject);
      expect(spy).toHaveBeenCalled();
    });
    it("should return if dropdown is not open", function () {
      var spy = jest.spyOn(wrapper.instance(), "handleKeyup");
      wrapper.instance().forceUpdate();
      wrapper.instance().handleKeyup(mockEventObject);
      expect(spy).toReturn();
    });
    it("should call querySelectorAll()", function () {
      var mockScrollIntoView = jest.fn();
      var mockNodes = [{
        innerText: "a",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "b",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "c",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "d",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "e",
        scrollIntoView: mockScrollIntoView
      }];
      var dom = new JSDOM(wrapper.html());
      global.document = dom.window.document;
      global.window = dom.window;
      var mockQuerySelectorAll = jest.fn().mockImplementation(function () {
        return mockNodes;
      });
      global.document.querySelectorAll = mockQuerySelectorAll;
      wrapper.setState({
        deployed: true
      });
      wrapper.instance().handleKeyup(mockEventObject);
      expect(mockQuerySelectorAll).toHaveBeenCalled();
    });
    it("should call scrollIntoView()", function () {
      var mockScrollIntoView = jest.fn();
      var mockNodes = [{
        innerText: "a",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "b",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "c",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "d",
        scrollIntoView: mockScrollIntoView
      }, {
        innerText: "e",
        scrollIntoView: mockScrollIntoView
      }];
      var dom = new JSDOM(wrapper.html());
      global.document = dom.window.document;
      global.window = dom.window;
      var mockQuerySelectorAll = jest.fn().mockImplementation(function () {
        return mockNodes;
      });
      global.document.querySelectorAll = mockQuerySelectorAll;
      wrapper.setState({
        deployed: true
      });
      wrapper.instance().handleKeyup(mockEventObject);
      expect(mockScrollIntoView).toHaveBeenCalled();
    });
  });
  describe("handleSelection", function () {
    it("should call toggleDeploy", function () {
      var spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();
      wrapper.instance().handleSelection("cake");
      expect(spy).toHaveBeenCalled();
    });
    it("should call handleSelection from props", function () {
      wrapper.instance().handleSelection("yum");
      expect(mockHandleSelection).toHaveBeenCalledWith("yum", "test name");
    });
    it("should call querySelectorAll", function () {});
  });
  describe("generateOptions", function () {
    it("should return some JSX", function () {
      var expected = ['<li class="ter-select__options-list-item">cats</li>', '<li class="ter-select__options-list-item">dogs</li>', '<li class="ter-select__options-list-item">birds</li>'];
      var result = wrapper.instance().generateOptions().map(function (option) {
        return shallow(option).html();
      });
      expect(result).toEqual(expected);
    });
  });
  describe("SelectOption", function () {
    var selectOptionWrapper;
    var mockOnClick;
    beforeEach(function () {
      mockOnClick = jest.fn();
      selectOptionWrapper = shallow(React.createElement(SelectOption, {
        option: "kitty",
        onClick: mockOnClick
      }));
    });
    it("should match the snapshot", function () {
      expect(selectOptionWrapper).toMatchSnapshot();
    });
    it("should call onClick when clicked", function () {
      selectOptionWrapper.find("li").simulate("click");
      expect(mockOnClick).toHaveBeenCalledWith("kitty");
    });
  });
});