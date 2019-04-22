import React from "react";
import { shallow, mount } from "enzyme";
import SearchSelect from "./SearchSelect";
import { JSDOM } from "jsdom";

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

  it("should call removeEventListener on unmount", () => {
    const dom = new JSDOM(wrapper.html());
    global.document = dom.window.document;
    global.window = dom.window;

    const mockRemoveEventListener = jest.fn();

    global.document.removeEventListener = mockRemoveEventListener;

    wrapper.instance().componentWillUnmount();

    expect(mockRemoveEventListener).toHaveBeenCalled();
  });

  describe("toggleClose", () => {
    it("should return if node contains target", () => {
      const mockEvent = {
        target: "hello"
      };

      const spy = jest.spyOn(wrapper.instance(), "toggleClose");
      wrapper.instance().forceUpdate();

      const mockContains = jest.fn().mockImplementation(() => true);

      wrapper.instance().node = { contains: mockContains };

      wrapper.state().deployed = true;

      wrapper.instance().toggleClose(mockEvent);

      expect(spy).toHaveReturned();
    });

    it("should return if closed", () => {
      const mockEvent = {
        target: "no"
      };

      const spy = jest.spyOn(wrapper.instance(), "toggleClose");
      wrapper.instance().forceUpdate();

      const mockContains = jest.fn().mockImplementation(() => false);

      wrapper.instance().node = { contains: mockContains };

      wrapper.state().deployed = false;

      wrapper.instance().toggleClose(mockEvent);

      expect(spy).toHaveReturned();
    });

    it("should call toggleDeploy", () => {
      const mockEvent = {
        target: "no"
      };

      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();

      const mockContains = jest.fn().mockImplementation(() => false);
      wrapper.instance().node = { contains: mockContains };

      wrapper.state().deployed = true;

      wrapper.instance().toggleClose(mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("toggleDeploy", () => {
    it("should set state", () => {
      wrapper.instance().toggleDeploy();

      expect(wrapper.state().deployed).toEqual(true);
    });

    it("should call toggleDeploy on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();

      wrapper.find(".ter-search-select__selected").simulate("click");

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
        '<li class="ter-search-select__options-list-item">cat</li>',
        '<li class="ter-search-select__options-list-item">dog</li>',
        '<li class="ter-search-select__options-list-item">fish</li>'
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

      wrapper.find(".ter-search-select__options-list-item").simulate("click");

      expect(spy).toHaveBeenCalledWith("cats");
    });
  });
});
