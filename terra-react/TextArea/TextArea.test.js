import React from "react";
import { shallow } from "enzyme";
import TextArea from "./TextArea";
describe("TextArea", function () {
  var wrapper;
  var mockHandleChange;
  beforeEach(function () {
    mockHandleChange = jest.fn();
    wrapper = shallow(React.createElement(TextArea, {
      inputChange: mockHandleChange,
      value: "mock value",
      name: "name",
      label: "mock label"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call handleChange on change", function () {
    var mockObject = {
      target: {
        value: "Hello"
      }
    };
    wrapper.find("textarea").simulate("change", mockObject);
    expect(mockHandleChange).toHaveBeenCalledWith(mockObject, "name");
  });
});