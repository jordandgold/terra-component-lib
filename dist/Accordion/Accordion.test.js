import React from "react";
import { shallow } from "enzyme";
import Accordion, { AccordionFold } from "./Accordion";
describe("Accordion", function () {
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(React.createElement(Accordion, {
      defaultActive: 0
    }, React.createElement("p", null, "test fold"), React.createElement("p", null, "test fold 2")));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  describe("checkActive", function () {
    it("should setState if conditions are met", function () {
      wrapper.setState({
        active: 10
      });
      wrapper.instance().checkActive();
      expect(wrapper.state().active).toEqual(0);
    });
    it("should setState if conditions are met", function () {
      wrapper = shallow(React.createElement(Accordion, {
        defaultActive: 2
      }, React.createElement("p", null, "test fold"), React.createElement("p", null, "test fold 2")));
      wrapper.state().active = 10;
      wrapper.instance().checkActive();
      expect(wrapper.state().active).toEqual(2);
    });
    it("should not call setState if conditions arent met", function () {
      wrapper = shallow(React.createElement(Accordion, null, React.createElement("p", null, "test fold"), React.createElement("p", null, "test fold 2")));
      wrapper.instance().checkActive();
      expect(wrapper.state().active).toEqual(undefined);
    });
  });
  describe("accordionToggle", function () {
    it("should set state to undefined if active = fold", function () {
      wrapper.state().active = "hello";
      wrapper.instance().accordionToggle("hello");
      expect(wrapper.state().active).toEqual(undefined);
    });
    it("should otherwise set active to argument", function () {
      wrapper.instance().accordionToggle("hello");
      expect(wrapper.state().active).toEqual("hello");
    });
  });
  describe("generateFold", function () {
    it("should return some JSX", function () {
      var expected = ['<div class="ter-accordion__fold is-expanded"><button class="ter-accordion__trigger"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-caret-right-dark-16px ter-icon--16px ter-accordion__trigger-caret"><use xlink:href="[object Object]#ter-icon--open-caret-right-dark-16px"></use></svg></button><p>test fold</p></div>', '<div class="ter-accordion__fold "><button class="ter-accordion__trigger"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-caret-right-dark-16px ter-icon--16px ter-accordion__trigger-caret"><use xlink:href="[object Object]#ter-icon--open-caret-right-dark-16px"></use></svg></button><p>test fold 2</p></div>'];
      var result = wrapper.instance().generateFolds().map(function (fold) {
        return shallow(fold).html();
      });
      expect(result).toEqual(expected);
    });
    it("should call generateFold onClick", function () {
      var spy = jest.spyOn(wrapper.instance(), "generateFolds");
      wrapper.instance().forceUpdate();
      wrapper.find(".ter-accordion__fold:first-child .ter-accordion__trigger").simulate("click");
      expect(spy).toHaveBeenCalled();
    });
  });
  describe("AccordionFold", function () {
    var foldWrapper;
    beforeEach(function () {
      foldWrapper = shallow(React.createElement(AccordionFold, {
        children: "<p>hello</p>"
      }));
    });
    it("should match the snapshot", function () {
      expect(foldWrapper).toMatchSnapshot();
    });
  });
});