import "../src/styles/tailwind.css";
import "../src/styles/fonts.css";
import "../src/styles/forms.css";
import "../src/styles/header.css";
import "../src/styles/menu.css";
import "../src/styles/globals.css";
import "../src/icomoon/style.css";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...MINIMAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
  },

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Documentation",
        "Styles",
        "Components",
        "Story Examples",
        "In Development",
      ],
    },
  },
  controls: { expanded: true },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  },
};
