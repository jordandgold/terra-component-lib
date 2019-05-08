import Feat4 from "./Feat4";
import React from "react";
import { shallow } from "enzyme";
import { featFourContent } from "../../../../stories/mockContent";

describe("Feat4", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Feat4 content={featFourContent} columns={2} variant="a" />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with an image", () => {
    const mockImage = { url: "test", altText: "test" };
    wrapper = shallow(
      <Feat4
        content={featFourContent}
        columns={2}
        variant="a"
        image={mockImage}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with a title", () => {
    wrapper = shallow(
      <Feat4 content={featFourContent} columns={2} variant="a" title="test" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with a title and image", () => {
    const mockImage = { url: "test", altText: "test" };

    wrapper = shallow(
      <Feat4
        content={featFourContent}
        columns={2}
        variant="a"
        title="test"
        image={mockImage}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with 3 columns", () => {
    wrapper = shallow(
      <Feat4 content={featFourContent} columns={3} variant="a" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe("generateCards", () => {
    it("should call generateACards", () => {
      const spy = jest.spyOn(wrapper.instance(), "generateACards");

      wrapper.instance().generateCards();

      expect(spy).toHaveBeenCalled();
    });

    it("should return", () => {
      const spy = jest.spyOn(wrapper.instance(), "generateCards");

      wrapper.instance().generateCards();

      expect(spy).toHaveReturned();
    });

    it("should call generateCCards", () => {
      wrapper = shallow(
        <Feat4 content={featFourContent} columns={2} variant="c" />
      );

      const spy = jest.spyOn(wrapper.instance(), "generateCCards");

      wrapper.instance().generateCards();

      expect(spy).toHaveBeenCalled();
    });

    it("should return", () => {
      wrapper = shallow(
        <Feat4 content={featFourContent} columns={2} variant="c" />
      );
      const spy = jest.spyOn(wrapper.instance(), "generateCards");

      wrapper.instance().generateCards();

      expect(spy).toHaveReturned();
    });

    it("should call generateDCards", () => {
      wrapper = shallow(
        <Feat4 content={featFourContent} columns={2} variant="d" />
      );

      const spy = jest.spyOn(wrapper.instance(), "generateDCards");

      wrapper.instance().generateCards();

      expect(spy).toHaveBeenCalled();
    });

    it("should return", () => {
      wrapper = shallow(
        <Feat4 content={featFourContent} columns={2} variant="d" />
      );
      const spy = jest.spyOn(wrapper.instance(), "generateCards");

      wrapper.instance().generateCards();

      expect(spy).toHaveReturned();
    });
  });

  describe("generateACards", () => {
    it("should return some jsx", () => {
      const expected = [
        '<article class="ter-icon-list-item"><div class="ter-icon-list-item__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div><div class="ter-icon-list-item__content-wrapper"><h4 class="ter-icon-list-item__title">Design is good. Period.</h4><p class="ter-icon-list-item__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></div></article>',
        '<article class="ter-icon-list-item"><div class="ter-icon-list-item__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div><div class="ter-icon-list-item__content-wrapper"><h4 class="ter-icon-list-item__title">Design is good. Period.</h4><p class="ter-icon-list-item__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></div></article>',
        '<article class="ter-icon-list-item"><div class="ter-icon-list-item__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div><div class="ter-icon-list-item__content-wrapper"><h4 class="ter-icon-list-item__title">Design is good. Period.</h4><p class="ter-icon-list-item__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></div></article>',
        '<article class="ter-icon-list-item"><div class="ter-icon-list-item__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-arrow-right-dark-32px ter-icon--32px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-arrow-right-dark-32px"></use></svg></div><div class="ter-icon-list-item__content-wrapper"><h4 class="ter-icon-list-item__title">Design is good. Period.</h4><p class="ter-icon-list-item__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></div></article>'
      ];
      const response = wrapper
        .instance()
        .generateACards()
        .map(card => {
          return shallow(card).html();
        });
      expect(response).toEqual(expected);
    });
  });

  describe("generateCCards", () => {
    it("should return some jsx", () => {
      const expected = [
        '<article class="ter-button-link-card"><h4 class="ter-button-link-card__title">Design is good. Period.</h4><p class="ter-button-link-card__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p><a href="#" class="ter-button ter-button--primary--1">Button</a></article>',
        '<article class="ter-button-link-card"><h4 class="ter-button-link-card__title">Design is good. Period.</h4><p class="ter-button-link-card__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p><a href="#" class="ter-button ter-button--primary--1">Button</a></article>',
        '<article class="ter-button-link-card"><h4 class="ter-button-link-card__title">Design is good. Period.</h4><p class="ter-button-link-card__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p><a href="#" class="ter-button ter-button--primary--1">Button</a></article>',
        '<article class="ter-button-link-card"><h4 class="ter-button-link-card__title">Design is good. Period.</h4><p class="ter-button-link-card__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p><a href="#" class="ter-button ter-button--primary--1">Button</a></article>'
      ];
      const response = wrapper
        .instance()
        .generateCCards()
        .map(card => {
          return shallow(card).html();
        });
      expect(response).toEqual(expected);
    });
  });

  describe("generateDCards", () => {
    it("should return some jsx", () => {
      const expected = [
        '<article class="ter-link-tile"><div class="ter-link-tile__link-wrapper"><a class="ter-link-tile__title" href="#">Design is good. Period.</a><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-caret-right-dark-24px ter-icon--24px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-caret-right-dark-24px"></use></svg></div><p class="ter-link-tile__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></article>',
        '<article class="ter-link-tile"><div class="ter-link-tile__link-wrapper"><a class="ter-link-tile__title" href="#">Design is good. Period.</a><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-caret-right-dark-24px ter-icon--24px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-caret-right-dark-24px"></use></svg></div><p class="ter-link-tile__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></article>',
        '<article class="ter-link-tile"><div class="ter-link-tile__link-wrapper"><a class="ter-link-tile__title" href="#">Design is good. Period.</a><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-caret-right-dark-24px ter-icon--24px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-caret-right-dark-24px"></use></svg></div><p class="ter-link-tile__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></article>',
        '<article class="ter-link-tile"><div class="ter-link-tile__link-wrapper"><a class="ter-link-tile__title" href="#">Design is good. Period.</a><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-caret-right-dark-24px ter-icon--24px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-caret-right-dark-24px"></use></svg></div><p class="ter-link-tile__body">Forget the fat lady! You&#x27;re obsessed with the fat lady! Drive us out of here!</p></article>'
      ];
      const response = wrapper
        .instance()
        .generateDCards()
        .map(card => {
          return shallow(card).html();
        });
      expect(response).toEqual(expected);
    });
  });
});
