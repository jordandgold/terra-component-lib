import React from "react";
import { shallow, mount } from "enzyme";
import Dropdown, { Option } from "./Dropdown";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

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

  describe("handleOpenDropdown", () => {
    it("Should set state", () => {
      wrapper.instance().handleOpenDropdown();
      expect(wrapper.state().isOpen).toEqual(true);
    });

    it("Should be called on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleOpenDropdown");

      wrapper.instance().forceUpdate();

      wrapper.find(".ter-dropdown").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });
});
