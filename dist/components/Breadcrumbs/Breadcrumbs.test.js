import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Breadcrumbs from "./Breadcrumbs";
describe("Breadcrumbs", function () {
  var wrapper;
  var mockProps = [{
    link: "https://www.google.com",
    text: "Google"
  }, {
    link: "https://mail.google.com",
    text: "Gmail"
  }];
  beforeEach(function () {
    wrapper = shallow(React.createElement(Breadcrumbs, {
      breadcrumbs: mockProps
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  describe("generateBreadcrumbs", function () {
    it("should return some jsx", function () {
      var expected = ['<a class="breadcrumb" href="https://www.google.com">Google</a>', '<a class="breadcrumb" href="https://mail.google.com">Gmail</a>'];
      var result = wrapper.instance().generateBreadcrumbs().map(function (point) {
        return shallow(point).html();
      });
      expect(result).toEqual(expected);
    });
  });
});