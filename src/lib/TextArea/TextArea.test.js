import React from "react";
import { shallow } from "enzyme";
import TextArea from "./TextArea";

describe("TextArea", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();
    wrapper = shallow(
      <TextArea
        inputChange={mockHandleChange}
        value="mock value"
        name="name"
        label="mock label"
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange on change", () => {
    const mockObject = {
      target: {
        value: "Hello"
      }
    };
    wrapper.find("textarea").simulate("change", mockObject);

    expect(mockHandleChange).toHaveBeenCalledWith(mockObject, "name");
  });
});
