import React from "react";
import { shallow } from "enzyme";
import Tabs, { TabsPanel } from "./Tabs";
describe("Tabs", function () {
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(React.createElement(Tabs, {
      selected: 1,
      fullWidth: false
    }, React.createElement(TabsPanel, {
      name: "First"
    }, React.createElement("h3", null, "First Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin.")), React.createElement(TabsPanel, {
      name: "Second"
    }, React.createElement("h3", null, "Second Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin.")), React.createElement(TabsPanel, {
      name: "Third"
    }, React.createElement("h3", null, "Third Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin."))));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should matcht the snapshot without default selection", function () {
    wrapper = shallow(React.createElement(Tabs, {
      fullWidth: false
    }, React.createElement(TabsPanel, {
      name: "First"
    }, React.createElement("h3", null, "First Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin.")), React.createElement(TabsPanel, {
      name: "Second"
    }, React.createElement("h3", null, "Second Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin.")), React.createElement(TabsPanel, {
      name: "Third"
    }, React.createElement("h3", null, "Third Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin."))));
    expect(wrapper).toMatchSnapshot();
  });
  it("should match the snapshot if fullWidth is true", function () {
    wrapper = shallow(React.createElement(Tabs, {
      selected: 1,
      fullWidth: true
    }, React.createElement(TabsPanel, {
      name: "First"
    }, React.createElement("h3", null, "First Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin.")), React.createElement(TabsPanel, {
      name: "Second"
    }, React.createElement("h3", null, "Second Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin.")), React.createElement(TabsPanel, {
      name: "Third"
    }, React.createElement("h3", null, "Third Tab"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit sollicitudin."))));
    expect(wrapper).toMatchSnapshot();
  });
  describe("Tab Button", function () {
    var mockIndex = 0;
    it("Should call handleTabChange when clicked", function () {
      var spy = jest.spyOn(wrapper.instance(), "handleTabChange");
      wrapper.instance().forceUpdate();
      wrapper.find(".ter-tabs__list-item:first-child button").simulate("click", mockIndex);
      expect(spy).toHaveBeenCalledWith(mockIndex);
    });
  });
  describe("handleTabChange", function () {
    var mockIndex = 2;
    it("Should set state", function () {
      wrapper.instance().handleTabChange(mockIndex);
      expect(wrapper.state().selected).toEqual(mockIndex);
    });
  });
  describe("Tabs Panel", function () {
    var tabsPanelWrapper;
    var mockName = "mock tab name";
    beforeEach(function () {
      tabsPanelWrapper = shallow(React.createElement(TabsPanel, {
        name: mockName
      }, React.createElement("p", null, "Tab Panel")));
    });
    it("should match the snapshot", function () {
      expect(tabsPanelWrapper).toMatchSnapshot();
    });
  });
});