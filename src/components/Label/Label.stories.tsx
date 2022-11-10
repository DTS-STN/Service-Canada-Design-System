import * as React from "react";
import { Label, ILabelProps } from "./Label";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Components/Label",
  component: Label,
} as Meta<ILabelProps>;

const Template: Story<ILabelProps & { customArg: number }> = (args) => (
  <Label {...args} />
);

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});

Default.args = {
  id: "default",
  text: "Label",
};

Primary.args = {
  id: "primary",
  text: "Label",
  type: "primary",
};

Danger.args = {
  id: "danger",
  text: "Label",
  type: "danger",
};

Warning.args = {
  id: "warning",
  text: "Label",
  type: "warning",
};

Info.args = {
  id: "info",
  text: "Label",
  type: "info",
};

Success.args = {
  id: "success",
  text: "Label",
  type: "success",
};
