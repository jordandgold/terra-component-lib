import React from "react";
import Feat9 from "./Feat9";
import { shallow } from "enzyme";
import { featNineContent } from "../../../../stories/mockContent";

describe("Feat9", () => {
  let wrapper;
  const { image, imageSide, quote } = featNineContent;

  wrapper = shallow(
    <Feat9 image={image} imageSide={imageSide} quote={quote} />
  );

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
