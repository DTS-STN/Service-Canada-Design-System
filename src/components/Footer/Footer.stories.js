import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const EnFooter = Template.bind({});
EnFooter.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
};

export const FrFooter = Template.bind({});
FrFooter.args = {
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
