import React from "react";
import { FormTextField } from "./FormTextField";

export default {
  title: "Components/FormTextField",
  component: FormTextField,
};

const Template = (args) => <FormTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "primary",
  name: "textField1",
  label: "I am a text field",
  dataTestId: "textbox-controlled",
  requiredText: "required",
  hasHint: true,
  hintProps: {
    linkText: "Why are we asking about [topic]?",
    description:
      "We need to know this because your partner’s annual net income...",
    withLink: false,
    externalLinkText: "",
    optionalLinkText: "",
    url: "",
  },
  width: "standard",
  uncontrolled: true,
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
};

export const OptionalWithInfoText = Template.bind({});
OptionalWithInfoText.args = {
  id: "optionalTextField",
  name: "optionalTextField",
  label: "I am a text field",
  requiredText: "required",
  optionalText: "optional",
  dataTestId: "textbox-uncontrolled",
  infoText: "Help Text",
  hasHint: true,
  hintProps: {
    linkText: "Why are we asking about [topic]?",
    description:
      "We need to know this because your partner’s annual net income...",
    withLink: false,
    externalLinkText: "",
    optionalLinkText: "",
    url: "",
  },
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
  uncontrolled: true,
};

export const RequiredWithError = Template.bind({});
RequiredWithError.args = {
  id: "requiredWithError",
  name: "requiredWithError",
  label: "I am a text field",
  dataTestId: "textbox-bold",
  requiredText: "required",
  required: true,
  hasHint: true,
  hintProps: {
    linkText: "Why are we asking about [topic]?",
    description:
      "We need to know this because your partner’s annual net income...",
    withLink: false,
    externalLinkText: "",
    optionalLinkText: "",
    url: "",
  },
  infoText:
    "Password should be at least six characters long and include both numbers and letters.",
  uncontrolled: true,
  hasError: true,
  errorText: "Password must include numbers and letters.",
  type: "password",
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
};
