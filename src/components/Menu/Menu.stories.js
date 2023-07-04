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
  dataGcAnalyticsCustomClickInstitutionVariable: "Institution",
  lang: "en",
  menuList: [
    {
      key: "dashKey",
      value: "My dashboard",
      id: "dashboard",
      path: "/",
      showIcon: false,
    },
    {
      key: "profileKey",
      value: "Profile",
      id: "prodfile",
      path: "/",
      showIcon: false,
    },
    {
      key: "securityKey",
      value: "Security settings",
      id: "security",
      path: "/",
      showIcon: false,
    },
    {
      key: "craAccountKey",
      value: "Switch to CRA My Account",
      id: "cra",
      path: "/",
      showIcon: false,
    },
    {
      key: "outKey",
      value: "Sign out",
      id: "signout",
      path: "/",
      showIcon: true,
    },
  ],
};

AuthenticatedFR.args = {
  isAuthenticated: true,
  dataGcAnalyticsCustomClickInstitutionVariable: "Institution",
  lang: "fr",
  menuList: [
    {
      key: "dashKey",
      value: "Mon tableau de bord",
      id: "dashboard",
      path: "/",
      showIcon: false,
    },
    {
      key: "profileKey",
      value: "Profil",
      id: "prodfile",
      path: "/",
      showIcon: false,
    },
    {
      key: "securityKey",
      value: "Paramètres de sécurité",
      id: "security",
      path: "/",
      showIcon: false,
    },
    {
      key: "craAccountKey",
      value: "Aller à Mon dossier de l’ARC",
      id: "cra",
      path: "/",
      showIcon: false,
    },
    {
      key: "outKey",
      value: "Se déconnecter",
      id: "signout",
      path: "/",
      showIcon: true,
    },
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
