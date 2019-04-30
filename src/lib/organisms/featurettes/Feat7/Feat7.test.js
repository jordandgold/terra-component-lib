import React from "react";
import { shallow } from "enzyme";
import Feat7, { Feat7Card } from "./Feat7";
import { featSevenContent } from "../../../../stories/mockContent";

describe("Feat7", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Feat7
        title={featSevenContent.title}
        content={featSevenContent.content}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("Feat7Card", () => {
    it("should match the snapshot", () => {
      const mockCard = featSevenContent.content[0];
      const cardWrapper = shallow(<Feat7Card card={mockCard} />);

      expect(cardWrapper).toMatchSnapshot();
    });
  });
});
