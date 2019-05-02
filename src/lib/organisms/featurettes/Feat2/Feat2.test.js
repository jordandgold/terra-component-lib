import React from "react";
import { shallow } from "enzyme";
import Feat2 from "./Feat2";
import { AccordionFold } from "../../../Accordion/Accordion";

describe("Feat2", () => {
  let wrapper;

  beforeEach(() => {
    const mockImage = { url: "./1-to-1.png", altText: "Placeholder image" };
    const mockText =
      "Eu elit non Lorem deserunt sint aute aliquip esse non sint tempor deserunt voluptate reprehenderit. Duis duis aute sint tempor proident officia enim aliqua enim sit exercitation. Ex culpa dolor ex reprehenderit adipisicing. Magna dolore occaecat nisi voluptate sunt qui nulla cupidatat minim sit non nisi exercitation occaecat.";

    wrapper = shallow(
      <Feat2
        image={mockImage}
        title="Good design is a thing, apparently."
        text={mockText}
      >
        <AccordionFold title="Test one">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
            mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
            sollicitudin.
          </p>
        </AccordionFold>
        <AccordionFold title="Test two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
            mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
            sollicitudin.
          </p>
        </AccordionFold>
        <AccordionFold title="Test three">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
            mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
            sollicitudin.
          </p>
        </AccordionFold>
      </Feat2>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
