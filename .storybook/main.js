module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "@whitespace/storybook-addon-html",
  ],
  staticDirs: ["../src/assets"],
  core: {
    builder: "webpack5",
  },
};
