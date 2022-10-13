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

AuthenticatedEN.args = {
  isAuthenticated: true,
  lang: "en",
  menuList: [
    { key: "dashKey", value: "My dashboard", path: "/" },
    { key: "securityKey", value: "Security Settings", path: "/" },
    { key: "profileKey", value: "Profile", path: "/" },
    { key: "outKey", value: "Sign out", path: "/" },
  ],
  onSignOut: () => {},
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
