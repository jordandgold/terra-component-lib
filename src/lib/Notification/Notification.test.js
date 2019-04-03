import React from "react";
import { shallow } from "enzyme";

import Notification from "./Notification";

describe("Notification", () => {
  let wrapper;
  let mockOnClick;

  beforeEach(() => {
    mockOnClick = jest.fn();
    const mockText = "This is a mock notification message";
    const mockType = "default";
    wrapper = shallow(<Notification onClick={mockOnClick} text={mockText} type={mockType} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onClick when clicked", () => {
    wrapper.find("button").simulate("click");

    expect(mockOnClick).toHaveBeenCalled();
  });
});
