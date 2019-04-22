import React from "react";
import { shallow, mount } from "enzyme";
import Select, { SelectOption } from "./Select";
import { JSDOM } from "jsdom";

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

      wrapper = mount(
        <Select
          handleSelection={mockHandleSelection}
          options={alphaOptions}
          selection={undefined}
          defaultText="Test default text"
          name="test name"
        />
      );
    });

    const mockEventObject = { key: "c" };

    it("should call handleKeyup", () => {
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

    it("should call querySelectorAll()", () => {
      const mockScrollIntoView = jest.fn();
      const mockNodes = [
        {
          innerText: "a",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "b",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "c",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "d",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "e",
          scrollIntoView: mockScrollIntoView
        }
      ];
      const dom = new JSDOM(wrapper.html());
      global.document = dom.window.document;
      global.window = dom.window;
      const mockQuerySelectorAll = jest.fn().mockImplementation(() => {
        return mockNodes;
      });
      global.document.querySelectorAll = mockQuerySelectorAll;

      wrapper.setState({ deployed: true });

      wrapper.instance().handleKeyup(mockEventObject);

      expect(mockQuerySelectorAll).toHaveBeenCalled();
    });

    it("should call scrollIntoView()", () => {
      const mockScrollIntoView = jest.fn();
      const mockNodes = [
        {
          innerText: "a",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "b",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "c",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "d",
          scrollIntoView: mockScrollIntoView
        },
        {
          innerText: "e",
          scrollIntoView: mockScrollIntoView
        }
      ];
      const dom = new JSDOM(wrapper.html());
      global.document = dom.window.document;
      global.window = dom.window;
      const mockQuerySelectorAll = jest.fn().mockImplementation(() => {
        return mockNodes;
      });
      global.document.querySelectorAll = mockQuerySelectorAll;

      wrapper.setState({ deployed: true });

      wrapper.instance().handleKeyup(mockEventObject);

      expect(mockScrollIntoView).toHaveBeenCalled();
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

    it("should call querySelectorAll", () => {});
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
