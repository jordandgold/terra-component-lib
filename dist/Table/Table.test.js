import React from "react";
import { shallow } from "enzyme";
import Table from "./Table";
describe("Table", function () {
  var wrapper;
  var mockData = {
    head: ["Table Head 1", "Table Head 2", "Table Head 3"],
    body: [[["Row 1 Cell 1"], ["Row 1 Cell 2"], ["Row 1 Cell 3"]], [["Row 2 Cell 1"], ["Row 2 Cell 2"], ["Row 2 Cell 3"]], [["Row 3 Cell 1"], ["Row 3 Cell 2"], ["Row 3 Cell 3"]]]
  };
  beforeEach(function () {
    wrapper = shallow(React.createElement(Table, {
      data: mockData,
      loose: true
    }));
  });
  it("should match the snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should match the snapshot with a false boolean", function () {
    wrapper = shallow(React.createElement(Table, {
      data: mockData,
      loose: false
    }));
    expect(wrapper).toMatchSnapshot();
  });
  describe("generateHeadCells", function () {
    it("should return some JSX", function () {
      var expected = ["<th>Table Head 1</th>", "<th>Table Head 2</th>", "<th>Table Head 3</th>"];
      var result = wrapper.instance().generateHeadCells().map(function (cell) {
        return shallow(cell).html();
      });
      expect(result).toEqual(expected);
    });
  });
  describe("generateBody", function () {
    it("should call generateRow", function () {
      var spy = jest.spyOn(wrapper.instance(), "generateRow");
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(3);
    });
    it("should return some JSX", function () {
      var expected = ["<tr><td>Row 1 Cell 1</td><td>Row 1 Cell 2</td><td>Row 1 Cell 3</td></tr>", "<tr><td>Row 2 Cell 1</td><td>Row 2 Cell 2</td><td>Row 2 Cell 3</td></tr>", "<tr><td>Row 3 Cell 1</td><td>Row 3 Cell 2</td><td>Row 3 Cell 3</td></tr>"];
      var result = wrapper.instance().generateBody().map(function (cell) {
        return shallow(cell).html();
      });
      expect(result).toEqual(expected);
    });
  });
  describe("generateRow", function () {
    it("shold return some JSX", function () {
      var expected = ["<td>one</td>", "<td>two</td>", "<td>three</td>"];
      var result = wrapper.instance().generateRow(["one", "two", "three"]).map(function (cell) {
        return shallow(cell).html();
      });
      expect(result).toEqual(expected);
    });
  });
});