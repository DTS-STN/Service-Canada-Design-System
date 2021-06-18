[![Build and Deploy Storybooks](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/build-and-deploy-storybooks.yml/badge.svg)](https://github.com/DTS-STN/DECD-Design-System/actions/workflows/build-and-deploy-storybooks.yml)
![Version](https://img.shields.io/github/package-json/v/dts-stn/decd-design-system)
[![Documentation Tool](https://img.shields.io/badge/Documentation%20Tool-storybooks-pink)](https://dts-stn.github.io/DECD-Design-System/master)


# DECD Design System Component Library 🎨

This repository contains the source code for the React component library which corresponds to DECD designs following the [canada.ca guidelines](https://www.canada.ca/en/government/about/design-system.html).

This library contains reusable components that are accessible and can be used across DECD products in order to ensure brand and design consistency and to speed up development through reusability.

## Using this Package in Your Project 🤓

The package is hosted in github packages. To use it simply install it as one of your dependencies

First create a `.npmrc` file in the same directory as your `package.json` with the following content.

```text
@dts-stn:registry=https://npm.pkg.github.com
```

This specifies that any package scoped @dts-stn should come from the github npm registry (where this package is located).

Then install the package using this command

```bash
$ npm install --save @dts-stn/decd-design-system
```

You can then import the components you wish to use anywhere in your project

```js
import { Component } from "@dts-stn/decd-design-system";
```

## Developing this Package 👨🏽‍💻👩🏽‍💻

### Building the package 👷🏽‍♀️👷🏽

This package uses babel and rollup to transpile and create production bundles which are generated in the `/dist` folder at the root level of the project. To build the production bundle at any time simple run the following command

```bash
$ npm run build
```

Rollup looks at the following file [src/index.js](src/index.js) to determine what it should include in the production bundle... as such only import and export things in this file that you want to be included, otherwise do not touch this file.

### Testing 🧪

This project uses jest for testing. To run tests simply run the following command

```bash
$ npm run test
```

### Documentation 📝

This project uses storybooks to document and provide a playground to visually see components in action. To run storybooks

```bash
$ npm run storybook
```

### Playground ⛹🏽‍♀️⛹🏽‍♂️

Sometimes it's helpful to see a component in an actual application being rendered in the browser. This project included a create-react-app application with the decd-design-system package being installed via a symlink in the node modules thus simulating a client project. To run this project

First run rollup in watch mode

```bash
$ npm run build-watch
```

This will rebuild the bundle everytime you make a change to the package code.

You can then run the playground application in a separate shell

```bash
$ cd playground && npm run start
```
