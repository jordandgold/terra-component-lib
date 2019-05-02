import React from "react";
import { shallow } from "enzyme";
import PricingCard from "./PrincingCard";

describe("PricingCard", () => {
  let wrapper;

  beforeEach(() => {
    const mockDescription =
      "Ullamco exercitation excepteur nostrud ipsum veniam est enim.";

    const mockButtonLink = {
      link: "#",
      text: "Subscribe"
    };

    wrapper = shallow(
      <PricingCard
        product="SketchUp"
        version="Shop"
        description={mockDescription}
        cost="$119/yr"
        currency="USD"
        buttonLink={mockButtonLink}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
