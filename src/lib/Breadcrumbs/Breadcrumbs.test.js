import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  let wrapper;

  const mockProps = [
    { link: "https://www.google.com", text: "Google" },
    { link: "https://mail.google.com", text: "Gmail" }
  ];

  beforeEach(() => {
    wrapper = shallow(<Breadcrumbs breadcrumbs={mockProps} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("generateBreadcrumbs", () => {
    it("should return some jsx", () => {
      const expected = [
        '<a class="breadcrumb" href="https://www.google.com">Google</a>',
        '<a class="breadcrumb" href="https://mail.google.com">Gmail</a>'
      ];
      const result = wrapper
        .instance()
        .generateBreadcrumbs()
        .map(point => {
          return shallow(point).html();
        });

      expect(result).toEqual(expected);
    });
  });
});
