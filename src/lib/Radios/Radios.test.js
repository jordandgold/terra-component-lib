import React from "react";
import { shallow } from "enzyme";
import Radios from "./Radios";

describe("Radios", () => {
  let wrapper;
  let mockSelectRadio;

  beforeEach(() => {
    mockSelectRadio = jest.fn();
    const mockSelected = "test one";
    const mockRadios = [
      { name: "test one" },
      { name: "test two" },
      { name: "test three" }
    ];
    wrapper = shallow(
      <Radios
        radios={mockRadios}
        selectRadio={mockSelectRadio}
        selected={mockSelected}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("generateRadios", () => {
    it("should return some JSX", () => {
      const expected = [
        '<div><label class="ter-radio__label radio-0">test one</label><input type="radio" class="radio-button-0" name="test one" checked=""/></div>',
        '<div><label class="ter-radio__label radio-1">test two</label><input type="radio" class="radio-button-1" name="test two"/></div>',
        '<div><label class="ter-radio__label radio-2">test three</label><input type="radio" class="radio-button-2" name="test three"/></div>'
      ];
      const radioWrappers = wrapper
        .instance()
        .generateRadios()
        .map(radio => {
          return shallow(radio).html();
        });

      expect(radioWrappers).toEqual(expected);
    });

    it("should call selectRadio on change", () => {
      const mockRadio = { name: "test one" };
      wrapper.find(".radio-button-0").simulate("change", mockRadio);

      expect(mockSelectRadio).toHaveBeenCalledWith(mockRadio);
    });
  });
});
