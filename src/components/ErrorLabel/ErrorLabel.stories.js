import React from "react";
import { ErrorLabel } from "./ErrorLabel";

export default {
  title: "In Development/ErrorLabel",
  component: ErrorLabel,
};

const Template = (args) => <ErrorLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: "Error 1: This is a message",
};
