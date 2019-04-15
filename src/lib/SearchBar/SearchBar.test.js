import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  let wrapper;
  let mockHandleSubmit;
  const mockSearchItems = ["cat", "cow", "dog", "bird"];

  beforeEach(() => {
    mockHandleSubmit = jest.fn();
    wrapper = shallow(
      <SearchBar
        handleSubmit={mockHandleSubmit}
        searchItems={mockSearchItems}
        placeholder="test placeholder"
        predictiveSearch={true}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot without placeholder props", () => {
    mockHandleSubmit = jest.fn();

    wrapper = shallow(
      <SearchBar
        handleSubmit={mockHandleSubmit}
        searchItems={mockSearchItems}
        predictiveSearch={true}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with predictiveSearch", () => {
    mockHandleSubmit = jest.fn();

    wrapper = shallow(
      <SearchBar
        handleSubmit={mockHandleSubmit}
        searchItems={mockSearchItems}
        predictiveSearch={true}
      />
    );

    wrapper.instance().setState({
      input: "d"
    });

    const response = wrapper.instance().renderPredictiveSearchItems();

    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should set state", () => {
      const mockEvent = {
        target: {
          value: "Hello"
        }
      };
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().input).toEqual("Hello");
    });

    it("should call handleChange on text input", () => {
      const mockEvent = {
        target: {
          value: "test"
        }
      };
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      wrapper.instance().forceUpdate();

      wrapper.find("input").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe("renderPredictiveSearchItems", () => {
    it("should call filterSearch", () => {
      const spy = jest.spyOn(wrapper.instance(), "filterSearch");
      wrapper.instance().forceUpdate();

      wrapper.instance().renderPredictiveSearchItems();

      expect(spy).toHaveBeenCalled();
    });

    it("should return some JSX", () => {
      wrapper.instance().filterSearch = jest.fn().mockImplementation(() => {
        return ["cat", "dog"];
      });

      const expected = ["<li>cat</li>", "<li>dog</li>"];

      const result = wrapper
        .instance()
        .renderPredictiveSearchItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(result).toEqual(expected);
    });
  });

  describe("filterSearch", () => {
    it("should return a filtered array", () => {
      wrapper.state().input = "d";
      const expected = ["dog", "bird"];

      const result = wrapper.instance().filterSearch();

      expect(result).toEqual(expected);
    });
  });

  describe("handleSubmit", () => {
    it("should call preventDefault", () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should return if input is empty", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toReturn();
    });

    it("should cll handleSubmit if conditions are met", () => {
      const mockPreventDefault = jest.fn();
      wrapper.state().input = "test input";

      const mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.instance().handleSubmit(mockEvent);

      expect(mockHandleSubmit).toHaveBeenCalledWith("test input");
    });

    it("should call handleSubmit on submit", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.find("form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });
});
