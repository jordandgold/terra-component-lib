import React from "react";
import { shallow } from "enzyme";
import Accordion, { AccordionFold } from "./Accordion";

describe("Accordion", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Accordion defaultActive={0}>
        <p>test fold</p>
        <p>test fold 2</p>
      </Accordion>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("checkActive", () => {
    it("should setState if conditions are met", () => {
      wrapper.setState({ active: 10 });
      wrapper.instance().checkActive();

      expect(wrapper.state().active).toEqual(0);
    });

    it("should setState if conditions are met", () => {
      wrapper = shallow(
        <Accordion defaultActive={2}>
          <p>test fold</p>
          <p>test fold 2</p>
        </Accordion>
      );
      wrapper.state().active = 10;
      wrapper.instance().checkActive();

      expect(wrapper.state().active).toEqual(2);
    });

    it("should not call setState if conditions arent met", () => {
      wrapper = shallow(
        <Accordion>
          <p>test fold</p>
          <p>test fold 2</p>
        </Accordion>
      );
      wrapper.instance().checkActive();

      expect(wrapper.state().active).toEqual(undefined);
    });
  });

  describe("accordionToggle", () => {
    it("should set state to undefined if active = fold", () => {
      wrapper.state().active = "hello";

      wrapper.instance().accordionToggle("hello");

      expect(wrapper.state().active).toEqual(undefined);
    });

    it("should otherwise set active to argument", () => {
      wrapper.instance().accordionToggle("hello");

      expect(wrapper.state().active).toEqual("hello");
    });
  });

  describe("generateFold", () => {
    it("should return some JSX", () => {
      const expected = [
        '<div class="ter-accordion__fold is-expanded"><button class="ter-accordion__trigger"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-caret-right-dark-16px ter-icon--16px ter-accordion__trigger-caret"><use xlink:href="[object Object]#ter-icon--open-caret-right-dark-16px"></use></svg></button><p>test fold</p></div>',
        '<div class="ter-accordion__fold "><button class="ter-accordion__trigger"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-caret-right-dark-16px ter-icon--16px ter-accordion__trigger-caret"><use xlink:href="[object Object]#ter-icon--open-caret-right-dark-16px"></use></svg></button><p>test fold 2</p></div>'
      ];

      const result = wrapper
        .instance()
        .generateFolds()
        .map(fold => {
          return shallow(fold).html();
        });

      expect(result).toEqual(expected);
    });

    it("should call generateFold onClick", () => {
      const spy = jest.spyOn(wrapper.instance(), "generateFolds");
      wrapper.instance().forceUpdate();

      wrapper
        .find(".ter-accordion__fold:first-child .ter-accordion__trigger")
        .simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("AccordionFold", () => {
    let foldWrapper;

    beforeEach(() => {
      foldWrapper = shallow(<AccordionFold children={"<p>hello</p>"} />);
    });

    it("should match the snapshot", () => {
      expect(foldWrapper).toMatchSnapshot();
    });
  });
});
