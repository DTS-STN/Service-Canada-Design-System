[![Build and Deploy Storybooks](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/build-and-deploy-storybooks.yml/badge.svg)](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/build-and-deploy-storybooks.yml)
![Version](https://img.shields.io/github/package-json/v/dts-stn/decd-design-system)
[![Documentation Tool](https://img.shields.io/badge/Documentation%20Tool-storybooks-pink)](https://dts-stn.github.io/DECD-Design-System/main)

# DECD Design System Component Library 🎨

This repository contains the source code for the React component library which corresponds to DECD designs following the [canada.ca guidelines](https://www.canada.ca/en/government/about/design-system.html).

This library contains reusable components that are accessible and can be used across DECD products in order to ensure brand and design consistency and to speed up development through reusability.

## Using this Package in Your Project 🤓

The package is hosted in npm public registry. To use it simply install it as one of your dependencies

This specifies that any package scoped @dts-stn should come from the github npm registry (where this package is located).

**Step 1:** Install the package using this command

```bash
$ npm install --save @dts-stn/decd-design-system
```

**Step 2:** You can now import the components you wish to use anywhere in your project

```js
import { Component } from "@dts-stn/decd-design-system";
```

**Important Note** To see available components please refer to our storybook page [DECD Design System Storybook](https://dts-stn.github.io/DECD-Design-System/main). Make sure to view the **Doc tab** of each component to see important information about how to use components and the props you can pass into them.

## Developing this Package 👨🏽‍💻👩🏽‍💻

### Tech Stack

| Layer                 | Stragety                                      |
| :-------------------- | :-------------------------------------------- |
| Web Client Tech       | HTML5, CSS3+, JS                              |
| Framework             | React                                         |
| Version Control       | Git                                           |
| Pre-commit Git Hooks  | Husky                                         |
| JS Linter             | ESLint                                        |
| Code Formatter        | Prettier                                      |
| JS Compiler           | Babel                                         |
| Task Runner           | NPM Scripts                                   |
| Module Bundler        | Rollup                                        |
| CSS & JS Integration  | PostCSS & Tailwind CSS                        |
| Packaging Stragety    | NPM Packages                                  |
| Dev Environment       | Storybook                                     |
| Unit & React Testing  | Jest (React Testing Library)                  |
| Accessibility Testing | Jest-axe, Storybook Accessibility Addon (axe) |
| CI/CD Pipeline        | Github Actions                                |

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

To manually run tests simply use the following command in the root directory

```bash
# run tests
$ npm run test
```

The test script is automatically run when creating a new pull request.

For more information on tools and resources refer to our [wiki page](https://github.com/DTS-STN/DECD-Design-System/wiki#testing-documentation)

### Accessibility Testing Strategies

**Important Note:** we are testing for [WCAG 2.1 Level AA compliance](https://www.w3.org/TR/WCAG21/) according to the [Standard on Web Accessibility](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=23601)

We are using multiple tools and steps to do accessibility testing, as no one tool is capable of checking for all accessibility concerns.

1. We are using the [Storybook Accessibility Addon](https://storybook.js.org/blog/accessibility-testing-with-storybook/) as our main tool for accessibility testing. The Addon uses the Axe accessibility engine developed by Deque Systems. Axe is run on each component in Storybook and the addon will provide a list of accessibility violations, vulnerabilities and links to documentaion to help fix the violations. To use, simply run Storybook locally.

2. We are also preforming manual tests to check for accessibility concerns. The following manual tests should be completed on each component:

   - Zoom content to 200% to ensure it is readable
   - Tab through content using keyboard only
   - Verify new content using at least 1 screen reader tool from the following list: https://dequeuniversity.com/screenreaders/

   </br>

3. Jest-axe is ran along with other unit tests. Jest-axe is time efficient but only covers about 30% of unit test cases. To run unit tests follow instructions listed under the [Testing Strategies 🧪](#Testing-Strategies-🧪) section. The following is an example test case:

   - Passing the Action Button Props through jest-axe tool line 73 [src/components/ActionButton.test.js](src/components/ActionButton.test.js)

  </br>

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

### Linting

We are using eslint a11y plugin to check for any accessibility errors and Prettier formatter to clean up/format our code. We use Husky to automate these two processes during the commit process, so we can ensure that our code is checked before pushing any of our work to the repo. These are the most commonly used tools for formatting react projects and have many use cases confirming their reliability.

Whenever any files are committed, prettier formatter will be ran to format and clean up the files before comfirming the commit. Eslint will also automatically be ran at the same point in the process to check for any a11y concerns.

To manually run eslinting and check for accessibility errors run the following command in the root directory

```bash
$ npm run eslint
```

To manually run linting on all files (Prettier formatting) run the following command in the root directory

```bash
$ npm run lint
```

### Pull Request Procedures

**Branching Strategy:**

| Branch   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Associated Github Actions                                         |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| main     | Production branch. Triggers a build to Storybook & publishes a new npm package release.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Publish Package on Release </br></br> Build and Deploy Storybooks |
| hotfix   | Can be created off of main to allow for immediate fixes to bugs and will not affect current development. Any changes should be pulled back into develop and feature branches                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                   |
| release  | Final culmination of all branches that will be used to test beta versions of the new release. After testing is complete, release will be merged into main.                                                                                                                                                                                                                                                                                                                                                                                                                          | Generate Pre-Release </br></br>Build and Deploy Storybooks        |
| develop  | Culmination of feature branches                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Build and Deploy Storybooks                                       |
| features | Created off of develop to work on new features locally that are intended for the next release. Each feature branch should be prefixed by the relevant Jira issue and component ID (if applicable), eg. DS-56-A003-Footer.</br></br> Feature branches should be merged into develop using a PR. Each PR should include an update to the CHANGELOG.md if necessary and have at least one person review it before it can be merged. Check out [these tips](https://github.com/DTS-STN/DECD-Design-System/wiki#code-review-helpful-tips) for giving productive and thoughtful feedback. | Build and Deploy Storybooks on PR                                 |

### Building the Package 👷🏽‍♀️👷🏽

This package uses babel and rollup to transpile and create production bundles which are generated in the `/dist` folder at the root level of the project. To build the production bundle at any time simply run the following command

```bash
$ npm run build
```

Rollup looks at the following file [src/index.js](src/index.js) to determine what it should include in the production bundle... as such only import and export things in this file that you want to be included, otherwise do not touch this file.

### Testing Package Locally

Sometimes it's helpful to test a component your working on in an actual application to test it's import or see it being rendered in the browser. There are a couple of ways you can test our package locally:

1. Siumulating a client project in our code base:

   This project includes a create-react-app application with the decd-design-system package being installed via a symlink in the node modules thus simulating a client project. To run this project

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

2. Simulating a client project in another code base:

   You can create a tarball file based on your local branch to simulate what the decd-design-system package would look like with your new code. To create a tarball file run the following command in the top most folder in your local branch

   ```bash
   $ npm pack
   ```

   This will create a dts-stn-decd-design-system-0.0.0.tgz file in your project.

   Next follow steps 2 - 5 under [Testing a pre-release:](#testing-a-pre-release) to install the tarball file on another chosen application on your local and import individual components just as you would with an npm package.

### Package Release Process

A [pre-release](https://github.com/DTS-STN/DECD-Design-System/releases/tag/latest) is a development build created whenever new components or bug fixes are ready to be tested by other teams before they are released to production as a new version of our npm package. Pre-release assets (a tarball file) that can be used for testing are created every time there is a change to the release branch.

A [release](https://github.com/DTS-STN/DECD-Design-System/packages/847413) is created whenever new components or bug fixes are ready to go to production. Releases should be completed by an member from the DECD Design System team. A new version of our npm package is created on every release.

#### **Creating a pre-release:**

1. Update documentation:

   - Create a new feature branch and add any changes to unreleased section in CHANGELOG.md
   - Merge feature branch into develop
   - Note: If you are repo admin, you can commit any changes to CHANGELOG.md directly to develop </br></br>

2. Create a PR from the delevop branch into the release branch.

3. Once the PR is approved and merged, the [Generate Pre-release](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/generate-pre-release.yml) Github Action will be triggered.

4. A release will be created with the tag ["latest"](https://github.com/DTS-STN/DECD-Design-System/releases/tag/latest) which will include a .tgz asset.

#### **Testing a pre-release:**

To test the pre-release you will be downloading a tarball file onto your local machine to mimic an npm package. Once you download the tarball file, you can install it on your local application and import individual components just as you would with an npm package. Follow the steps below to test components using the pre-release:

1.  Download the asset onto your local machine (can be anywhere on your local).

2.  Go to the root folder of the project/application you want to test the new release on (or the folder with your package.json where you would be downlading our npm package).

3.  Run the below command with the correct version number and path to the .tgz asset. This will install the pre-release package that is sitting on your local.

    ```bash
    $ npm install ~/dts-stn-decd-design-system-0.0.0.tgz
    ```

4.  Start testing out the package by adding a component from the package to your repo (insert link to ).

    ```js
    import { Component } from "@dts-stn/decd-design-system";
    ```

5.  When testing is completed, to ensure you are no longer using the pre-release version of the package, run the below command in your repo with the [current version of the npm package](https://github.com/DTS-STN/DECD-Design-System/packages/847413). This will uninstall the pre-relase .tgz file and reinstall the npm package back in your local project/application.

    ```bash
    $ npm install @dts-stn/decd-design-system
    ```

**Creating a release:**

1. Update documentation:

   - Create a new feature branch
   - Update version number in package.json & package-lock.json
   - Create a dated version entry in CHANGELOG.md and add any changes/fixes/additions
   - Merge feature branch into release
   - Note: If you are repo admin, you can commit any changes to CHANGELOG.md, package.json & package-lock.json directly to release </br></br>

2. Create a PR from the release branch into the main branch.

3. Once the PR is approved and merged, the [Publish Package on Release](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/publish-package-on-release.yml) Github Action will be triggered and a new version (verison number is based on your package.json updates) will be created.

### License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distrubuted under the [MIT](https://github.com/DTS-STN/DECD-Design-System/blob/main/LICENSE.md).

The Canada wordmark and related graphics associated with this distribution are protected under trademark law and copyright law. No permission is granted to use them outside the parameters of the Government of Canada's corporate identity program. For more information, see [Federal identity requirements](https://www.canada.ca/en/treasury-board-secretariat/topics/government-communications/federal-identity-requirements.html).

All content of the Design System Library is available under the [Open Government Licence - Canada](https://open.canada.ca/en/open-government-licence-canada)
