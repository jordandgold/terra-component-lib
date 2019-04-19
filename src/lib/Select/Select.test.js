import React from "react";
import { shallow, mount } from "enzyme";
import Select, { SelectOption } from "./Select";
import ReactDOM from "react-dom";

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

      wrapper.find(".ter-select__selected").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("handleKeyup", () => {
    beforeEach(() => {
      mockHandleSelection = jest.fn();
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
        <Select
          handleSelection={mockHandleSelection}
          options={alphaOptions}
          selection={undefined}
          defaultText="Test default text"
          name="test name"
        />
      );

      wrapper.instance().selectOptionRefs = mockOptionRefs;
    });

    const mockEventObject = { key: "c" };

    it("should call testKeyup", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleKeyup");
      wrapper.instance().forceUpdate();

      wrapper.find(".ter-select").simulate("keyup", mockEventObject);

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

      wrapper.state().deployed = true;

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

      wrapper.state().deployed = true;

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

      wrapper.state().deployed = true;

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
      wrapper.instance().selectOptionRefs = [];
      const expected = ["test"];

      wrapper.instance().createOptionRef();

      expect(wrapper.instance().selectOptionRefs).toEqual(expected);
    });

    it("should return an optionRef", () => {
      const mockCreateRef = jest.fn().mockImplementation(() => {
        return "test";
      });
      React.createRef = mockCreateRef;
      wrapper.instance().selectOptionRefs = [];
      const expected = "test";

      const response = wrapper.instance().createOptionRef();

      expect(response).toEqual(expected);
    });
  });

  describe("handleSelection", () => {
    it("should call toggleDeploy", () => {
      const spy = jest.spyOn(wrapper.instance(), "toggleDeploy");
      wrapper.instance().forceUpdate();

      wrapper.instance().handleSelection("cake");

      expect(spy).toHaveBeenCalled();
    });

    it("should call handleSelection from props", () => {
      wrapper.instance().handleSelection("yum");

      expect(mockHandleSelection).toHaveBeenCalledWith("yum", "test name");
    });
  });

  describe("generateOptions", () => {
    it("should return some JSX", () => {
      const expected = [
        '<li class="ter-select__options-list-item">cats</li>',
        '<li class="ter-select__options-list-item">dogs</li>',
        '<li class="ter-select__options-list-item">birds</li>'
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

  describe("SelectOption", () => {
    let selectOptionWrapper;
    let mockOnClick;

    beforeEach(() => {
      mockOnClick = jest.fn();
      selectOptionWrapper = shallow(
        <SelectOption option="kitty" onClick={mockOnClick} />
      );
    });

    it("should match the snapshot", () => {
      expect(selectOptionWrapper).toMatchSnapshot();
    });

    it("should call onClick when clicked", () => {
      selectOptionWrapper.find("li").simulate("click");

      expect(mockOnClick).toHaveBeenCalledWith("kitty");
    });
  });
});
