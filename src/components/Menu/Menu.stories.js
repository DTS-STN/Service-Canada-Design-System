import React from "react";
import { Menu } from "./Menu";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";

export default {
  title: "Components/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args}></Menu>;

export const AuthenticatedEN = Template.bind({});
export const AuthenticatedFR = Template.bind({});
export const NotAuthenticatedEN = Template.bind({});
export const NotAuthenticatedFR = Template.bind({});
AuthenticatedEN.parameters = {
  viewport: {
    viewports: {
      desktop: {
        name: "Desktop",
        styles: {
          width: "1200px",
          height: "800px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "desktop",
  },
};

AuthenticatedEN.args = {
  menuHeaderTitle: EN.menuHeaderTitle,
  menuButtonTitle: EN.menuButtonTitle,
  isAuthenticated: true,
  lang: "en",
  items: [
    {
      link: "#",
      text: EN.menuItems1,
    },
    {
      link: "#",
      text: EN.menuItems2,
    },
    {
      link: "#",
      text: EN.menuItems3,
    },
  ],
};
AuthenticatedFR.parameters = {
  viewport: {
    viewports: {
      desktop: {
        name: "Desktop",
        styles: {
          width: "1200px",
          height: "800px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "desktop",
  },
};

AuthenticatedFR.args = {
  menuHeaderTitle: FR.menuHeaderTitle,
  menuButtonTitle: FR.menuButtonTitle,
  isAuthenticated: true,
  lang: "fr",
  items: [
    {
      link: "#",
      text: FR.menuItems1,
    },
    {
      link: "#",
      text: FR.menuItems2,
    },
    {
      link: "#",
      text: FR.menuItems3,
    },
  ],
};
NotAuthenticatedEN.parameters = {
  viewport: {
    viewports: {
      desktop: {
        name: "Desktop",
        styles: {
          width: "1200px",
          height: "800px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "desktop",
  },
};

NotAuthenticatedEN.args = {
  menuHeaderTitle: EN.menuHeaderTitle,
  menuButtonTitle: EN.menuButtonTitle,
  isAuthenticated: false,
  lang: "en",
  items: [
    {
      link: "#",
      text: EN.menuItems1,
    },
    {
      link: "#",
      text: EN.menuItems2,
    },
    {
      link: "#",
      text: EN.menuItems3,
    },
  ],
};
NotAuthenticatedFR.parameters = {
  viewport: {
    viewports: {
      desktop: {
        name: "Desktop",
        styles: {
          width: "1200px",
          height: "800px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "desktop",
  },
};

NotAuthenticatedFR.args = {
  menuHeaderTitle: FR.menuHeaderTitle,
  menuButtonTitle: FR.menuButtonTitle,
  isAuthenticated: false,
  lang: "fr",
  items: [
    {
      link: "#",
      text: FR.menuItems1,
    },
    {
      link: "#",
      text: FR.menuItems2,
    },
    {
      link: "#",
      text: FR.menuItems3,
    },
  ],
};
