import React from "react";
import Hero2 from "./Hero2";
import { shallow, mount } from "enzyme";
import Button from "../../../Button/Button";
import { heroTwoContent } from "../../../../stories/mockContent";

describe("Hero2", () => {
  let wrapper;

  beforeEach(() => {
    const {
      imageSide,
      image,
      title,
      body,
      ctaOne,
      ctaTwo,
      subCTA
    } = heroTwoContent;

    wrapper = shallow(
      <Hero2 imageSide={imageSide} image={image} title={title} body={body}>
        <Button
          className={ctaOne.className}
          name={ctaOne.name}
          text={ctaOne.text}
          onClick={jest.fn()}
        />
        <Button
          className={ctaTwo.className}
          name={ctaTwo.name}
          text={ctaTwo.text}
          onClick={jest.fn()}
        />
        <a>{subCTA.text}</a>
      </Hero2>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("Hero2 Integration", () => {
    let mockCTAOne;
    let mockCTATwo;

    beforeEach(() => {
      const {
        imageSide,
        image,
        title,
        body,
        ctaOne,
        ctaTwo,
        subCTA
      } = heroTwoContent;

      mockCTAOne = jest.fn();
      mockCTATwo = jest.fn();

      wrapper = mount(
        <Hero2 imageSide={imageSide} image={image} title={title} body={body}>
          <Button
            className={ctaOne.className}
            name={ctaOne.name}
            text={ctaOne.text}
            onClick={mockCTAOne}
          />
          <Button
            className={ctaTwo.className}
            name={ctaTwo.name}
            text={ctaTwo.text}
            onClick={mockCTATwo}
          />
          <a>{subCTA.text}</a>
        </Hero2>
      );
    });
    it("should call onClick on CTA One", () => {
      wrapper
        .find(".ter-button--primary--1")
        .first()
        .simulate("click");

      expect(mockCTAOne).toHaveBeenCalled();
    });
    it("should call onClick on CTA Two", () => {
      wrapper
        .find(".ter-button--primary--1")
        .last()
        .simulate("click");

      expect(mockCTATwo).toHaveBeenCalled();
    });
  });
});
