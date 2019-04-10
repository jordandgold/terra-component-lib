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
    wrapper.find("input").simulate("change", "test name");

    expect(mockHandleChange).toHaveBeenCalledWith("test name");
  });
});
