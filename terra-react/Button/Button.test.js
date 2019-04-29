import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
describe("Button", function () {
  var wrapper;
  var mockOnClick;
  var mockEventObject;
  beforeEach(function () {
    mockOnClick = jest.fn();
    wrapper = shallow(React.createElement(Button, {
      name: "test name",
      className: "test class",
      onClick: mockOnClick,
      text: "test text"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call onClick method when clicked", function () {
    mockEventObject = {
      target: {
        innerHTML: "hello",
        name: "test name"
      }
    };
    wrapper.find(".ter-button").simulate("click", mockEventObject);
    expect(mockOnClick).toHaveBeenCalledWith(mockEventObject);
  });
});