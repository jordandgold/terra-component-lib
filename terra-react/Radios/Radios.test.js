import React from "react";
import { shallow } from "enzyme";
import Radios from "./Radios";
describe("Radios", function () {
  var wrapper;
  var mockSelectRadio;
  beforeEach(function () {
    mockSelectRadio = jest.fn();
    var mockSelected = "test one";
    var mockRadios = ["test one", "test two", "test three"];
    wrapper = shallow(React.createElement(Radios, {
      radios: mockRadios,
      selectRadio: mockSelectRadio,
      selected: mockSelected,
      name: "test name"
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  describe("generateRadios", function () {
    it("should return some JSX", function () {
      var expected = ['<div class="ter-radio"><input type="radio" class="radio-button-0" name="test name" checked="" value="test one" id="test nameChoice0"/><label for="test nameChoice0" class="ter-radio__label radio-0">test one</label></div>', '<div class="ter-radio"><input type="radio" class="radio-button-1" name="test name" value="test two" id="test nameChoice1"/><label for="test nameChoice1" class="ter-radio__label radio-1">test two</label></div>', '<div class="ter-radio"><input type="radio" class="radio-button-2" name="test name" value="test three" id="test nameChoice2"/><label for="test nameChoice2" class="ter-radio__label radio-2">test three</label></div>'];
      var radioWrappers = wrapper.instance().generateRadios().map(function (radio) {
        return shallow(radio).html();
      });
      expect(radioWrappers).toEqual(expected);
    });
    it("should call selectRadio on change", function () {
      var mockRadio = {
        name: "test one"
      };
      wrapper.find(".radio-button-0").simulate("change", mockRadio);
      expect(mockSelectRadio).toHaveBeenCalledWith(mockRadio.name, "test name");
    });
  });
});