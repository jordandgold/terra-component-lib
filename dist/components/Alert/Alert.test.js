import React from "react";
import { shallow } from "enzyme";
import Alert from "./Alert";
describe("Alert", function () {
  var wrapper;
  var mockOnClick;
  beforeEach(function () {
    mockOnClick = jest.fn();
    wrapper = shallow(React.createElement(Alert, {
      text: "This is an alert.",
      type: "ter-alert--default",
      onClick: mockOnClick
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot without a type", function () {
    wrapper = shallow(React.createElement(Alert, {
      text: "This is an alert.",
      onClick: mockOnClick
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("should call onClick when clicked", function () {
    wrapper.find(".ter-alert").simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});