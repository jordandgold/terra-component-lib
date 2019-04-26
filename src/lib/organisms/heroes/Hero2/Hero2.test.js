import React from "react";
import Hero2 from "./Hero2";
import { shallow, mount } from "enzyme";
import Button from "../../../Button/Button";
import { heroTwoContent } from "../../../../stories/mockContent";

describe("Hero2", () => {
  let wrapper;

  beforeEach(() => {
    const { imageSide, image, title, body, ctas } = heroTwoContent;

    ctas.ctaOne.onClick = jest.fn();
    ctas.ctaTwo.onClick = jest.fn();

    wrapper = shallow(
      <Hero2
        imageSide={imageSide}
        image={image}
        title={title}
        body={body}
        ctas={ctas}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
