import React from "react";
import { shallow } from "enzyme";
import Alert from "./Alert";

describe("Alert", () => {
  let wrapper;
  let mockOnClick;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <Alert
        text="This is an alert."
        type="ter-alert--default"
        onClick={mockOnClick}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onClick when clicked", () => {
    wrapper.find(".ter-alert").simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});
