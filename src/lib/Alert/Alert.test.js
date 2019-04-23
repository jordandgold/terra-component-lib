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
        name="test name"
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot without a type", () => {
    wrapper = shallow(<Alert text="This is an alert." onClick={mockOnClick} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should call onClick when clicked", () => {
    wrapper.find(".ter-alert__close").simulate("click");
    expect(mockOnClick).toHaveBeenCalledWith("test name");
  });
});
