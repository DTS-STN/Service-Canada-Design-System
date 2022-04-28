import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const EnglishAuth = Template.bind({});
export const FrenchAuth = Template.bind({});
export const EnglishNonAuth = Template.bind({});
export const FrenchNonAuth = Template.bind({});

EnglishAuth.args = {
  id: "header",
  lang: "en",
  altText: "Government of Canada",
  isAuthenticated: true,
  menuProps: {
    dashboardPath: "/examplePath",
    onSignOut: () => {},
    profilePath: "/examplePath",
    securityPath: "/examplePath",
    signOutPath: "/examplePath",
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-en.html",
    displayAlternateLink: false,
  },
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
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
  altText: "Government of Canada",
  isAuthenticated: true,
  menuProps: {
    dashboardPath: "/examplePath",
    onSignOut: () => {},
    profilePath: "/examplePath",
    securityPath: "/examplePath",
    signOutPath: "/examplePath",
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-fr.html",
    displayAlternateLink: false,
  },
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};

EnglishNonAuth.args = {
  id: "header",
  lang: "en",
  altText: "Government of Canada",
  isAuthenticated: false,
  menuProps: {
    dashboardPath: "/examplePath",
    onSignOut: () => {},
    profilePath: "/examplePath",
    securityPath: "/examplePath",
    signOutPath: "/examplePath",
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-en.html",
    displayAlternateLink: false,
  },
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};

FrenchNonAuth.args = {
  id: "header",
  lang: "fr",
  altText: "Government of Canada",
  isAuthenticated: false,
  menuProps: {
    dashboardPath: "/examplePath",
    onSignOut: () => {},
    profilePath: "/examplePath",
    securityPath: "/examplePath",
    signOutPath: "/examplePath",
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-fr.html",
    displayAlternateLink: false,
  },
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};
