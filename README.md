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

- `defaultActive` - number indicating the index of the active accordion 'fold' on load.
- `children` **(required)** - components rendered inside the individual accordion 'folds', should be nested within the component itself. Components should have a `title` prop string indicating the text displayed when the fold is closed.

######Example -

```
<Accordion defaultActive=[0] >
  <ChildComp title='Child 1' content='I'm a child component' />
  <ChildComp title='Child 2' content='Me, too!' />
  <ChildComp title='Child 3' content='Also, me!' />
</Accordion>
```

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

- `onClick` **(required)** - function that determines the method called when the button is clicked taking an argument of the event object.
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
- `handleChange` **(required)** - function called when the checkbox is changed, best used for changing the `checked` state, takes a single argument of the components `name`

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
- `selectOption` **(required)** function for passing up a newly-selected option string, takes an argument of the name being passed down and the option being selected
- `selected` - string indicating the currently selected item from the dropdown
- `name` **(required)** - string indicating a reference to the Dropdown component for parent data processing

######Example -

```

handleOptionSelect = (name, selection) => {
  this.setState({
    [name]: selection
  })
}

render() {
  return (
    <Dropdown
      defaultLabel='click to select'
      options={['dog', 'cat', 'bird]}
      selectOption={this.handleOptionSelect}
      selected={this.state.selectedDropdown}
      name='animalDropdown'
    />
  )
}

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
- `closeModal` **(required)** - function used to no longer render the modal, takes no arguments
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
- `handleSelect` **(required)** - function used to add an option to the selection array, takes two arguments of the selection and the component's name
- `removeSelection` **(required)** - function used to remove an option from the selection array, takes two arguments of the selection and the component's name
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
- `onClick` **(required)** - function used for calling a method to close the notication and no longer render it, takes no arguments

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
- `handleClick` **(required)** - function used to set the new index of the currently displayed item in the Paginiation array, takes a single argument of the new index

######Example -

```
<Pagination pages={4} activePage={0} handleClick={this.setPage} />
```

---

#### Radios

######Props -

- `radios` **(required)**- an array of strings used to label each individual radio button
- `selected` **(required)**- string used to indicate the currently selected radio button, generally same as `name`
- `selectRadio` **(required)**- function used to change the currently selected radio button in the parent component, takes two arguments of the new selected radio button and the component's name
- `name` **(required)**- string used to name the radio component for processing in the parent component, should be unique

######Example -

```
      <Radios
        radios={['radio one', 'radio two', 'radio three]}
        selectRadio={this.selectRadio}
        selected={this.state.selectedRadio}
        name="selectedRadio"
      />
```

---

#### SearchBar

######Props -

- `searchItems` - an array of strings used for generating predictive text
- `handleSubmit` **(required)** - function passed down for passing up the search string, takes a single argument of the field's search string
- `placeholder` - string used for generating a custom string of placeholder text, defaults to `Search`
- `predictiveSearch` - boolean used to tell the component whether or not to produce a list of predictive search items

######Example -

```
<SearchBar searchItems={}
  searchItems={['dogs', 'cats', 'frogs', 'birds']}
  handleSubmit={this.setSearchString}
  placeholder='I am custom placeholder text'
  predictiveSearch={true}
/>
```

---

#### SearchSelect

######Props -

- `defaultText` **(required)** - string used for generating the default text in the selected field
- `options` **(required)** - array of strings to select from
- `selection` **(required)** - string indicating the currently-selected string
- `handleSelect` **(required)** - function used for changing the currently selected string, takes a single argument of the newly selected item as a string

######Example -

```
<SearchSelect
  defaultText='Select an animal'
  options={'dog', 'cat', 'turtle'}
  selection={this.state.selectedAnimal}
  handleSelect={this.selectAnimal}
/>
```

---

#### Select

######Props -

- `options` **(required)** - array of strings used for generating select options
- `handleSelection` **(required)** - function used for changing the currently selection, takes two arguments of the new selection and the component's `name`
- `selection` **(required)** - string indicating the current select
- `defaultText` **(required)** - string indicating the default text in the selected field
- `name` **(required)** - string used for parent processing of the component

######Example -

```
<Select
  options={['red', 'blue', 'yellow']}
  handleSelection={this.selectColor}
  selection={this.state.color}
  defaultText='Select a color'
  name='color'
/>
```

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

#### TextArea

######Props -

- `label` - string used for the label element of the input
- `inputChange` **(required)** - function that determines what happens when the input value has changed, takes a single argument of the event object
- `value` **(required)** - string for the value of the input

######Example -

```
<TextArea
  label="Form Item Label"
  placeholder="test placeholder text"
  value={this.state.textArea}
/>
```

---

#### TextInput

######Props -

- `label` - string used for the label element of the input
- `placeholder` - optional string used to determine the placeholder text for an input
- `inputChange` **(required)** - function that determines what happens when the input value has changed, takes a single argument of the event object
- `value` **(required)** - string for the value of the input
- `status` - object that is passed into the component to provied an `error` or `success` state, accompanied by a `message`. Both the className and message are required in the object. Example below:
  ```
  { className: "error", message: "error!" }
  ```
- `name` **(required)** - string used as the field name

######Example -

```
<TextInput
  label="Form Item Label"
  placeholder="test placeholder text"
  name="test"
  status=""
  value={this.state.test}
/>
```

---

#### Tabs

######Props -

- `selected` - number indicating the default selected tab on load by its index - defaults to 0
- `fullWidth` - boolean used for determining the width of the tabs component
- `children` **(required)** - components rendered inside the individual tabs, should be nested within the component itself

######Example -

```
  <Tabs
    selected={1}
    fullWidth={true}
  >
    <p>I am the first tab</p>
    <p>I am the second tab</p>
    <p>I am the third tab</p>
  </Tabs>
```

---

#### Tooltips

######Props -

######Example -
