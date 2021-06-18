import React from "react";
import RadioField from "./RadioField";

export default {
  title: "Components/Form Components/RadioField",
  component: RadioField,
  decorators: [
    (Story) => (
      <div className="w-full flex justify-center">
        <div className="w-96">
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <RadioField {...args} />;

export const UnChecked = Template.bind({});
UnChecked.args = {
  id: "radio 1",
  name: "Radio1",
  value: "IsChecked",
  label: "I am a radio field",
  dataTestId: "unchecked-radio",
};

export const Checked = Template.bind({});
Checked.args = {
  id: "radio 1",
  name: "Radio1",
  value: "IsChecked",
  label: "I am a checked radio field",
  dataTestId: "checked-radio",
  checked: true,
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  id: "radio 1",
  name: "Radio1",
  value: "IsChecked",
  label: "I am an uncontrolled radio field",
  dataTestId: "uncontrolled-radio",
  uncontrolled: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "radio 1",
  name: "Radio1",
  value: "IsChecked",
  error: true,
  label: "I am a radio field with an error",
  dataTestId: "error-radio",
  uncontrolled: true,
};

export const Required = Template.bind({});
Required.args = {
  id: "radio 1",
  name: "Radio1",
  value: "IsChecked",
  label: "I am a required radio field",
  dataTestId: "required-radio",
  showRequiredLabel: true,
  requiredText: "required",
};
