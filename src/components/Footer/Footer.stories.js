import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const EnglishAuth = Template.bind({});
EnglishAuth.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  isAuthenticated: true,
};

export const FrenchAuth = Template.bind({});
FrenchAuth.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  isAuthenticated: true,
};

export const EnglishNonAuth = Template.bind({});
EnglishNonAuth.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
};

export const FrenchNonAuth = Template.bind({});
FrenchNonAuth.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
};

export const ErrorPageFooter = Template.bind({});
ErrorPageFooter.args = {
  id: "footer",
  btnLink: "/",
  error: true,
};
