import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Button from "../lib/Button/Button";
import Alert from "../lib/Alert/Alert";
import Modal from "../lib/Modal/Modal";
import Notification from "../lib/Notification/Notification";
import Dropdown from "../lib/Dropdown/Dropdown";
import Icon from "../lib/Icon/Icon";
import Pagination from "../lib/Pagination/Pagination";
import Breadcrumbs from "../lib/Breadcrumbs/Breadcrumbs";
import TextInput from "../lib/TextInput/TextInput";

// import { Button, Welcome } from "@storybook/react/demo";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

storiesOf("Button", module)
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

storiesOf("Alert", module).add("Alerts", () => (
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

storiesOf("Modal", module).add("Modal", () => (
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

storiesOf("Notifcation", module).add("Notification", () => (
  <Notification onClick={action("clicked!")} type="default" text={mockBody} />
));

storiesOf("Icon", module).add("Icon", () => (
  <div>
    <Icon type="open-caret-right-dark-8px" size="8px" />
    <Icon type="open-caret-up-dark-8px" size="8px" />
    <Icon type="open-caret-down-dark-8px" size="8px" />
    <Icon type="open-caret-left-dark-8px" size="8px" />
  </div>
));

const mockDropdownOptions = ["Option 1", "Option 2", "Option 3"];

storiesOf("Dropdown", module).add("Dropdown", () => (
  <Dropdown
    defaultLabel="Select an option"
    options={mockDropdownOptions}
    selectOption={action("Option selected!")}
  />
));

const mockPages = 4;

storiesOf("Pagination", module).add("Pagination", () => (
  <Pagination activePage={0} pages={mockPages} />
));

const mockBreadcrumbs = [
  { link: "test", text: "Breadcrumb" },
  { link: "test", text: "Breadcrumb" },
  { link: "test", text: "Breadcrumb" }
];

storiesOf("Breadcrumb", module).add("Breadcrumb", () => (
  <Breadcrumbs breadcrumbs={mockBreadcrumbs} />
));

storiesOf("TextInput", module).add("TextInput", () => (
  <div>
    <TextInput
      placeholder="placeholder text"
      value=""
      inputChange={action("input received")}
      name="test"
    />
  </div>
));
