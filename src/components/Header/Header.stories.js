import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const GlobalEnglish = Template.bind({});
export const GlobalFrench = Template.bind({});

GlobalEnglish.args = {
  id: "header",
  dataGcAnalyticsCustomClickInstitutionVariable: "Institution",
  lang: "fr",
  isAuthenticated: false,
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

GlobalFrench.args = {
  id: "header",
  dataGcAnalyticsCustomClickInstitutionVariable: "Institution",
  lang: "en",
  isAuthenticated: false,
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
