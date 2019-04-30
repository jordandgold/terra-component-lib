import React from "react";
import Feat6 from "./Feat6";
import { shallow, mount } from "enzyme";
import { featSixAContent } from "../../../../stories/mockContent";

describe("Feat6", () => {
  let wrapper;

  beforeEach(() => {
    const { imageSide, image, title, body, ctas } = featSixAContent;

    ctas.ctaOne.onClick = jest.fn();
    ctas.ctaTwo.onClick = jest.fn();

    wrapper = shallow(<Feat6 title={title} ctas={ctas} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
