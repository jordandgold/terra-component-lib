import React from "react";
import Feat6A from "./Feat6A";
import { shallow, mount } from "enzyme";
import Button from "../../../Button/Button";
import {
  heroTwoContent,
  featSixAContent
} from "../../../../stories/mockContent";

describe("Feat6A", () => {
  let wrapper;

  beforeEach(() => {
    const { imageSide, image, title, body, ctas } = featSixAContent;

    ctas.ctaOne.onClick = jest.fn();
    ctas.ctaTwo.onClick = jest.fn();

    wrapper = shallow(<Feat6A title={title} ctas={ctas} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
