import React from "react";
import { shallow } from "enzyme";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    wrapper = shallow(
      <Checkbox
        name="test name"
        label="test label"
        checked={false}
        handleChange={mockHandleChange}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange on click", () => {
    const mockEvent = {
      target: {
        name: "test name",
        checked: true
      }
    };
    wrapper.find("input").simulate("change", mockEvent);

    expect(mockHandleChange).toHaveBeenCalledWith(
      mockEvent.target.name,
      mockEvent.target.checked
    );
  });

  it("should set state", () => {
    const mockEvent = {
      target: {
        name: "test name",
        checked: true
      }
    };
    wrapper.find("input").simulate("change", mockEvent);

    expect(wrapper.state().checked).toEqual(true);
  });
});
