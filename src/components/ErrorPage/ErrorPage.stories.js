import React from "react";
import { ErrorPage } from "./ErrorPage";

export default {
  title: "Components/ErrorPage",
  component: ErrorPage,
};

const Template = (args) => <ErrorPage {...args} />;

export const ENErrorPage404 = Template.bind({});
export const ENAuthErrorPage404 = Template.bind({});
export const ENErrorPage500 = Template.bind({});
export const ENAuthErrorPage500 = Template.bind({});
export const ENErrorPage503 = Template.bind({});
export const ENAuthErrorPage503 = Template.bind({});
export const FRErrorPage404 = Template.bind({});
export const FRErrorPage500 = Template.bind({});
export const FRErrorPage503 = Template.bind({});
export const BIErrorPage404 = Template.bind({});
export const BIErrorPage500 = Template.bind({});
export const BIErrorPage503 = Template.bind({});

ENErrorPage404.args = {
  lang: "en",
  errType: "404",
  isAuth: false,
};

ENAuthErrorPage404.args = {
  lang: "en",
  errType: "404",
  isAuth: true,
};

ENErrorPage500.args = {
  lang: "en",
  errType: "500",
  isAuth: false,
};

ENAuthErrorPage500.args = {
  lang: "en",
  errType: "500",
  isAuth: true,
};

ENErrorPage503.args = {
  lang: "en",
  errType: "503",
  isAuth: false,
};

ENAuthErrorPage503.args = {
  lang: "en",
  errType: "503",
  isAuth: true,
};

FRErrorPage404.args = {
  lang: "fr",
  errType: "404",
  isAuth: false,
};

FRErrorPage500.args = {
  lang: "fr",
  errType: "500",
  isAuth: false,
};

FRErrorPage503.args = {
  lang: "fr",
  errType: "503",
  isAuth: false,
};

BIErrorPage404.args = {
  lang: "bi",
  errType: "404",
  isAuth: false,
};

BIErrorPage500.args = {
  lang: "bi",
  errType: "500",
  isAuth: false,
};

BIErrorPage503.args = {
  lang: "bi",
  errType: "503",
  isAuth: false,
};
