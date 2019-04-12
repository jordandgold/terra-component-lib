import React from "react";
import { shallow } from "enzyme";
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

      wrapper.find(".ter-search-select-label").simulate("click");

      expect(spy).toHaveBeenCalled();
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
        '<li class="select-options__items">cat</li>',
        '<li class="select-options__items">dog</li>',
        '<li class="select-options__items">fish</li>'
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

      wrapper.find(".select-options__items").simulate("click");

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
        '<span class="badge option">dogs</span>',
        '<span class="badge option">cats</span>'
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

      wrapper.find(".badge.option").simulate("click", mockEvent, "dogs");

      expect(spy).toHaveBeenCalledWith(mockEvent, mockSelection);
    });
  });
});
