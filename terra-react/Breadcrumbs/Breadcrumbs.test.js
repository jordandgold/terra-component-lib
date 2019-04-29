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
      var expected = ['<li class="ter-breadcrumbs__list-item"><a href="https://www.google.com">Google</a><svg viewBox="0 0 8 8" class="ter-icon ter-icon--open-caret-right-dark-8px ter-icon--8px ter-breadcrumbs__caret"><use xlink:href="[object Object]#ter-icon--open-caret-right-dark-8px"></use></svg></li>', '<li class="ter-breadcrumbs__list-item">Gmail</li>'];
      var result = wrapper.instance().generateBreadcrumbs().map(function (point) {
        return shallow(point).html();
      });
      expect(result).toEqual(expected);
    });
  });
});