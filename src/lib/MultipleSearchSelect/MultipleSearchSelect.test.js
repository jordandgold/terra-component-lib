import React from "react";
import { shallow, mount } from "enzyme";
import MultipleSearchSelect from "./MultipleSearchSelect";

describe("MultipleSearchSelect", () => {
  let wrapper;
  let mockHandleSelect;
  let mockRemoveSelection;

  beforeEach(() => {
    mockHandleSelect = jest.fn();
    mockRemoveSelection = jest.fn();
    const mockOptions = [
      "cats",
      "dogs",
      "turtles",
      "fish",
      "ferrets",
      "hamsters",
      "birds"
    ];

    wrapper = shallow(
      <MultipleSearchSelect
        defaultText="mock default text"
        selections={[]}
        handleSelect={mockHandleSelect}
        options={mockOptions}
        removeSelection={mockRemoveSelection}
        name="test name"
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("toggleDeploy", () => {
    it("should set state", () => {
      wrapper.instance().toggleDeploy();

      expect(wrapper.state().deployed).toEqual(true);
    });

    it("should call toggleDeploy on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();

      wrapper.find(".ter-multi-search-select__selected").simulate("click");

      expect(spy).toHaveBeenCalled();
    });

    it("should focus the input when opening", () => {
      const mockOptions = [
        "cats",
        "dogs",
        "turtles",
        "fish",
        "ferrets",
        "hamsters",
        "birds"
      ];

      wrapper = mount(
        <MultipleSearchSelect
          defaultText="mock default text"
          selections={[]}
          handleSelect={mockHandleSelect}
          options={mockOptions}
          removeSelection={mockRemoveSelection}
          name="test name"
        />
      );

      wrapper.instance().toggleSelect();

      expect(
        document.activeElement[Object.keys(document.activeElement)[0]].type
      ).toEqual("input");
    });
  });

  describe("handleSearchChange", () => {
    it("should set state", () => {
      const mockEvent = {
        target: {
          value: "mock value"
        }
      };

      wrapper.instance().handleSearchChange(mockEvent);

      expect(wrapper.state().searchField).toEqual("mock value");
    });

    it("should call handleSearchChange on change", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleSearchChange");
      wrapper.instance().forceUpdate();
      const mockEvent = { target: { value: "testing" } };

      wrapper.find("input").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe("filterOptions", () => {
    it("should call getFilteredOptions", () => {
      const spy = jest.spyOn(wrapper.instance(), "getFilteredOptions");
      wrapper.instance().forceUpdate();

      wrapper.instance().filterOptions();

      expect(spy).toHaveBeenCalled();
    });

    it("should call renderOptions", () => {
      const spy = jest.spyOn(wrapper.instance(), "renderOptions");
      wrapper.instance().forceUpdate();

      wrapper.instance().filterOptions();

      expect(spy).toHaveBeenCalled();
    });

    it("should return", () => {
      const spy = jest.spyOn(wrapper.instance(), "filterOptions");
      wrapper.instance().forceUpdate();

      wrapper.instance().filterOptions();

      expect(spy).toReturn();
    });
  });

  describe("getFilteredOptions", () => {
    it("should return a filtered array", () => {
      const expected = ["fish", "ferrets"];
      wrapper.state().searchField = "f";

      const result = wrapper.instance().getFilteredOptions();

      expect(result).toEqual(expected);
    });
  });

  describe("renderOptions", () => {
    it("should return some JSX", () => {
      const mockOptions = ["cat", "dog", "fish"];
      const expected = [
        '<li class="ter-multi-search-select__options-list-item">cat</li>',
        '<li class="ter-multi-search-select__options-list-item">dog</li>',
        '<li class="ter-multi-search-select__options-list-item">fish</li>'
      ];

      const result = wrapper
        .instance()
        .renderOptions(mockOptions)
        .map(option => {
          return shallow(option).html();
        });

      expect(result).toEqual(expected);
    });
  });

  describe("toggleSelect", () => {
    it("should setState", () => {
      wrapper.instance().toggleSelect();

      expect(wrapper.state().deployed).toEqual(true);
    });
  });

  describe("handleSelect", () => {
    it("should call this.props.handleSelect", () => {
      wrapper.state().deployed = true;

      wrapper.instance().handleSelect("mock option");

      expect(mockHandleSelect).toHaveBeenCalledWith("mock option", "test name");
    });

    it("should call handleSelect on click", () => {
      wrapper = shallow(
        <MultipleSearchSelect
          defaultText="mock default text"
          selections={["dogs"]}
          handleSelect={mockHandleSelect}
          options={["cats"]}
          removeSelection={mockRemoveSelection}
          name="test name"
        />
      );

      const spy = jest.spyOn(wrapper.instance(), "handleSelect");

      wrapper
        .find(".ter-multi-search-select__options-list-item")
        .simulate("click");

      expect(spy).toHaveBeenCalledWith("cats");
    });
  });

  describe("renderSelections", () => {
    it("should return some JSX", () => {
      wrapper = shallow(
        <MultipleSearchSelect
          defaultText="mock default text"
          selections={["dogs", "cats"]}
          handleSelect={mockHandleSelect}
          options={["cats"]}
          removeSelection={mockRemoveSelection}
          name="test name"
        />
      );

      const expected = [
        '<span class="ter-multi-search-select__option ter-badge">dogs<svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-x-dark-16px ter-icon--8px ter-multi-search-select__option-close"><use xlink:href="[object Object]#ter-icon--open-x-dark-16px"></use></svg></span>',
        '<span class="ter-multi-search-select__option ter-badge">cats<svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-x-dark-16px ter-icon--8px ter-multi-search-select__option-close"><use xlink:href="[object Object]#ter-icon--open-x-dark-16px"></use></svg></span>'
      ];

      const response = wrapper
        .instance()
        .renderSelections()
        .map(selection => {
          return shallow(selection).html();
        });

      expect(response).toEqual(expected);
    });
  });

  describe("removeSelection", () => {
    beforeEach(() => {
      wrapper = shallow(
        <MultipleSearchSelect
          defaultText="mock default text"
          selections={["dogs", "cats"]}
          handleSelect={mockHandleSelect}
          options={["cats"]}
          removeSelection={mockRemoveSelection}
          name="test name"
        />
      );
    });

    it("should call stopPropogation if deployed", () => {
      const mockStopPropagation = jest.fn();
      const mockEvent = {
        stopPropagation: mockStopPropagation
      };
      const mockSelection = "dogs";
      wrapper.state().deployed = true;

      wrapper.instance().removeSelection(mockEvent, mockSelection);

      expect(mockStopPropagation).toHaveBeenCalled();
    });

    it("should call removeSelection with the correct params", () => {
      const mockStopPropagation = jest.fn();
      const mockEvent = {
        stopPropagation: mockStopPropagation
      };
      const mockSelection = "dogs";

      wrapper.instance().removeSelection(mockEvent, mockSelection);

      expect(mockRemoveSelection).toHaveBeenCalledWith("dogs", "test name");
    });

    it("should call removeSelection on Click", () => {
      wrapper = shallow(
        <MultipleSearchSelect
          defaultText="mock default text"
          selections={["dogs"]}
          handleSelect={mockHandleSelect}
          options={["cats"]}
          removeSelection={mockRemoveSelection}
          name="test name"
        />
      );
      const mockStopPropagation = jest.fn();

      const mockEvent = {
        stopPropagation: mockStopPropagation
      };
      const mockSelection = "dogs";
      const spy = jest.spyOn(wrapper.instance(), "removeSelection");
      wrapper.instance().forceUpdate();

      wrapper
        .find(".ter-multi-search-select__option.ter-badge")
        .simulate("click", mockEvent, "dogs");

      expect(spy).toHaveBeenCalledWith(mockEvent, mockSelection);
    });
  });
});
