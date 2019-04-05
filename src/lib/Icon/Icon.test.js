import React from "react";
import { shallow } from "enzyme";
import Icon from "./Icon";

describe("Iron", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon type="open-caret-right-dark-8px" size="8px" />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
