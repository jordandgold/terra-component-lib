import React from "react";
import { shallow } from "enzyme";
import TextInput from "./TextInput";
describe("TextInput", function () {
  var wrapper;
  var mockInputChange;
  beforeEach(function () {
    mockInputChange = jest.fn();
    wrapper = shallow(React.createElement(TextInput, {
      label: "mock label",
      inputChange: mockInputChange,
      value: "mock value",
      name: "mock name",
      status: undefined,
      placeholder: "mock placeholder"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should match the snapshot with a status message", function () {
    wrapper = shallow(React.createElement(TextInput, {
      label: "mock label",
      inputChange: mockInputChange,
      value: "mock value",
      name: "mock name",
      status: {
        className: "error",
        message: "error!"
      },
      placeholder: "mock placeholder"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("should call inputChange onChange", function () {
    var mockEvent = {
      target: {
        value: "s"
      }
    };
    wrapper.find(".ter-input").simulate("change", mockEvent);
    expect(mockInputChange).toHaveBeenCalledWith(mockEvent);
  });
});