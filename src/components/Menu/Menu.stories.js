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
    { key: "securityKey", value: "Security settings", path: "/" },
    { key: "profileKey", value: "Profile", path: "/" },
    { key: "craAccountKey", value: "Switch to CRA My Account", path: "/" },
    { key: "outKey", value: "Sign out", path: "/" },
  ],
};

AuthenticatedFR.args = {
  isAuthenticated: true,
  lang: "fr",
  menuList: [
    { key: "dashKey", value: "Mon tableau de bord", path: "/" },
    { key: "securityKey", value: "Paramètres de sécurité", path: "/" },
    { key: "profileKey", value: "Profil", path: "/" },
    { key: "craAccountKey", value: "Aller à Mon dossier de l’ARC", path: "/" },
    { key: "outKey", value: "Se déconnecter", path: "/" },
  ],
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
      key: "customComponent1",
      value: "Custom Component 1",
      path: "/",
      component: CustomLinkComponent,
    },
    {
      key: "customComponent2",
      value: "Custom Component 2",
      path: "/",
      component: CustomLinkComponent,
    },
    {
      key: "customComponent3",
      value: "Custom Component 3",
      path: "/",
      component: CustomLinkComponent,
    },
  ],
};
