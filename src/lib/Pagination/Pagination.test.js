import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";

describe("Pagination", () => {
  let wrapper;
  const mockPages = [
    { pageNumber: 1, link: "www.mockLinkOne.com", isActive: false },
    { pageNumber: 2, link: "www.mockLinkTwo.com", isActive: false },
    { pageNumber: 3, link: "www.mockLinkThree.com", isActive: true },
    { pageNumber: 4, link: "www.mockLinkFour.com", isActive: false }
  ];

  beforeEach(() => {
    wrapper = shallow(<Pagination pages={mockPages} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("generatePageListItems", () => {
    it("should generate some JSX", () => {
      const expected = [
        '<li class="ter-pagination__list-item"><a class="ter-pagination__list-item " href="/www.mockLinkOne.com">1</a></li>',
        '<li class="ter-pagination__list-item"><a class="ter-pagination__list-item " href="/www.mockLinkTwo.com">2</a></li>',
        '<li class="ter-pagination__list-item"><a class="ter-pagination__list-item is-active" href="/www.mockLinkThree.com">3</a></li>',
        '<li class="ter-pagination__list-item"><a class="ter-pagination__list-item " href="/www.mockLinkFour.com">4</a></li>'
      ];

      const result = wrapper
        .instance()
        .generatePageListItems()
        .map(point => {
          return shallow(point).html();
        });

      expect(result).toEqual(expected);
    });
  });
});
