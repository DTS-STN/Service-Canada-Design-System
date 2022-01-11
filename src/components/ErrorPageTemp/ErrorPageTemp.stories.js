import React from "react";
import { ErrorPageTemp } from "./ErrorPageTemp";

export default {
  title: "Components/ErrorPageTemp",
  component: ErrorPageTemp,
};

const Template = (args) => <ErrorPageTemp {...args} />;

export const error404 = Template.bind({});

error404.args = {
  title: "We couldn’t find that web page",
  errorText:
    "We're sorry you ended up here. Sometimes a page gets moved or deleted, but hopefully we can help you find what you're looking for.",
  nextText: "What next?",
  links: [
    {
      link: "/",
      linkText1: "Go to the ",
      linkText2: "Service Canada home page",
    },
  ],
  errorType: "Error 404",
};
