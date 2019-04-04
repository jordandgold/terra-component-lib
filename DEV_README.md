# Terra Component Library Developer Notes

### Getting Started -

- clone down the codebase - `git clone git@bitbucket.org:creativestrategy/terra-component-lib.git`
- cd into the new folder - `cd terra-component-lib`
- install dependencies - `npm install`
- run Storybook - `npm run storybook`

### File Structure -

The `src` folder contains most of what you'll be working with for the project.

- `/src/lib` - this folder will contain the component library in development as well as associated global styles.
- `/src/stories` - this folder will contain files related to storybook logic that we will need to write as we develop new components. See the examples in `/src/stories/index.js` for a general idea on syntax and logic required for this. Writing stories is pretty similar to writing React unit test, so once you're familiar with that, it shouldn't be too difficult to manage.

New components placed in `/src/lib` should be in their own folder with the following structure:

- `src/lib/COMPONENT_NAME/COMPONENT_NAME.js`
- `src/lib/COMPONENT_NAME/COMPONENT_NAME.scss`
- `src/lib/COMPONENT_NAME/COMPONENT_NAME.test.js`

Once you've run a snapshot test on the component, it'll add an additional snapshot directory and file to the component directory:

- `src/lib/COMPONENT_NAME/__snapshots__/COMPONENT_NAME.test.js.snap`

##### Adding a Component to the Library

All components ready to ship should be imported into `/dist/index.js` and then exported from within to be easily accessible once bundled. This file will act as the hub for all component library importing. Example:

`import Alert from "./components/Alert/Alert";`
`export { Alert }`

##### Folders and Files to ignore

- `.storybook` - this directory is setup simply for storybook configuration and can be ignored.
- `/public` - this directory is generally used for housing images and the main user-facing `index.html` file, but as this is a component library and not an actual application, we won't be concerned with this.

### Storybook -

Storybook is an open source tool for developing UI components in isolation for React and other popular JavaScript frameworks. It makes building UIs organized and efficient. Stories are written in `src/stories/index.js` with a syntax not unlike common JavaScript unit tests. See the [Storybook docs](https://storybook.js.org/docs/basics/introduction/) for more information on how to use the Storybook API.

##### Example Syntax

```
storiesOf("Hamburger", module).add("Hamburger", () => {
  <Hamburger onSelect={action("Selection made!")} options={['Home', 'About', 'Contact']}>
})
```

When creating multiple instances of a component within a single story, they must all be wrapped in a single parent element:

```
storiesOf("Alert", module).add("Alerts", () => (
  <div>
    <Alert onClick={action("Clicked!")} text="Default Alert" />
    <Alert onClick={action("Clicked!")} text="Warning Alert" type="warning" />
    <Alert onClick={action("Clicked!")} text="Danger Alert" type="danger" />
    <Alert onClick={action("Clicked!")} text="Success Alert" type="success" />
  </div>
));
```

If you prefer a simpler sandbox approach, you can simply import your components into `App.js` like normal and manually test them there.

### Testing Methodology

To run the test suite, use `npm test`. To check for test coverage, use `npm test -- --coverage`. Avoid making PRs on components with less than 100% coverage if possible. Non JavaScript files or files that are not placed in `./src/lib/components` will be ignored by the test suite, so be mindful of where you create files if you want them tested. If you would like to add files to the coverage report that are outside these folders, add a path to these files in `package.json` in the `collectCoverageFrom` array.

You can find links to Medium articles on the most common types of tests for this library in the Resources and Libraries section of this document.

##### Test Setup -

There is a file in the `/src` directory called `setupTests.js`. This file is used to configure Enzyme with React 16. It is effectively a `beforeEach()` for every individual test file. This file must be manually setup and is not part of the Create React App boilerplate. This code will not really need to be touched unless the project itself is updated to later versions of React with breaking changes (i.e. React 17).

If, for some reason, this file is ever accidentally deleted, its contents should look like this:

```
const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });
```

Unit tests should be written in the `COMPONENT_NAME.test.js` file. All files require the following imports to function correctly:

```
import React from 'react'
import { shallow } from 'enzyme'
import COMPONENT_NAME from './COMPONENT_NAME'
```

The `shallow()` method from Enzyme is required to virtually render a shallow copy of the component to be tested. Shallow renders will include a reference to any child components, but not an actual copy of the child or downstream grandchildren. If, for some reason, you need to run unit or integration testing involving fully-rendered child components, instead import the `mount()` method from enzyme. Note that this will rarely be required.

##### Test Structure -

After importing, you'll want to wrap the entire test itself in a `describe()` block and declare (without assigning) `wrapper`. Then assign wrapper inside a `beforeEach()` to a shallow copy of your component. This will effectively create a new copy of the component for every individual unit test so that one test doesn't interfere with another.

```
describe('COMPONENT_NAME', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<COMPONENT_NAME >)
  })
})
```

Additionally, component methods and associated logic (like if the method is called as a callback in an event listener) should themselves by wrapped in their own `describe()` block to make them easier to parse in the testing suite.

```
describe('onChange', () => {
  it('should call onChange when the input field changes with the appropriate params', () => {
    const spy = wrapper.instance().spyOn('onChange')
    const expected = 'test string'
    wrapper.instance().forceUpdate()

    wrapper.find('.text-input').simulate('change', 'test string')

    expect(spy).toHaveBeenCalledWith(expected)
  })
})
```

##### Testing Sub-Components within the Same Main File

If you are leveraging a smaller sub-component within a larger main component file, you'll need to export it so that it can be exported for testing (recommended) or call `mount()` instead of `shallow()` on the main component so that they can be tested together (not recommended). Import these sub-components and destructure them within the same test file as its parent component and put it in its own `describe()` block with its own snapshot test and other necessary `it()` blocks.

######In your component file:

```
export const ListItem = (props) => {
  return (
    <li className='list-item' onClick={() => props.onClick(props.text)}>{props.text}</li>
  )
}
```

######In your test file:

```
import UnorderedList, { ListItem } from './UnorderedList'

describe('UnorderedList' () => {
  ...
  describe('ListItem', () => {

    let listWrapper;
    let mockOnClick;

    beforeEach(() => {
      mockOnClick = jest.fn()
      listWrapper = shallow(<ListItem onClick={mockOnClick} text='testing text' /> )
    })

    it('should match the snapshot', () => {
      expect(listWrapper).toMatchSnapshot();
    })

    it('should call onClick when clicked with the correct params', () => {
      const expected = 'testing text'
      listWrapper.find('.list-item').simulate('click', 'testing text')

      expect(mockOnClick).toHaveBeenCalledWith(expected);
    })
  })

})
```

##### What to test -

React testing will generally involve testing the following:

- That a method is called, and sometimes that it is called with something specific
  - This should happen either when a method is called by another method or when is used as a callback by an event listener
  - This means testing both methods that are written inside the tested component using `jest.spyOn()` and methods that are called by the component that are passed down as props using `jest.mock()`
- That a method returns, and sometimes that it returns something specific
- When something changes state
- That all conditional branches create the desired result
- When a method returns some JSX
  - This process requires that the JSX being returned is rendered by itself with `shallow()` and then mutated with `html()` in order to make it human-readable. See the article in the Resources section for a detailed how-to.

##### What not test -

Where unit testing is concerned, you do not worry about testing things that you did not write. This will include lifecycle methods like `componentDidMount()` or components or methods brought in from outside libraries.

#### Prop Type Validation -

This library uses the propTypes library for type checking and for developer error messaging on required props. All components with props should import the module using:

`import PropTypes from "prop-types";`

Prop type checking should happen at the bottom of the file, below the export statement. Any specific prop that is required to make a component minimally function will need to have the `.isRequired` in their value.

##### Example: Deep Type-Checking Objects -

```
Object.propTypes = {
  button: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  }),
};
```

##### Example: Deep Type-Checking Arrays -

```
Array.propTypes = {
  ourArray: PropTypes.arrayOf(PropTypes.string).isRequired
}
```

</br>
Components that do not use props do not need to use the prop-types API.

#### Creating a Build -

To run the build process, run `npm run build`. This will delete any existing builds in the directory and create a new one in the root labeled `/dist`. This folder will contain all our components, the `index.js` for easy access once the package is imported into a project, and all our style data.

The library bundling is done using Babel with `@babel/core` and `@babel/cli` as dependencies. Note that installing normal `babel-cli` will not work with this library as it has been bootstrapped with Create React App 2.0 (this caused a great deal of problems and confusion in initially getting the build process working).

#### Deploying the Build -

To deploy a build to npm, you first need to login from the command line with `npm login`. Consult Brandon White for credentials. After you've successfully logged in, deploy the project to npm using `npm deploy`. This will take the bundled `dist` folder and upload it to npm.

### Importing Terra Component Library into a Project -

To install the library into a project, use `npm i --save terra-component-lib`. Import individual components by destructuring them. Example:

`import { Button } from 'terra-component-lib';`

Then simply call the component inside your JSX and pass in the necessary props:

`<Button text="Button" onClick={this.handleClick} className="ter-button--primary--1" />`

### Resources and Libraries -

- [Storybook.js](https://storybook.js.org/) - Open source tool for isolated UI component development
- [React.js](https://reactjs.org/) - JavaScript Framework/Library
- [Enyzme](https://airbnb.io/enzyme/) - JavaScript testing utility for React for testing React component output
- [Jest](https://jestjs.io/docs/en/getting-started) - JavaScript testing framework for snapshot and, spy, and mock testing methods
- [The Basics of Testing a React Component](https://levelup.gitconnected.com/the-basics-of-testing-a-react-component-2ff635c99044) - Article on basic React component testing syntax and methodology
- [Testing Component Methods that Return JSX in React](https://medium.com/@relasine/testing-component-methods-that-return-jsx-in-react-dc8032e3cf22) - Article on how to test methods that return JSX in React.
- [prop-types](https://www.npmjs.com/package/prop-types) - You can use prop-types to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they don’t match. This is important for developer empathy when importing and using the library.
