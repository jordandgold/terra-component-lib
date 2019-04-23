import React from "react";
import { shallow, mount } from "enzyme";
import Dropdown from "./Dropdown";
import Button from "../Button/Button";
import { JSDOM } from "jsdom";

describe("Dropdown", () => {
  let wrapper;
  const mockDefaultLabel = "Select an option";
  let mockButtonPush;

  beforeEach(() => {
    mockButtonPush = jest.fn();

    wrapper = shallow(
      <Dropdown label={mockDefaultLabel}>
        <p>test</p>
        <Button
          onClick={mockButtonPush}
          text="Primary 1"
          className="ter-button--primary--1"
        />
      </Dropdown>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call removeEventListener on unmount", () => {
    const dom = new JSDOM(wrapper.html());
    global.document = dom.window.document;
    global.window = dom.window;

    const mockRemoveEventListener = jest.fn();

    global.document.removeEventListener = mockRemoveEventListener;

    wrapper.instance().componentWillUnmount();

    expect(mockRemoveEventListener).toHaveBeenCalled();
  });

  describe("toggleClose", () => {
    beforeEach(() => {
      mockButtonPush = jest.fn();

      wrapper = mount(
        <Dropdown label={mockDefaultLabel}>
          <p>test</p>
          <Button
            onClick={mockButtonPush}
            text="Primary 1"
            className="ter-button--primary--1"
          />
        </Dropdown>
      );
    });

    it("should return if node contains target", () => {
      const mockEvent = {
        target: "hello"
      };

      const spy = jest.spyOn(wrapper.instance(), "toggleClose");
      wrapper.instance().forceUpdate();

      const mockContains = jest.fn().mockImplementation(() => true);

      wrapper.instance().node = { contains: mockContains };

      wrapper.state().deployed = true;

      wrapper.instance().toggleClose(mockEvent);

      expect(spy).toHaveReturned();
    });

    it("should return if closed", () => {
      const mockEvent = {
        target: "no"
      };

      const spy = jest.spyOn(wrapper.instance(), "toggleClose");
      wrapper.instance().forceUpdate();

      const mockContains = jest.fn().mockImplementation(() => false);

      wrapper.instance().node = { contains: mockContains };

      wrapper.state().deployed = false;

      wrapper.instance().toggleClose(mockEvent);

      expect(spy).toHaveReturned();
    });

    it("should call toggleDeploy", () => {
      const mockEvent = {
        target: "no"
      };

      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();

      const mockContains = jest.fn().mockImplementation(() => false);
      wrapper.instance().node = { contains: mockContains };

      wrapper.state().deployed = true;

      wrapper.instance().toggleClose(mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("toggleDeploy", () => {
    it("Should set state", () => {
      wrapper.instance().toggleDeploy();
      expect(wrapper.state().deployed).toEqual(true);
    });

    it("Should be called on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");

      wrapper.instance().forceUpdate();

      wrapper.find(".ter-dropdown").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });
});
