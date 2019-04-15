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

- `breadcrumbs` **(required)** - an array of objects for generating breadcrumb `text` and `link` strings.

######Example -

```
<Breadcrumbs
  breadcrumbs=[{text: 'link one', link:'www.example.com'}, {text: 'link two', link:'www.link.com}]
/>
```

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

#### Checkbox

######Props -

- `label` **(required)** - string used for the check box's label
- `name` **(required)** - string used for the check box's name for parent state management
- `checked` **(required)** - boolean used to indicate whether or not the checkbox is checked, you should use whatever state property cooresponds to the component's `name`
- `handleChange` **(required)** - function called when the checkbox is changed, best used for changing the `checked` state

######Example -

```
<Checkbox
  label='check box'
  name='checkBoxOne'
  handleChange={this.toggleCheckBox}
  checked={this.state.checkBoxOne}
/>
```

---

#### Dropdown

######Props -

- `defaultLabel` **(required)** - string indicating the default text to display in the dropdown field
- `options` **(required)** - array of strings consisting of the different dropdown options
- `selectOption` **(required)** function for passing up a newly-selected option string

######Example -

```
<Dropdown
  defaultLabel='click to select'
  options={['dog', 'cat', 'bird]}
  selectOption={this.handleOptionSelect}
/>
```

---

#### Icon

######Props -

######Example -

---

#### Modal

######Props -

- `className` - string interpolated into the className of the component for styling options: use with caution.
- `title` - string used for the modal's title
- `body` - string used for the modal's body text
- `closeModal` **(required)** - function used to no longer render the modal
- `buttonOne` - object consisting of an `onClick` method, `text` label string, and `className` for styling. See `<Button>` for options.
- `buttonTwo` - object consisting of an `onClick` method, `text` label string, and `className` for styling. See `<Button>` for options.

######Example -

```
<Modal
  className=''
  title='Modal Title'
  body='Hello. I am a modal'
  closeModal={this.closeModal}
  buttonOne={{onClick={this.buttonOneClick}, text='button one', className='ter-button-primary--1'}}
  buttonOne={{onClick={this.buttonTwoClick}, text='button two', className='ter-button-secondary--1'}
/>
```

---

#### MultipleSearchSelect

######Props -

- `defaultText` **(required)** - string used to populate the search field before any selections are made
- `options` **(required)** - an array of strings used to generate options for selection
- `selection` **(required)** - an array of string used to provide the currently selected options
- `handleSelect` **(required)** - function used to add an option to the selection array
- `removeSelection` **(required)** - function used to remove an option from the selection array
- `name` **(required)** - string used for labeling the array for parent component processing

######Example -

```
<MultipleSearchSelect
  defaultText='I am a multiple search select component'
  options=['dog', 'cat', 'bird', 'turtle']
  selection={this.state.multipleSearchSelectOne}
  handleSelect={this.addMultiSearchSelectOption}
  removeSelection={this.removeMultiSearchSelectOption}
  name='multipleSearchSelectOne'
/>
```

---

#### Notification

######Props -

- `text` **(required)** - string used for notification content
- `type` **(required)** - string used for indicating notification type
- `onClick` **(required)** - function used for calling a method to close the notication and no longer render it

######Example -

```
<Notification
  text='Hello. I am a notification'
  type='default'
  onClick={this.closeNotification}
/>
```

---

#### Pagination

######Props -

- `pages` **(required)** - number indicating the total number of pages accessible via the component
- `activePage` **(required)** - number indicating the index of the current page in the Pagination array - i.e. passing in `0` would display the first page
- `handleClick` **(required)** - function used to set the new index of the currently displayed item in the Paginiation array

######Example -

```
<Pagination pages={4} activePage={0} handleClick={this.setPage} />
```

---

#### Radios

######Props -

- `radios` - an array of strings used to label each individual radio button
- `collection` -
- `selected` - string used to indicate the currently selected radio button, generally same as `name`
- `selectRadio` - function used to change the currently selected radio button in the parent component
- `name` - string used to name the radio component for processing in the parent component

######Example -

---

#### Table

######Props -

- `data` **(required)** - object containing the information to be rendered in the table with `head` and `body` keys. Each key is assigned to an array for each row.
- `loose` - boolean that when set to `true` will add the `ter-table--loose` class to the component

######Example -

```
const tableDataSource = {
  head: ['column one', 'column two', 'column three],
  body: {
    ['R1/C1', 'R1/C2', 'R1/C3],
    ['R2/C1', 'R2/C2', 'R2/C3],
    ['R3/C1', 'R3/C2', 'R3/C3]
  }
}

<Table
  data={tableDataSource}
  loose={true}
/>
```

---

#### Text Input

######Props -

- `label` - string used for the label element of the input
- `placeholder` - optional string used to determine the placeholder text for an input
- `inputChange` **(required)** - function that determines what happens when the input value has changed
- `value` **(required)** - string for the value of the input
- `status` - object that is passed into the component to provied an `error` or `success` state, accompanied by a `message`. Both the className and message are required in the object. Example below:
  ```
  { className: "error", message: "error!" }
  ```
- `name` **(required)** - string used as the field name

######Example -

```
<TextInputForm
  label="Form Item Label"
  placeholder="test placeholder text"
  name="test"
  status=""
/>
```

---

#### Tabs

######Props -

######Example -

---

#### Tooltips

######Props -

######Example -
