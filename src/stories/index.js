import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Button from "../lib/Button/Button";
import Alert from "../lib/Alert/Alert";

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
    <Alert onClick={action("Clicked!")} text="Default Alert" />
    <Alert onClick={action("Clicked!")} text="Warning Alert" type="warning" />
    <Alert onClick={action("Clicked!")} text="Danger Alert" type="danger" />
    <Alert onClick={action("Clicked!")} text="Success Alert" type="success" />
  </div>
));
