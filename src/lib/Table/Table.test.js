import React from "react";
import { shallow } from "enzyme";
import Table from "./Table";

describe("Table", () => {
  let wrapper;
  let mockData = {
    head: ["Table Head 1", "Table Head 2", "Table Head 3"],
    body: [
      [["Row 1 Cell 1"], ["Row 1 Cell 2"], ["Row 1 Cell 3"]],
      [["Row 2 Cell 1"], ["Row 2 Cell 2"], ["Row 2 Cell 3"]],
      [["Row 3 Cell 1"], ["Row 3 Cell 2"], ["Row 3 Cell 3"]]
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<Table data={mockData} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("generateHeadCells", () => {
    it("should return some JSX", () => {
      const expected = [
        "<th>Table Head 1</th>",
        "<th>Table Head 2</th>",
        "<th>Table Head 3</th>"
      ];
      const result = wrapper
        .instance()
        .generateHeadCells()
        .map(cell => {
          return shallow(cell).html();
        });

      expect(result).toEqual(expected);
    });
  });

  describe("generateBody", () => {
    it("should call generateRow", () => {
      const spy = jest.spyOn(wrapper.instance(), "generateRow");
      wrapper.instance().forceUpdate();

      expect(spy).toHaveBeenCalledTimes(3);
    });

    it("should return some JSX", () => {
      const expected = [
        "<tr><td>Row 1 Cell 1</td><td>Row 1 Cell 2</td><td>Row 1 Cell 3</td></tr>",
        "<tr><td>Row 2 Cell 1</td><td>Row 2 Cell 2</td><td>Row 2 Cell 3</td></tr>",
        "<tr><td>Row 3 Cell 1</td><td>Row 3 Cell 2</td><td>Row 3 Cell 3</td></tr>"
      ];
      const result = wrapper
        .instance()
        .generateBody()
        .map(cell => {
          return shallow(cell).html();
        });

      expect(result).toEqual(expected);
    });
  });

  describe("generateRow", () => {
    it("shold return some JSX", () => {
      const expected = ["<td>one</td>", "<td>two</td>", "<td>three</td>"];
      const result = wrapper
        .instance()
        .generateRow(["one", "two", "three"])
        .map(cell => {
          return shallow(cell).html();
        });
      expect(result).toEqual(expected);
    });
  });
});
