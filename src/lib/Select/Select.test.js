import React from "react";
import { shallow } from "enzyme";
import Select from "./Select";

describe("Select", () => {
  let wrapper;
  let mockHandleSelection;
  const mockOptions = ["cats", "dogs", "birds"];

  beforeEach(() => {
    mockHandleSelection = jest.fn();
    wrapper = shallow(
      <Select
        handleSelection={mockHandleSelection}
        options={mockOptions}
        selection={undefined}
        defaultText="Test default text"
        name="test name"
      />
    );
  });

  it("should match the snapshop", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("toggleDeploy", () => {
    it("should call setState", () => {
      wrapper.instance().toggleDeploy();

      expect(wrapper.state().deployed).toEqual(true);
    });

    it("should call toggleDeploy on click", () => {
      mockHandleSelection = jest.fn();
      wrapper = shallow(
        <Select
          handleSelection={mockHandleSelection}
          options={["dogs"]}
          selection={undefined}
          defaultText="Test default text"
          name="test name"
        />
      );
      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();

      wrapper.find(".ter-select__label").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("handleSelection", () => {
    it("should call toggleDeploy", () => {
      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();

      wrapper.instance().handleSelection("cake");

      expect(spy).toHaveBeenCalled();
    });

    it("should call handleSelection on click", () => {
      mockHandleSelection = jest.fn();
      wrapper = shallow(
        <Select
          handleSelection={mockHandleSelection}
          options={["dogs"]}
          selection={undefined}
          defaultText="Test default text"
          name="test name"
        />
      );
      const spy = jest.spyOn(wrapper.instance(), "handleSelection");
      wrapper.instance().forceUpdate();

      wrapper.find(".select-options__item").simulate("click", "dogs");

      expect(spy).toHaveBeenCalledWith("dogs");
    });

    it("should call handleSelection from props", () => {
      wrapper.instance().handleSelection("yum");

      expect(mockHandleSelection).toHaveBeenCalledWith("yum", "test name");
    });
  });

  describe("generateOptions", () => {
    it("should return some JSX", () => {
      const expected = [
        '<li class="select-options__item">cats</li>',
        '<li class="select-options__item">dogs</li>',
        '<li class="select-options__item">birds</li>'
      ];
      const result = wrapper
        .instance()
        .generateOptions()
        .map(option => {
          return shallow(option).html();
        });

      expect(result).toEqual(expected);
    });
  });
});
