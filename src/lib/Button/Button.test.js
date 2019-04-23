import React from "react";

import { shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  let wrapper;
  let mockOnClick;
  let mockEventObject;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <Button
        name="test name"
        className="test class"
        onClick={mockOnClick}
        text="test text"
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onClick method when clicked", () => {
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
