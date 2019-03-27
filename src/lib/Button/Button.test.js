import React from "react";

import { shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  let wrapper;
  let mockOnClick;
  let mockEventObject;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(<Button onClick={mockOnClick} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onClick method when clicked", () => {
    mockEventObject = {
      target: {
        innerHTML: "hello"
      }
    };
    wrapper.find(".ter-button").simulate("click", mockEventObject);

    expect(mockOnClick).toHaveBeenCalledWith(mockEventObject);
  });
});
