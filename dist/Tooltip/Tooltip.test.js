import React from "react";
import { shallow } from "enzyme";
import Tooltip from "./Tooltip";
describe("Tooltip", function () {
  var wrapper;
  beforeEach(function () {
    wrapper = shallow(React.createElement(Tooltip, {
      direction: "up",
      tooltipLabel: "test"
    }, React.createElement("p", null, "hello")));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
});