import React from "react";
import { shallow } from "enzyme";
import Icon from "./Icon";
describe("Iron", function () {
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(React.createElement(Icon, {
      type: "open-caret-right-dark-8px",
      size: "8px"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
});