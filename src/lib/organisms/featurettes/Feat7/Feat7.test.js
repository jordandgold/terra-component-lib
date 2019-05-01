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

  describe("renderCards", () => {
    it("should return some jsx", () => {
      const expected = [
        '<a class="ter-feat-nine__card" href="#"><div class="ter-feat-nine__card-content-wrapper"><h4 class="ter-feat-nine__card-title">Design!</h4><p class="ter-feat-nine__card-body">Enim laborum ad anim laborum ad minim ipsum proident est cillum aliqua. Irure laboris aute ullamco ad Lorem et culpa id commodo quis sunt labore in id.</p></div><div class="ter-feat-nine__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div></a>',
        '<a class="ter-feat-nine__card" href="#"><div class="ter-feat-nine__card-content-wrapper"><h4 class="ter-feat-nine__card-title">Aesthetics!</h4><p class="ter-feat-nine__card-body">Enim laborum ad anim laborum ad minim ipsum proident est cillum aliqua.</p></div><div class="ter-feat-nine__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div></a>',
        '<a class="ter-feat-nine__card" href="#"><div class="ter-feat-nine__card-content-wrapper"><h4 class="ter-feat-nine__card-title">Useability!</h4><p class="ter-feat-nine__card-body">Enim laborum ad anim laborum ad minim ipsum proident est cillum aliqua. Qui proident ipsum excepteur aute eiusmod excepteur commodo pariatur mollit officia. Dolore occaecat tempor do in officia elit deserunt cillum sunt labore ad tempor.</p></div><div class="ter-feat-nine__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div></a>',
        '<a class="ter-feat-nine__card" href="#"><div class="ter-feat-nine__card-content-wrapper"><h4 class="ter-feat-nine__card-title">Coffee!</h4><p class="ter-feat-nine__card-body">Enim laborum ad anim laborum ad minim ipsum proident est cillum aliqua.</p></div><div class="ter-feat-nine__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div></a>'
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

  describe("Feat7Card", () => {
    it("should match the snapshot", () => {
      const mockCard = featSevenContent.content[0];
      const cardWrapper = shallow(<Feat7Card card={mockCard} />);

      expect(cardWrapper).toMatchSnapshot();
    });
  });
});
