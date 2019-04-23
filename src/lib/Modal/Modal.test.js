import React from "react";
import { shallow } from "enzyme";

import Modal from "./Modal";

describe("Modal", () => {
  let wrapper;
  let mockOnClickOne;
  let mockOnClickTwo;
  let mockCloseModal;
  let buttonOne;
  let buttonTwo;

  beforeEach(() => {
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

    wrapper = shallow(
      <Modal
        name="hello"
        className="test"
        title="test title"
        body="test body"
        buttonOne={buttonOne}
        buttonTwo={buttonTwo}
        closeModal={mockCloseModal}
      />
    );
  });

  it("should match the snap shot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snap shot with one button", () => {
    wrapper = shallow(
      <Modal
        className="test"
        title="test title"
        body="test body"
        buttonOne={buttonOne}
        closeModal={mockCloseModal}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snap shot with no buttons", () => {
    wrapper = shallow(
      <Modal
        className="test"
        title="test title"
        body="test body"
        closeModal={mockCloseModal}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should call close modal on click", () => {
    wrapper.find(".ter-modal__close").simulate("click");

    expect(mockCloseModal).toHaveBeenCalledWith("hello");
  });
});
