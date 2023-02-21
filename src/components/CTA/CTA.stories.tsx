import * as React from "react";
import { CTA, ICTAProps } from "./CTA";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Components/CTA",
  component: CTA,
} as Meta<ICTAProps>;

const Template: Story<ICTAProps & { customArg: number }> = (args) => (
  <CTA {...args} />
);

export const Default = Template.bind({} as ICTAProps);

Default.args = {
  heading: "This is a call-to-action!",
  body: "This sentence explains the action we want the users to take.",
  ButtonProps: {
    text: "Action Button",
  },
  LinkProps: {
    text: "Review the Privacy Policy",
  },
};

export const WithoutLink = Template.bind({} as ICTAProps);

WithoutLink.args = {
  heading: "This is a call-to-action!",
  body: "This sentence explains the action we want the users to take.",
  ButtonProps: {
    text: "Action Button",
    id: "cta-button-2",
  },
};
