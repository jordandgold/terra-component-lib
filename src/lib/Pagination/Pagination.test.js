import React from "react";
import { shallow } from "enzyme";
import Pagination, { Page } from "./Pagination";

describe("Pagination", () => {
  let wrapper;
  let mockPages = 2;
  let mockActivePage = 0;

  beforeEach(() => {
    wrapper = shallow(
      <Pagination pages={mockPages} activePage={mockActivePage} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("generatePageListItems", () => {
    it("should return some JSX if pages === 2", () => {
      const expected = [
        '<li class="ter-pagination__list-item is-active">1</li>',
        '<li class="ter-pagination__list-item ">2</li>'
      ];

      const result = wrapper
        .instance()
        .generatePageListItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(result).toEqual(expected);
    });

    it("should return some JSX if pages === 3", () => {
      wrapper = shallow(<Pagination pages={3} activePage={mockActivePage} />);

      const expected = [
        '<li class="ter-pagination__list-item is-active">1</li>',
        '<li class="ter-pagination__list-item ">2</li>',
        '<li class="ter-pagination__list-item ">3</li>'
      ];

      const result = wrapper
        .instance()
        .generatePageListItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(result).toEqual(expected);
    });

    it("should return some JSX if pages > 3 && activePage === 1", () => {
      wrapper = shallow(<Pagination pages={4} activePage={mockActivePage} />);

      const expected = [
        '<li class="ter-pagination__list-item is-active">1</li>',
        '<li class="ter-pagination__list-item ">2</li>',
        '<li class="ter-pagination__list-item ">3</li>'
      ];

      const result = wrapper
        .instance()
        .generatePageListItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(result).toEqual(expected);
    });

    it("should return some JSX if pages > 3 && activePage === total pages", () => {
      wrapper = shallow(<Pagination pages={4} activePage={3} />);

      const expected = [
        '<li class="ter-pagination__list-item ">2</li>',
        '<li class="ter-pagination__list-item ">3</li>',
        '<li class="ter-pagination__list-item is-active">4</li>'
      ];

      const result = wrapper
        .instance()
        .generatePageListItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(result).toEqual(expected);
    });

    it("should return some JSX if pages > 3 && activePage === total pages - 1", () => {
      wrapper = shallow(<Pagination pages={4} activePage={2} />);

      const expected = [
        '<li class="ter-pagination__list-item ">2</li>',
        '<li class="ter-pagination__list-item is-active">3</li>',
        '<li class="ter-pagination__list-item ">4</li>'
      ];

      const result = wrapper
        .instance()
        .generatePageListItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(result).toEqual(expected);
    });

    it("should return some JSX if pages > 3 && activePage <= totalPages", () => {
      wrapper = shallow(<Pagination pages={4} activePage={1} />);

      const expected = [
        '<li class="ter-pagination__list-item ">1</li>',
        '<li class="ter-pagination__list-item is-active">2</li>',
        '<li class="ter-pagination__list-item ">3</li>'
      ];
      const result = wrapper
        .instance()
        .generatePageListItems()
        .map(item => {
          return shallow(item).html();
        });

      expect(result).toEqual(expected);
    });
  });

  describe("Page", () => {
    let pageWrapper;
    let mockProcessClick;

    beforeEach(() => {
      mockProcessClick = jest.fn();
      pageWrapper = shallow(
        <Page
          activePage={false}
          page="test string"
          processClick={mockProcessClick}
        />
      );
    });

    it("should match the snapshot", () => {
      expect(pageWrapper).toMatchSnapshot();
    });

    describe("handleClick", () => {
      it("should call handleClick on click", () => {
        const spy = jest.spyOn(pageWrapper.instance(), "handleClick");
        pageWrapper.instance().forceUpdate();

        pageWrapper.find(".ter-pagination__list-item").simulate("click");

        expect(spy).toHaveBeenCalled();
      });

      it("should call processClick if not the active page", () => {
        const expected = "test string";
        pageWrapper.instance().handleClick();

        expect(mockProcessClick).toHaveBeenCalledWith(expected);
      });

      it("should return if the active page", () => {
        pageWrapper = shallow(
          <Page
            activePage={true}
            page="test string"
            processClick={mockProcessClick}
          />
        );

        const spy = jest.spyOn(pageWrapper.instance(), "handleClick");

        pageWrapper.instance().handleClick();

        expect(spy).toHaveReturned();
      });
    });
  });
});
