import * as React from "react";
import { HelpIcon, HelpIconProps } from "./HelpIcon";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Components/HelpIcon",
  component: HelpIcon,
} as Meta<HelpIconProps>;

const Template: Story<HelpIconProps> = (args) => <HelpIcon {...args} />;

export const Default = Template.bind({});
export const SampleAlpha = Template.bind({});

Default.args = {
  title: "Descriptive title / Term requiring explanation",
  body: "Description",
};

SampleAlpha.args = {
  title: "Alpha",
  body: `Alpha means building a "proof of concept" tool or service to meet user needs and testing it with users.`,
};
