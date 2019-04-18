import React from "react";
import { shallow } from "enzyme";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Tooltip direction="up" tooltipLabel="test">
        <p>hello</p>
      </Tooltip>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
