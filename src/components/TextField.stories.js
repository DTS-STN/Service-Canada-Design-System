import React from "react";
import TextField from "./TextField";

export default {
  title: "Components/Form Components/TextField",
  component: TextField,
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

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  dataTestId: "textbox-controlled",
  requiredText: "required",
  optionalText: "optional",
  placeholder: "Some placeholder text",
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  requiredText: "required",
  optionalText: "optional",
  dataTestId: "textbox-uncontrolled",
  uncontrolled: true,
};

export const Required = Template.bind({});
Required.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  requiredText: "required",
  optionalText: "optional",
  dataTestId: "textbox-required",
  uncontrolled: true,
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  requiredText: "required",
  optionalText: "optional",
  dataTestId: "textbox-error",
  uncontrolled: true,
  error: "Some error has occurred",
};

export const BoldLabel = Template.bind({});
BoldLabel.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  dataTestId: "textbox-bold",
  requiredText: "required",
  optionalText: "optional",
  uncontrolled: true,
  boldLabel: true,
};
