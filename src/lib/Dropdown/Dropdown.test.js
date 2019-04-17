import React from "react";
import { shallow, mount } from "enzyme";
import Dropdown, { Option } from "./Dropdown";
import ReactDOM from "react-dom";

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
        name={"test"}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleKeyup", () => {
    beforeEach(() => {
      mockSelectOption = jest.fn();
      const alphaOptions = ["apple", "banana", "cat", "dog", "elephant"];
      const mockOptionRefs = [
        {
          current: {
            props: {
              option: "apple"
            }
          }
        },
        {
          current: {
            props: {
              option: "banana"
            }
          }
        },
        {
          current: {
            props: {
              option: "cat"
            }
          }
        },
        {
          current: {
            props: {
              option: "dog"
            }
          }
        },
        {
          current: {
            props: {
              option: "elephant"
            }
          }
        }
      ];

      wrapper = mount(
        <Dropdown
          defaultLabel={mockDefaultLabel}
          selectOption={mockSelectOption}
          options={alphaOptions}
          selected={undefined}
          name={"test"}
        />
      );

      wrapper.instance().optionRefs = mockOptionRefs;
    });

    const mockEventObject = { key: "c" };

    it("should call testKeyup", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleKeyup");
      wrapper.instance().forceUpdate();

      wrapper.find("div").simulate("keyup", mockEventObject);

      expect(spy).toHaveBeenCalled();
    });

    it("should return if dropdown is not open", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleKeyup");
      wrapper.instance().forceUpdate();

      wrapper.instance().handleKeyup(mockEventObject);

      expect(spy).toReturn();
    });

    it("should return if no matching nodes", () => {
      const noMatchEventObject = {
        key: "l"
      };
      const spy = jest.spyOn(wrapper.instance(), "handleKeyup");
      wrapper.instance().forceUpdate();

      wrapper.state().isOpen = true;

      wrapper.instance().handleKeyup(noMatchEventObject);

      expect(spy).toReturn();
    });

    it("should call findDOMNode with the correct params", () => {
      const mockScrollTo = jest.fn();
      global.scrollTo = mockScrollTo;

      const mockOffsetTop = jest.fn();
      ReactDOM.findDOMNode = jest.fn().mockImplementation(() => {
        return {
          offsetTop: mockOffsetTop
        };
      });

      wrapper.state().isOpen = true;

      wrapper.instance().handleKeyup(mockEventObject);

      expect(ReactDOM.findDOMNode).toHaveBeenCalled();
    });

    it("should call window.scrollTo", () => {
      const mockScrollTo = jest.fn();
      global.scrollTo = mockScrollTo;

      const mockOffsetTop = jest.fn();
      ReactDOM.findDOMNode = jest.fn().mockImplementation(() => {
        return {
          offsetTop: mockOffsetTop
        };
      });

      wrapper.state().isOpen = true;

      wrapper.instance().handleKeyup(mockEventObject);

      expect(mockScrollTo).toHaveBeenCalled();
    });
  });

  describe("createOptionRef", () => {
    it("should call createRef", () => {
      const mockCreateRef = jest.fn();

      React.createRef = mockCreateRef;

      wrapper.instance().createOptionRef();

      expect(mockCreateRef).toHaveBeenCalled();
    });

    it("should should push a new ref", () => {
      const mockCreateRef = jest.fn().mockImplementation(() => {
        return "test";
      });
      React.createRef = mockCreateRef;
      wrapper.instance().optionRefs = [];
      const expected = ["test"];

      wrapper.instance().createOptionRef();

      expect(wrapper.instance().optionRefs).toEqual(expected);
    });

    it("should return an optionRef", () => {
      const mockCreateRef = jest.fn().mockImplementation(() => {
        return "test";
      });
      React.createRef = mockCreateRef;
      wrapper.instance().optionRefs = [];
      const expected = "test";

      const response = wrapper.instance().createOptionRef();

      expect(response).toEqual(expected);
    });
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
      expect(mockSelectOption).toHaveBeenCalledWith("test", mockOption);
    });

    it("Should not call selectOption if conditions aren't met", () => {
      wrapper = shallow(
        <Dropdown
          defaultLabel={mockDefaultLabel}
          selectOption={mockSelectOption}
          options={mockOptions}
          selected={"hello"}
          name={"test"}
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
