import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
export const EnglishAuth = Template.bind({});
export const FrenchAuth = Template.bind({});

EnglishAuth.args = {
  id: "header",
  dataGcAnalyticsCustomClickInstitutionVariable: "Institution",
  lang: "en",
  menuProps: {
    menuList: [
      { key: "dashKey", value: "My dashboard", path: "/", showIcon: false },
      { key: "profileKey", value: "Profile", path: "/", showIcon: false },
      {
        key: "securityKey",
        value: "Security settings",
        path: "/",
        showIcon: false,
      },
      {
        key: "craAccountKey",
        value: "Switch to CRA My Account",
        path: "/",
        showIcon: false,
      },
      { key: "outKey", value: "Sign out", path: "/", showIcon: true },
    ],
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-en.html",
    displayAlternateLink: false,
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};

FrenchAuth.args = {
  id: "header",
  dataGcAnalyticsCustomClickInstitutionVariable: "Institution",
  lang: "fr",
  menuProps: {
    menuList: [
      {
        key: "dashKey",
        value: "Mon tableau de bord",
        path: "/",
        showIcon: false,
      },
      { key: "profileKey", value: "Profil", path: "/", showIcon: false },
      {
        key: "securityKey",
        value: "Paramètres de sécurité",
        path: "/",
        showIcon: false,
      },
      {
        key: "craAccountKey",
        value: "Aller à Mon dossier de l’ARC",
        path: "/",
        showIcon: false,
      },
      { key: "outKey", value: "Se déconnecter", path: "/", showIcon: true },
    ],
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-fr.html",
    displayAlternateLink: false,
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};

Default.args = {
  id: "header",
  dataGcAnalyticsCustomClickInstitutionVariable: "Institution",
  lang: "fr",
  isAuthenticated: false,
  menuProps: {
    menuList: [
      {
        key: "dashKey",
        value: "Mon tableau de bord",
        path: "/",
        showIcon: false,
      },
      { key: "profileKey", value: "Profil", path: "/", showIcon: false },
      {
        key: "securityKey",
        value: "Paramètres de sécurité",
        path: "/",
        showIcon: false,
      },
      {
        key: "craAccountKey",
        value: "Aller à Mon dossier de l’ARC",
        path: "/",
        showIcon: false,
      },
      { key: "outKey", value: "Se déconnecter", path: "/", showIcon: true },
    ],
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-fr.html",
    displayAlternateLink: false,
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};
