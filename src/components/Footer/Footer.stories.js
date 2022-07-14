import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

// Non Authenticated space footers. Leaving code incase it is needed in the future
// export const EnFooter = Template.bind({});
// EnFooter.args = {
//   id: "footer",
//   lang: "en",
//   btnLink: "/",
// };

// export const FrFooter = Template.bind({});
// FrFooter.args = {
//   id: "footer",
//   lang: "fr",
//   btnLink: "/",
// };

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

export const ErrorPageFooter = Template.bind({});
ErrorPageFooter.args = {
  id: "footer",
  btnLink: "/",
  error: true,
};
