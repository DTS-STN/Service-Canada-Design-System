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
  globalMenuProps: {
    menuList: [
      {
        key: "dashKey",
        value: "Jobs and the Workplace",
        path: "/",
        showIcon: false,
        itemTitle: "Jobs",
        selected: true,
        items: [
          { key: "1", value: "find a Job" },
          { key: "2", value: "Training" },
          { key: "3", value: "Hiring and managing employees" },
          { key: "4", value: "Starting a business" },
        ],
        mostRequested: [
          { key: "1", value: "View your record of employment" },
          { key: "2", value: "Apply for social insurance number" },
          { key: "3", value: "Hiring foreign workers" },
          { key: "4", value: "Immigrate as a skilled worker" },
        ],
      },
      {
        key: "profileKey",
        value: "Travel and Tourism",
        path: "/",
        showIcon: false,
        selected: false,
      },
      {
        key: "securityKey",
        value: "Business and Industry",
        path: "/",
        showIcon: false,
        selected: false,
      },
      {
        key: "craAccountKey",
        value: "Benefits",
        path: "/",
        showIcon: false,
        selected: false,
      },
      {
        key: "outKey",
        value: "Health",
        path: "/",
        showIcon: true,
        selected: false,
      },
    ],
  },
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
