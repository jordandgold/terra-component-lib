import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Button from "../lib/Button/Button";
import ButtonLink from "../lib/ButtonLink/ButtonLink";
import Card from "../lib/Card/Card";
import Alert from "../lib/Alert/Alert";
import Modal from "../lib/Modal/Modal";
import Notification from "../lib/Notification/Notification";
import Dropdown from "../lib/Dropdown/Dropdown";
import Icon from "../lib/Icon/Icon";
import Pagination from "../lib/Pagination/Pagination";
import Breadcrumbs from "../lib/Breadcrumbs/Breadcrumbs";
import TextInput from "../lib/TextInput/TextInput";
import Radios from "../lib/Radios/Radios";
import TextArea from "../lib/TextArea/TextArea";
import Checkbox from "../lib/Checkbox/Checkbox";
import Select from "../lib/Select/Select";
import SearchSelect from "../lib/SearchSelect/SearchSelect";
import SearchBar from "../lib/SearchBar/SearchBar";
import MultipleSearchSelect from "../lib/MultipleSearchSelect/MultipleSearchSelect";
import Table from "../lib/Table/Table";
import Tabs, { TabsPanel } from "../lib/Tabs/Tabs";
import Tooltip from "../lib/Tooltip/Tooltip";
import Accordion, { AccordionFold } from "../lib/Accordion/Accordion";
import LinkCard from "../lib/LinkCard/LinkCard";
import Hero1 from "../lib/organisms/heroes/Hero1/Hero1";
import Hero2 from "../lib/organisms/heroes/Hero2/Hero2";
import Hero4 from "../lib/organisms/heroes/Hero4/Hero4";
import Hero3 from "../lib/organisms/heroes/Hero3/Hero3";
import Hero5 from "../lib/organisms/heroes/Hero5/Hero5";
import Hero6 from "../lib/organisms/heroes/Hero6/Hero6";
import Feat6 from "../lib/organisms/featurettes/Feat6/Feat6";
import Feat9 from "../lib/organisms/featurettes/Feat9/Feat9";
import Feat7 from "../lib/organisms/featurettes/Feat7/Feat7";
import Feat4 from "../lib/organisms/featurettes/Feat4/Feat4";
import Feat5 from "../lib/organisms/featurettes/Feat5/Feat5";
import Feat2 from "../lib/organisms/featurettes/Feat2/Feat2";
import Feat8 from "../lib/organisms/featurettes/Feat8/Feat8";
import Feat1 from "../lib/organisms/featurettes/Feat1/Feat1";
import Feat3 from "../lib/organisms/featurettes/Feat3/Feat3";
import IconListItem from "../lib/IconListItem/IconListItem";
import ButtonLinkCard from "../lib/ButtonLinkCard/ButtonLinkCard";
import LinkTile from "../lib/LinkTile/LinkTile";
import Dumpling from "../lib/Dumpling/Dumpling";
import PricingCard from "../lib/PricingCard/PrincingCard";
import {
  CheckboxForm,
  TextInputForm,
  TextAreaForm,
  SelectForm,
  SearchSelectForm,
  MultipleSearchSelectForm,
  RadiosForm,
  PaginationContainer,
  DropdownForm
} from "../../storybookIntegrationComponents/";
import {
  // heroTwoContent,
  featSixAContent,
  featNineContent,
  featSevenContent,
  mockDumplings,
  mockImageDumplings,
  mockButtonCardContent,
  mockButtonLinkCardContent,
  mockLinkCardContent,
  mockCards,
  mockFeat3Content,
  mockFeat3ContentTwo
} from "./mockContent";

storiesOf("Atoms|Button", module)
  .add("Primary Buttons", () => (
    <div>
      <Button
        onClick={action("Primary 1 Clicked")}
        text="Primary 1"
        className="ter-button--primary--1"
      />
      <Button
        onClick={action("Primary 2 Clicked")}
        text="Primary 2"
        className="ter-button--primary--2"
      />
      <Button
        onClick={action("Primary 3 Clicked")}
        text="Primary 3"
        className="ter-button--primary--3"
      />
      <Button
        onClick={action("Primary 4 Clicked")}
        text="Primary 4"
        className="ter-button--primary--4"
      />
      <Button
        onClick={action("Primary 5 Clicked")}
        text="Primary 5"
        className="ter-button--primary--5"
      />
    </div>
  ))
  .add("Secondary Buttons", () => (
    <div>
      <Button
        onClick={action("Secondary 1 Clicked")}
        text="Secondary 1"
        className="ter-button--secondary--1"
      />
      <Button
        onClick={action("Secondary 2 Clicked")}
        text="Secondary 2"
        className="ter-button--secondary--2"
      />
      <Button
        onClick={action("Secondary 3 Clicked")}
        text="Secondary 3"
        className="ter-button--secondary--3"
      />
      <Button
        onClick={action("Secondary 4 Clicked")}
        text="Secondary 4"
        className="ter-button--secondary--4"
      />
      <Button
        onClick={action("Secondary 5 Clicked")}
        text="Secondary 5"
        className="ter-button--secondary--5"
      />
    </div>
  ));

storiesOf("Atoms|ButtonLink", module)
  .add("Primary Buttons", () => (
    <div>
      <ButtonLink
        link="#"
        text="Primary 1"
        className="ter-button--primary--1"
      />
      <ButtonLink
        link="#"
        text="Primary 2"
        className="ter-button--primary--2"
      />
      <ButtonLink
        link="#"
        text="Primary 3"
        className="ter-button--primary--3"
      />
      <ButtonLink
        link="#"
        text="Primary 4"
        className="ter-button--primary--4"
      />
      <ButtonLink
        link="#"
        text="Primary 5"
        className="ter-button--primary--5"
      />
    </div>
  ))
  .add("Secondary ButtonLink", () => (
    <div>
      <ButtonLink
        link="#"
        text="Secondary 1"
        className="ter-button--secondary--1"
      />
      <ButtonLink
        link="#"
        text="Secondary 2"
        className="ter-button--secondary--2"
      />
      <ButtonLink
        link="#"
        text="Secondary 3"
        className="ter-button--secondary--3"
      />
      <ButtonLink
        link="#"
        text="Secondary 4"
        className="ter-button--secondary--4"
      />
      <ButtonLink
        link="#"
        text="Secondary 5"
        className="ter-button--secondary--5"
      />
    </div>
  ));

storiesOf("Molecules|Alert", module).add("Alerts", () => (
  <div>
    <Alert
      onClick={action("Clicked!")}
      text="Default Alert"
      closeAlert={action("close!")}
    />
    <Alert
      onClick={action("Clicked!")}
      text="Warning Alert"
      type="warning"
      closeAlert={action("close!")}
    />
    <Alert
      onClick={action("Clicked!")}
      text="Danger Alert"
      type="danger"
      closeAlert={action("close!")}
    />
    <Alert
      onClick={action("Clicked!")}
      text="Success Alert"
      type="success"
      closeAlert={action("close!")}
    />
  </div>
));

const mockBody =
  "Must go faster... go, go, go, go, go! Jaguar shark! So tell me - does it really exist? Just my luck, no ice. What do they got in there? King Kong? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. So you two dig up, dig up dinosaurs?";

storiesOf("Molecules|Modal", module).add("Modal", () => (
  <Modal
    closeModal={action("close!")}
    title="Modal title"
    body={mockBody}
    buttonOne={{
      onClick: action("Clicked!"),
      className: "ter-button--primary--1",
      text: "buy sketchup!"
    }}
    buttonTwo={{
      onClick: action("Clicked!"),
      className: "ter-button--secondary--1",
      text: "buy sketchup, dummy!"
    }}
  />
));

storiesOf("Molecules|Notification", module).add("Notification", () => (
  <Notification onClick={action("clicked!")} type="default" text={mockBody} />
));

storiesOf("Atoms|Icon", module).add("Icon", () => (
  <div>
    <Icon type="open-caret-right-dark-8px" size="8px" />
    <Icon type="open-caret-up-dark-8px" size="8px" />
    <Icon type="open-caret-down-dark-8px" size="8px" />
    <Icon type="open-caret-left-dark-8px" size="8px" />
    <Icon type="enclosed-check-dark-32px" icon="32px" />
  </div>
));

// storiesOf("Molecules|Dropdown", module).add("Dropdown", () => (
//   <Dropdown label="I am a dropdown">
//     <p>I am text</p>
//     <Button
//       onClick={action("Primary 1 Clicked")}
//       text="I am a button"
//       className="ter-button--primary--1"
//     />
//   </Dropdown>
// ));

const mockPages = 4;

storiesOf("Molecules|Pagination", module).add("Pagination", () => (
  <PaginationContainer pages={mockPages} />
));

const mockBreadcrumbs = [
  { link: "test", text: "Breadcrumb" },
  { link: "test", text: "Breadcrumb" },
  { link: "test", text: "Breadcrumb" }
];

storiesOf("Molecules|Breadcrumb", module).add("Breadcrumb", () => (
  <Breadcrumbs breadcrumbs={mockBreadcrumbs} />
));

storiesOf("Molecules|TextInput", module).add("TextInput", () => (
  <div>
    <TextInputForm
      label="Form Item Label"
      placeholder="test placeholder text"
      name="test"
      status=""
    />
    <TextInputForm
      label="Error State"
      placeholder="test placeholder text"
      name="test"
      status={{ className: "error", message: "This is an error message!" }}
    />
    <TextInputForm
      label="Success State"
      placeholder="test placeholder text"
      name="test"
      status={{ className: "success", message: "" }}
    />
  </div>
));

storiesOf("Molecules|Radios", module).add("Radios", () => {
  const mockRadios = ["label one", "label two", "label three"];
  return (
    <div>
      <RadiosForm
        radios={mockRadios}
        collection="storybook-radios"
        name="test name"
      />
    </div>
  );
});

storiesOf("Molecules|TextArea", module).add("TextArea", () => {
  return (
    <TextAreaForm
      handleChange={action("ohh, text!")}
      value=""
      label="Text Area"
      name="text area"
    />
  );
});

storiesOf("Molecules|Checkbox", module).add("Checkbox", () => {
  return <CheckboxForm name="checkbox" label="This is a checkbox" />;
});

storiesOf("Molecules|SearchSelect", module).add("SearchSelect", () => {
  const mockOptions = [
    "cats",
    "dogs",
    "turtles",
    "fish",
    "ferrets",
    "hamsters",
    "birds"
  ];

  return (
    <SearchSelectForm
      defaultText="This is a SearchSelect component"
      options={mockOptions}
      selection={undefined}
      handleSelect={action("selection made")}
    />
  );
});

storiesOf("Molecules|MultipleSearchSelect", module).add(
  "MultipleSearchSelect",
  () => {
    const mockOptions = [
      "cats",
      "dogs",
      "turtles",
      "fish",
      "ferrets",
      "hamsters",
      "birds"
    ];

    return (
      <MultipleSearchSelectForm
        defaultText="This is a MultipleSearchSelect component"
        options={mockOptions}
        name="test name"
      />
    );
  }
);

storiesOf("Molecules|Select", module).add("Select", () => {
  const mockOptions = [
    "cats",
    "dogs",
    "turtles",
    "fish",
    "ferrets",
    "hamsters",
    "birds",
    "cats",
    "dogs",
    "turtles",
    "fish",
    "ferrets",
    "hamsters",
    "cats",
    "dogs",
    "turtles",
    "fish",
    "ferrets",
    "hamsters",
    "cats",
    "dogs",
    "turtles",
    "fish",
    "ferrets",
    "hamsters",
    "cats",
    "dogs",
    "turtles",
    "fish",
    "ferrets",
    "hamsters",
    "zebra"
  ];

  return (
    <SelectForm
      options={mockOptions}
      handleSelection={action("clicked an option")}
      selection={undefined}
      defaultText="This is a Select Component"
      name="test-name"
    />
  );
});

storiesOf("Molecules|Table", module).add("Table", () => {
  const mockData = {
    head: ["Table Head 1", "Table Head 2", "Table Head 3"],
    body: [
      [["Row 1 Cell 1"], ["Row 1 Cell 2"], ["Row 1 Cell 3"]],
      [["Row 2 Cell 1"], ["Row 2 Cell 2"], ["Row 2 Cell 3"]],
      [["Row 3 Cell 1"], ["Row 3 Cell 2"], ["Row 3 Cell 3"]]
    ]
  };

  return <Table data={mockData} />;
});

storiesOf("Molecules|Tabs", module).add("Tabs", () => {
  return (
    <Tabs selected={0} fullWidth={false}>
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

storiesOf("Molecules|Accordion", module).add("Accordion", () => {
  return (
    <Accordion defaultActive={0}>
      <AccordionFold title="Test one">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
          mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
          sollicitudin.
        </p>
      </AccordionFold>
      <AccordionFold title="Test two">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
          mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
          sollicitudin.
        </p>
      </AccordionFold>
      <AccordionFold title="Test three">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
          mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
          sollicitudin.
        </p>
      </AccordionFold>
    </Accordion>
  );
});

storiesOf("Atoms|Tooltip", module).add("Tooltip", () => {
  return (
    <div className="pad-xl text-center">
      <Tooltip direction="up" tooltipLabel="Up Tooltip">
        <p>hello</p>
      </Tooltip>
      <br />
      <Tooltip direction="down" tooltipLabel="Down Tooltip">
        <p>hello</p>
      </Tooltip>
      <br />
      <Tooltip direction="left" tooltipLabel="Left Tooltip">
        <p>hello</p>
      </Tooltip>
      <br />
      <Tooltip direction="right" tooltipLabel="Right Tooltip">
        <p>hello</p>
      </Tooltip>
    </div>
  );
});

storiesOf("Heroes|Hero-2", module)
  .add("Hero-2 Image Left", () => {
    const heroTwoContent = {
      images: {
        imageThreeXTwo: {
          url: "./3x2-ph.png",
          altText: "placeholder"
        },
        imageFourXThree: {
          url: "./800x600.png",
          altText: "placeholder"
        },
        imageOneXOne: {
          url: "./1-to-1.png",
          altText: "placeholder"
        }
      },
      title: "Good design is innovative.",
      text:
        "Good design is aesthetic. Good design makes a product understandable. Good design is unobtrusive.",
      ctas: {
        ctaOne: {
          className: "ter-button--primary--1",
          link: "#",
          text: "Button"
        },
        ctaTwo: {
          className: "ter-button--secondary--1",
          link: "#",
          text: "Button"
        },
        subCTA: {
          text: "Sub-CTA",
          link: "#"
        }
      }
    };

    return (
      <Hero2
        imageSide="left"
        images={{
          imageThreeXTwo: {
            url: "./3x2-ph.png",
            altText: "placeholder"
          },
          imageFourXThree: {
            url: "./800x600.png",
            altText: "placeholder"
          },
          imageOneXOne: {
            url: "./1-to-1.png",
            altText: "placeholder"
          }
        }}
        title="Good design is innovative."
        text={heroTwoContent.text}
        ctas={heroTwoContent.ctas}
      />
    );
  })
  .add("Hero-2 Image Right", () => {
    const heroTwoContent = {
      images: {
        imageThreeXTwo: {
          url: "./3x2-ph.png",
          altText: "placeholder"
        },
        imageFourXThree: {
          url: "./800x600.png",
          altText: "placeholder"
        },
        imageOneXOne: {
          url: "./1-to-1.png",
          altText: "placeholder"
        }
      },
      title: "Good design is innovative.",
      text:
        "Good design is aesthetic. Good design makes a product understandable. Good design is unobtrusive.",
      ctas: {
        ctaOne: {
          className: "ter-button--primary--1",
          link: "#",
          text: "Button"
        },
        ctaTwo: {
          className: "ter-button--secondary--1",
          link: "#",
          text: "Button"
        },
        subCTA: {
          text: "Sub-CTA",
          link: "#"
        }
      }
    };

    return (
      <Hero2
        imageSide="right"
        images={{
          imageThreeXTwo: {
            url: "./3x2-ph.png",
            altText: "placeholder"
          },
          imageFourXThree: {
            url: "./800x600.png",
            altText: "placeholder"
          },
          imageOneXOne: {
            url: "./1-to-1.png",
            altText: "placeholder"
          }
        }}
        title="Good design is innovative."
        text={heroTwoContent.text}
        ctas={heroTwoContent.ctas}
      />
    );
  });

storiesOf("Molecules|SearchBar", module).add("SearchBar", () => {
  return <SearchBar />;
});

storiesOf("Featurettes|Feat-6", module).add("Featurette-6", () => {
  const { title, ctas } = featSixAContent;
  ctas.ctaOne.onClick = action("clicked CTA One");
  ctas.ctaTwo.onClick = action("clicked CTA Two");

  return <Feat6 title={title} ctas={ctas} />;
});

storiesOf("Featurettes|Feat-9", module).add("Featurette-9", () => {
  const { imageSide, image, quote } = featNineContent;

  return <Feat9 imageSide={imageSide} image={image} quote={quote} />;
});

storiesOf("Featurettes|Feat-7", module).add("Featurette-7", () => {
  const { title, content } = featSevenContent;

  return <Feat7 title={title} content={content} />;
});

storiesOf("Molecules|IconListItem", module).add("IconListItem", () => {
  const mockContent = {
    title: "Design is good. Period.",
    text:
      "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!"
  };
  return <IconListItem content={mockContent} />;
});

storiesOf("Molecules|ButtonLinkCard", module).add("ButtonLinkCard", () => {
  const mockContent = {
    title: "Design is good. Period.",
    text:
      "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
    link: {
      url: "#",
      text: "Button"
    }
  };

  return <ButtonLinkCard content={mockContent} />;
});

storiesOf("Molecules|LinkTile", module).add("LinkTile", () => {
  const mockContent = {
    title: "Design is good. Period.",
    text:
      "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
    link: {
      url: "#",
      text: "Button"
    }
  };

  return <LinkTile content={mockContent} />;
});

storiesOf("Featurettes|Feat-4", module)
  .add("Featurette-4A", () => {
    const mockContent = [
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      }
    ];

    return (
      <Feat4
        title="Good design is good."
        content={mockContent}
        variant="a"
        columns={3}
      />
    );
  })
  .add("Featurette-4B", () => {
    const mockContent = [
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      }
    ];

    return (
      <Feat4
        title="Good design is good."
        content={mockContent}
        variant="a"
        columns={2}
        image={{ url: "./3x2-ph.png", altText: "placeholder image" }}
      />
    );
  })
  .add("Featurette-4C", () => {
    const mockContent = [
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      }
    ];

    return <Feat4 content={mockContent} variant="c" columns={2} />;
  })
  .add("Featurette-4D", () => {
    const mockContentD = [
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      },
      {
        title: "Design is good. Period.",
        text:
          "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!",
        link: {
          url: "#",
          text: "Button"
        }
      }
    ];

    return <Feat4 content={mockContentD} variant="d" columns={2} />;
  });

storiesOf("Molecules|Dumpling", module)
  .add("Dumpling - Small, Icon", () => {
    return (
      <Dumpling
        icon={{ type: "enclosed-check-dark-48px", size: "48px" }}
        size="small"
        title="Dumplin'"
        link={{ url: "#" }}
      />
    );
  })
  .add("Dumpling - Small, Image", () => {
    return (
      <Dumpling
        image={{ url: "1-to-1.png", altText: "1-to-1 image" }}
        size="small"
        title="Dumplin'"
        link={{ url: "#" }}
      />
    );
  });

storiesOf("Featurettes|Feat-5", module)
  .add("Featurette-5a w/ Icon", () => {
    return (
      <Feat5
        dumplings={mockDumplings}
        type="a"
        title="Design is design"
        subtitle="It's like, this thing, you know?"
      />
    );
  })
  .add("Featurette-5a w/ Image", () => {
    return (
      <Feat5
        dumplings={mockImageDumplings}
        type="a"
        title="Design is design"
        subtitle="It's like, this thing, you know?"
      />
    );
  })
  .add("Featurette-5b w/ Icon", () => {
    return (
      <Feat5
        dumplings={mockDumplings}
        type="b"
        title="Design is design"
        subtitle="It's like, this thing, you know?"
      />
    );
  })
  .add("Featurette-5b w/ Image", () => {
    return (
      <Feat5
        dumplings={mockImageDumplings}
        type="b"
        title="Design is design"
        subtitle="It's like, this thing, you know?"
      />
    );
  });

storiesOf("Molecules|Card", module)
  .add("Card w/ Button", () => {
    const { title, text, image, button } = mockButtonCardContent;
    button.onClick = action("Action Button Clicked");
    return (
      <div style={{ width: "500px" }}>
        <Card title={title} text={text} image={image} button={button} />
      </div>
    );
  })
  .add("Card w/ ButtonLink", () => {
    const { title, text, image, buttonLink } = mockButtonLinkCardContent;
    return (
      <div style={{ width: "500px" }}>
        <Card title={title} text={text} image={image} buttonLink={buttonLink} />
      </div>
    );
  })
  .add("Card w/ Link", () => {
    const { title, text, image, link } = mockLinkCardContent;
    return (
      <div style={{ width: "500px" }}>
        <Card title={title} text={text} image={image} link={link} />
      </div>
    );
  });

storiesOf("Featurettes|Feat-2", module).add("Featurette-2", () => {
  const mockImage = { url: "./1-to-1.png", altText: "Placeholder image" };
  const mockText =
    "Eu elit non Lorem deserunt sint aute aliquip esse non sint tempor deserunt voluptate reprehenderit. Duis duis aute sint tempor proident officia enim aliqua enim sit exercitation. Ex culpa dolor ex reprehenderit adipisicing. Magna dolore occaecat nisi voluptate sunt qui nulla cupidatat minim sit non nisi exercitation occaecat.";
  return (
    <Feat2
      image={mockImage}
      title="Good design is a thing, apparently."
      text={mockText}
    >
      <AccordionFold title="Test one">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
          mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
          sollicitudin.
        </p>
      </AccordionFold>
      <AccordionFold title="Test two">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
          mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
          sollicitudin.
        </p>
      </AccordionFold>
      <AccordionFold title="Test three">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lobortis augue ligula, eget gravida tellus lacinia id. Sed ultricies
          mi malesuada tincidunt dapibus. Donec porta ligula sagittis elit
          sollicitudin.
        </p>
      </AccordionFold>
    </Feat2>
  );
});

storiesOf("Molecules|PricingCard", module).add("Pricing Card", () => {
  const mockDescription =
    "Ullamco exercitation excepteur nostrud ipsum veniam est enim.";
  const mockButtonLink = {
    link: "#",
    text: "Subscribe"
  };

  return (
    <div style={{ width: "300px", margin: "32px" }}>
      <PricingCard
        product="SketchUp"
        version="Shop"
        description={mockDescription}
        cost="$119/yr"
        currency="USD"
        buttonLink={mockButtonLink}
      />
    </div>
  );
});

storiesOf("Featurettes|Feat-8", module).add("Featurette-8", () => {
  const mockButtonLink = { link: "#", text: "Button" };
  return (
    <Feat8
      title="Good design is innovative."
      buttonLink={mockButtonLink}
      cards={mockCards}
    />
  );
});

storiesOf("Heroes|Hero-3", module).add("Hero-3", () => {
  const mockImages = {
    imageFourByOne: {
      url: "http://fpoimg.com/1600x400?text=4:1",
      altText: "placeholder image"
    },
    imageTwoByOne: {
      url: "http://fpoimg.com/1600x800?text=2:1",
      altText: "placeholder image"
    }
  };

  return (
    <Hero3
      images={mockImages}
      headerText="Good design is innovative."
      subHeaderText="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
    />
  );
});

storiesOf("Heroes|Hero-4", module).add("Hero-4", () => {
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

  const mockVideo = {
    url: "https://www.youtube.com/embed/UY7r0juBF8Y",
    allowFullScreen: "true"
  };

  return (
    <Hero4
      video={mockVideo}
      title="Design is design."
      text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
      ctas={mockCTALinks}
      allowFullScreen={true}
    />
  );
});

storiesOf("Heroes|Hero-5", module).add("Hero-5", () => {
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
    url: "./1-to-1.png",
    altText: "placeholder"
  };

  return (
    <Hero5
      image={mockImage}
      title="Design is design."
      subtitle="Nulla ex commodo reprehenderit aliquip."
      text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
      ctas={mockCTALinks}
    />
  );
});

storiesOf("Heroes|Hero-1", module)
  .add("Hero-1 Left", () => {
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

    return (
      <Hero1
        images={mockImage}
        title="Design is design."
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
      />
    );
  })
  .add("Hero-1 Right", () => {
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

    return (
      <Hero1
        images={mockImage}
        title="Design is design."
        text="Esse aliquip ad in et ut ipsum paEu elit consectetur aliquip excepteur fugiat ut qui dolor pariatur consectetur.riatur elit quis."
        ctas={mockCTALinks}
        contentSide="right"
      />
    );
  });

storiesOf("Featurettes|Feat-1", module)
  .add("Featurette-1a", () => {
    const mockTitle = "Design is good.";
    const mockSubtitle = "You should know about it, maybe?";
    const mockText =
      "Cillum et laboris aliquip consequat. Consectetur commodo nisi laborum voluptate. Commodo est ullamco pariatur ut nostrud pariatur.";
    const mockCTA = { link: "#", text: "Button" };
    const mockImage = { url: "./1-to-1.png", altText: "placeholder" };
    return (
      <Feat1
        title={mockTitle}
        subtitle={mockSubtitle}
        text={mockText}
        cta={mockCTA}
        variant="a"
        image={mockImage}
      />
    );
  })
  .add("Featurette-1b", () => {
    const mockTitle = "Design is good.";
    const mockText =
      "Cillum et laboris aliquip consequat. Consectetur commodo nisi laborum voluptate. Commodo est ullamco pariatur ut nostrud pariatur.";
    const mockImage = { url: "./1-to-1.png", altText: "placeholder" };
    return (
      <Feat1 title={mockTitle} text={mockText} variant="b" image={mockImage} />
    );
  })
  .add("Featurette-1c", () => {
    const mockTitle = "Design is good.";
    const mockSubtitle = "You should know about it, maybe?";
    const mockText =
      "Cillum et laboris aliquip consequat. Consectetur commodo nisi laborum voluptate. Commodo est ullamco pariatur ut nostrud pariatur.";
    const mockCTA = { link: "#", text: "Button" };
    const mockImage = { url: "./1-to-1.png", altText: "placeholder" };
    return (
      <Feat1
        title={mockTitle}
        subtitle={mockSubtitle}
        text={mockText}
        cta={mockCTA}
        variant="c"
        image={mockImage}
      />
    );
  });

storiesOf("Molecules|LinkCard", module).add("LinkCard", () => {
  const mockLink = { url: "#", text: "Sub-CTA" };
  return (
    <LinkCard
      title="Good design is innovative"
      text="Quis nulla in officia veniam exercitation quis deserunt exercitation. Ea minim irure nostrud ipsum incididunt minim dolore elit ut eu esse ut officia."
      link={mockLink}
    />
  );
});

storiesOf("Featurettes|Feat-3", module)
  .add("Featurette-3a", () => {
    const { title, text, content, cta, images } = mockFeat3Content;

    return (
      <Feat3
        title={title}
        // text={text}
        content={content}
        cta={cta}
        images={images}
      />
    );
  })
  .add("Featurette-3b", () => {
    const { title, text, content, cta, images } = mockFeat3ContentTwo;

    return (
      <Feat3
        title={title}
        text={text}
        content={content}
        cta={cta}
        images={images}
      />
    );
  });

storiesOf("Heroes|Hero-6", module)
  .add("Hero-6 Image Left", () => {
    const heroSixContent = {
      images: {
        imageThreeByTwo: {
          url: "http://fpoimg.com/2400x1600?text=3:2",
          altText: "placeholder image"
        },
        imageFourByThree: {
          url: "http://fpoimg.com/1600x1200?text=4:3",
          altText: "placeholder image"
        },
        imageOneByOne: {
          url: "http://fpoimg.com/1600x1600?text=1:1",
          altText: "placeholder image"
        }
      },
      title: "Good design is innovative.",
      text:
        "Good design is aesthetic. Good design makes a product understandable. Good design is unobtrusive.",
      ctas: {
        ctaOne: {
          className: "ter-button--primary--1",
          link: "#",
          text: "Button"
        },
        ctaTwo: {
          className: "ter-button--secondary--1",
          link: "#",
          text: "Button"
        }
      }
    };

    return (
      <Hero6
        imageSide="left"
        images={heroSixContent.images}
        title="Good design is innovative."
        text={heroSixContent.text}
        ctas={heroSixContent.ctas}
      />
    );
  })
  .add("Hero-6 Image Right", () => {
    const heroSixContent = {
      images: {
        imageThreeByTwo: {
          url: "http://fpoimg.com/2400x1600?text=3:2",
          altText: "placeholder image"
        },
        imageFourByThree: {
          url: "http://fpoimg.com/1600x1200?text=4:3",
          altText: "placeholder image"
        },
        imageOneByOne: {
          url: "http://fpoimg.com/1600x1600?text=1:1",
          altText: "placeholder image"
        }
      },
      title: "Good design is innovative.",
      text:
        "Good design is aesthetic. Good design makes a product understandable. Good design is unobtrusive.",
      ctas: {
        ctaOne: {
          className: "ter-button--primary--1",
          link: "#",
          text: "Button"
        },
        ctaTwo: {
          className: "ter-button--secondary--1",
          link: "#",
          text: "Button"
        }
      }
    };

    return (
      <Hero6
        imageSide="right"
        images={heroSixContent.images}
        title="Good design is innovative."
        text={heroSixContent.text}
        ctas={heroSixContent.ctas}
      />
    );
  });
