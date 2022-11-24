import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const EnglishAuth = Template.bind({});
export const FrenchAuth = Template.bind({});

EnglishAuth.args = {
  id: "header",
  lang: "en",
  // isAuthenticated: true,
  menuProps: {
    menuList: [
      { key: "dashKey", value: "My dashboard", path: "/" },
      { key: "securityKey", value: "Security settings", path: "/" },
      { key: "profileKey", value: "Profile", path: "/" },
      { key: "craAccountKey", value: "Switch to CRA My Account", path: "/" },
      { key: "outKey", value: "Sign out", path: "/" },
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
  lang: "fr",
  menuProps: {
    menuList: [
      { key: "dashKey", value: "Mon tableau de bord", path: "/" },
      { key: "securityKey", value: "Paramètres de sécurité", path: "/" },
      { key: "profileKey", value: "Profil", path: "/" },
      {
        key: "craAccountKey",
        value: "Aller à Mon dossier de l’ARC",
        path: "/",
      },
      { key: "outKey", value: "Se déconnecter", path: "/" },
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
