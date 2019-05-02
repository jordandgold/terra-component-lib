import React from "react";
import Dumpling from "./Dumpling";
import { shallow } from "enzyme";
import { isIterable } from "core-js";

describe("Dumpling", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dumpling
        icon={{ type: "enclosed-check-dark-32px", size: "32px" }}
        size="small"
        title="Dumplin'"
        link={{ url: "#" }}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot if it has an image", () => {
    wrapper = shallow(
      <Dumpling
        image={{ url: "www.test.com", altText: "I am alt text" }}
        size="small"
        title="Dumplin'"
        link={{ url: "#" }}
      />
    );
  });
});
