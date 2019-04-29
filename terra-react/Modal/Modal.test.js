import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";
describe("Modal", function () {
  var wrapper;
  var mockOnClickOne;
  var mockOnClickTwo;
  var mockCloseModal;
  var buttonOne;
  var buttonTwo;
  beforeEach(function () {
    mockOnClickOne = jest.fn();
    mockOnClickTwo = jest.fn();
    mockCloseModal = jest.fn();
    buttonOne = {
      onClick: mockOnClickOne,
      text: "button one mock text",
      className: "mock class",
      name: "hello"
    };
    buttonTwo = {
      onClick: mockOnClickTwo,
      text: "button one mock text",
      className: "mock class"
    };
    wrapper = shallow(React.createElement(Modal, {
      name: "hello",
      className: "test",
      title: "test title",
      body: "test body",
      buttonOne: buttonOne,
      buttonTwo: buttonTwo,
      closeModal: mockCloseModal
    }));
  });
  it("should match the snap shot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should match the snap shot with one button", function () {
    wrapper = shallow(React.createElement(Modal, {
      className: "test",
      title: "test title",
      body: "test body",
      buttonOne: buttonOne,
      closeModal: mockCloseModal
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("should match the snap shot with no buttons", function () {
    wrapper = shallow(React.createElement(Modal, {
      className: "test",
      title: "test title",
      body: "test body",
      closeModal: mockCloseModal
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("should call close modal on click", function () {
    wrapper.find(".ter-modal__close").simulate("click");
    expect(mockCloseModal).toHaveBeenCalledWith("hello");
  });
});