import React from "react";
import { TextField } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <div className="ds-w-full ds-flex ds-justify-center">
        <div className="ds-w-96">
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
  uncontrolled: true,
};

export const OptionalWithInfoText = Template.bind({});
OptionalWithInfoText.args = {
  id: "textField1",
  name: "textField1",
  placeholder: "",
  label: "I am a text field",
  requiredText: "required",
  optionalText: "optional",
  infoText: "Help Text",
  dataTestId: "textbox-uncontrolled",
  uncontrolled: true,
};

export const RequiredWithError = Template.bind({});
RequiredWithError.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "",
  dataTestId: "textbox-bold",
  requiredText: "required",
  required: true,
  infoText:
    "Password should be at least six characters long and include both numbers and letters.",
  uncontrolled: true,
  hasError: true,
  errorText: "Password must include numbers and letters.",
  type: "password",
};
