import React from "react";
import { shallow } from "enzyme";
import TextInput from "./TextInput";

describe("TextInput", () => {
  let wrapper;
  let mockInputChange;

  beforeEach(() => {
    mockInputChange = jest.fn();
    wrapper = shallow(
      <TextInput
        inputChange={mockInputChange}
        value="mock value"
        name="mock name"
        status=""
        placeholder="mock placeholder"
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call inputChange onChange", () => {
    const mockEvent = {
      target: {
        value: "s"
      }
    };

    wrapper.find(".ter-input").simulate("change", mockEvent);

    expect(mockInputChange).toHaveBeenCalledWith(mockEvent);
  });
});
