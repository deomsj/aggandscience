# Data Vis interview questions

This repo utilizes [react](https://www.npmjs.com/package/react), [react-table](https://www.npmjs.com/package/react-table), [recharts](https://www.npmjs.com/package/recharts), [material-ui](https://www.npmjs.com/package/@material-ui/core), [csv-parser](https://www.npmjs.com/package/csv-parser), [react-router-dom](https://www.npmjs.com/package/react-router-dom) to provide users multiple ways of interacting with the data made available in this file: [rfc data 2020 csv](src/data/initial/data.csv)

## Existing Dashboard and Graphing services

There are many data visualization tools to choose from, depending on the context such as the desired functionality that our users are looking for and budgetary constraints I'd recommend leveraging simple but reliable tools such as google charts:

- https://developers.google.com/chart
- https://www.webdatarocks.com/doc/integration-with-google-charts/

When we wish to provide a more custom interface for users to analyze and interact with the data, we can leverage React and D3.js libraries such as the [recharts](https://www.npmjs.com/package/recharts) library that I used in this small demo application, or for more custom visualizations go with pure [D3.js](https://d3js.org/) solutions.

## Author

Jesse DeOms - jesse.deoms@gmail.com

## Code Organization

- [Entry point](src/index.js) - mount react application to the DOM
- [Navigation / Routing](src/App.js) - Render different components based on URL
- [UI Components](src/components) - React component definitions for user interface
- [Transform data](src/data/generateJSON.js) - this script reads in the initial csv data file and generates the two JSON files that will be imported and used by the react components to generate the UI. To create or update [this JSON file](src/data/generated/data.json) when new data becomes available in the csv format, use node to run this script from the project's root directory with the following command: `node src/data/generateJSON.js`.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

- `yarn start`

  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

- `yarn build`
  - Builds the app for production to the `build` folder.
  - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - The app is ready to be deployed!
