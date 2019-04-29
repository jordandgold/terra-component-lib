import React from "react";
import { shallow } from "enzyme";
import Notification from "./Notification";
describe("Notification", function () {
  var wrapper;
  var mockOnClick;
  beforeEach(function () {
    mockOnClick = jest.fn();
    var mockText = "This is a mock notification message";
    var mockType = "default";
    wrapper = shallow(React.createElement(Notification, {
      onClick: mockOnClick,
      text: mockText,
      type: mockType
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call onClick when clicked", function () {
    wrapper.find("button").simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});