import React from "react";
import LinkCard from "./LinkCard";
import { shallow } from "enzyme";

describe("LinkCard", () => {
  let wrapper;

  beforeEach(() => {
    const mockLink = { url: "#", text: "Sub-CTA" };

    wrapper = shallow(
      <LinkCard
        title="Good design is innovative"
        text="Quis nulla in officia veniam exercitation quis deserunt exercitation. Ea minim irure nostrud ipsum incididunt minim dolore elit ut eu esse ut officia."
        link={mockLink}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
