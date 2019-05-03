import React from "react";
import Feat8 from "./Feat8";
import { shallow } from "enzyme";
import { mockCards } from "../../../../stories/mockContent";

describe("Feat8", () => {
  let wrapper;

  beforeEach(() => {
    const mockButtonLink = { link: "#", text: "Button" };

    wrapper = shallow(
      <Feat8
        title="Good design is innovative."
        buttonLink={mockButtonLink}
        button={{
          onClick: jest.fn(),
          text: "test",
          name: "name",
          className: "ter-button--primary--1"
        }}
        cards={mockCards}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("renderCards", () => {
    it("should return some jsx", () => {
      const expected = [
        '<article class="ter-card"><figure class="ter-card__image"><img src="./placeholder.jpg" alt="Placeholder"/></figure><div class="ter-card__body"><h4 class="ter-card__title">Card Title</h4><p class="ter-card__text">Irure cillum ad culpa ad non cillum irure dolore ad nostrud aliqua mollit. Eiusmod id mollit non voluptate qui qui ut ullamco officia eiusmod laboris veniam amet culpa.</p></div></article>',
        '<article class="ter-card"><figure class="ter-card__image"><img src="./placeholder.jpg" alt="Placeholder"/></figure><div class="ter-card__body"><h4 class="ter-card__title">Card Title</h4><p class="ter-card__text">Irure cillum ad culpa ad non cillum irure dolore ad nostrud aliqua mollit. Eiusmod id mollit non voluptate qui qui ut ullamco officia eiusmod laboris veniam amet culpa.</p></div></article>',
        '<article class="ter-card"><figure class="ter-card__image"><img src="./placeholder.jpg" alt="Placeholder"/></figure><div class="ter-card__body"><h4 class="ter-card__title">Card Title</h4><p class="ter-card__text">Irure cillum ad culpa ad non cillum irure dolore ad nostrud aliqua mollit. Eiusmod id mollit non voluptate qui qui ut ullamco officia eiusmod laboris veniam amet culpa.</p></div></article>'
      ];
      const response = wrapper
        .instance()
        .renderCards()
        .map(card => {
          return shallow(card).html();
        });

      expect(response).toEqual(expected);
    });
  });
});
