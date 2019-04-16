import React from "react";
import { shallow, mount } from "enzyme";
import SearchSelect from "./SearchSelect";

describe("SearchSelect", () => {
  let wrapper;
  let mockHandleSelect;

  beforeEach(() => {
    mockHandleSelect = jest.fn();
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
      <SearchSelect
        defaultText="mock default text"
        selection={undefined}
        handleSelect={mockHandleSelect}
        options={mockOptions}
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
        <SearchSelect
          defaultText="mock default text"
          selection={undefined}
          handleSelect={mockHandleSelect}
          options={mockOptions}
        />
      );

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
    it("should set state", () => {
      wrapper.state().deployed = true;

      wrapper.instance().handleSelect("mock option");

      expect(wrapper.state().deployed).toEqual(false);
    });

    it("should call this.props.handleSelect", () => {
      wrapper.state().deployed = true;

      wrapper.instance().handleSelect("mock option");

      expect(mockHandleSelect).toHaveBeenCalledWith("mock option");
    });

    it("should call handleSelect on click", () => {
      wrapper = shallow(
        <SearchSelect
          defaultText="mock default text"
          selection={undefined}
          handleSelect={mockHandleSelect}
          options={["cats"]}
        />
      );

      const spy = jest.spyOn(wrapper.instance(), "handleSelect");

      wrapper.find(".select-options__items").simulate("click");

      expect(spy).toHaveBeenCalledWith("cats");
    });
  });
});
