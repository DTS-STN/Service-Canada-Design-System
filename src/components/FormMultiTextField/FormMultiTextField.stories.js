import React from "react";
import { FormMultiTextField } from "./FormMultiTextField";

export default {
  title: "Components/FormMultiTextField",
  component: FormMultiTextField,
  decorators: [
    (Story) => (
      <div className="ds-w-full  ds-flex ds-justify-center">
        <div className="ds-w-96">
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <FormMultiTextField i {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "multiTextField1",
  name: "multiTextField1",
  label: "Multi Text Field",
  dataTestId: "multitext-one",
  requiredText: "required",
  optionalText: "optional",
  doNotIncludeText: "disclaimer",
  placeholder: "",
  size: "medium",
  value: "",
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  id: "multiTextField2",
  name: "multiTextField2",
  label: "Multi Text Field",
  dataTestId: "multitext-two",
  requiredText: "required",
  optionalText: "optional",
  placeholder: "",
  infoText: "Help Text",
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
};

export const withError = Template.bind({});
withError.args = {
  id: "multiTextField3",
  name: "multiTextField3",
  label: "Multi Text Field",
  dataTestId: "multitext-three",
  requiredText: "required",
  optionalText: "optional",
  required: true,
  placeholder: "",
  infoText:
    "Password should be at least six characters long and include both numbers and letters.",
  hasError: true,
  errorText: "Password must include numbers and letters.",
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
};
