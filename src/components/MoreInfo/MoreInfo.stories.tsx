import * as React from "react";
import { MoreInfo, MoreInfoProps } from "./MoreInfo";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Components/MoreInfo",
  component: MoreInfo,
} as Meta<MoreInfoProps>;

const Template: Story<MoreInfoProps> = (args) => <MoreInfo {...args} />;

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
