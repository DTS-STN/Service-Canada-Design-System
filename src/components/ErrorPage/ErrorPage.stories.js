import React from "react";
import { ErrorPage } from "./ErrorPage";

export default {
  title: "Components/ErrorPage",
  component: ErrorPage,
};

const Template = (args) => <ErrorPage {...args} />;

export const enErrorPage404 = Template.bind({});
export const enAuthErrorPage404 = Template.bind({});
export const enErrorPage500 = Template.bind({});
export const enAuthErrorPage500 = Template.bind({});
export const enErrorPage503 = Template.bind({});
export const enAuthErrorPage503 = Template.bind({});
export const frErrorPage404 = Template.bind({});
export const frErrorPage500 = Template.bind({});
export const frErrorPage503 = Template.bind({});
export const biErrorPage404 = Template.bind({});

enErrorPage404.args = {
  lang: "en",
  errType: "404",
  isAuth: false,
};

enAuthErrorPage404.args = {
  lang: "en",
  errType: "404",
  isAuth: true,
};

enErrorPage500.args = {
  lang: "en",
  errType: "500",
  isAuth: false,
};

enAuthErrorPage500.args = {
  lang: "en",
  errType: "500",
  isAuth: true,
};

enErrorPage503.args = {
  lang: "en",
  errType: "503",
  isAuth: false,
};

enAuthErrorPage503.args = {
  lang: "en",
  errType: "503",
  isAuth: true,
};

frErrorPage404.args = {
  lang: "fr",
  errType: "404",
  isAuth: false,
};

frErrorPage500.args = {
  lang: "fr",
  errType: "500",
  isAuth: false,
};

frErrorPage503.args = {
  lang: "fr",
  errType: "503",
  isAuth: false,
};

biErrorPage404.args = {
  lang: "bi",
  errType: "404",
  isAuth: false,
};
