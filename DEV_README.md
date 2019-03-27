## Terra Component Library Developer Notes

#### Getting Started

- Clone down the codebase
- cd into the new folder `cd terra-component-lib`
- Install dependencies - `npm install`
- Run Storybook - `npm run storybook`

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

#### Resources and Libraries

- [Storybook.js](https://storybook.js.org/) - Open source tool for isolated UI component development
- [React.js](https://reactjs.org/) - JavaScript Framework/Library
- [Enyzme](https://airbnb.io/enzyme/) - JavaScript testing utility for React for testing React component output
- [Jest](https://jestjs.io/docs/en/getting-started) - JavaScript testing framework for snapshot and, spy, and mock testing methods
- [The Basics of Testing a React Component](https://levelup.gitconnected.com/the-basics-of-testing-a-react-component-2ff635c99044) - Article on basic React component testing syntax and methodology
