import React from "react";
import { shallow, mount } from "enzyme";
import Dropdown from "./Dropdown";
import Button from "../Button/Button";
import { JSDOM } from "jsdom";
describe("Dropdown", function () {
  var wrapper;
  var mockDefaultLabel = "Select an option";
  var mockButtonPush;
  beforeEach(function () {
    mockButtonPush = jest.fn();
    wrapper = shallow(React.createElement(Dropdown, {
      label: mockDefaultLabel
    }, React.createElement("p", null, "test"), React.createElement(Button, {
      onClick: mockButtonPush,
      text: "Primary 1",
      className: "ter-button--primary--1"
    })));
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
    beforeEach(function () {
      mockButtonPush = jest.fn();
      wrapper = mount(React.createElement(Dropdown, {
        label: mockDefaultLabel
      }, React.createElement("p", null, "test"), React.createElement(Button, {
        onClick: mockButtonPush,
        text: "Primary 1",
        className: "ter-button--primary--1"
      })));
    });
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
    it("Should set state", function () {
      wrapper.instance().toggleDeploy();
      expect(wrapper.state().deployed).toEqual(true);
    });
    it("Should be called on click", function () {
      var spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();
      wrapper.find(".ter-dropdown").simulate("click");
      expect(spy).toHaveBeenCalled();
    });
  });
});