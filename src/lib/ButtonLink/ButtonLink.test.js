import React from "react";

import { shallow } from "enzyme";

import ButtonLink from "./ButtonLink";

describe("ButtonLink", () => {
  let wrapper;
  let mockOnClick;
  let mockEventObject;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <ButtonLink className="test class" link="#" text="test text" />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
