## Terra React Component Library

The Terra React Component Library is built using the Trimble SketchUp Terra Style Design System.

### Getting Started

To get started with Terra, install it in your project from the command line with:

`npm install --save react-component-lib`

To use components from Terra in your React project, destructure them in your component file. Example:

`import { Button } from 'terra-component-lib';`

You can then use the imported Terra component within your own application.

## Components

#### Accordion

######Props -

######Example -

---

#### Alert

######Props -

- `onClick` **(required)** - determines the method called when the 'close' button is clicked
- `text` **(required)** - determines the text displayed in the alert
- `type` - determines the type of alert

######Example -

```
<Alert onClick={this.closeAlert} text="Warning Alert!" type="warning" />
```

---

#### Breadcrumbs

######Props -

######Example -

---

#### Button

######Props -

- `onClick` **(required)** - function that determines the method called when the button is clicked
- `className` **(required)** - string that determines the type of button (see options) - interpolates into component `className` - see options below
- `text` **(required)** - string that determines the inner text of the button element

######`className` options -

- **Primary 1** - `"ter-button-primary--1"`
- **Primary 2** - `"ter-button-primary--2"`
- **Primary 3** - `"ter-button-primary--3"`
- **Primary 4** - `"ter-button-primary--4"`
- **Primary 5** - `"ter-button-primary--5"`
- **Secondary 1** - `"ter-button-secondary--1"`
- **Secondary 2** - `"ter-button-secondary--2"`
- **Secondary 3** - `"ter-button-secondary--3"`
- **Secondary 4** - `"ter-button-secondary--4"`
- **Secondary 5** - `"ter-button-secondary--5"`
- **Small Button** - `"ter-button--small"`

######Example -

```
<Button
  text="Button"
  onClick={this.handleClickOne}
  className="ter-button--primary--1"
/>
<Button
  text="Button"
  onClick={this.handleClickTwo}
  className="ter-button--secondary--2 ter-button--small"
/>
```

---

#### Card

######Props -

- `image` - object consisting of a `link` and `description` key/value pairs (strings) used to create a link to the image location and the alt description text for the image
- `title` **(required)** - string used to determine the title for the card
- `text` - an array of strings used to generate body text
- `label` - string used for generating label text
- `link` - an object consisting of a `link` and `label` text strings as key/values for an `<a>` element
- `category` - string used for labeling the card's category

######Example -

```
<Card
  title="I am a card title"
  text={["I am sample card text", "So am I"]}
  image={link:"www.pathway.com", description:"a cat"}}
  label="I am label text"
  link={{link:"www.iamalink.com", label:"link to a link"}}
  category="memes"
/>
```

---

#### Dropdown

######Props -

######Example -

---

#### Form Items

######Props -

######Example -

---

#### Modal

######Props -

######Example -

---

#### Navbar

######Props -

######Example -

---

#### Notification

######Props -

######Example -

---

#### Pagination

######Props -

######Example -

---

#### Table

######Props -

######Example -

---

#### Tabs

######Props -

######Example -

---

#### Toolstips

######Props -

######Example -
