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
          { key: "1", value: "Alpha your record of employment" },
          { key: "2", value: "Alpha for social insurance number" },
          { key: "3", value: "Alpha foreign workers" },
          { key: "4", value: "Alpha as a skilled worker" },
        ],
      },
      {
        key: "profileKey",
        value: "Travel and Tourism",
        path: "/",
        itemTitle: "Travel",
        showIcon: false,
        selected: false,
        items: [
          { key: "1", value: "Travel and Tourism" },
          { key: "2", value: "Training" },
          { key: "3", value: "Hiring and managing employees" },
          { key: "4", value: "Starting a business" },
        ],
        mostRequested: [
          { key: "1", value: "Beta your record of employment" },
          { key: "2", value: "Beta for social insurance number" },
          { key: "3", value: "Beta foreign workers" },
          { key: "4", value: "Beta as a skilled worker" },
        ],
      },
      {
        key: "securityKey",
        value: "Business and Industry",
        itemTitle: "Business",
        path: "/",
        showIcon: false,
        selected: false,
        items: [
          { key: "1", value: "Business and Industry" },
          { key: "2", value: "Training" },
          { key: "3", value: "Hiring and managing employees" },
          { key: "4", value: "Starting a business" },
        ],
        mostRequested: [
          { key: "1", value: "Gamma your record of employment" },
          { key: "2", value: "Gamma for social insurance number" },
          { key: "3", value: "Gamma foreign workers" },
          { key: "4", value: "Gamma as a skilled worker" },
        ],
      },
      {
        key: "craAccountKey",
        value: "Benefits",
        path: "/",
        itemTitle: "Benefits",
        showIcon: false,
        selected: false,
        items: [
          { key: "1", value: "find a Job" },
          { key: "2", value: "Training" },
          { key: "3", value: "Hiring and managing employees" },
          { key: "4", value: "Starting a business" },
        ],
        mostRequested: [
          { key: "1", value: "Delta your record of employment" },
          { key: "2", value: "Delta for social insurance number" },
          { key: "3", value: "Delta foreign workers" },
          { key: "4", value: "Delta as a skilled worker" },
        ],
      },
      {
        key: "outKey",
        value: "Health",
        path: "/",
        itemTitle: "Health",
        showIcon: true,
        selected: false,
        items: [
          { key: "1", value: "find a Health" },
          { key: "2", value: "Healing" },
          { key: "3", value: "Finding patients" },
          { key: "4", value: "Starting a hospital" },
        ],
        mostRequested: [
          { key: "1", value: "Epsilon your record of employment" },
          { key: "2", value: "Epsilon for social insurance number" },
          { key: "3", value: "Epsilon foreign workers" },
          { key: "4", value: "Epsilon as a skilled worker" },
        ],
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
