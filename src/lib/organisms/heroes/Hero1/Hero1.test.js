import React from "react";
import Hero1 from "./Hero1";
import { shallow, mount } from "enzyme";
import { JSDOM } from "jsdom";

describe("Hero1", () => {
  let wrapper;

  beforeEach(() => {
    const mockCTALinks = {
      ctaOne: {
        className: "ter-button--primary--1",
        text: "Button",
        link: "#"
      },
      ctaTwo: {
        className: "ter-button--secondary--1",
        text: "Button",
        link: "#"
      },
      subCTA: {
        text: "Button",
        link: "#"
      }
    };

    const mockImage = {
      desktop: { url: "./1600x1200.png", altText: "placeholder image" },
      tablet: { url: "./800x600.png", altText: "placeholder image" },
      mobile: { url: "1-to-1.png", altText: "placeholder image" }
    };

    const mockQuerySelector = jest.fn(() => {
      return {
        offsetHeight: 600
      };
    });

    const mockDocument = {
      querySelector: mockQuerySelector
    };

    global.window.innerWidth = 400;

    global.document.querySelector = mockQuerySelector;

    wrapper = mount(
      <Hero1
        images={mockImage}
        title="Design is design."
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
      />
    );

    const dom = new JSDOM(wrapper.html());
    global.document = dom.window.document;
    global.window = dom.window;
    dom.window.document.querySelector = mockQuerySelector;
  });

  it("should match the snapshot left", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot right", () => {
    const mockCTALinks = {
      ctaOne: {
        className: "ter-button--primary--1",
        text: "Button",
        link: "#"
      },
      ctaTwo: {
        className: "ter-button--secondary--1",
        text: "Button",
        link: "#"
      },
      subCTA: {
        text: "Button",
        link: "#"
      }
    };

    const mockImage = {
      desktop: { url: "./1600x1200.png", altText: "placeholder image" },
      tablet: { url: "./800x600.png", altText: "placeholder image" },
      mobile: { url: "1-to-1.png", altText: "placeholder image" }
    };

    const mockQuerySelector = jest.fn(() => {
      return {
        offsetHeight: 600
      };
    });

    const mockDocument = {
      querySelector: mockQuerySelector
    };

    global.window.innerWidth = 400;

    global.document.querySelector = mockQuerySelector;

    wrapper = mount(
      <Hero1
        images={mockImage}
        title="Design is design."
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
        contentSide="right"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe("componentWillUnmount", () => {
    it("should call removeEventListener", () => {
      const mockRemoveEventListener = jest.fn();
      global.window.removeEventListener = mockRemoveEventListener;

      wrapper.instance().componentWillUnmount();

      expect(mockRemoveEventListener).toHaveBeenCalled();
    });

    it("should call checkSize", () => {
      const spy = jest.spyOn;
    });
  });

  describe("checkSize", () => {
    it("should set state to desktop", () => {
      global.window.innerWidth = 3000;

      wrapper.setState({ size: "not desktop" });

      wrapper.instance().checkSize();
      const expected = { size: "desktop", contentHeight: 600 };

      expect(wrapper.state()).toEqual(expected);
    });

    it("should set state to tablet", () => {
      global.window.innerWidth = 901;

      wrapper.setState({ size: "not desktop" });

      wrapper.instance().checkSize();
      const expected = { size: "tablet", contentHeight: 600 };

      expect(wrapper.state()).toEqual(expected);
    });

    it("should set state to tablet", () => {
      global.window.innerWidth = 301;

      wrapper.setState({ size: "not desktop" });

      wrapper.instance().checkSize();
      const expected = { size: "mobile", contentHeight: 600 };

      expect(wrapper.state()).toEqual(expected);
    });
  });
});
