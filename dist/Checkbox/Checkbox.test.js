import React from "react";
import { shallow } from "enzyme";
import Checkbox from "./Checkbox";
describe("Checkbox", function () {
  var wrapper;
  var mockHandleChange;
  beforeEach(function () {
    mockHandleChange = jest.fn();
    wrapper = shallow(React.createElement(Checkbox, {
      name: "test name",
      label: "test label",
      checked: false,
      handleChange: mockHandleChange
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call handleChange on click", function () {
    var mockEvent = {
      target: {
        name: "test name",
        checked: true
      }
    };
    wrapper.find("input").simulate("change", mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });
  it("should set state", function () {
    var mockEvent = {
      target: {
        name: "test name",
        checked: true
      }
    };
    wrapper.find("input").simulate("change", mockEvent);
    expect(wrapper.state().checked).toEqual(true);
  });
});