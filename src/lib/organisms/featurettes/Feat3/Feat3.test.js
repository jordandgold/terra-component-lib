import React from "react";
import { shallow } from "enzyme";
import Feat3 from "./Feat3";
import {
  mockFeat3Content,
  mockFeat3ContentTwo
} from "../../../../stories/mockContent";

describe("Feat3", () => {
  let wrapper;

  beforeEach(() => {
    const { title, text, content, cta, images } = mockFeat3ContentTwo;

    wrapper = shallow(
      <Feat3
        title={title}
        text={text}
        content={content}
        cta={cta}
        images={images}
      />
    );
  });

  it("should match the snapshot with links", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("getContent", () => {
    it("should call getLinkCards", () => {
      const spy = jest.spyOn(wrapper.instance(), "getLinkCards");

      wrapper.instance().getLinkCards();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("getLinkCards", () => {
    it("should return some jsx", () => {
      const expected = [
        '<article class="ter-link-card"><h4 class="ter-link-card__title">Good design is innovative</h4><p class="ter-link-card__text">Cupidatat ea in duis ullamco nostrud cupidatat quis aliqua ex labore occaecat sit. Tempor irure non amet fugiat qui ea occaecat qui. Aliquip esse eu exercitation veniam irure consectetur quis cupidatat incididunt reprehenderit sint.</p><a class="ter-link-card__link" url="#">Button<svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></a></article>',
        '<article class="ter-link-card"><h4 class="ter-link-card__title">Good design is innovative</h4><p class="ter-link-card__text">Cupidatat ea in duis ullamco nostrud cupidatat quis aliqua ex labore occaecat sit. Tempor irure non amet fugiat qui ea occaecat qui. Aliquip esse eu exercitation veniam irure consectetur quis cupidatat incididunt reprehenderit sint.</p><a class="ter-link-card__link" url="#">Button<svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></a></article>',
        '<article class="ter-link-card"><h4 class="ter-link-card__title">Good design is innovative</h4><p class="ter-link-card__text">Cupidatat ea in duis ullamco nostrud cupidatat quis aliqua ex labore occaecat sit. Tempor irure non amet fugiat qui ea occaecat qui. Aliquip esse eu exercitation veniam irure consectetur quis cupidatat incididunt reprehenderit sint.</p><a class="ter-link-card__link" url="#">Button<svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></a></article>'
      ];
      const response = wrapper
        .instance()
        .getLinkCards()
        .map(item => {
          return shallow(item).html();
        });

      expect(response).toEqual(expected);
    });
  });

  describe("getIconListItems", () => {
    it("should return some jsx", () => {
      const expected = [
        '<article class="ter-icon-list-item"><div class="ter-icon-list-item__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div><div class="ter-icon-list-item__content-wrapper"><h4 class="ter-icon-list-item__title">Good design is innovative</h4><p class="ter-icon-list-item__body">Cupidatat ea in duis ullamco nostrud cupidatat quis aliqua ex labore occaecat sit. Tempor irure non amet fugiat qui ea occaecat qui. Aliquip esse eu exercitation veniam irure consectetur quis cupidatat incididunt reprehenderit sint.</p></div></article>',
        '<article class="ter-icon-list-item"><div class="ter-icon-list-item__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div><div class="ter-icon-list-item__content-wrapper"><h4 class="ter-icon-list-item__title">Good design is innovative</h4><p class="ter-icon-list-item__body">Cupidatat ea in duis ullamco nostrud cupidatat quis aliqua ex labore occaecat sit. Tempor irure non amet fugiat qui ea occaecat qui. Aliquip esse eu exercitation veniam irure consectetur quis cupidatat incididunt reprehenderit sint.</p></div></article>',
        '<article class="ter-icon-list-item"><div class="ter-icon-list-item__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div><div class="ter-icon-list-item__content-wrapper"><h4 class="ter-icon-list-item__title">Good design is innovative</h4><p class="ter-icon-list-item__body">Cupidatat ea in duis ullamco nostrud cupidatat quis aliqua ex labore occaecat sit. Tempor irure non amet fugiat qui ea occaecat qui. Aliquip esse eu exercitation veniam irure consectetur quis cupidatat incididunt reprehenderit sint.</p></div></article>'
      ];
      const { title, text, content, cta, images } = mockFeat3ContentTwo;

      wrapper = shallow(
        <Feat3
          title={title}
          text={text}
          content={mockFeat3Content.content}
          cta={cta}
          images={images}
        />
      );

      const response = wrapper
        .instance()
        .getIconListItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(response).toEqual(expected);
    });
  });
});
