import React from "react";
import { TextField } from "./TextField";

export default {
  title: "Components/TextField",
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
  requiredText: "Required",
  placeholder: "Some placeholder text",
};

export const OptionalWithInfoText = Template.bind({});
OptionalWithInfoText.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  requiredText: "required",
  optionalText: "Optional",
  dataTestId: "textbox-uncontrolled",
  infoText: "Help Text",
  uncontrolled: true,
};

export const RequiredWithError = Template.bind({});
RequiredWithError.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  dataTestId: "textbox-bold",
  requiredText: "Required",
  required: true,
  infoText:
    "Password should be at least 6 characters long and include both numbers and letters.",
  uncontrolled: true,
  boldLabel: true,
  hasError: true,
  errorText: "Password must include numbers and letters.",
  type: "password",
};
