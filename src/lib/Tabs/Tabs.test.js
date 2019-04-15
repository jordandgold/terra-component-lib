import React from "react";
import { shallow } from "enzyme";
import Tabs, { TabsPanel } from "./Tabs";

describe("Tabs", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Tabs selected={1} fullWidth={false}>
        <TabsPanel name="First">
          <h3>First Tab</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
            mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
            sollicitudin.
          </p>
        </TabsPanel>
        <TabsPanel name="Second">
          <h3>Second Tab</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
            mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
            sollicitudin.
          </p>
        </TabsPanel>
        <TabsPanel name="Third">
          <h3>Third Tab</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
            mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
            sollicitudin.
          </p>
        </TabsPanel>
      </Tabs>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleTabChange", () => {
    const mockIndex = 2;

    it("Should set state", () => {
      wrapper.instance().handleTabChange(mockIndex);
      expect(wrapper.state().selected).toEqual(mockIndex);
    });
  });

  describe("Tabs Panel", () => {
    let TabsPanelWrapper;
    let mockName = "mock tab name";

    beforeEach(() => {
      TabsPanelWrapper = shallow(
        <TabsPanel name={mockName}>
          <p>Tab Panel</p>
        </TabsPanel>
      );
    });

    it("should match the snapshot", () => {
      expect(TabsPanelWrapper).toMatchSnapshot();
    });
  });
});
