## Terra Component Library Developer Notes

#### Getting Started

- clone down the codebase
- cd into the new folder `cd terra-component-lib`
- install dependencies - `npm install`
- run Storybook - `npm run storybook`

#### File Structure

The `src` folder contains most of what you'll be working with for the project.

- `/src/lib` - this folder will contain the component library in development.
- `/src/stories` - this folder will contain files related to storybook logic that we will need to write as we develop new components. See the examples in `/src/stories/index.js` for a general idea on syntax and logic required for this. Writing stories is pretty similar to writing React unit test, so once your familiar with that, it shouldn't be too difficult to manage.

New components placed in `/src/lib` should be in their own folder with the following structure:

- `src/lib/[COMPONENT_NAME]/[COMPONENT_NAME].js`
- `src/lib/[COMPONENT_NAME]/[COMPONENT_NAME].scss`
- `src/lib/[COMPONENT_NAME]/[COMPONENT_NAME].test.js`

###### Folders to ignore

- `.storybook` - this directory is setup simply for storybook configuration and can be ignored.
- `public` - this directory is generally used for housing images and the main user-facing `index.html` file, but as this is a component library and not an actual application, we won't be concerned with this.

#### Storybook

Storybook is an open source tool for developing UI components in isolation for React and other popular JavaScript frameworks. It makes building UIs organized and efficient. Stories are written in `src/stories/index.js` with a syntax not unlike common JavaScript unit tests. See the [Storybook docs](https://storybook.js.org/docs/basics/introduction/) for more information on how to use the Storybook API.

#### Testing Methodology

To run the test suite, use `npm test`. To check for test coverage, use `npm test -- --coverage`. Avoid making PRs on components with less than 100% coverage if possible. Non JavaScript files or files that are not placed in `./src/lib/components` will be ignored by the test suite, so be mindful of where you create files if you want them tested. If you would like to add files to the coverage report that are outside these folders, add a path to these files in `package.json` in the `collectCoverageFrom` array.

#### Prop Type Verififcation

This library uses the propTypes library for type checking and for developer error messaging on required props. All components with props should import the module using:

`import PropTypes from "prop-types";`

See `src/lib/Button/Button.js` or `src/lib/Alert/Alert.js` for examples on syntax. Prop type checking should happen at the bottom of the file, below the export statement.

Components that do not use props do not need to use the prop-types API.

#### Resources and Libraries

- [Storybook.js](https://storybook.js.org/) - Open source tool for isolated UI component development
- [React.js](https://reactjs.org/) - JavaScript Framework/Library
- [Enyzme](https://airbnb.io/enzyme/) - JavaScript testing utility for React for testing React component output
- [Jest](https://jestjs.io/docs/en/getting-started) - JavaScript testing framework for snapshot and, spy, and mock testing methods
- [The Basics of Testing a React Component](https://levelup.gitconnected.com/the-basics-of-testing-a-react-component-2ff635c99044) - Article on basic React component testing syntax and methodology
- [Testing Component Methods that Return JSX in React](https://medium.com/@relasine/testing-component-methods-that-return-jsx-in-react-dc8032e3cf22) - Article on how to test iterative methods that return JSX in React.
- [prop-types](https://www.npmjs.com/package/prop-types) - You can use prop-types to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they don’t match.
