import React from "react";
import { Menu } from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const AuthenticatedEN = Template.bind({});
export const AuthenticatedFR = Template.bind({});
export const NotAuthenticatedEN = Template.bind({});
export const NotAuthenticatedFR = Template.bind({});
export const CustomComponentLinks = Template.bind({});

function CustomLinkComponent({ children, ...props }) {
  return <a {...props}>{children}</a>;
}

AuthenticatedEN.args = {
  isAuthenticated: true,
  lang: "en",
  menuList: [
    { key: "dashKey", value: "My dashboard", path: "/" },
    { key: "securityKey", value: "Security Settings", path: "/" },
    { key: "profileKey", value: "Profile", path: "/" },
    { key: "outKey", value: "Sign out", path: "/" },
  ],
};

AuthenticatedFR.args = {
  isAuthenticated: true,
  lang: "fr",
};

NotAuthenticatedEN.args = {
  isAuthenticated: false,
  lang: "en",
};

NotAuthenticatedFR.args = {
  isAuthenticated: false,
  lang: "fr",
};

CustomComponentLinks.args = {
  isAuthenticated: true,
  lang: "en",
  menuList: [
    {
      key: "customComponent",
      value: "Custom Component",
      path: "/",
      component: CustomLinkComponent,
    },
  ],
};
