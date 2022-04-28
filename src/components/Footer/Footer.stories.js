import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const EnFooter = Template.bind({});
EnFooter.args = {
  lang: "en",
  btnLink: "/",
};

export const FrFooter = Template.bind({});
FrFooter.args = {
  lang: "fr",
  btnLink: "/",
};

export const ErrorPageFooter = Template.bind({});
ErrorPageFooter.args = {
  btnLink: "/",
  error: true,
};
