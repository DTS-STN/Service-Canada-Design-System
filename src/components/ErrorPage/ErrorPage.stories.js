import React from "react";
import { ErrorPage } from "./ErrorPage";

export default {
  title: "Components/ErrorPage",
  component: ErrorPage,
};

const Template = (args) => <ErrorPage {...args} />;

export const enErrorPage404 = Template.bind({});
export const frErrorPage404 = Template.bind({});
export const enErrorPage500 = Template.bind({});
export const frErrorPage500 = Template.bind({});

enErrorPage404.args = {
  lang: true,
  errType: "404",
};

enErrorPage500.args = {
  lang: true,
  errType: "500",
};

frErrorPage404.args = {
  lang: false,
  errType: "404",
};

frErrorPage500.args = {
  lang: false,
  errType: "500",
};
