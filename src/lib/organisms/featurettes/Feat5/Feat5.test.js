import React from "react";
import { shallow } from "enzyme";
import Feat5 from "./Feat5";
import {
  mockTestIconDumplings,
  mockTestImageDumplings
} from "../../../../stories/mockContent";

describe("Feat5", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Feat5
        dumplings={mockTestIconDumplings}
        type="b"
        title="Design is design"
        subtitle="It's like, this thing, you know?"
      />
    );
  });

  it("should match the snapshot with icons", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with images", () => {
    wrapper = shallow(
      <Feat5
        dumplings={mockTestImageDumplings}
        type="b"
        title="Design is design"
        subtitle="It's like, this thing, you know?"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe("getDumplings", () => {
    it("should return some jsx if icons", () => {
      const expected = [
        '<div class="ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--b"><article class="ter-dumpling ter-dumpling--small"><div class="ter-dumpling__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-check-dark-48px ter-icon--48px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-check-dark-48px"></use></svg></div><div class="ter-dumpling__small-dash"></div><a class="ter-dumpling__link ter-dumpling__link--small" href="#">Dumplin&#x27;</a><div></div></article></div>',
        '<div class="ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--b"><article class="ter-dumpling ter-dumpling--small"><div class="ter-dumpling__icon-wrapper"><svg viewBox="0 0 8 8" class="ter-icon ter-icon--enclosed-check-dark-48px ter-icon--48px undefined"><use xlink:href="[object Object]#ter-icon--enclosed-check-dark-48px"></use></svg></div><div class="ter-dumpling__small-dash"></div><a class="ter-dumpling__link ter-dumpling__link--small" href="#">Dumplin&#x27;</a><div></div></article></div>'
      ];
      const response = wrapper
        .instance()
        .getDumplings()
        .map(dumpling => {
          return shallow(dumpling).html();
        });

      expect(response).toEqual(expected);
    });

    it("should return some jsx if images", () => {
      const expected = [
        '<div class="ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--b"><article class="ter-dumpling ter-dumpling--small"><img src="./1-to-1.png" alt="test text" class="ter-dumpling__image"/><div class="ter-dumpling__small-dash"></div><a class="ter-dumpling__link ter-dumpling__link--small" href="#">Dumplin&#x27;</a><div></div></article></div>',
        '<div class="ter-feat-five__dumpling-wrapper ter-feat-five__dumpling-wrapper--b"><article class="ter-dumpling ter-dumpling--small"><img src="./1-to-1.png" alt="test text" class="ter-dumpling__image"/><div class="ter-dumpling__small-dash"></div><a class="ter-dumpling__link ter-dumpling__link--small" href="#">Dumplin&#x27;</a><div></div></article></div>'
      ];

      wrapper = shallow(
        <Feat5
          dumplings={mockTestImageDumplings}
          type="b"
          title="Design is design"
          subtitle="It's like, this thing, you know?"
        />
      );

      const response = wrapper
        .instance()
        .getDumplings()
        .map(dumpling => {
          return shallow(dumpling).html();
        });

      expect(response).toEqual(expected);
    });
  });
});
