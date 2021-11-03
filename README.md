[![Build and Deploy Storybooks](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/build-and-deploy-storybooks.yml/badge.svg)](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/build-and-deploy-storybooks.yml)
![Version](https://img.shields.io/github/package-json/v/dts-stn/decd-design-system)
[![Documentation Tool](https://img.shields.io/badge/Documentation%20Tool-storybooks-pink)](https://dts-stn.github.io/DECD-Design-System/master)

# DECD Design System Component Library 🎨

This repository contains the source code for the React component library which corresponds to DECD designs following the [canada.ca guidelines](https://www.canada.ca/en/government/about/design-system.html).

This library contains reusable components that are accessible and can be used across DECD products in order to ensure brand and design consistency and to speed up development through reusability.

## Using this Package in Your Project 🤓

The package is hosted in github packages. To use it simply install it as one of your dependencies

First if you don't already have a personal access token;

- log into your github account
- go to account settings -> developer settings -> personal access token
- click on "Generate new token"
- for the permissions, select atleast "read:packages"

Once you've created your token, make sure to copy it for the next step

Create a `.npmrc` file in the same directory as your `package.json` with the following content.

```text
@dts-stn:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken={YOUR_PERSONAL_ACCESS_TOKEN}
```

This specifies that any package scoped @dts-stn should come from the github npm registry (where this package is located).

Then install the package using this command

```bash
$ npm install --save @dts-stn/decd-design-system
```

**Important Note** Do not commit your authToken to github. This token shouldn't be shared with others!

Once you've installed the package remove the second line of text from the
`.npmrc` file. Your file should now look like this;

```text
@dts-stn:registry=https://npm.pkg.github.com
```

You can then import the components you wish to use anywhere in your project

```js
import { Component } from "@dts-stn/decd-design-system";
```

## Developing this Package 👨🏽‍💻👩🏽‍💻

### Getting Started

[Install Nodes.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```bash
# Install Packages
$ npm install
```

### Developing and Documenting Components 📝

This project uses [storybook](https://storybook.js.org/) to document and provide a playground to visually see components in action while you are developing them. To run storybook, run the command below from the root directory

```bash
# Start dev environment
$ npm run storybook
```

### Testing Strategies 🧪

This project uses Jest and the React Testing Library for testing. We've decided to use Jest as it is a widely used testing tool and provides sufficient resources for testing a component library. The React Testing Library provides useful helpers to further push the flexibility of the jest testing tool. Some example test cases include;

- Testing components with multiple styles (ex. button component with different button styles) [src/components/ActionButton.test.js](src/components/ActionButton.test.js)
- Components styles are correctly rendered (Dimensions, Color, Fontstyle, Fontsize, etc) line 12 [src/components/Banner.test.js](src/components/Banner.test.js)
- Clickable components (ex. button component has an onclick prop) line 17 [src/components/Menu.test.js](src/components/Menu.test.js)
- Rendering with different input props line 19 [src/components/TextField.test.js](src/components/TextField.testjs)

To run tests simply use the following command in the root directory

```bash
# run tests
$ npm run test
```

For more information on tools and resources refer to our [wiki page](https://github.com/DTS-STN/DECD-Design-System/wiki#testing-documentation)

### Accessibility Testing Strategies

**Important Note:** we are testing for [WCAG 2.1 Level AA compliance](https://www.w3.org/TR/WCAG21/) according to the [Standard on Web Accessibility](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=23601)

We are using multiple tools and steps to do accessibility testing, as no one tool is capable of checking for all accessibility concerns.

1. We are using the [Storybook Accessibility Addon](https://storybook.js.org/blog/accessibility-testing-with-storybook/) as our main tool for accessibility testing. The Addon uses the Axe accessibility engine developed by Deque Systems. Axe is run on each component in Storybook and the addon will provide a list of accessibility violations, vulnerabilities and links to documentaion to help fix the violations. To use, simply run Storybook locally.

2. Along with Axe we are also preforming manual tests to check for accessibility concerns and automated testing done by Jest-axe. Jest-axe is time efficient but only covers about 30% of unit test cases.

   The following manual tests should be completed on each component:

   - Zoom content to 200% to ensure it is readable
   - Tab through content using keyboard only
   - Verify new content using a screen reader

   </br>

3. Jest-axe is ran along with other unit tests. To run unit tests follow instructions listed under the [Testing Strategies 🧪](#Testing-Strategies-🧪) section. The following is an example test case:

   - Passing the Action Button Props through jest-axe tool line 73 [src/components/ActionButton.test.js](src/components/ActionButton.test.js)

  </br>

4. We are using multiple screen reader tools, too test on the different browsers specified in the [Browser & Device Testing](#browser-&-device-testing) section below. The following link contains screen reader tools for the different devices https://dequeuniversity.com/screenreaders/

   Summary of tools:

   - Voice over on Mac
   - NVDA on Windows for Firefox, Chrome, Edge
   - JAWS on Windows for Internet Explorer, Firefox, Chrome, Edge
   - Silktide for chrome

   </br>
   Any tool listed above or in the dequeuniversity link are acceptable to use for testing. Every browser should be tested with atleast 1 screen reader. tool.

For more information on accessibility tools and resources refer to our [wiki page](https://github.com/DTS-STN/DECD-Design-System/wiki#accessibility-documentation)

### Browser & Device Testing

We will be building components for mobile first, but also supporting web browsers and all screen sizes.

Testing will be done manually, to confirm components are displaying correctly on different web browsers. Based on data collected, we will be supporting and testing on the following 3 most used browsers (Make sure to test on atleast one of the given versions listed under each web browser);

- Google Chrome
  - Version 80, 81, 85
- Safari
  - Version 12.1, 13, 13.1, 14
- Internet Explorer
  - Version 11
- Edge
  - Version 17, 18, 87, 89

### Pull Request Procedures

**Branching Strategy:**

| Branch   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Associated Github Actions                                         |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| master   | Production branch. Triggers a build to Storybook & publishes a new npm package release.                                                                                                                                                                                                                                                                                                                                                                                                                                      | Publish Package on Release </br></br> Build and Deploy Storybooks |
| hotfix   | Can be created off of master to allow for immediate fixes to bugs and will not affect current development. Any changes should be pulled back into develop and feature branches                                                                                                                                                                                                                                                                                                                                               |                                                                   |
| release  | Final culmination of all branches that will be used to test beta versions of the new release. After testing is complete, release will be merged into master.                                                                                                                                                                                                                                                                                                                                                                 | Generate Pre-Release </br></br>Build and Deploy Storybooks        |
| develop  | Culmination of feature branches                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Build and Deploy Storybooks                                       |
| features | Created off of develop to work on new features locally that are intended for the next release. Each feature branch should be prefixed by the relevant Jira issue and component ID (if applicable), eg. DS-56-A003-Footer.</br></br> Feature branches should be merged into develop using a PR. Each PR should have at least one person review it before it can be merged. Check out [these tips](https://github.com/DTS-STN/DECD-Design-System/wiki#code-review-helpful-tips) for giving productive and thoughtful feedback. | Build and Deploy Storybooks on PR                                 |

### Playground ⛹🏽‍♀️⛹🏽‍♂️

Sometimes it's helpful to see a component in an actual application being rendered in the browser. This project includes a create-react-app application with the decd-design-system package being installed via a symlink in the node modules thus simulating a client project. To run this project

First run rollup in watch mode

```bash
$ npm run build-watch
```

This will rebuild the bundle everytime you make a change to the package code.

You can then run the playground application in a separate shell.

Starting from the root directory, run the following commands in the order shown (**Reminder:** npm install if it's your first time using the playground)

```bash
$ cd playground && npm run start
```

### Building the Package 👷🏽‍♀️👷🏽

This package uses babel and rollup to transpile and create production bundles which are generated in the `/dist` folder at the root level of the project. To build the production bundle at any time simply run the following command

```bash
$ npm run build
```

Rollup looks at the following file [src/index.js](src/index.js) to determine what it should include in the production bundle... as such only import and export things in this file that you want to be included, otherwise do not touch this file.
