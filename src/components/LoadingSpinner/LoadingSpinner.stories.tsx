import * as React from "react";
import { LoadingSpinner, ILoadingSpinnerProps } from "./LoadingSpinner";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
} as Meta<ILoadingSpinnerProps>;

const Template: Story<ILoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: "Please wait while we gather your account information. Thank you.",
};

export const FRText = Template.bind({});

FRText.args = {
  text: "Veuillez patienter pendant que nous recueillons les renseignements de votre compte. Merci.",
};
