import React from "react";
import { shallow } from "enzyme";
import Dropdown, { Option } from "./Dropdown";

describe("Dropdown", () => {
  let wrapper;
  let mockSelectOption;
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const mockDefaultLabel = "Select an option";

  beforeEach(() => {
    mockSelectOption = jest.fn();

    wrapper = shallow(
      <Dropdown
        defaultLabel={mockDefaultLabel}
        selectOption={mockSelectOption}
        options={mockOptions}
        selected={undefined}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleOpenDropdown", () => {
    it("Should set state", () => {
      wrapper.instance().handleOpenDropdown();
      expect(wrapper.state().isOpen).toEqual(true);
    });

    it("Should be called on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleOpenDropdown");

      wrapper.instance().forceUpdate();

      wrapper.find(".ter-dropdown").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("handleSelectOption", () => {
    const mockOption = "Mock Option";

    it("Should set state", () => {
      wrapper.instance().handleSelectOption(mockOption);
      expect(wrapper.state().isOpen).toEqual(false);
    });

    it("Should call selectOption method if conditions are met", () => {
      wrapper.instance().handleSelectOption(mockOption);
      expect(mockSelectOption).toHaveBeenCalledWith(mockOption);
    });

    it("Should not call selectOption if conditions aren't met", () => {
      wrapper = shallow(
        <Dropdown
          defaultLabel={mockDefaultLabel}
          selectOption={mockSelectOption}
          options={mockOptions}
          selected={"hello"}
        />
      );
      wrapper.instance().handleSelectOption("hello");
      expect(mockSelectOption).toHaveBeenCalledTimes(0);
    });
  });

  describe("getOptions", () => {
    it("Should return some JSX", () => {
      const expected = [
        '<li class="ter-dropdown__options-list-item">Option 1</li>',
        '<li class="ter-dropdown__options-list-item">Option 2</li>',
        '<li class="ter-dropdown__options-list-item">Option 3</li>'
      ];

      const result = wrapper
        .instance()
        .getOptions()
        .map(option => {
          return shallow(option).html();
        });

      expect(result).toEqual(expected);
    });
  });

  describe("Option", () => {
    let optionWrapper;
    const mockOption = "Mock Option";
    let mockOnSelect;

    beforeEach(() => {
      mockOnSelect = jest.fn();

      optionWrapper = shallow(
        <Option option={mockOption} onSelect={mockOnSelect} />
      );
    });

    it("Should match the snapshot", () => {
      expect(optionWrapper).toMatchSnapshot();
    });

    it("Should call onSelect when clicked", () => {
      optionWrapper
        .find(".ter-dropdown__options-list-item")
        .simulate("click", mockOption);

      expect(mockOnSelect).toHaveBeenCalledWith(mockOption);
    });
  });
});
